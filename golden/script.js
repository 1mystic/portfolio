// Wait for DOM content to load completely before initializing interaction logic
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initSideNavScrollSpy();
  initMobileNav();
  initHeroStats();
  initProcessStepper();
  initSkillsTreemap();
  initProjectsAccordion();
  initWritingCarousel();
  initResearchAccordion();
  
  // Trigger Lucide icons replacing
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/* ─────────────────────────────────────────────────────────────────────────────
   DATA ARRAYS (Extracted directly from classy source components for 100% fidelity)
   ───────────────────────────────────────────────────────────────────────────── */

const stats = [
  { label: 'CGPA', value: 9, suffix: '.01', prefix: '' },
  { label: 'Projects', value: 15, suffix: '+', prefix: '' },
  { label: 'Certifications', value: 5, suffix: '+', prefix: '' },
  { label: 'Hackathon Wins', value: 1, suffix: '🏆', prefix: '' },
];

const steps = [
  {
    title: 'Problem & Scope',
    description: 'Define the problem clearly, whether it\'s a product idea, dataset challenge, or research question. Set measurable success criteria before touching a line of code.',
    code: `# Scoping a project
objective = "Predict QSR demand by location"
metrics   = ["MAPE", "RMSE", "Coverage@80%"]
data      = ["transactions", "weather", "events"]
timeline  = "2 weeks"`,
  },
  {
    title: 'Data & Pipeline',
    description: 'Ingest, clean, and transform raw data. For ML projects this means EDA with Pandas, feature engineering, and validation splits. For web apps it means schema design and API contracts.',
    code: `import pandas as pd

df = pd.read_csv("orders.csv")
df["date"] = pd.to_datetime(df["date"])
df = df.dropna(subset=["location", "amount"])

# Feature engineering
df["day_of_week"] = df["date"].dt.dayofweek
df["is_weekend"]  = df["day_of_week"].isin([5, 6])`,
  },
  {
    title: 'Build & Iterate',
    description: 'Start simple with a baseline model or MVP UI, then iterate. For ML: Scikit-learn → PyTorch/TensorFlow. For web: Flask/React prototype → production-grade architecture.',
    code: `from sklearn.ensemble import GradientBoostingRegressor
from sklearn.model_selection import cross_val_score

model = GradientBoostingRegressor(
    n_estimators=200, learning_rate=0.05
)
scores = cross_val_score(model, X, y, cv=5, scoring="neg_mae")
print(f"CV MAE: {-scores.mean():.2f} ± {scores.std():.2f}")`,
  },
  {
    title: 'Evaluate & Validate',
    description: 'Rigorous offline evaluation using holdout sets, cross-validation, and error analysis. For research projects: statistical significance. For apps: user testing and performance profiling.',
    code: `from sklearn.metrics import mean_absolute_error
import numpy as np

y_pred = model.predict(X_test)
mae    = mean_absolute_error(y_test, y_pred)
mape   = np.mean(np.abs((y_test - y_pred) / y_test)) * 100

print(f"MAE:  {mae:.2f}")
print(f"MAPE: {mape:.1f}%")
assert mape < 15, "Model below target threshold"`,
  },
  {
    title: 'Ship & Document',
    description: 'Deploy to Netlify, Vercel, Render, or Wasmer depending on the stack. Write clean docs, tag releases, and open-source where possible. Portfolio-ready output every time.',
    code: `# Example: Flask app → Render deployment
# render.yaml
services:
  - type: web
    name: domino-ml
    runtime: python
    buildCommand: pip install -r requirements.txt
    startCommand: gunicorn app:app
    envVars:
      - key: FLASK_ENV
        value: production`,
  },
];

const G = 'C9A84C'; // Uniform gold color hex code

