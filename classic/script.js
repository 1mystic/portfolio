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
  initAchievementsGrid();
  
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
  { label: 'Projects', value: 25, suffix: '+', prefix: '' },
  { label: 'Certifications', value: 7, suffix: '+', prefix: '' },
  { label: 'Hackathon Wins', value: 3, suffix: '', prefix: '' },
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
    name: "Sentio",
    category: "Web Apps",
    description: "AI-driven cognitive wellness platform leveraging NLP and Deep Learning for real-time journaling bias analysis. Engineered a RAG-enhanced Socratic assistant, custom Python therapist scrapers, Coherence caching for sub-100ms latency, and Google OAuth via Supabase. Built with FastAPI, Vue 3, and Resend.",
    tech: ["Vue 3", "FastAPI", "NLP/DL", "Supabase", "Web Scraping"],
    demo: "https://sentio-go.vercel.app/",
    github: "https://github.com/1mystic/Sentio",
    cover: catGradients['Web Apps'],
    coverIcons: [`vuedotjs/${G}`, `fastapi/${G}`]
  },
  {
    name: "Episteme",
    category: "AI / ML",
    description: "Socratic Study Engine AI that refuses to answer your questions, and instead helps you answer them yourself. Features 7 research-grade algorithms including Bayesian Knowledge Tracing, prerequisite DAGs, Ebbinghaus gap prioritization, and a Metacognitive Agent. Built with Next.js 15, Claude Sonnet 4, and Supabase.",
    tech: ["Next.js 15", "Claude 3.5 Sonnet", "Supabase", "BKT", "Vercel"],
    demo: "https://episteme-chat.vercel.app",
    github: "https://github.com/1mystic/episteme-chat",
    cover: catGradients['AI / ML'],
    coverIcons: [`nextdotjs/${G}`, `supabase/${G}`]
  },
  {
    name: "GitSyntropy",
    category: "AI / ML",
    description: "Multi-agent system that scores team compatibility and simulates hiring impact using GitHub behavioral data and psychometric profiling. Derives signals from commit timing, PR activity, and adaptive assessment across 8 behavioral dimensions : with Monte Carlo hire simulation and Claude-synthesized streaming narrative reports.",
    tech: ["Python", "FastAPI", "LangGraph", "Claude", "Astro", "PostgreSQL", "TypeScript"],
    demo: "https://git-syntropy.vercel.app",
    github: "https://github.com/1mystic",
    cover: catGradients['AI / ML'],
    coverIcons: [`python/${G}`, `fastapi/${G}`]
  },
  {
    name: "Axiom Canvas",
    category: "AI / ML",
    description: "Math visualization engine powered by the Desmos API and OpenRouter AI with RAG. Users explore mathematical concepts interactively, with AI-generated contextual explanations and retrieval-augmented insights layered on top.",
    tech: ["Desmos API", "OpenRouter", "RAG", "JavaScript"],
    demo: "https://axiom-canvas.onrender.com",
    github: "https://github.com/1mystic",
    cover: catGradients['AI / ML'],
    coverIcons: [`huggingface/${G}`, `javascript/${G}`]
  },
  {
    name: "DominoML",
    category: "AI / ML",
    description: "Visual drag-and-drop ML pipeline builder built with Flask and SQLite. Users compose, connect, and run machine learning steps via a node-based canvas. Supports Marked.js and MathJax for in-app documentation rendering.",
    tech: ["Flask", "SQLite", "Drag & Drop", "MathJax"],
    demo: "https://domino-ml.onrender.com",
    github: "https://github.com/1mystic",
    cover: catGradients['AI / ML'],
    coverIcons: [`flask/${G}`, `python/${G}`]
  },
  {
    name: "Clearview Eco",
    category: "Web Apps",
    description: "Civic tech platform for pollution reporting and verification with geotagged submissions. Uses TensorFlow for pollution detection and a React map interface where users can submit and verify environmental reports in real time.",
    tech: ["TensorFlow", "React", "Geotagging", "Civic Tech"],
    demo: "https://clearvieweco.netlify.app",
    github: "https://github.com/1mystic",
    cover: catGradients['Web Apps'],
    coverIcons: [`tensorflow/${G}`, `react/${G}`]
  },
  {
    name: "SOHOS ED",
    category: "Tools",
    description: "Data-driven educational consultancy and SaaS platform for 400,000+ Indian budget private schools. Automates NEP 2020/PARAKH compliance via Japanese Tokkatsu methodologies. Linear programming optimizes budget allocation and generates 6-page school transformation roadmaps.",
    tech: ["HTML5", "JavaScript", "Linear Programming", "NEP 2020", "PDF Generation", "localStorage"],
    demo: null,
    github: "https://github.com/1mystic/Sohos-ED",
    cover: catGradients['Tools'],
    coverIcons: [`html5/${G}`, `javascript/${G}`]
  },
  {
    name: "DineOps",
    category: "Data Analysis",
    description: "6-layer restaurant intelligence system combining demand forecasting (SARIMA / LSTM / Transformer ensemble), LP/MILP staffing optimization, stochastic inventory planning, and LLM-driven executive reporting. Fuses weather, news sentiment, and holiday signals into a closed-loop prediction-to-decision pipeline.",
    tech: ["FastAPI", "PostgreSQL", "SARIMA", "LSTM", "LangGraph", "Optimization", "Python"],
    demo: null,
    github: "https://github.com/1mystic",
    cover: catGradients['Data Analysis'],
    coverIcons: [`fastapi/${G}`, `postgresql/${G}`]
  },
  {
    name: "DevLoft",
    category: "Tools",
    description: "19 client-side developer utilities built from real data science workflows : JSON processing, regex testing, LLM cost estimator, statistical calculators, CSV-to-SQL, hash/encode, and more. Zero dependencies, everything runs in the browser.",
    tech: ["React", "TypeScript", "Vite", "Zero-dep"],
    demo: "https://devloft-tools.netlify.app",
    github: "https://github.com/1mystic",
    cover: catGradients['Tools'],
    coverIcons: [`react/${G}`, `typescript/${G}`]
  },
  {
    name: "MarkTex",
    category: "Tools",
    description: "Full-featured Markdown + LaTeX editor with live preview, annotation mode (pen, shapes, arrows), HTML/CSS injection, and one-click export to PDF or HTML. Includes a quick snippet library for headings, tables, math, and code.",
    tech: ["Wasmer", "LaTeX", "PDF Export", "Annotation"],
    demo: "https://marktex.wasmer.app",
    github: "https://github.com/1mystic",
    cover: catGradients['Tools'],
    coverIcons: [`markdown/${G}`, `overleaf/${G}`]
  },
  {
    name: "Aura-Delhi",
    category: "Data Analysis",
    description: "Comprehensive air quality monitoring and forecasting platform for the Delhi-NCR region. Features a Next.js policy dashboard, Flutter citizen app, PyTorch ML engine for source identification, Prefect data pipeline, and TimescaleDB : Deployed on GCP with Kubernetes.",
    tech: ["Next.js", "Flutter", "FastAPI", "PyTorch", "GCP", "K8s"],
    demo: null,
    github: "https://github.com/1mystic",
    cover: catGradients['Data Analysis'],
    coverIcons: [`nextdotjs/${G}`, `googlecloud/${G}`]
  },
  {
    name: "PyCrumbs",
    category: "Tools",
    description: "Interactive step-by-step Python learning platform for beginners. Guides learners through Python concepts in small, digestible chunks with hands-on exercises : designed to make the learning curve as smooth as possible.",
    tech: ["React", "Netlify", "Python Education"],
    demo: "https://pycrumbs.netlify.app",
    github: "https://github.com/1mystic",
    cover: catGradients['Tools'],
    coverIcons: [`python/${G}`, `react/${G}`]
  },
  {
    name: "Transformer: Text-to-Emoji",
    category: "AI / ML",
    description: "From-scratch PyTorch implementation of the full encoder-decoder Transformer architecture for translating text phrases to emojis. Includes multi-head attention, sinusoidal positional encoding, AdamW training, greedy decoding, and attention weight visualization.",
    tech: ["PyTorch", "Transformer", "NLP", "From Scratch"],
    demo: null,
    github: "https://github.com/1mystic",
    cover: catGradients['AI / ML'],
    coverIcons: [`pytorch/${G}`]
  },
  {
    name: "VeraMind",
    category: "AI / ML",
    description: "AI-powered mental wellness web app built with Vue 3 and Python. Helps users identify cognitive biases, track anxiety and mood, complete structured learning modules, and receive AI-driven insights via evidence-based assessments and journaling.",
    tech: ["Vue 3", "Python", "Vite", "AI Insights"],
    demo: null,
    github: "https://github.com/1mystic",
    cover: catGradients['AI / ML'],
    coverIcons: [`vuedotjs/${G}`, `python/${G}`]
  },
  {
    name: "Bhopal Food Delivery Analysis",
    category: "Data Analysis",
    description: "Geospatial research report on 5,000 Zomato and Swiggy orders across 20 Bhopal localities. Includes order density heatmaps, platform comparison (55:45 split), peak hour analysis, locality-level revenue breakdown, and a downloadable CSV dataset.",
    tech: ["Python", "Pandas", "GeoPandas", "Matplotlib"],
    demo: "https://bhopal-food-delivery.vercel.app",
    github: "https://github.com/1mystic",
    cover: catGradients['Data Analysis'],
    coverIcons: [`pandas/${G}`, `python/${G}`]
  },
  {
    name: "Whiz.it",
    category: "Tools",
    description: "Full-stack quiz platform with AI-powered answer feedback (Gemini), score history, bookmarks, leaderboard, and admin RBAC panel. Features Celery and Redis for async tasks : daily reminder emails, monthly activity reports, and downloadable PDF report generation.",
    tech: ["Vue 3", "Flask", "Celery", "Redis", "Gemini API"],
    demo: null,
    github: "https://github.com/1mystic/Whiz-it",
    cover: catGradients['Tools'],
    coverIcons: [`vuedotjs/${G}`, `redis/${G}`, `flask/${G}`]
  },
  {
    name: "Qwix.it",
    category: "Web Apps",
    description: "Multi-role household service marketplace connecting customers, professionals, and admins. Customers book and review services; professionals manage packages and requests; admins oversee the platform with RBAC. Built with Flask, Bootstrap, and payment integration.",
    tech: ["Flask", "JavaScript", "Bootstrap", "Payments", "RBAC"],
    demo: null,
    github: "https://github.com/1mystic",
    cover: catGradients['Web Apps'],
    coverIcons: [`flask/${G}`, `javascript/${G}`]
  },
  {
    name: "WikiViz",
    category: "AI / ML",
    description: "Interactive visual explorer for Wikipedia content augmented with Gemini AI. Visualizes timelines and statistics extracted from Wikipedia data, with AI-generated summaries and contextual insights. Built with Vite, React, and TypeScript.",
    tech: ["Gemini API", "React", "TypeScript", "Vite", "Wikipedia"],
    demo: null,
    github: "https://github.com/1mystic",
    cover: catGradients['AI / ML'],
    coverIcons: [`react/${G}`, `googlegemini/${G}`]
  },
  {
    name: "CloudMorph Lens",
    category: "AI / ML",
    description: "Production-ready deep learning platform for cloud classification and segmentation from satellite imagery. Uses ResNet50 for multi-label classification and U-Net for pixel-level segmentation, with Grad-CAM explainability and a Flask web UI.",
    tech: ["ResNet50", "U-Net", "Grad-CAM", "Flask", "CV"],
    demo: null,
    github: "https://github.com/1mystic",
    cover: catGradients['AI / ML'],
    coverIcons: [`pytorch/${G}`, `flask/${G}`]
  },
  {
    name: "Wixplore",
    category: "Tools",
    description: "Evolution of Whiz.it combining cultural exploration quizzes with intelligent data processing. Features Python AI agents for data cleaning and profiling, language detection, dataset upload for AI analysis, personalized profiles, and real-time analytics on a serverless Vercel architecture.",
    tech: ["Vue 3", "Node.js", "Python Agents", "Vercel"],
    demo: null,
    github: "https://github.com/1mystic",
    cover: catGradients['Tools'],
    coverIcons: [`vuedotjs/${G}`, `nodedotjs/${G}`]
  },
  {
    name: "Origami Simulator",
    category: "Web Apps",
    description: "Interactive 3D origami simulator with physics-based aerodynamics. Import OBJ/GLTF models, fold step-by-step, and simulate realistic wind, gravity, and air density on folded models. Includes a crease pattern editor, pre-loaded model library, and live simulation stats.",
    tech: ["Three.js", "React 18", "Tailwind", "Physics", "Vite"],
    demo: null,
    github: "https://github.com/1mystic",
    cover: catGradients['Web Apps'],
    coverIcons: [`threedotjs/${G}`, `react/${G}`]
  },
  {
    name: "Kanha Student House",
    category: "Web Apps",
    description: "Clean marketing website for Kanha Student House PG accommodation. Designed to showcase the property, amenities, and contact information for prospective student residents : a polished minimal landing page.",
    tech: ["React", "Netlify", "Landing Page"],
    demo: "https://kanha-min.netlify.app",
    github: "https://github.com/1mystic",
    cover: catGradients['Web Apps'],
    coverIcons: [`html5/${G}`, `javascript/${G}`]
  },
  {
    name: "Portfolio : atharvk.me",
    category: "Web Apps",
    description: "Personal portfolio as Atharv Khare, IIT Madras BS Data Science (CGPA 9.01). Showcases projects, research, certifications, hackathon wins, a blog, and an origami gallery. Available in three versions across different stacks and domains.",
    tech: ["React", "Next.js", "GitHub Pages", "Vercel"],
    demo: "https://www.atharvk.me",
    github: "https://github.com/1mystic",
    cover: catGradients['Web Apps'],
    coverIcons: [`react/${G}`, `nextdotjs/${G}`]
  }
];