const skills = [
  {
    name: 'Python',
    category: 'Core',
    projects: 15,
    color: 'hsl(40 45% 55%)',
    size: 5,
    details: 'Primary language: data pipelines, ML models, Flask APIs, automation, scripting',
    icons: [
      { src: `https://cdn.simpleicons.org/python/${G}`, alt: 'Python' },
      { src: `https://cdn.simpleicons.org/anaconda/${G}`, alt: 'Anaconda' },
    ],
  },
  {
    name: 'Machine Learning',
    category: 'ML',
    projects: 10,
    color: 'hsl(40 50% 65%)',
    size: 4,
    details: 'TensorFlow, PyTorch, Scikit-learn: CNNs, Transformers, regression, classification, clustering',
    icons: [
      { src: `https://cdn.simpleicons.org/tensorflow/${G}`, alt: 'TensorFlow' },
      { src: `https://cdn.simpleicons.org/pytorch/${G}`, alt: 'PyTorch' },
      { src: `https://cdn.simpleicons.org/scikitlearn/${G}`, alt: 'Scikit-learn' },
    ],
  },
  {
    name: 'React / Next.js',
    category: 'Web',
    projects: 8,
    color: 'hsl(200 40% 55%)',
    size: 3,
    details: 'Frontend SPA and SSR apps: Vite, TypeScript, Tailwind CSS, shadcn/ui',
    icons: [
      { src: `https://cdn.simpleicons.org/react/${G}`, alt: 'React' },
      { src: `https://cdn.simpleicons.org/nextdotjs/${G}`, alt: 'Next.js' },
      { src: `https://cdn.simpleicons.org/vite/${G}`, alt: 'Vite' },
    ],
  },
  {
    name: 'Flask / FastAPI',
    category: 'Web',
    projects: 7,
    color: 'hsl(210 40% 50%)',
    size: 3,
    details: 'REST APIs, auth, Celery task queues, Jinja2 templates, SQLite/PostgreSQL integration',
    icons: [
      { src: `https://cdn.simpleicons.org/flask/${G}`, alt: 'Flask' },
      { src: `https://cdn.simpleicons.org/fastapi/${G}`, alt: 'FastAPI' },
    ],
  },
  {
    name: 'SQL & Databases',
    category: 'Data',
    projects: 8,
    color: 'hsl(160 35% 48%)',
    size: 3,
    details: 'MySQL, PostgreSQL, SQLite, Redis: schema design, complex queries, indexing, caching',
    icons: [
      { src: `https://cdn.simpleicons.org/postgresql/${G}`, alt: 'PostgreSQL' },
      { src: `https://cdn.simpleicons.org/mysql/${G}`, alt: 'MySQL' },
      { src: `https://cdn.simpleicons.org/redis/${G}`, alt: 'Redis' },
    ],
  },
  {
    name: 'Data Analysis',
    category: 'Data',
    projects: 9,
    color: 'hsl(155 35% 45%)',
    size: 3,
    details: 'Pandas, NumPy, Matplotlib, Seaborn: EDA, feature engineering, statistical analysis',
    icons: [
      { src: `https://cdn.simpleicons.org/pandas/${G}`, alt: 'Pandas' },
      { src: `https://cdn.simpleicons.org/numpy/${G}`, alt: 'NumPy' },
    ],
  },
  {
    name: 'Vue.js',
    category: 'Web',
    projects: 4,
    color: 'hsl(200 45% 60%)',
    size: 2,
    details: 'Vue 3 Options & Composition API: Whiz-It, Wixplore, Qwix.it frontend',
    icons: [
      { src: `https://cdn.simpleicons.org/vuedotjs/${G}`, alt: 'Vue.js' },
    ],
  },
  {
    name: 'RAG & LLMs',
    category: 'ML',
    projects: 3,
    color: 'hsl(35 40% 52%)',
    size: 2,
    details: 'OpenRouter AI, Gemini API, ElevenLabs: RAG pipelines, prompt engineering, AI tool integration',
    icons: [
      { src: `https://cdn.simpleicons.org/huggingface/${G}`, alt: 'HuggingFace' },
      { src: `https://cdn.simpleicons.org/googlegemini/${G}`, alt: 'Gemini' },
    ],
  },
  {
    name: 'JavaScript / TS',
    category: 'Web',
    projects: 10,
    color: 'hsl(205 40% 52%)',
    size: 2,
    details: 'ES2022+, TypeScript, DOM manipulation, browser APIs, canvas, Desmos integration',
    icons: [
      { src: `https://cdn.simpleicons.org/javascript/${G}`, alt: 'JavaScript' },
      { src: `https://cdn.simpleicons.org/typescript/${G}`, alt: 'TypeScript' },
    ],
  },
  {
    name: 'GCP & DevOps',
    category: 'Ops',
    projects: 3,
    color: 'hsl(150 30% 45%)',
    size: 2,
    details: 'Google Cloud Platform, Docker, Kubernetes, Wasmer: CI/CD, cloud deployment',
    icons: [
      { src: `https://cdn.simpleicons.org/googlecloud/${G}`, alt: 'GCP' },
      { src: `https://cdn.simpleicons.org/docker/${G}`, alt: 'Docker' },
    ],
  },
  {
    name: 'Java',
    category: 'Core',
    projects: 3,
    color: 'hsl(38 40% 48%)',
    size: 1,
    details: 'OOP, data structures and algorithms, academic and competitive programming',
    icons: [
      { src: `https://cdn.simpleicons.org/openjdk/${G}`, alt: 'Java' },
    ],
  },
  {
    name: 'Research',
    category: 'Ops',
    projects: 4,
    color: 'hsl(280 30% 52%)',
    size: 1,
    details: 'Vegetation recovery (TerraHeal), keystroke dynamics (TypeState), QSR demand forecasting, cloud classification',
    icons: [],
  },
];

const catGradients = {
  'AI / ML':        'from-amber-950/80 via-yellow-900/40 to-transparent',
  'Web Apps':       'from-blue-950/80 via-cyan-900/40 to-transparent',
  'Tools':          'from-violet-950/80 via-purple-900/40 to-transparent',
  'Data Analysis':  'from-emerald-950/80 via-green-900/40 to-transparent',
};

const projects = [
  {
    name: 'DominoML',
    category: 'AI / ML',
    description: 'Visual drag-and-drop ML pipeline builder with Marked.js + MathJax rendering.',
    tech: ['Flask', 'SQLite', 'Marked.js', 'MathJax'],
    demo: 'https://domino-ml.onrender.com',
    cover: catGradients['AI / ML'],
    coverIcons: [`flask/${G}`, `python/${G}`],
  },
  {
    name: 'GlideML',
    category: 'AI / ML',
    description: 'Visual ML pipeline builder with a clean drag-and-drop interface for constructing ML workflows.',
    tech: ['React', 'Vite', 'TypeScript'],
    demo: 'https://glideml.vercel.app',
    cover: catGradients['AI / ML'],
    coverIcons: [`react/${G}`, `vite/${G}`],
  },
  {
    name: 'Axiom Canvas',
    category: 'AI / ML',
    description: 'Math visualization engine powered by Desmos API with OpenRouter AI and RAG capabilities.',
    tech: ['Desmos API', 'OpenRouter AI', 'RAG', 'JS'],
    demo: 'https://axiom-canvas.onrender.com',
    cover: catGradients['AI / ML'],
    coverIcons: [`huggingface/${G}`, `javascript/${G}`],
  },
  {
    name: 'GlitchFlick',
    category: 'AI / ML',
    description: 'GenAI video script creation tool using Gemini API and ElevenLabs voice synthesis.',
    tech: ['Gemini API', 'ElevenLabs', 'Python'],
    cover: catGradients['AI / ML'],
    coverIcons: [`googlegemini/${G}`, `python/${G}`],
  },
  {
    name: 'WikiViz',
    category: 'AI / ML',
    description: 'Interactive visual explorer for Wikipedia content with Gemini-powered AI summaries.',
    tech: ['React', 'TypeScript', 'Vite', 'Gemini API'],
    cover: catGradients['AI / ML'],
    coverIcons: [`react/${G}`, `googlegemini/${G}`],
  },
  {
    name: 'CloudMorph Lens',
    category: 'AI / ML',
    description: 'Deep learning platform for cloud type classification and pixel-level segmentation from satellite imagery.',
    tech: ['PyTorch', 'ResNet50', 'U-Net', 'Grad-CAM', 'Flask'],
    cover: catGradients['AI / ML'],
    coverIcons: [`pytorch/${G}`, `flask/${G}`],
  },
  {
    name: 'Transformer ↔ Emoji',
    category: 'AI / ML',
    description: 'From-scratch PyTorch Transformer (encoder-decoder) for translating text phrases into emojis.',
    tech: ['PyTorch', 'Transformers', 'NLP', 'AdamW'],
    cover: catGradients['AI / ML'],
    coverIcons: [`pytorch/${G}`],
  },
  {
    name: 'Clearview Eco',
    category: 'Web Apps',
    description: 'Pollution reporting & geo-verification map using TensorFlow image classification and geotagging.',
    tech: ['TensorFlow', 'React', 'Geotagging'],
    demo: 'https://clearvieweco.netlify.app',
    cover: catGradients['Web Apps'],
    coverIcons: [`tensorflow/${G}`, `react/${G}`],
  },
  {
    name: 'Whiz-It',
    category: 'Web Apps',
    description: 'Scalable real-time quizzing platform with AI feedback, leaderboards, and admin panel (RBAC).',
    tech: ['Vue.js', 'Flask', 'Redis', 'Celery', 'Google AI'],
    cover: catGradients['Web Apps'],
    coverIcons: [`vuedotjs/${G}`, `redis/${G}`, `flask/${G}`],
  },
  {
    name: 'Qwix.it',
    category: 'Web Apps',
    description: 'Household service booking platform connecting customers with professionals, including payment flow.',
    tech: ['Flask', 'JS', 'Bootstrap', 'SQLite'],
    cover: catGradients['Web Apps'],
    coverIcons: [`flask/${G}`, `javascript/${G}`],
  },
  {
    name: 'VeraMind',
    category: 'Web Apps',
    description: 'AI-powered mental wellness platform for anxiety tracking, journaling, and cognitive pattern identification.',
    tech: ['Vue 3', 'Vite', 'Python', 'FastAPI'],
    cover: catGradients['Web Apps'],
    coverIcons: [`vuedotjs/${G}`, `fastapi/${G}`],
  },
  {
    name: 'Wixplore',
    category: 'Web Apps',
    description: 'Cultural data intelligence platform with AI agents for data profiling, analysis, and language extraction.',
    tech: ['Vue 3', 'Node.js', 'Python', 'Vercel'],
    cover: catGradients['Web Apps'],
    coverIcons: [`vuedotjs/${G}`, `nodedotjs/${G}`],
  },
  {
    name: 'Origami Simulator',
    category: 'Web Apps',
    description: '3D physics-based origami simulator with step-by-step folding, wind/gravity effects, and crease pattern editor.',
    tech: ['Three.js', 'React 18', 'Tailwind', 'Vite'],
    cover: catGradients['Web Apps'],
    coverIcons: [`threedotjs/${G}`, `react/${G}`],
  },
  {
    name: 'MarkTex',
    category: 'Tools',
    description: 'Full-featured Markdown + LaTeX editor with live preview, annotation mode, and PDF/HTML export.',
    tech: ['Markdown', 'LaTeX', 'Python'],
    demo: 'https://marktex.wasmer.app',
    cover: catGradients['Tools'],
    coverIcons: [`markdown/${G}`, `overleaf/${G}`],
  },
  {
    name: 'DevLoft',
    category: 'Tools',
    description: '19 client-side developer utilities: JSON tools, regex tester, LLM cost estimator, sanitizer. Zero dependencies.',
    tech: ['HTML', 'CSS', 'Vanilla JS'],
    demo: 'https://devloft-tools.netlify.app',
    cover: catGradients['Tools'],
    coverIcons: [`javascript/${G}`, `html5/${G}`],
  },
  {
    name: 'PyCrumbs',
    category: 'Tools',
    description: 'Interactive Python learning platform with step-by-step tutorials for beginners.',
    tech: ['React', 'Python', 'Netlify'],
    demo: 'https://pycrumbs.netlify.app',
    cover: catGradients['Tools'],
    coverIcons: [`python/${G}`, `react/${G}`],
  },
  {
    name: 'MindFluence',
    category: 'Tools',
    description: 'Mind-path navigator for guided thinking and mental wellness journeys.',
    tech: ['JavaScript', 'Netlify'],
    demo: 'https://mindfluence.netlify.app',
    cover: catGradients['Tools'],
    coverIcons: [`javascript/${G}`],
  },
  {
    name: 'Bhopal Food Data',
    category: 'Data Analysis',
    description: 'Geospatial analysis of 5,000 Zomato/Swiggy orders across 20 Bhopal localities with heatmaps and datasets.',
    tech: ['Python', 'Pandas', 'GeoPandas', 'Vercel'],
    demo: 'https://bhopal-food-delivery.vercel.app',
    cover: catGradients['Data Analysis'],
    coverIcons: [`pandas/${G}`, `python/${G}`],
  },
  {
    name: 'Aura-Delhi',
    category: 'Data Analysis',
    description: 'AI air quality intelligence platform for Delhi-NCR with real-time AQI, source identification, and policy dashboards.',
    tech: ['Next.js', 'FastAPI', 'PyTorch', 'TimescaleDB', 'GCP'],
    cover: catGradients['Data Analysis'],
    coverIcons: [`nextdotjs/${G}`, `pytorch/${G}`, `googlecloud/${G}`],
  },
  {
    name: 'Kanha House',
    category: 'Data Analysis',
    description: 'Clean landing page for Kanha Student House, a PG/hostel accommodation site.',
    tech: ['HTML', 'CSS', 'JS', 'Netlify'],
    demo: 'https://kanha-min.netlify.app',
    cover: catGradients['Data Analysis'],
    coverIcons: [`html5/${G}`, `javascript/${G}`],
  },
];