const posts = [
  {
    title: 'Understanding Attention Mechanisms',
    date: 'Apr 2026',
    description: 'A detailed walkthrough of the self-attention mechanism in Transformers : from the mathematical formulation of scaled dot-product attention to multi-head attention, with annotated code and visualizations.',
    tag: 'Transformers',
    image: 'attention_mechanism_banner.png',
    href: '../fresh/posts/attention-mechanisms.html'
  },
  {
    title: 'Building Pipelines with DominoML',
    date: 'Mar 2026',
    description: "A guide to constructing end-to-end machine learning pipelines using DominoML's node-based canvas : covering data ingestion, feature engineering, model selection, and evaluation within the visual interface.",
    tag: 'ML Pipelines',
    image: 'ml_pipeline_banner.png',
    href: '../fresh/posts/domino-ml-pipelines.html'
  },
  {
    title: 'Geospatial Analysis with GeoPandas',
    date: 'Feb 2026',
    description: 'A practical introduction to geospatial data analysis using GeoPandas and Folium. Walks through coordinate systems, spatial joins, choropleth mapping, and real-world applications using the Bhopal food delivery dataset.',
    tag: 'GeoPandas',
    image: 'geospatial_analysis_banner.png',
    href: '../fresh/posts/geopandas-analysis.html'
  },
  {
    title: 'From Markdown to PDF : Building MarkTex',
    date: 'Feb 2026',
    description: 'The engineering story behind MarkTex : how a frustration with existing editors led to building a full Markdown + LaTeX tool with annotation support, live preview, and PDF export from scratch in a browser environment.',
    tag: 'LaTeX',
    image: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 342' style='background-color:%230e0d0c;font-family:monospace;'><rect x='150' y='40' width='160' height='220' rx='4' fill='%23141312' stroke='%23ffffff' stroke-opacity='0.15' stroke-width='1.5' /><rect x='490' y='40' width='160' height='220' rx='4' fill='%23141312' stroke='%23C9A84C' stroke-width='1.5' /><g fill='%23ffffff' fill-opacity='0.25'><rect x='170' y='60' width='80' height='8' /><rect x='170' y='80' width='120' height='4' /><rect x='170' y='90' width='110' height='4' /><rect x='170' y='110' width='90' height='8' /><rect x='170' y='130' width='120' height='4' /><rect x='170' y='140' width='120' height='4' /><rect x='170' y='150' width='60' height='4' /><rect x='170' y='170' width='100' height='6' /></g><path d='M360 150h80' stroke='%23C9A84C' stroke-width='2' stroke-dasharray='4,4' /><path d='M430 145l10 5-10 5v-10z' fill='%23C9A84C' /><text x='400' y='135' fill='%23C9A84C' font-size='11' text-anchor='middle'>PDF Rendering Engine</text><g fill='%23C9A84C' fill-opacity='0.6'><rect x='510' y='60' width='80' height='10' /><rect x='510' y='80' width='120' height='3' /><rect x='510' y='88' width='120' height='3' /><rect x='510' y='105' width='100' height='8' /><rect x='510' y='125' width='120' height='3' /><rect x='510' y='133' width='120' height='3' /></g><text x='515' y='170' fill='%23ffffff' fill-opacity='0.8' font-size='12' font-family='serif' font-style='italic'>∫ e^x dx = e^x + C</text></svg>`,
    href: '../fresh/posts/building-marktex.html'
  },
  {
    title: 'Keystroke Dynamics as a Biometric',
    date: 'Jan 2026',
    description: 'A reader-friendly adaptation of the TypeState research project, exploring how the way you type : not what you type : can serve as a unique behavioural fingerprint for identity verification and cognitive monitoring.',
    tag: 'Biometrics',
    image: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 342' style='background-color:%230e0d0c;font-family:monospace;'><g stroke='%23ffffff' stroke-opacity='0.04' stroke-width='1'><path d='M0 50h800M0 100h800M0 150h800M0 200h800M0 250h800M0 300h800' /><path d='M100 0v342M200 0v342M300 0v342M400 0v342M500 0v342M600 0v342M700 0v342' /></g><path d='M50 171 Q150 71 250 171 T450 171 T650 171 T750 171' fill='none' stroke='%23ffffff' stroke-opacity='0.15' stroke-width='1.5' /><path d='M50 171 Q150 111 250 171 T450 111 T650 171 T750 171' fill='none' stroke='%23C9A84C' stroke-opacity='0.3' stroke-width='2' /><line x1='150' y1='100' x2='150' y2='240' stroke='%23C9A84C' stroke-width='1' stroke-dasharray='2,2' /><line x1='350' y1='100' x2='350' y2='240' stroke='%23C9A84C' stroke-width='1' stroke-dasharray='2,2' stroke-opacity='0.5' /><g fill='%23C9A84C'><circle cx='150' cy='121' r='4' /><circle cx='350' cy='221' r='4' /><circle cx='250' cy='171' r='5' /></g><text x='160' y='115' fill='%23C9A84C' font-size='11'>Dwell Time (t_D)</text><text x='360' y='215' fill='%23ffffff' fill-opacity='0.6' font-size='11'>Flight Time (t_F)</text><text x='50' y='70' fill='%23C9A84C' fill-opacity='0.7' font-weight='bold'>Biometric Signature Profile</text></svg>`,
    href: '../fresh/posts/keystroke-dynamics.html'
  },
  {
    title: 'The Apple Propaganda: Breaking the Illusion',
    date: 'Jan 2026',
    description: "An analysis of the 'Apple' mythos - from the wax-coated fruits in our markets to the stagnant innovation of the tech giant in 2026.",
    tag: 'Opinion',
    image: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 342' style='background-color:%230e0d0c;font-family:sans-serif;'><circle cx='400' cy='180' r='110' fill='none' stroke='%23C9A84C' stroke-opacity='0.1' stroke-dasharray='5,5' stroke-width='2' /><circle cx='400' cy='180' r='85' fill='%23C9A84C' fill-opacity='0.05' /><g transform='translate(400, 185) scale(2.2) translate(-25, -25)'><path d='M32 6 c2 6-4 12-10 12 c-2-5 3-11 10-12z' fill='%23C9A84C' fill-opacity='0.4' /><path d='M25 45 C15 45 6 36 6 25 C6 15 15 8 25 10 C25 15 20 20 20 28 C20 37 25 45 25 45z' fill='%23ffffff' fill-opacity='0.8' /><path d='M27 45 C27 45 32 37 32 28 C32 20 27 15 27 10 C37 8 46 15 46 25 C46 36 37 45 27 45z' fill='%23C9A84C' /></g><text x='50' y='70' fill='%23C9A84C' font-size='14' font-family='monospace' letter-spacing='3'>ILLUSION OF INNOVATION</text><text x='50' y='90' fill='%23ffffff' fill-opacity='0.2' font-size='11' font-family='monospace'>A Critically Adjusted Opinion Block · 2026</text></svg>`,
    href: '../fresh/posts/apple-propaganda.html'
  },
  {
    title: 'Understanding LSTM Networks',
    date: 'Dec 2025',
    description: 'A deep dive into Long Short-Term Memory networks. Demystifying the mathematics behind LSTMs and the core idea of cell states.',
    tag: 'Deep Learning',
    image: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 342' style='background-color:%230e0d0c;font-family:monospace;'><g stroke='%23C9A84C' stroke-opacity='0.05' stroke-width='1'><path d='M0 50h800M0 100h800M0 150h800M0 200h800M0 250h800M0 300h800' /></g><rect x='250' y='80' width='300' height='180' rx='12' fill='%23141312' stroke='%23C9A84C' stroke-width='1.5' /><line x1='150' y1='120' x2='650' y2='120' stroke='%23C9A84C' stroke-width='2' stroke-dasharray='4,4' /><circle cx='350' cy='120' r='10' fill='%23141312' stroke='%23C9A84C' stroke-width='1.5' /><path d='M346 120h8M350 116v8' stroke='%23C9A84C' stroke-width='1.5' /><line x1='150' y1='220' x2='250' y2='220' stroke='%23ffffff' stroke-width='1.5' stroke-opacity='0.4' /><line x1='550' y1='220' x2='650' y2='220' stroke='%23ffffff' stroke-width='1.5' stroke-opacity='0.4' /><text x='310' y='200' fill='%23C9A84C' font-size='12' font-weight='bold'>f_t</text><text x='400' y='200' fill='%23ffffff' fill-opacity='0.7' font-size='12' font-weight='bold'>i_t</text><text x='490' y='200' fill='%23C9A84C' font-size='12' font-weight='bold'>o_t</text><text x='400' y='60' fill='%23ffffff' fill-opacity='0.2' font-size='12' text-anchor='middle'>Cell State (C_t)</text></svg>`,
    href: '../fresh/posts/blog-lstm.html'
  },
  {
    title: 'GitSyntropy Algorithm',
    date: 'Nov 2025',
    description: 'A novel algorithm inspired by Vedic astrology to find perfect development teams using GitHub metrics like chronotype clustering and sentiment analysis.',
    tag: 'Algorithms',
    image: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 342' style='background-color:%230e0d0c;font-family:monospace;'><circle cx='400' cy='171' r='120' fill='none' stroke='%23C9A84C' stroke-opacity='0.15' stroke-width='1' /><circle cx='400' cy='171' r='80' fill='none' stroke='%23C9A84C' stroke-opacity='0.1' stroke-width='1' /><g stroke='%23C9A84C' stroke-opacity='0.4' stroke-width='1.5'><line x1='400' y1='171' x2='400' y2='51' /><line x1='400' y1='171' x2='520' y2='171' /><line x1='400' y1='171' x2='315' y2='256' /></g><circle cx='400' cy='51' r='6' fill='%23C9A84C' /><circle cx='520' cy='171' r='5' fill='%23ffffff' fill-opacity='0.8' /><circle cx='315' cy='256' r='6' fill='%23C9A84C' /><circle cx='460' cy='111' r='4' fill='%23ffffff' fill-opacity='0.5' /><circle cx='340' cy='111' r='4' fill='%23ffffff' fill-opacity='0.5' /><text x='400' y='35' fill='%23C9A84C' font-size='10' text-anchor='middle'>I (Aries)</text><text x='555' y='175' fill='%23ffffff' fill-opacity='0.4' font-size='10'>IV (Cancer)</text><text x='270' y='270' fill='%23C9A84C' font-size='10'>VIII (Scorpio)</text><text x='50' y='70' fill='%23ffffff' fill-opacity='0.15' font-size='18' font-weight='bold'>GIT_SYNTROPY_V1</text></svg>`,
    href: '../fresh/posts/gitsyntropy.html'
  },
  {
    title: 'Resonance',
    date: 'Oct 2025',
    description: 'A reflection on perseverance, hope, and the journey of self-discovery through poetry.',
    tag: 'Poetry',
    image: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 342' style='background-color:%230e0d0c;font-family:serif;'><circle cx='400' cy='171' r='30' fill='none' stroke='%23C9A84C' stroke-opacity='0.8' stroke-width='1.5' /><circle cx='400' cy='171' r='60' fill='none' stroke='%23C9A84C' stroke-opacity='0.5' stroke-width='1.2' /><circle cx='400' cy='171' r='100' fill='none' stroke='%23C9A84C' stroke-opacity='0.3' stroke-width='1' /><circle cx='400' cy='171' r='150' fill='none' stroke='%23C9A84C' stroke-opacity='0.15' stroke-width='1' /><circle cx='400' cy='171' r='210' fill='none' stroke='%23C9A84C' stroke-opacity='0.08' stroke-width='1' /><text x='400' y='176' fill='%23ffffff' font-size='16' font-style='italic' text-anchor='middle' letter-spacing='4'>r e s o n a n c e</text></svg>`,
    href: '../fresh/posts/resonance.html'
  },
  {
    title: 'Time',
    date: 'Sep 2025',
    description: "A philosophical reflection on time's fleeting nature and the importance of cherishing each moment.",
    tag: 'Poetry',
    image: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 342' style='background-color:%230e0d0c;font-family:serif;'><circle cx='400' cy='171' r='110' fill='none' stroke='%23C9A84C' stroke-opacity='0.1' stroke-width='1' /><g stroke='%23C9A84C' stroke-opacity='0.3'><line x1='400' y1='61' x2='400' y2='71' /><line x1='400' y1='271' x2='400' y2='281' /><line x1='290' y1='171' x2='300' y2='171' /><line x1='500' y1='171' x2='510' y2='171' /></g><line x1='400' y1='171' x2='490' y2='120' stroke='%23C9A84C' stroke-width='2' /><line x1='400' y1='171' x2='350' y2='171' stroke='%23ffffff' stroke-opacity='0.2' stroke-width='1.5' /><circle cx='400' cy='171' r='4' fill='%23C9A84C' /><text x='400' y='50' fill='%23C9A84C' font-size='11' font-family='monospace' text-anchor='middle' letter-spacing='2'>TEMPUS FUGIT</text></svg>`,
    href: '../fresh/posts/time.html'
  },
  {
    title: 'Women Empowerment?',
    date: 'Aug 2025',
    description: 'A philosophical perspective on gender equality, societal conditioning, and the importance of self-evaluation.',
    tag: 'Social Commentary',
    image: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 342' style='background-color:%230e0d0c;font-family:serif;'><g stroke='%23C9A84C' stroke-width='1.5' fill='none' stroke-linecap='round'><line x1='400' y1='100' x2='400' y2='240' /><line x1='370' y1='240' x2='430' y2='240' stroke-width='2.5' /><line x1='320' y1='120' x2='480' y2='120' stroke-width='2' /><line x1='320' y1='120' x2='320' y2='180' /><path d='M300 180 h40' stroke-width='2.5' /><line x1='480' y1='120' x2='480' y2='180' /><path d='M460 180 h40' stroke-width='2.5' /></g><circle cx='320' cy='160' r='10' fill='%23C9A84C' fill-opacity='0.2' /><circle cx='320' cy='160' r='3' fill='%23C9A84C' /><text x='400' y='80' fill='%23C9A84C' font-size='12' font-family='monospace' text-anchor='middle' letter-spacing='3'>CRITICAL REVIEW</text></svg>`,
    href: '../fresh/posts/women-empowerment.html'
  }
];