const posts = [
  {
    title: 'Building a Drag-and-Drop ML Pipeline in Flask',
    date: 'Feb 2025',
    description: 'How I architected DominoML, a visual node-based ML builder on top of Flask, SQLite, and MathJax for equation rendering.',
    tag: 'Engineering',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    title: 'RAG with Desmos: Building Axiom Canvas',
    date: 'Jan 2025',
    description: 'Combining OpenRouter AI with Desmos API and a retrieval-augmented generation pipeline to create a math visualization engine.',
    tag: 'AI / LLMs',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&q=80',
  },
  {
    title: 'Keystroke Dynamics for Passive Authentication',
    date: 'Dec 2024',
    description: 'Statistical modeling of typing patterns using Mahalanobis distance and Hidden Markov Models for password-free authentication.',
    tag: 'Research',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
  },
  {
    title: 'QSR Demand Forecasting with Prophet & Apriori',
    date: 'Nov 2024',
    description: 'Using time-series forecasting and market basket analysis on restaurant transactional data to drive inventory decisions.',
    tag: 'Data Analysis',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
  {
    title: 'Post-Wildfire Vegetation Recovery via Remote Sensing',
    date: 'Oct 2024',
    description: 'Tracking NDVI and NBR spectral indices over time to quantify vegetation regeneration rates across biomes after wildfire events.',
    tag: 'Research',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
  },
];

const experiments = [
  {
    title: 'TerraHeal',
    subtitle: 'Post-Wildfire Vegetation Recovery',
    description: 'Remote sensing research on vegetation recovery patterns following wildfire events.',
    howItWorks: 'Analyzes satellite imagery using spectral indices (NDVI, NBR) to track post-wildfire vegetation regeneration over time. Combines temporal remote sensing data with terrain analysis to identify recovery rates across different biomes.',
    tech: ['Remote Sensing', 'Python', 'GeoPandas', 'NDVI Analysis'],
    type: 'Research',
  },
  {
    title: 'TypeState',
    subtitle: 'Keystroke Dynamics Authentication',
    description: 'Statistical analysis of typing patterns for passive user authentication via keystroke dynamics.',
    howItWorks: 'Collects inter-key timing, dwell time, and flight time from typing sessions. Applies statistical models (Mahalanobis distance, HMM) to build user-specific behavioral profiles for continuous authentication without passwords.',
    tech: ['Python', 'Statistics', 'HMM', 'Scikit-learn'],
    type: 'Research',
  },
  {
    title: 'QSR Demand Forecasting',
    subtitle: 'Business Data Analysis',
    description: 'Forecasting demand and identifying product affinities for Quick Service Restaurants using transactional data.',
    howItWorks: 'Applies time-series decomposition (SARIMA, Prophet) alongside market basket analysis (Apriori algorithm) to forecast weekly demand and discover high-affinity item pairings. Delivers actionable inventory and menu insights.',
    tech: ['Pandas', 'Prophet', 'Apriori', 'SQL', 'Matplotlib'],
    type: 'Analysis',
  },
  {
    title: 'CloudMorph Lens',
    subtitle: 'Cloud Classification & Segmentation',
    description: 'Deep learning platform for automated cloud type classification and pixel-level segmentation from satellite imagery.',
    howItWorks: 'ResNet50 for multi-label classification of cloud types (cirrus, cumulus, stratus, nimbus, altostratus). U-Net for pixel-level cloud segmentation. Includes Grad-CAM explainability and a Flask web UI for uploading and visualizing results.',
    tech: ['PyTorch', 'ResNet50', 'U-Net', 'Grad-CAM', 'Flask'],
    type: 'Research',
  },
  {
    title: 'Transformer from Scratch',
    subtitle: 'Text-to-Emoji Translation',
    description: 'From-scratch PyTorch implementation of the full Transformer (encoder-decoder) for translating text phrases to emojis.',
    howItWorks: 'Implements scaled dot-product attention, multi-head attention, sinusoidal positional encoding, and position-wise FFN from the "Attention Is All You Need" paper. Trained with AdamW and greedy decoding for inference. Includes attention visualization utilities.',
    tech: ['PyTorch', 'Transformers', 'NLP', 'AdamW'],
    type: 'Research',
  },
  {
    title: 'DataCamp Certification',
    subtitle: 'Data Science Associate, 2025',
    description: 'Professional certification covering Python, SQL, and PyTorch from DataCamp.',
    howItWorks: 'Completed the full Data Science Associate track covering Python for data analysis, advanced SQL querying, and deep learning with PyTorch. Certified 2025.',
    tech: ['Python', 'SQL', 'PyTorch'],
    type: 'Education',
  },
  {
    title: 'Silver Medal, Anukriti',
    subtitle: 'Paradox · IIT Madras 2025',
    description: 'Silver medal at Anukriti, the technical arts event at Paradox, IIT Madras 2025.',
    howItWorks: 'Competed in the interdisciplinary technical arts competition at IIT Madras\'s cultural fest Paradox, earning a Silver Medal at the institute level.',
    tech: ['IIT Madras', 'Paradox 2025'],
    type: 'Achievement',
  },
  {
    title: 'Tech Dominion Winner',
    subtitle: 'Inter-house Hackathon · IIT Madras',
    description: 'Hackathon winner at the Inter-house Tech Dominion competition at IIT Madras.',
    howItWorks: 'Won the Inter-house Tech Dominion hackathon at IIT Madras, a competitive programming and product-building event across all student houses.',
    tech: ['IIT Madras', 'Hackathon'],
    type: 'Achievement',
  },
];


/* ─────────────────────────────────────────────────────────────────────────────
   SCROLL REVEAL (useFadeIn equivalent)
   ───────────────────────────────────────────────────────────────────────────── */

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach((el) => observer.observe(el));
}


/* ─────────────────────────────────────────────────────────────────────────────
   SCROLLSPY FOR DESKTOP LEFT NAV
   ───────────────────────────────────────────────────────────────────────────── */

function initSideNavScrollSpy() {
  const sectionIds = ['hero', 'process', 'skills', 'projects', 'writing', 'experiments'];
  const sideNavButtons = document.querySelectorAll('nav.fixed button');

  const updateActiveState = (activeId) => {
    sideNavButtons.forEach((btn, idx) => {
      const sectionId = sectionIds[idx];
      const isCurrent = (sectionId === activeId);
      
      const label = btn.querySelector('span');
      const dot = btn.querySelector('div.rounded-full');
      
      if (isCurrent) {
        label.classList.remove('text-muted-foreground');
        label.classList.add('text-gold');
        dot.classList.remove('bg-muted-foreground/40');
        dot.classList.add('bg-gold', 'scale-125', 'shadow-[0_0_8px_hsl(40_45%_55%/0.5)]');
      } else {
        label.classList.remove('text-gold');
        label.classList.add('text-muted-foreground');
        dot.classList.remove('bg-gold', 'scale-125', 'shadow-[0_0_8px_hsl(40_45%_55%/0.5)]');
        dot.classList.add('bg-muted-foreground/40');
      }
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateActiveState(entry.target.id);
      }
    });
  }, {
    rootMargin: '-100px 0px -50% 0px',
    threshold: 0
  });

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}


/* ─────────────────────────────────────────────────────────────────────────────
   MOBILE NAV AND FLOATING TRIGGER
   ───────────────────────────────────────────────────────────────────────────── */

function initMobileNav() {
  const trigger = document.getElementById('mobile-nav-trigger');
  const drawer = document.getElementById('mobile-nav-drawer');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const menuOptions = document.querySelectorAll('.mobile-nav-option');
  
  const hamburgerLines = trigger.querySelectorAll('span');
  let open = false;

  const toggleMenu = (shouldOpen) => {
    open = shouldOpen !== undefined ? shouldOpen : !open;
    
    if (open) {
      document.body.style.overflow = 'hidden';
      trigger.classList.remove('mobile-nav-glow', 'border-gold/40', 'bg-[hsl(0_0%_9%)]');
      trigger.classList.add('border-gold/70', 'bg-[hsl(0_0%_8%)]', 'scale-95');
      
      // Animate Hamburger to Close icon
      hamburgerLines[0].classList.add('rotate-45', 'translate-y-[6px]');
      hamburgerLines[1].classList.add('w-0', 'opacity-0');
      hamburgerLines[2].classList.add('-rotate-45', '-translate-y-[8px]');
      
      // Reveal drawer and backdrop
      drawer.classList.remove('-translate-x-full');
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      document.body.style.overflow = '';
      trigger.classList.add('mobile-nav-glow', 'border-gold/40', 'bg-[hsl(0_0%_9%)]');
      trigger.classList.remove('border-gold/70', 'bg-[hsl(0_0%_8%)]', 'scale-95');
      
      // Revert hamburger
      hamburgerLines[0].classList.remove('rotate-45', 'translate-y-[6px]');
      hamburgerLines[1].classList.remove('w-0', 'opacity-0');
      hamburgerLines[2].classList.remove('-rotate-45', '-translate-y-[8px]');
      
      // Hide drawer and backdrop
      drawer.classList.add('-translate-x-full');
      backdrop.classList.add('opacity-0', 'pointer-events-none');
    }
  };

  trigger.addEventListener('click', () => toggleMenu());
  backdrop.addEventListener('click', () => toggleMenu(false));
  
  // Close menu on ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && open) toggleMenu(false);
  });

  // Highlight active mobile nav items on scrollspy
  const sectionIds = ['hero', 'process', 'skills', 'projects', 'writing', 'experiments'];
  const indicatorLabel = trigger.querySelector('.font-mono');

  const updateMobileNavActive = (activeId) => {
    const activeIdx = sectionIds.indexOf(activeId);
    const labels = ['00', '01', '02', '03', '04', '05'];
    if (activeIdx !== -1) {
      indicatorLabel.textContent = labels[activeIdx];
    }

    menuOptions.forEach((option) => {
      const targetId = option.getAttribute('data-target');
      const isActive = (targetId === activeId);
      const numLabel = option.querySelector('.font-mono');
      const activeBar = option.querySelector('div.w-0\\.5');
      const textTitle = option.querySelector('p.text-sm');
      const activeDot = option.querySelector('.ml-auto');

      if (isActive) {
        option.classList.add('bg-gold/10', 'border-gold/30');
        option.classList.remove('border-transparent');
        numLabel.classList.add('text-gold');
        numLabel.classList.remove('text-muted-foreground/60');
        activeBar.classList.add('bg-gold');
        textTitle.classList.add('text-gold');
        textTitle.classList.remove('text-foreground');
        if (activeDot) activeDot.classList.remove('hidden');
      } else {
        option.classList.remove('bg-gold/10', 'border-gold/30');
        option.classList.add('border-transparent');
        numLabel.classList.remove('text-gold');
        numLabel.classList.add('text-muted-foreground/60');
        activeBar.classList.remove('bg-gold');
        textTitle.classList.remove('text-gold');
        textTitle.classList.add('text-foreground');
        if (activeDot) activeDot.classList.add('hidden');
      }
    });
  };

  // IntersectionObserver for mobile nav highlighting
  const mobileSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateMobileNavActive(entry.target.id);
      }
    });
  }, {
    rootMargin: '-100px 0px -50% 0px',
    threshold: 0
  });

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) mobileSpyObserver.observe(el);
  });

  // Handle clicking options
  menuOptions.forEach((option) => {
    option.addEventListener('click', () => {
      const id = option.getAttribute('data-target');
      toggleMenu(false);
      // Small timeout to allow drawer close transition
      setTimeout(() => {
        const targetEl = document.getElementById(id);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 280);
    });
  });
}


/* ─────────────────────────────────────────────────────────────────────────────
   HERO STATS COUNT UP
   ───────────────────────────────────────────────────────────────────────────── */

function initHeroStats() {
  const statElements = document.querySelectorAll('.hero-stat-item');
  
  const countUp = (el, endValue, duration) => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out curve
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easedProgress * endValue);
      
      el.textContent = currentValue;
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        el.textContent = endValue;
      }
    };
    requestAnimationFrame(animate);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const valEl = entry.target.querySelector('.hero-stat-val');
        const endVal = parseInt(valEl.getAttribute('data-value'), 10);
        countUp(valEl, endVal, 2000);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  statElements.forEach((el) => observer.observe(el));
}


/* ─────────────────────────────────────────────────────────────────────────────
   PROCESS SECTION STEPPER TIMELINE
   ───────────────────────────────────────────────────────────────────────────── */

function initProcessStepper() {
  const timelineButtons = document.querySelectorAll('.process-step-btn');
  const progressLines = document.querySelectorAll('.process-progress-line');
  const contentTitle = document.getElementById('process-step-title');
  const contentDesc = document.getElementById('process-step-desc');
  const contentCode = document.getElementById('process-step-code');
  const prevBtn = document.getElementById('process-prev-btn');
  const nextBtn = document.getElementById('process-next-btn');
  const countIndicator = document.getElementById('process-count-indicator');
  
  let activeIndex = 0;

  const updateStepView = (index) => {
    activeIndex = index;
    const step = steps[activeIndex];
    
    // 1. Update text and code block contents
    contentTitle.textContent = step.title;
    contentDesc.textContent = step.description;
    contentCode.textContent = step.code;
    
    // 2. Update navigation indicators
    countIndicator.textContent = `${activeIndex + 1} / ${steps.length}`;
    
    // 3. Update Disabled state on boundary buttons
    prevBtn.disabled = (activeIndex === 0);
    nextBtn.disabled = (activeIndex === steps.length - 1);
    prevBtn.style.opacity = activeIndex === 0 ? '0.3' : '1';
    nextBtn.style.opacity = activeIndex === steps.length - 1 ? '0.3' : '1';

    // 4. Update Button highlights and progress connector highlights
    timelineButtons.forEach((btn, i) => {
      if (i === activeIndex) {
        btn.className = 'process-step-btn relative w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-sm transition-all duration-300 border-gold bg-gold/20 text-gold scale-110';
      } else if (i < activeIndex) {
        btn.className = 'process-step-btn relative w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-sm transition-all duration-300 border-gold/50 bg-gold/10 text-gold/70';
      } else {
        btn.className = 'process-step-btn relative w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-sm transition-all duration-300 border-border text-muted-foreground hover:border-gold/30';
      }
    });

    progressLines.forEach((line, i) => {
      if (i < activeIndex) {
        line.className = 'process-progress-line w-12 md:w-20 h-0.5 transition-colors duration-300 bg-gold/50';
      } else {
        line.className = 'process-progress-line w-12 md:w-20 h-0.5 transition-colors duration-300 bg-border';
      }
    });
  };

  timelineButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => updateStepView(idx));
  });

  prevBtn.addEventListener('click', () => {
    if (activeIndex > 0) updateStepView(activeIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    if (activeIndex < steps.length - 1) updateStepView(activeIndex + 1);
  });

  // Initialize
  updateStepView(0);
}