const experiments = [
  // ─── RESEARCH & ANALYSIS ──────────────────────────────────────
  {
    title: 'TerraHeal',
    subtitle: 'Post-Wildfire Vegetation Recovery',
    description: 'A remote sensing study analysing post-wildfire vegetation recovery using satellite imagery and spectral indices (NDVI, NBR).',
    howItWorks: 'Tracks vegetation regeneration trajectories over time by analyzing satellite spectral indices. Combines historical fire data and GIS modeling to identify recovery rates across biomes, enabling data-driven conservation and ecosystem resilience assessment.',
    tech: ['Remote Sensing', 'NDVI', 'Satellite Imagery', 'Ecology'],
    type: 'Research',
    links: [{ url: "https://zenodo.org/records/19630252", label: "Read Paper" }]
  },
  {
    title: 'TypeState',
    subtitle: 'Keystroke Dynamics Study',
    description: 'Investigation into keystroke dynamics as a behavioural biometric for identity verification and cognitive state inference.',
    howItWorks: 'Collects and processes high-resolution keystroke timing data (dwell times, flight times, and inter-key latencies). Applies statistical modeling and machine learning to build high-precision user signature profiles for passive authentication.',
    tech: ['Biometrics', 'Python', 'Signal Processing', 'Behavioral Science'],
    type: 'Research',
    links: [{ url: "https://zenodo.org/records/19387975", label: "Read Paper" }]
  },
  {
    title: 'GitSyntropy',
    subtitle: 'Astrology-Inspired Dev Team Matching',
    description: 'A research paper exploring a novel multi-agent algorithm inspired by Vedic astrology principles to optimize development team composition.',
    howItWorks: 'Scores team compatibility and simulates hiring impact using GitHub behavioral data and psychometric profiling. Applies chronotype spectral clustering and sentiment analysis across 8 behavioral dimensions.',
    tech: ['Algorithms', 'Multi-Agent', 'Vedic Astrology', 'Team Optimization'],
    type: 'Research',
    links: [{ url: "https://zenodo.org/records/20001501", label: "Read Paper" }]
  },
  {
    title: 'Bhopal Food Delivery : Geospatial Study',
    subtitle: 'Spatial Analysis of 5k Orders',
    description: 'Comprehensive data-driven study of 5,000 Zomato and Swiggy orders across 20 Bhopal localities.',
    howItWorks: 'Maps delivery hotspots, platform market share, cuisine preferences, and temporal demand patterns. Utilizes coordinate systems, spatial joins, and density heatmaps in Python with Folium and GeoPandas to generate actionable operational planning insights.',
    tech: ['GeoPandas', 'Pandas', 'Matplotlib', 'Spatial Analysis'],
    type: 'Analysis',
    links: [{ url: "https://bhopal-food-delivery.vercel.app", label: "Interactive Map" }]
  },
  {
    title: 'Statistics II : Course Analysis',
    subtitle: 'IIT Madras BS Programme',
    description: 'Detailed statistical analyses and problem sets completed as part of the IIT Madras BS Data Science programme\'s Statistics II course.',
    howItWorks: 'Encompasses rigorous applications of hypothesis testing, linear regression, ANOVA, and probability distributions on real-world datasets. Formulates statistical inferences and compiles full methodological notebooks.',
    tech: ['Statistics', 'Hypothesis Testing', 'Regression', 'ANOVA'],
    type: 'Analysis',
    links: [{ url: "https://sites.google.com/ds.study.iitm.ac.in/atharvkhare/courses/statistics-ii", label: "View Course Page" }]
  },
  {
    title: 'QSR Demand Forecasting & Affinity Analysis',
    subtitle: 'Business Data Analysis',
    description: 'Business analytics study focused on quick-service restaurant demand forecasting and product affinity mining.',
    howItWorks: 'Applies advanced time-series modelling (SARIMA, Prophet) and market basket analysis (Apriori algorithm) to transaction data. Integrates weather, local event, and holiday signals to forecast weekly demand patterns and uncover item affinity pairings.',
    tech: ['Forecasting', 'Market Basket', 'Time Series', 'Segmentation'],
    type: 'Analysis'
  },

  // ─── ACHIEVEMENTS ─────────────────────────────────────────────
  {
    title: 'Anthropic Claude Builder Club : 2nd Runner Up',
    subtitle: 'Spring 2026 Hackathon',
    description: 'Secured 2nd runner-up position in Anthropic\'s Claude Builder Club Hackathon (Spring 2026).',
    howItWorks: 'Designed and shipped an innovative AI-native application utilizing Anthropic Claude APIs, receiving a $300 prize and recognition for system integration and rapid prototyping under high-pressure guidelines.',
    tech: ['Anthropic', 'Claude', 'Hackathon', 'Prize Winner'],
    type: 'Achievement'
  },
  {
    title: 'Hack4Health Hackathon : 3rd Position',
    subtitle: 'Health-Tech Innovation',
    description: 'Won 3rd position at the Hack4Health hackathon for developing technology-driven health solutions in a competitive environment.',
    howItWorks: 'Designed and prototyped a clinical data processing tool. Built with real-time patient status tracking and prediction analytics, evaluated by an industry panel of healthcare technologists and engineers.',
    tech: ['Health-Tech', 'Hackathon', 'Third Place'],
    type: 'Achievement'
  },
  {
    title: 'Inter-house Tech Dominion : 2nd Place',
    subtitle: 'IIT Madras Competition',
    description: 'Achieved 2nd place at the Tech Dominion hackathon at IIT Madras : January 2026 edition.',
    howItWorks: 'Represented student house in a rapid, institution-wide product building and engineering sprint. Recognized for engineering excellence, performance speed, and polished UX design.',
    tech: ['Hackathon', 'IIT Madras', 'Second Place'],
    type: 'Achievement'
  },
  {
    title: 'Silver Medal : Anukriti, Paradox IITM',
    subtitle: 'IIT Madras Annual Fest',
    description: 'Silver medal at Anukriti : part of Paradox, IIT Madras\'s annual technical and cultural fest.',
    howItWorks: 'Competed at the institute level in the technical arts competition category, applying mathematical and digital designs to complex visualization challenges. Awarded silver medal by the organizing senate.',
    tech: ['Silver Medal', 'Paradox IITM', '2025'],
    type: 'Achievement'
  },
  {
    title: 'MR Focused Title : SPSN',
    subtitle: 'School Recognition',
    description: 'Awarded the \'Mr Focused\' title at SPSN for consistent dedication and academic discipline.',
    howItWorks: 'A unique school accolade highlighting exceptional focus, consistent academic performance, leadership skills, and rigorous approach toward co-curricular commitments.',
    tech: ['Award', 'Title', 'School'],
    type: 'Achievement'
  },

  // ─── EDUCATION ────────────────────────────────────────────────
  {
    title: 'B.S. Data Science & Applications',
    subtitle: 'IIT Madras · 2023 – 2027',
    description: 'Bachelor of Science in Data Science & Applications from IIT Madras, maintaining a CGPA of 9.01.',
    howItWorks: 'Curriculum covers advanced mathematics, probability, statistics, machine learning, deep learning, database systems, software engineering, and applied artificial intelligence. Engaged in competitive coding and technical forums.',
    tech: ['IIT Madras', 'CGPA 9.01', 'Data Science', 'AI/ML', 'Python', 'SQL'],
    type: 'Education',
    links: [{ url: "https://study.iitm.ac.in", label: "View Programme" }]
  },
  {
    title: 'Diploma in Programming',
    subtitle: 'IIT Madras · Completed 2025',
    description: 'Completed with a CGPA of 9.44, covering algorithms, systems thinking, and application development.',
    howItWorks: 'Rigorous specialized track covering data structures, object-oriented programming (Java), web application construction, database management, and system-level computing architectures.',
    tech: ['IIT Madras', 'CGPA 9.44', 'Diploma', 'Algorithms', 'Web Dev'],
    type: 'Education',
    links: [{ url: "https://study.iitm.ac.in", label: "View Programme" }]
  },

  // ─── CERTIFICATIONS ───────────────────────────────────────────
  {
    title: 'HackerRank SQL (Advanced)',
    subtitle: 'HackerRank · 2024',
    description: 'Verified professional-grade database querying and schema optimization certification.',
    howItWorks: 'Completed comprehensive timed assessments covering complex multi-table joins, subqueries, aggregations, window functions, and query optimization paradigms on heavy production-like relational schemas.',
    tech: ['SQL', 'Databases', 'HackerRank'],
    type: 'Certificate',
    links: [{ url: "https://drive.google.com/file/d/1He-058ls2cu3woRSCwbm9UXCUt-brQzN/view?usp=sharing", label: "Verify Certificate" }]
  },
  {
    title: 'DataCamp Data Science Associate',
    subtitle: 'DataCamp · 2025',
    description: 'Professional certification validating skills in Python, SQL, and Machine Learning fundamentals.',
    howItWorks: 'Passed a rigorous multi-stage proctored evaluation. Assessed on exploratory data analysis, data wrangling, SQL joins, predictive modeling with scikit-learn, and statistical hypothesis formulation.',
    tech: ['Python', 'SQL', 'PyTorch', 'DataCamp', '2025'],
    type: 'Certificate'
  },
  {
    title: 'GCP Cloud Workshop',
    subtitle: 'Google Cloud Platform',
    description: 'Workshop certification covering GCP core services and AI integration.',
    howItWorks: 'Acquired hands-on experience in configuring Google Compute Engine instances, structuring Cloud Storage buckets, performing big data queries with BigQuery, and deploying models using Vertex AI services.',
    tech: ['GCP', 'Cloud', 'BigQuery', 'Vertex AI'],
    type: 'Certificate',
    links: [{ url: "https://drive.google.com/file/d/1QvVS0EJSL60TOnbs5ZFTpgE1jcJlfh-X/view", label: "Verify Certificate" }]
  },
  {
    title: 'Dynamic Programming Workshop',
    subtitle: 'IIT Madras',
    description: 'Focus certification on dynamic programming paradigms and competitive algorithmic design.',
    howItWorks: 'Completed a comprehensive workshop on state-space design, memoization, tabulation, optimal substructure, and overlapping subproblem patterns. Solved complex competitive-level algorithm matrices.',
    tech: ['Algorithms', 'DP', 'Competitive Programming'],
    type: 'Certificate',
    links: [{ url: "https://drive.google.com/file/d/1Ru0ShGa4jEx2j4BsGiIVRf2HTLWhJxtE/view", label: "Verify Certificate" }]
  },
  {
    title: 'Machine Learning Workshop',
    subtitle: 'IIT Madras',
    description: 'Workshop certificate covering classic supervised and unsupervised machine learning models.',
    howItWorks: 'Hands-on implementation of linear regression, logistic classification, decision trees, K-means clustering, PCA, and detailed cross-validation evaluation metrics with scikit-learn in Python.',
    tech: ['Machine Learning', 'scikit-learn', 'Python'],
    type: 'Certificate',
    links: [{ url: "https://drive.google.com/file/d/1RWIVo5YHam_mqswe_A5NlX0VXH5TcLyX/view", label: "Verify Certificate" }]
  },
  {
    title: 'Python Programming',
    subtitle: 'IIT Madras',
    description: 'Verified foundational Python programming certificate with high graded performance.',
    howItWorks: 'Rigorous assessment in programming logic, object-oriented concepts, asynchronous workflows, package compiling, file I/O operations, and standard mathematical library integrations.',
    tech: ['Python', 'OOP', 'Programming'],
    type: 'Certificate',
    links: [{ url: "https://drive.google.com/file/d/192zatB1EimlnHuJyFu7wcGbvb4QMrDSa/view", label: "Verify Certificate" }]
  },
  {
    title: 'NPTEL Distributed Systems & Cloud Computing',
    subtitle: 'NPTEL · Elite Tier · 2026',
    description: 'Elite tier certification in Distributed Systems and Cloud Computing from NPTEL.',
    howItWorks: 'Completed academic assessment covering virtualization strategies, consensus algorithms, cloud resource allocation, MapReduce scalability, and robust server architecting.',
    tech: ['Distributed Systems', 'Cloud Computing', 'Elite Tier', 'NPTEL'],
    type: 'Certificate'
  },
  {
    title: 'Machine Learning using Python',
    subtitle: 'Simplilearn · 2026',
    description: 'Comprehensive training in machine learning concepts using Python, covering data preprocessing, regression, classification, clustering, and model deployment.',
    tech: ['Machine Learning', 'Python', 'Simplilearn'],
    type: 'Certificate',
    links: [{ url: "https://drive.google.com/file/d/1b0oOTDg5SqRQtlzQmwwOD17CNUqd3leJ/view?usp=sharing", label: "Verify Certificate" }]
  },
  {
    title: 'Cloud Computing Foundations',
    subtitle: 'Simplilearn · 2026',
    description: 'Foundational training in cloud computing models, service architectures, virtualization, and deployment strategies across major cloud platforms.',
    tech: ['Cloud Computing', 'Infrastructure', 'Simplilearn'],
    type: 'Certificate',
    links: [{ url: "https://drive.google.com/file/d/1eFqV5gONP0AfkhjaOjMjau1mdr9YyKr9/view?usp=sharing", label: "Verify Certificate" }]
  }
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
  const sectionIds = ['hero', 'projects', 'skills', 'achievements', 'writing', 'experiments', 'process'];
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
  const sectionIds = ['hero', 'projects', 'skills', 'achievements', 'writing', 'experiments', 'process'];
  const indicatorLabel = trigger.querySelector('.font-mono');

  const updateMobileNavActive = (activeId) => {
    const activeIdx = sectionIds.indexOf(activeId);
    const labels = ['00', '01', '02', '03', '04', '05', '06'];
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
    
    // Clicking the row opens the post link
    row.addEventListener('click', () => {
      if (post.href) {
        window.open(post.href, '_blank');
      }
    });

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
    Certificate: 'hsl(160 30% 52%)',
  };

  // Render cards
  experiments.forEach((exp, idx) => {
    if (exp.type !== 'Research' && exp.type !== 'Analysis') return;

    const card = document.createElement('button');
    card.className = 'text-left p-6 rounded-lg border border-border bg-surface hover:border-gold/20 transition-all duration-300 flex items-start gap-3';
    card.setAttribute('data-index', idx);
    
    // Choose appropriate icon
    let iconName = 'flask-conical';
    if (exp.type === 'Achievement') {
      iconName = 'award';
    } else if (exp.type === 'Education') {
      iconName = 'graduation-cap';
    } else if (exp.type === 'Certificate') {
      iconName = 'scroll';
    }

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

/* ─────────────────────────────────────────────────────────────────────────────
   ACHIEVEMENTS GRID
   ───────────────────────────────────────────────────────────────────────────── */

function initAchievementsGrid() {
  const container = document.getElementById('achievements-grid');
  if (!container) return;

  const typeColors = {
    Achievement: 'hsl(150 40% 48%)',
    Education: 'hsl(280 35% 55%)',
    Certificate: 'hsl(160 30% 52%)',
  };

  experiments.forEach((exp) => {
    if (exp.type === 'Research' || exp.type === 'Analysis') return;

    const card = document.createElement('div');
    card.className = 'break-inside-avoid p-6 rounded-lg border border-border bg-surface hover:border-gold/20 transition-all duration-300 flex flex-col gap-3 group';
    
    let iconName = 'award';
    if (exp.type === 'Education') {
      iconName = 'graduation-cap';
    } else if (exp.type === 'Certificate') {
      iconName = 'scroll';
    }

    let linksHtml = '';
    if (exp.links) {
      exp.links.forEach((lnk) => {
        linksHtml += `
          <a href="${lnk.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 mt-auto pt-2 text-xs font-medium text-muted-foreground hover:text-gold transition-colors">
            ${lnk.label} <i data-lucide="external-link" style="width: 12px; height: 12px;"></i>
          </a>
        `;
      });
    }

    let techBadgesHtml = '';
    if (exp.tech) {
      exp.tech.forEach((t) => {
        techBadgesHtml += `<span class="px-2 py-0.5 text-[10px] rounded border border-gold/20 text-gold/80">${t}</span>`;
      });
    }

    card.innerHTML = `
      <div class="flex items-start justify-between gap-2">
        <i data-lucide="${iconName}" class="text-gold shrink-0 group-hover:scale-110 transition-transform duration-300" style="width: 20px; height: 20px;"></i>
        <span class="text-[10px] px-2 py-0.5 rounded-full border" style="color: ${typeColors[exp.type]}; border-color: ${typeColors[exp.type]}40;">
          ${exp.type}
        </span>
      </div>
      <div>
        <h4 class="font-semibold font-sans mt-2">${exp.title}</h4>
        <p class="text-xs text-muted-foreground mt-0.5">${exp.subtitle}</p>
      </div>
      <p class="text-sm text-muted-foreground leading-relaxed mt-1">${exp.description}</p>
      ${techBadgesHtml ? `<div class="flex flex-wrap gap-1.5 mt-2">${techBadgesHtml}</div>` : ''}
      ${linksHtml}
    `;

    container.appendChild(card);
  });
}