/* ─────────────────────────────────────────────────────────────────────────────
   SKILLS TREEMAP & DETAIL DISPLAY PANEL
   ───────────────────────────────────────────────────────────────────────────── */

function initSkillsTreemap() {
  const treemapContainer = document.getElementById('skills-treemap');
  const detailsPanel = document.getElementById('skills-detail-panel');
  const detailsContent = document.getElementById('skills-detail-content');
  
  const totalSize = skills.reduce((acc, curr) => acc + curr.size, 0);
  let selectedSkillName = null;

  // Render the boxes dynamically to enable flex BASIS + flex grow sizing with perfect ratios
  skills.forEach((skill) => {
    const widthPercent = (skill.size / totalSize) * 100;
    const btn = document.createElement('button');
    btn.className = 'relative rounded-lg border transition-all duration-300 overflow-hidden group flex flex-col justify-between';
    
    // Mimic react inline styles
    btn.style.flexBasis = `clamp(140px, calc(${Math.max(widthPercent * 2.5, 15)}% - 0.5rem), 100%)`;
    btn.style.flexGrow = skill.size;
    btn.style.minHeight = `${80 + skill.size * 18}px`;
    btn.style.maxWidth = '100%';
    btn.style.borderColor = 'hsl(0 0% 20%)';
    btn.style.backgroundColor = 'hsl(0 0% 12%)';
    btn.setAttribute('data-name', skill.name);

    // Build icons HTML
    let iconsHtml = '';
    if (skill.icons.length > 0) {
      skill.icons.forEach((ic) => {
        iconsHtml += `<img src="${ic.src}" alt="${ic.alt}" width="22" height="22" class="opacity-70 group-hover:opacity-100 transition-opacity" loading="lazy" />`;
      });
    } else {
      iconsHtml += `<i data-lucide="flask-conical" class="opacity-60" style="color: ${skill.color}; width: 20px; height: 20px;"></i>`;
    }

    btn.innerHTML = `
      <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background-color: ${skill.color}10;"></div>
      <div class="relative p-3 h-full w-full flex flex-col justify-between items-start text-left">
        <div class="flex items-center gap-2 mb-2 flex-wrap">
          ${iconsHtml}
        </div>
        <span class="text-sm font-medium text-foreground">${skill.name}</span>
        <div class="flex items-center justify-between w-full mt-2">
          <span class="text-xs text-muted-foreground">${skill.projects} projects</span>
          <div class="w-2 h-2 rounded-full" style="background-color: ${skill.color};"></div>
        </div>
      </div>
    `;

    btn.addEventListener('click', () => {
      toggleSkillSelection(skill, btn);
    });

    treemapContainer.appendChild(btn);
  });

  const toggleSkillSelection = (skill, element) => {
    const isAlreadySelected = (selectedSkillName === skill.name);
    
    // Clear styles on all blocks
    const allBlocks = treemapContainer.querySelectorAll('button');
    allBlocks.forEach((block) => {
      block.style.borderColor = 'hsl(0 0% 20%)';
      block.style.backgroundColor = 'hsl(0 0% 12%)';
    });

    if (isAlreadySelected) {
      selectedSkillName = null;
      // Close details panel with transition
      detailsPanel.style.maxHeight = '0px';
      detailsPanel.style.opacity = '0';
    } else {
      selectedSkillName = skill.name;
      // Highlight selected block
      element.style.borderColor = skill.color;
      element.style.backgroundColor = `${skill.color}20`;
      
      // Populate and Open details panel
      let detailIconsHtml = '';
      if (skill.icons.length > 0) {
        skill.icons.slice(0, 2).forEach((ic) => {
          detailIconsHtml += `<img src="${ic.src}" alt="${ic.alt}" width="18" height="18" />`;
        });
      } else {
        detailIconsHtml += `<i data-lucide="flask-conical" style="color: ${skill.color}; width: 18px; height: 18px;"></i>`;
      }

      detailsContent.innerHTML = `
        <div class="flex items-center gap-3 mb-2">
          <div class="flex items-center gap-2">
            ${detailIconsHtml}
          </div>
          <h4 class="text-lg font-semibold font-sans">${skill.name}</h4>
          <span class="text-xs text-muted-foreground ml-auto font-mono">${skill.category}</span>
        </div>
        <p class="text-muted-foreground text-sm">${skill.details}</p>
      `;

      if (window.lucide) {
        window.lucide.createIcons();
      }

      // Transition opening details
      detailsPanel.style.maxHeight = '200px';
      detailsPanel.style.opacity = '1';
    }
  };
}


/* ─────────────────────────────────────────────────────────────────────────────
   PROJECTS SECTION COLUMN CARDS (Expandable with details)
   ───────────────────────────────────────────────────────────────────────────── */

function initProjectsAccordion() {
  const containers = {
    'AI / ML':        document.getElementById('projects-col-aiml'),
    'Web Apps':       document.getElementById('projects-col-webapps'),
    'Tools':          document.getElementById('projects-col-tools'),
    'Data Analysis':  document.getElementById('projects-col-dataanalysis'),
  };

  let currentlyExpandedName = null;

  projects.forEach((proj) => {
    const parentContainer = containers[proj.category];
    if (!parentContainer) return;

    // Build cover icons HTML
    let coverIconsHtml = '';
    proj.coverIcons.forEach((slug) => {
      coverIconsHtml += `<img src="https://cdn.simpleicons.org/${slug}" alt="${slug.split('/')[0]}" width="20" height="20" class="opacity-80" loading="lazy" />`;
    });

    const cardContainer = document.createElement('div');
    cardContainer.className = 'project-card-wrapper';

    const cleanPathName = proj.name.toLowerCase().replace(/\s/g, '-');

    // Accordion button
    const btn = document.createElement('button');
    btn.className = 'w-full text-left rounded-lg border border-border bg-surface hover:border-gold/20 transition-all duration-300 overflow-hidden mb-0';
    btn.innerHTML = `
      <div class="w-full h-16 rounded-t-lg bg-gradient-to-r ${proj.cover} flex items-center gap-3 px-4 mb-3 border-b border-border/40">
        <div class="flex items-center gap-2">
          ${coverIconsHtml}
        </div>
        <span class="text-xs font-mono text-white/40 truncate">${cleanPathName}</span>
      </div>
      <div class="px-4 pb-3 flex items-center gap-2">
        <span class="text-sm font-medium flex-1">${proj.name}</span>
        ${(proj.demo || proj.github) ? '<i data-lucide="external-link" class="text-muted-foreground shrink-0" style="width: 11px; height: 11px;"></i>' : ''}
      </div>
    `;

    // Expandable content block
    const detailPanel = document.createElement('div');
    detailPanel.className = 'expandable-panel mt-0';
    
    // Build tags row
    let tagsHtml = '';
    proj.tech.forEach((t) => {
      tagsHtml += `<span class="px-2 py-0.5 text-xs rounded-full border border-gold/20 text-gold/80">${t}</span>`;
    });

    // Build action links row
    let linksHtml = '';
    if (proj.github) {
      linksHtml += `
        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-gold transition-colors" title="GitHub">
          <i data-lucide="github" style="width: 14px; height: 14px;"></i>
        </a>
      `;
    }
    if (proj.demo) {
      linksHtml += `
        <a href="${proj.demo}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs text-gold/70 hover:text-gold transition-colors">
          Live demo <i data-lucide="external-link" style="width: 11px; height: 11px;"></i>
        </a>
      `;
    }

    detailPanel.innerHTML = `
      <div class="p-4 rounded-lg bg-[hsl(0_0%_8%)] border border-border text-sm mb-3">
        <p class="text-muted-foreground mb-3">${proj.description}</p>
        <div class="flex flex-wrap gap-1.5 mb-3">
          ${tagsHtml}
        </div>
        <div class="flex gap-3 items-center">
          ${linksHtml}
        </div>
      </div>
    `;

    // Setup toggling expanded states
    btn.addEventListener('click', () => {
      const isCurrentlyExpanded = (currentlyExpandedName === proj.name);
      
      // Close any project that was expanded in the page
      document.querySelectorAll('.expandable-panel').forEach((panel) => {
        panel.classList.remove('expanded');
        panel.style.maxHeight = '0px';
      });
      document.querySelectorAll('.project-card-wrapper button').forEach((b) => {
        b.className = 'w-full text-left rounded-lg border border-border bg-surface hover:border-gold/20 transition-all duration-300 overflow-hidden mb-0';
      });

      if (!isCurrentlyExpanded) {
        currentlyExpandedName = proj.name;
        // Open clicked project
        btn.className = 'w-full text-left rounded-lg border border-gold/40 bg-gold/5 transition-all duration-300 overflow-hidden mb-0';
        detailPanel.classList.add('expanded');
        detailPanel.style.maxHeight = '320px';
      } else {
        currentlyExpandedName = null;
      }
    });

    cardContainer.appendChild(btn);
    cardContainer.appendChild(detailPanel);
    parentContainer.appendChild(cardContainer);
  });
}


/* ─────────────────────────────────────────────────────────────────────────────
   WRITING SECTION IMAGE CAROUSEL & ARTICLES LIST
   ───────────────────────────────────────────────────────────────────────────── */

function initWritingCarousel() {
  const track = document.getElementById('writing-carousel-track');
  const dotsContainer = document.getElementById('writing-carousel-dots');
  const prevBtn = document.getElementById('writing-carousel-prev');
  const nextBtn = document.getElementById('writing-carousel-next');
  const blogList = document.getElementById('writing-blog-list');

  let activeIdx = 0;
  const featuredPosts = posts.slice(0, 3);

  // 1. Render Carousel slides
  featuredPosts.forEach((post) => {
    const slide = document.createElement('div');
    slide.className = 'min-w-full relative aspect-[21/9] md:aspect-[21/9] sm:aspect-[16/9]';
    slide.innerHTML = `
      <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      <div class="absolute bottom-0 left-0 p-6 md:p-10">
        <span class="text-gold text-xs font-mono uppercase tracking-wider">${post.tag}</span>
        <h3 class="text-2xl md:text-3xl font-bold text-white mt-2">${post.title}</h3>
        <p class="text-white/70 text-sm mt-2 max-w-lg hidden sm:block">${post.description}</p>
      </div>
    `;
    track.appendChild(slide);
  });

  // 2. Render Carousel Dots pagination
  featuredPosts.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = `h-2 rounded-full transition-all ${idx === 0 ? 'bg-gold w-6' : 'bg-white/30 w-2'}`;
    dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
    dot.addEventListener('click', () => jumpToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  const updateDots = () => {
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach((dot, i) => {
      if (i === activeIdx) {
        dot.className = 'h-2 rounded-full transition-all bg-gold w-6';
      } else {
        dot.className = 'h-2 rounded-full transition-all bg-white/30 w-2';
      }
    });
  };

  const jumpToSlide = (idx) => {
    activeIdx = idx;
    track.style.transform = `translateX(-${activeIdx * 100}%)`;
    updateDots();
  };

  prevBtn.addEventListener('click', () => {
    const idx = (activeIdx - 1 + featuredPosts.length) % featuredPosts.length;
    jumpToSlide(idx);
  });

  nextBtn.addEventListener('click', () => {
    const idx = (activeIdx + 1) % featuredPosts.length;
    jumpToSlide(idx);
  });

  // Auto Advance slide every 5 seconds
  let autoTimer = setInterval(() => {
    const idx = (activeIdx + 1) % featuredPosts.length;
    jumpToSlide(idx);
  }, 5000);

  // Pause timer on user interaction
  const resetTimer = () => {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      const idx = (activeIdx + 1) % featuredPosts.length;
      jumpToSlide(idx);
    }, 5000);
  };

  prevBtn.addEventListener('click', resetTimer);
  nextBtn.addEventListener('click', resetTimer);
  dotsContainer.addEventListener('click', resetTimer);

  // 3. Render Blog list
  posts.forEach((post) => {
    const row = document.createElement('button');
    row.className = 'w-full flex items-center justify-between py-5 px-4 border-b border-border transition-all duration-300 text-left group hover:bg-gold/5';
    row.innerHTML = `
      <div class="flex items-center gap-4 flex-1 min-w-0">
        <span class="text-xs text-muted-foreground font-mono shrink-0 w-16">${post.date}</span>
        <span class="font-medium transition-colors group-hover:text-gold truncate mr-2">${post.title}</span>
        <span class="text-xs px-2 py-0.5 rounded-full border border-gold/20 text-gold/60 hidden md:inline shrink-0">
          ${post.tag}
        </span>
      </div>
      <i data-lucide="arrow-up-right" class="shrink-0 text-muted-foreground transition-all group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style="width: 14px; height: 14px;"></i>
    `;
    blogList.appendChild(row);
  });
}


/* ─────────────────────────────────────────────────────────────────────────────
   RESEARCH & ACHIEVEMENTS ACCORDION
   ───────────────────────────────────────────────────────────────────────────── */

function initResearchAccordion() {
  const gridContainer = document.getElementById('experiments-grid');
  const detailsPanel = document.getElementById('experiments-detail-panel');

  let activeExpIndex = null;

  const typeColors = {
    Research: 'hsl(40 45% 55%)',
    Analysis: 'hsl(200 40% 55%)',
    Achievement: 'hsl(150 40% 48%)',
    Education: 'hsl(280 35% 55%)',
  };

  // Render cards
  experiments.forEach((exp, idx) => {
    const card = document.createElement('button');
    card.className = 'text-left p-6 rounded-lg border border-border bg-surface hover:border-gold/20 transition-all duration-300 flex items-start gap-3';
    card.setAttribute('data-index', idx);
    
    // Choose appropriate icon
    const iconName = exp.type === 'Achievement' ? 'award' : 'flask-conical';

    card.innerHTML = `
      <i data-lucide="${iconName}" class="text-gold mt-0.5 shrink-0" style="width: 18px; height: 18px;"></i>
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between gap-2">
          <div class="min-w-0">
            <h4 class="font-semibold font-sans truncate">${exp.title}</h4>
            <p class="text-xs text-muted-foreground mt-0.5">${exp.subtitle}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <span class="hidden md:inline text-[10px] px-2 py-0.5 rounded-full border" style="color: ${typeColors[exp.type]}; border-color: ${typeColors[exp.type]}40;">
              ${exp.type}
            </span>
            <i data-lucide="chevron-down" class="text-muted-foreground transition-transform duration-300 shrink-0" style="width: 14px; height: 14px;"></i>
          </div>
        </div>
        <p class="text-sm text-muted-foreground mt-2">${exp.description}</p>
      </div>
    `;

    card.addEventListener('click', () => toggleResearchCard(idx, card));
    gridContainer.appendChild(card);
  });

  const toggleResearchCard = (idx, cardElement) => {
    const isCurrentlyExpanded = (activeExpIndex === idx);
    const chevron = cardElement.querySelector('[data-lucide="chevron-down"]');
    
    // Reset all card styles and chevrons
    const allCards = gridContainer.querySelectorAll('button');
    allCards.forEach((c) => {
      c.className = 'text-left p-6 rounded-lg border border-border bg-surface hover:border-gold/20 transition-all duration-300 flex items-start gap-3';
      const chev = c.querySelector('[data-lucide="chevron-down"]');
      if (chev) chev.style.transform = '';
    });

    if (isCurrentlyExpanded) {
      activeExpIndex = null;
      // Close panel
      detailsPanel.style.maxHeight = '0px';
      detailsPanel.style.opacity = '0';
    } else {
      activeExpIndex = idx;
      const exp = experiments[idx];
      
      // Style active card
      cardElement.className = 'text-left p-6 rounded-lg border border-gold/40 bg-gold/5 transition-all duration-300 flex items-start gap-3';
      if (chevron) chevron.style.transform = 'rotate(180deg)';

      // Assemble links Row HTML
      let linksHtml = '';
      if (exp.links) {
        exp.links.forEach((lnk) => {
          linksHtml += `
            <a href="${lnk.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full border border-border text-muted-foreground hover:border-gold/30 hover:text-gold transition-colors">
              ${lnk.label} <i data-lucide="external-link" style="width: 10px; height: 10px;"></i>
            </a>
          `;
        });
      }

      // Populate details panel contents
      let techBadgesHtml = '';
      exp.tech.forEach((t) => {
        techBadgesHtml += `<span class="px-2.5 py-1 text-xs rounded-full border border-gold/20 text-gold/80">${t}</span>`;
      });

      detailsPanel.innerHTML = `
        <div class="p-6 rounded-lg border border-border bg-[hsl(0_0%_8%)]">
          <div class="flex items-center gap-2 mb-1">
            <div class="w-2 h-2 rounded-full" style="background-color: ${typeColors[exp.type]};"></div>
            <h4 class="text-lg font-semibold text-gold font-sans">${exp.title}</h4>
            <span class="text-xs text-muted-foreground ml-1">${exp.subtitle}</span>
          </div>
          <div class="mb-4 mt-3">
            <span class="text-xs text-muted-foreground uppercase tracking-wider">Details</span>
            <p class="text-sm text-muted-foreground mt-1 leading-relaxed">
              ${exp.howItWorks}
            </p>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            ${techBadgesHtml}
          </div>
          ${linksHtml ? `<div class="flex gap-3">${linksHtml}</div>` : ''}
        </div>
      `;

      if (window.lucide) {
        window.lucide.createIcons();
      }

      // Expand details panel with transition
      detailsPanel.style.maxHeight = '500px';
      detailsPanel.style.opacity = '1';

      // Smoothly scroll the panel into view (with slight delay for animation start)
      setTimeout(() => {
        detailsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 120);
    }
  };
}
