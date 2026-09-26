/* ============================================================
 *  PORTFOLIO UNIFIED DATA MODULE  —  AUTO-GENERATED
 *  Source: data/portfolio-data.json
 *  Regenerate: python3 data/update-data.py
 * ============================================================ */

(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.PORTFOLIO_DATA = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {

  /* ── RAW DATA ───────────────────────────────────────────── */

  var _profile   = {
  "name": "Atharv Khare",
  "handle": "@1mystic",
  "role": "Data Scientist · IIT Madras",
  "bio": "BS Data Science student at IIT Madras, building at the seam of ML and the web. I learn from first principles and ship things end-to-end — from model experiments to deployed systems. Currently exploring RAG, GenAI tooling, and well-configured Linux.",
  "location": "Bhopal, India",
  "timezone": "UTC+05:30",
  "email": "atharvkhare18@gmail.com",
  "resumePdf": "Atharv-Khare.pdf",
  "socials": {
    "github": "https://github.com/1mystic",
    "linkedin": "https://linkedin.com/in/atharvkhare/",
    "leetcode": "https://leetcode.com/1mystic",
    "kaggle": "https://kaggle.com/atharvkhare",
    "instagram": "https://www.instagram.com/1._.mystic/",
    "researchgate": "https://www.researchgate.net/profile/Atharv-Khare-2?ev=hdr_xprf",
    "myanimelist": "https://myanimelist.net/profile/mitzig",
    "digitalGarden": "https://1mystic.github.io/pen/"
  }
};

  var _stats     = {
  "cgpa": 9.15,
  "diplomaCgpa": 9.44,
  "deployedApps": 18,
  "projectsShipped": 41,
  "hackathonWins": "3/8",
  "commitsPerYear": 847,
  "verifiedRecords": 56,
  "researchCount": 7,
  "blogsCount": 21,
  "certificatesCount": 11,
  "educationCount": 2,
  "achievementsCount": 8
};

  var _projects  = [
  {
    "title": "Sentio",
    "sub": "sentio-go.vercel.app",
    "href": "https://sentio-go.vercel.app/",
    "desc": "AI-driven cognitive wellness platform leveraging NLP and Deep Learning for real-time journaling bias analysis. Engineered a RAG-enhanced Socratic assistant, custom Python therapist scrapers, Coherence caching for sub-100ms latency, and Google OAuth via Supabase.",
    "tags": [
      "Vue 3",
      "FastAPI",
      "NLP/DL",
      "Supabase",
      "Web Scraping"
    ],
    "featured": true,
    "cat": "platform",
    "catLabel": "Platform",
    "img": "assets/projects/sentio.webp",
    "github": "https://github.com/1mystic/Sentio"
  },
  {
    "title": "Reflecta",
    "sub": "reflecta-j1wz.onrender.com",
    "href": "https://reflecta-j1wz.onrender.com/",
    "desc": "AI-powered learning intelligence platform combining Item Response Theory (IRT), Bayesian Knowledge Tracing (BKT), SAKT, and behavioral analytics over 525k interaction logs to estimate learner mastery and goal readiness. Features FastAPI serving, MLflow tracking, online ability estimation, and LLM-generated assessments with drift tracking on Render.",
    "tags": [
      "PyTorch",
      "FastAPI",
      "MLflow",
      "IRT",
      "BKT",
      "SAKT",
      "Claude",
      "Render"
    ],
    "featured": true,
    "cat": "ml-ai",
    "catLabel": "ML / AI",
    "img": "assets/projects/reflecta.webp",
    "github": "https://github.com/1mystic/reflecta"
  },
  {
    "title": "Plume",
    "sub": "1mystic.github.io/plumefile",
    "href": "https://1mystic.github.io/plumefile/",
    "desc": "Python CLI tool performing offline pre-flight security analysis (secret/PII detection, file profiling, sentiment analysis) before generating self-destructing LAN or Cloudflare Tunnel sharing links with QR codes. Features deterministic risk scoring, PyPI package (184+ downloads), and zero third-party storage.",
    "tags": [
      "Python",
      "FastAPI",
      "Typer",
      "Rich",
      "Pandas",
      "VADER",
      "Cloudflare Tunnel",
      "PyPI"
    ],
    "featured": true,
    "cat": "tool",
    "catLabel": "Dev Tool",
    "img": "assets/projects/plume-web.webp",
    "github": "https://github.com/1mystic/plumefile"
  },
  {
    "title": "GitSyntropy",
    "sub": "git-syntropy.vercel.app",
    "href": "https://git-syntropy.vercel.app",
    "desc": "Multi-agent system that scores team compatibility and simulates hiring impact using GitHub behavioral data and psychometric profiling. Derives signals from commit timing, PR activity, and adaptive assessment across 8 behavioral dimensions : with Monte Carlo hire simulation and Claude-synthesized streaming narrative reports.",
    "tags": [
      "Python",
      "FastAPI",
      "LangGraph",
      "Claude",
      "Astro",
      "PostgreSQL",
      "TypeScript"
    ],
    "featured": true,
    "cat": "ml-ai",
    "catLabel": "ML / AI",
    "img": "assets/projects/git-sync.webp",
    "github": "https://github.com/1mystic/git-syntropy"
  },
  {
    "title": "Comment Sentiment Classification",
    "sub": "Kaggle Rank 21/2,744 (Top 0.8%)",
    "href": null,
    "github": "https://github.com/1mystic/kaggle-comment-classification",
    "desc": "Stacked ensemble combining TF-IDF (word/char n-grams), LightGBM, Logistic Regression, NB-SVM, and engineered linguistic features to classify obfuscated toxic comments, achieving 0.83499 Macro-F1 and Rank 21/2,744 (Top 0.8%) without deep learning.",
    "tags": [
      "Python",
      "TF-IDF",
      "LightGBM",
      "Logistic Regression",
      "NB-SVM",
      "Ensemble ML",
      "NLP"
    ],
    "featured": true,
    "cat": "ml-ai",
    "catLabel": "ML / AI"
  },
  {
    "title": "EcoView",
    "sub": "eco-view.vercel.app",
    "href": "https://eco-view.vercel.app/",
    "desc": "Production-deployed serverless civic tech platform for real-time pollution reporting, AI classification, and NGO coordination running at $0/month. Implemented a dual-mode ML pipeline distilling a Gemini VLM teacher into an edge-ready ONNX model (~6MB) for mobile deployment. Features interactive maps, role-based dashboards, and a points-based verification system.",
    "tags": [
      "React",
      "Firebase",
      "FastAPI",
      "HuggingFace",
      "Gemini AI",
      "ONNX",
      "Vercel"
    ],
    "featured": true,
    "cat": "platform",
    "catLabel": "Platform",
    "img": "assets/projects/ecoview.webp",
    "github": "https://github.com/1mystic/ecoview"
  },
  {
    "title": "Mitra",
    "sub": "mitra-theta.vercel.app",
    "href": "https://mitra-theta.vercel.app",
    "desc": "Built a multi-agent career platform that personalizes internship discovery, resume analysis, interview preparation, and skill-roadmap generation using LangGraph orchestration, semantic memory, vector retrieval, and adaptive user profiling. Designed an extensible architecture integrating LLM agents, recommendation systems, and long-term user memory for personalized career guidance.",
    "tags": [
      "LangGraph",
      "RAG",
      "LLM Agents",
      "Vector Retrieval",
      "Semantic Memory",
      "Adaptive Profiling",
      "Full-Stack AI"
    ],
    "featured": true,
    "cat": "ml-ai",
    "catLabel": "ML / AI",
    "img": "assets/projects/mitra.webp",
    "github": "https://github.com/1mystic/mitra"
  },
  {
    "title": "BayesInspector",
    "sub": "bayes-inspector.pages.dev",
    "href": "https://bayes-inspector.pages.dev/",
    "desc": "Client-side probabilistic text classifier that exposes the full Naive Bayes reasoning chain, word by word, as you type. Shows prior, likelihood, and posterior scores for every class, and highlights the words that actually move the prediction. Uses a custom TypeScript inference engine with no ML runtime dependencies and runs entirely in the browser. Features Spam, News, and Sentiment models.",
    "tags": [
      "React",
      "TypeScript",
      "Vite",
      "Framer Motion",
      "Naive Bayes",
      "Tailwind CSS"
    ],
    "featured": true,
    "cat": "ml-ai",
    "catLabel": "ML / AI",
    "img": "assets/projects/Bayes-inspector.webp",
    "github": "https://github.com/1mystic/bayes-inspector"
  },
  {
    "title": "Axiom Canvas",
    "sub": "axiom-canvas.onrender.com",
    "href": "https://axiom-canvas.onrender.com",
    "desc": "Math visualization engine powered by the Desmos API and OpenRouter AI with RAG. Users explore mathematical concepts interactively, with AI-generated contextual explanations and retrieval-augmented insights layered on top.",
    "tags": [
      "Desmos API",
      "OpenRouter",
      "RAG",
      "JavaScript"
    ],
    "featured": true,
    "cat": "ml-ai",
    "catLabel": "ML / AI",
    "img": "assets/projects/axiom.webp",
    "github": "https://github.com/1mystic/axiom-canvas"
  },
  {
    "title": "Flipkart Gridlock",
    "sub": "flipkart-gridlock.vercel.app",
    "href": "https://flipkart-gridlock.vercel.app/",
    "desc": "Spatio-temporal traffic demand forecasting system achieving a top-tier score (92.39%) in the Flipkart GRiD Hackathon. Comprises a CatBoost & LightGBM ensemble pipeline integrated with an interactive cyberpunk operations dashboard featuring Leaflet maps, live analytics, and a hybrid client-side fallback simulation engine.",
    "tags": [
      "React",
      "Vite",
      "CatBoost",
      "LightGBM",
      "Leaflet.js",
      "FastAPI",
      "HuggingFace",
      "Ensemble Learning"
    ],
    "featured": true,
    "cat": "data-science",
    "catLabel": "Data Science",
    "img": "assets/projects/gridlock.webp",
    "github": "https://github.com/1mystic/flipkart-gridlock"
  },
  {
    "title": "Episteme",
    "sub": "episteme-chat.vercel.app",
    "href": "https://episteme-chat.vercel.app",
    "desc": "Socratic Study Engine AI that refuses to answer your questions, and instead helps you answer them yourself. Features 7 research-grade algorithms including Bayesian Knowledge Tracing, prerequisite DAGs, Ebbinghaus gap prioritization, and a Metacognitive Agent. Built with Next.js 15, Claude Sonnet 4, and Supabase.",
    "tags": [
      "Next.js 15",
      "Claude 3.5 Sonnet",
      "Supabase",
      "BKT",
      "Vercel"
    ],
    "featured": true,
    "cat": "ml-ai",
    "catLabel": "ML / AI",
    "img": "assets/projects/episteme.webp",
    "github": "https://github.com/1mystic/episteme-chat"
  },
  {
    "title": "DominoML",
    "sub": "domino-ml.onrender.com",
    "href": "https://domino-ml.onrender.com",
    "desc": "Visual drag-and-drop ML pipeline builder built with Flask and SQLite. Users compose, connect, and run machine learning steps via a node-based canvas. Supports Marked.js and MathJax for in-app documentation rendering.",
    "tags": [
      "Flask",
      "SQLite",
      "Drag & Drop",
      "MathJax"
    ],
    "featured": true,
    "cat": "ml-ai",
    "catLabel": "ML / AI",
    "img": "assets/projects/domino-ml.webp",
    "github": "https://github.com/1mystic/domino-ml"
  },
  {
    "title": "Clearview Eco",
    "sub": "clearvieweco.netlify.app",
    "href": "https://clearvieweco.netlify.app",
    "desc": "Civic tech platform for pollution reporting and verification with geotagged submissions. Uses TensorFlow for pollution detection and a React map interface where users can submit and verify environmental reports in real time.",
    "tags": [
      "TensorFlow",
      "React",
      "Geotagging",
      "Civic Tech"
    ],
    "featured": false,
    "cat": "platform",
    "catLabel": "Platform",
    "github": "https://github.com/1mystic/clearview-eco"
  },
  {
    "title": "SOHOS ED",
    "sub": "School Optimization & Holistic Operating System",
    "href": null,
    "github": "https://github.com/1mystic/Sohos-ED",
    "desc": "Data-driven educational consultancy and SaaS platform for 400,000+ Indian budget private schools. Automates NEP 2020/PARAKH compliance via Japanese Tokkatsu methodologies (Han groups, Chokai, Toban, Soji). Linear programming optimizes budget allocation and generates 6-page school transformation roadmaps.",
    "tags": [
      "HTML5",
      "JavaScript",
      "Linear Programming",
      "NEP 2020",
      "PDF Generation",
      "localStorage"
    ],
    "featured": false,
    "cat": "edu",
    "catLabel": "Education"
  },
  {
    "title": "DineOps",
    "sub": "Restaurant Intelligence & Optimization Platform",
    "href": null,
    "github": "https://github.com/1mystic/dineops",
    "desc": "6-layer restaurant intelligence system combining demand forecasting (SARIMA / LSTM / Transformer ensemble), LP/MILP staffing optimization, stochastic inventory planning, and LLM-driven executive reporting. Fuses weather, news sentiment, and holiday signals into a closed-loop prediction-to-decision pipeline.",
    "tags": [
      "FastAPI",
      "PostgreSQL",
      "SARIMA",
      "LSTM",
      "LangGraph",
      "Optimization",
      "Python"
    ],
    "featured": false,
    "cat": "data-science",
    "catLabel": "Data Science"
  },
  {
    "title": "DevLoft",
    "sub": "devloft-tools.netlify.app",
    "href": "https://devloft-tools.netlify.app",
    "desc": "19 client-side developer utilities built from real data science workflows : JSON processing, regex testing, LLM cost estimator, statistical calculators, CSV-to-SQL, hash/encode, and more. Zero dependencies, everything runs in the browser.",
    "tags": [
      "React",
      "TypeScript",
      "Vite",
      "Zero-dep"
    ],
    "featured": false,
    "cat": "tool",
    "catLabel": "Dev Tool",
    "github": "https://github.com/1mystic/devloft"
  },
  {
    "title": "MarkTex",
    "sub": "marktex.wasmer.app",
    "href": "https://marktex.wasmer.app",
    "desc": "Full-featured Markdown + LaTeX editor with live preview, annotation mode (pen, shapes, arrows), HTML/CSS injection, and one-click export to PDF or HTML. Includes a quick snippet library for headings, tables, math, and code.",
    "tags": [
      "Wasmer",
      "LaTeX",
      "PDF Export",
      "Annotation"
    ],
    "featured": false,
    "cat": "tool",
    "catLabel": "Dev Tool",
    "github": "https://github.com/1mystic/marktex"
  },
  {
    "title": "Aura-Delhi",
    "sub": "AI Air Quality Platform",
    "href": null,
    "github": "https://github.com/1mystic/aura-delhi",
    "desc": "Comprehensive air quality monitoring and forecasting platform for the Delhi-NCR region. Features a Next.js policy dashboard, Flutter citizen app, PyTorch ML engine for source identification, Prefect data pipeline, and TimescaleDB : deployed on GCP with Kubernetes.",
    "tags": [
      "Next.js",
      "Flutter",
      "FastAPI",
      "PyTorch",
      "GCP",
      "K8s"
    ],
    "featured": false,
    "cat": "data-science",
    "catLabel": "Data Science"
  },
  {
    "title": "PyCrumbs",
    "sub": "pycrumbs.netlify.app",
    "href": "https://pycrumbs.netlify.app",
    "desc": "Interactive step-by-step Python learning platform for beginners. Guides learners through Python concepts in small, digestible chunks with hands-on exercises : designed to make the learning curve as smooth as possible.",
    "tags": [
      "React",
      "Netlify",
      "Python Education"
    ],
    "featured": false,
    "cat": "edu",
    "catLabel": "Education",
    "github": "https://github.com/1mystic/pycrumbs"
  },
  {
    "title": "Transformer: Text-to-Emoji",
    "sub": "GitHub project",
    "href": null,
    "github": "https://github.com/1mystic/text-to-emoji",
    "desc": "From-scratch PyTorch implementation of the full encoder-decoder Transformer architecture for translating text phrases to emojis. Includes multi-head attention, sinusoidal positional encoding, AdamW training, greedy decoding, and attention weight visualization.",
    "tags": [
      "PyTorch",
      "Transformer",
      "NLP",
      "From Scratch"
    ],
    "featured": false,
    "cat": "ml-ai",
    "catLabel": "ML / AI"
  },
  {
    "title": "VeraMind",
    "sub": "Mental Wellness Platform",
    "href": null,
    "github": "https://github.com/1mystic/veramind",
    "desc": "AI-powered mental wellness web app built with Vue 3 and Python. Helps users identify cognitive biases, track anxiety and mood, complete structured learning modules, and receive AI-driven insights via evidence-based assessments and journaling.",
    "tags": [
      "Vue 3",
      "Python",
      "Vite",
      "AI Insights"
    ],
    "featured": false,
    "cat": "ml-ai",
    "catLabel": "ML / AI"
  },
  {
    "title": "Bhopal Food Delivery Analysis",
    "sub": "bhopal-food-delivery.vercel.app",
    "href": "https://bhopal-food-delivery.vercel.app",
    "desc": "Geospatial research report on 5,000 Zomato and Swiggy orders across 20 Bhopal localities. Includes order density heatmaps, platform comparison (55:45 split), peak hour analysis, locality-level revenue breakdown, and a downloadable CSV dataset.",
    "tags": [
      "Python",
      "Pandas",
      "GeoPandas",
      "Matplotlib"
    ],
    "featured": false,
    "cat": "data-science",
    "catLabel": "Data Science",
    "github": "https://github.com/1mystic/bhopal-food-delivery"
  },
  {
    "title": "Whiz.it",
    "sub": "GitHub project",
    "href": null,
    "github": "https://github.com/1mystic/whizit",
    "desc": "Full-stack quiz platform with AI-powered answer feedback (Gemini), score history, bookmarks, leaderboard, and admin RBAC panel. Features Celery and Redis for async tasks : daily reminder emails, monthly activity reports, and downloadable PDF report generation.",
    "tags": [
      "Vue 3",
      "Flask",
      "Celery",
      "Redis",
      "Gemini API"
    ],
    "featured": false,
    "cat": "edu",
    "catLabel": "Education"
  },
  {
    "title": "Qwix.it",
    "sub": "GitHub project",
    "href": null,
    "github": "https://github.com/1mystic/qwix",
    "desc": "Multi-role household service marketplace connecting customers, professionals, and admins. Customers book and review services; professionals manage packages and requests; admins oversee the platform with RBAC. Built with Flask, Bootstrap, and payment integration.",
    "tags": [
      "Flask",
      "JavaScript",
      "Bootstrap",
      "Payments",
      "RBAC"
    ],
    "featured": false,
    "cat": "platform",
    "catLabel": "Platform"
  },
  {
    "title": "GlideML",
    "sub": "glideml.vercel.app",
    "href": "https://glideml.vercel.app",
    "desc": "Visual ML pipeline builder frontend with a fast, intuitive interface for constructing and managing machine learning workflows. Pairs with DominoML as a sleek Vite-powered pipeline design tool.",
    "tags": [
      "React",
      "Vite",
      "TypeScript",
      "ML Pipelines"
    ],
    "featured": false,
    "cat": "ml-ai",
    "catLabel": "ML / AI",
    "github": "https://github.com/1mystic/glideml"
  },
  {
    "title": "WikiViz",
    "sub": "AI Studio app",
    "href": null,
    "github": "https://github.com/1mystic/wikiviz",
    "desc": "Interactive visual explorer for Wikipedia content augmented with Gemini AI. Visualizes timelines and statistics extracted from Wikipedia data, with AI-generated summaries and contextual insights. Built with Vite, React, and TypeScript.",
    "tags": [
      "Gemini API",
      "React",
      "TypeScript",
      "Vite",
      "Wikipedia"
    ],
    "featured": false,
    "cat": "ml-ai",
    "catLabel": "ML / AI"
  },
  {
    "title": "CloudMorph Lens",
    "sub": "GitHub project",
    "href": null,
    "github": "https://github.com/1mystic/cloudmorph-lens",
    "desc": "Production-ready deep learning platform for cloud classification and segmentation from satellite imagery. Uses ResNet50 for multi-label classification and U-Net for pixel-level segmentation, with Grad-CAM explainability and a Flask web UI.",
    "tags": [
      "ResNet50",
      "U-Net",
      "Grad-CAM",
      "Flask",
      "CV"
    ],
    "featured": false,
    "cat": "ml-ai",
    "catLabel": "ML / AI"
  },
  {
    "title": "Wixplore",
    "sub": "Whiz.it v2",
    "href": null,
    "github": "https://github.com/1mystic/wixplore",
    "desc": "Evolution of Whiz.it combining cultural exploration quizzes with intelligent data processing. Features Python AI agents for data cleaning and profiling, language detection, dataset upload for AI analysis, personalized profiles, and real-time analytics on a serverless Vercel architecture.",
    "tags": [
      "Vue 3",
      "Node.js",
      "Python Agents",
      "Vercel"
    ],
    "featured": false,
    "cat": "edu",
    "catLabel": "Education"
  },
  {
    "title": "MindFluence",
    "sub": "mindfluence.netlify.app",
    "href": "https://mindfluence.netlify.app",
    "desc": "A mind-path navigator app for guided mental exploration and structured decision-making flows. Helps users navigate thought patterns for clarity and self-reflection through interactive guided paths.",
    "tags": [
      "React",
      "Netlify"
    ],
    "featured": false,
    "cat": "platform",
    "catLabel": "Platform",
    "github": "https://github.com/1mystic/mindfluence"
  },
  {
    "title": "Origami Simulator",
    "sub": "GitHub project",
    "href": null,
    "github": "https://github.com/1mystic/origami-simulator",
    "desc": "Interactive 3D origami simulator with physics-based aerodynamics. Import OBJ/GLTF models, fold step-by-step, and simulate realistic wind, gravity, and air density on folded models. Includes a crease pattern editor, pre-loaded model library, and live simulation stats.",
    "tags": [
      "Three.js",
      "React 18",
      "Tailwind",
      "Physics",
      "Vite"
    ],
    "featured": false,
    "cat": "web",
    "catLabel": "Web App"
  },
  {
    "title": "Kanha Student House",
    "sub": "kanha-min.netlify.app",
    "href": "https://kanha-min.netlify.app",
    "desc": "Clean marketing website for Kanha Student House PG accommodation. Designed to showcase the property, amenities, and contact information for prospective student residents : a polished minimal landing page.",
    "tags": [
      "React",
      "Netlify",
      "Landing Page"
    ],
    "featured": false,
    "cat": "web",
    "catLabel": "Web App",
    "github": "https://github.com/1mystic/kanha-student-house"
  },
  {
    "title": "Portfolio : atharvk.me",
    "sub": "atharvk.me · 3 versions",
    "href": "https://www.atharvk.me",
    "desc": "Personal portfolio as Atharv Khare, IIT Madras BS Data Science (CGPA 9.01). Showcases projects, research, certifications, hackathon wins, a blog, and an origami gallery. Available in three versions across different stacks and domains.",
    "tags": [
      "React",
      "Next.js",
      "GitHub Pages",
      "Vercel"
    ],
    "featured": false,
    "cat": "web",
    "catLabel": "Web App",
    "github": "https://github.com/1mystic/portfolio"
  },
  {
    "title": "Interactive ML Algorithms",
    "sub": "1mystic.github.io/ML-Algos",
    "href": "https://1mystic.github.io/ML-Algos/",
    "desc": "Interactive web suite implementing classical Machine Learning algorithms in vanilla JavaScript with real-time visual step-by-step parameter tuning and mathematical explanations.",
    "tags": [
      "ML",
      "JavaScript",
      "Interactive",
      "Algorithms"
    ],
    "featured": false,
    "cat": "edu",
    "catLabel": "Education",
    "github": "https://github.com/1mystic/ML-Algos"
  },
  {
    "title": "Full-Stack AI Engineer Guide",
    "sub": "daily-guide.pages.dev",
    "href": "https://daily-guide.pages.dev/",
    "desc": "Step-by-step daily roadmap, skill matrix, and practical project guide designed for fresher Full-Stack AI Engineers mastering LLMs, RAG, agent orchestration, and production serving.",
    "tags": [
      "AI Engineering",
      "Roadmap",
      "Full-Stack AI",
      "Guide"
    ],
    "featured": false,
    "cat": "edu",
    "catLabel": "Education",
    "github": "https://github.com/1mystic/ai-engineer-guide"
  },
  {
    "title": "PsychoLectures Hub",
    "sub": "1mystic.github.io/Psycho-lectures",
    "href": "https://1mystic.github.io/Psycho-lectures/",
    "desc": "Curated resource repository and lecture notes spanning psychology, cognitive dynamics, and behavioral science specialization for tech builders.",
    "tags": [
      "Cognitive Science",
      "Psychology",
      "Resource Hub"
    ],
    "featured": false,
    "cat": "edu",
    "catLabel": "Education",
    "github": "https://github.com/1mystic/Psycho-lectures"
  },
  {
    "title": "Daily Data Science Feed",
    "sub": "feed-daily.pages.dev",
    "href": "https://feed-daily.pages.dev/",
    "desc": "Automated daily feed aggregating top research papers, data science updates, ML breakthroughs, and industry insights for practitioners.",
    "tags": [
      "Data Science",
      "Daily Feed",
      "Curated"
    ],
    "featured": false,
    "cat": "edu",
    "catLabel": "Education",
    "github": "https://github.com/1mystic/daily-ds-feed"
  },
  {
    "title": "IITM BS Data Science Syllabus",
    "sub": "iitmbs-syllabus.pages.dev",
    "href": "https://iitmbs-syllabus.pages.dev/",
    "desc": "Interactive course directory, subject breakdown, and term roadmap for the IIT Madras Bachelor of Science in Data Science & Applications program.",
    "tags": [
      "IIT Madras",
      "Syllabus",
      "Education"
    ],
    "featured": false,
    "cat": "edu",
    "catLabel": "Education",
    "github": "https://github.com/1mystic/iitmbs-syllabus"
  },
  {
    "title": "Tools in Data Science (TDS) Summary",
    "sub": "tds-summary.pages.dev",
    "href": "https://tds-summary.pages.dev/",
    "desc": "Print-ready summary notes covering essential data science tools, Unix shell CLI commands, Git version control, and data pipeline fundamentals.",
    "tags": [
      "Data Science Tools",
      "Cheatsheet",
      "Print-Ready"
    ],
    "featured": false,
    "cat": "edu",
    "catLabel": "Education",
    "github": "https://github.com/1mystic/tds-summary"
  },
  {
    "title": "Machine Learning Practice (MLP) Notes",
    "sub": "mlp-summary.pages.dev",
    "href": "https://mlp-summary.pages.dev/#syllabus",
    "desc": "Print-ready reference notes covering scikit-learn models, hyperparameter tuning, cross-validation, feature preprocessing, and evaluation metrics.",
    "tags": [
      "Machine Learning",
      "scikit-learn",
      "Notes",
      "Print-Ready"
    ],
    "featured": false,
    "cat": "edu",
    "catLabel": "Education",
    "github": "https://github.com/1mystic/mlp-notes"
  },
  {
    "title": "Applied AI Engineering Challenges",
    "sub": "ai-challenges-by-1mystic.edgeone.app",
    "href": "https://ai-challenges-by-1mystic.edgeone.app/",
    "desc": "Interactive collection of practical, hands-on coding challenges for mastering modern AI engineering, prompt design, vector search, and agentic workflows.",
    "tags": [
      "AI Engineering",
      "Challenges",
      "Hands-On"
    ],
    "featured": false,
    "cat": "edu",
    "catLabel": "Education",
    "github": "https://github.com/1mystic/ai-challenges"
  },
  {
    "title": "Data Science Compendium",
    "sub": "data-science-compendium.vercel.app",
    "href": "https://data-science-compendium.vercel.app/",
    "desc": "Data science interview mini notes, quick revision summaries, core statistical concepts, and machine learning fundamentals.",
    "tags": [
      "Data Science",
      "Interview",
      "Cheatsheet",
      "Notes"
    ],
    "featured": false,
    "cat": "edu",
    "catLabel": "Education",
    "github": "https://github.com/1mystic/data-science-compendium"
  }
];

  var _research  = [
  {
    "title": "MLP Project Statistical Analysis",
    "sub": "mlp-proj-t126.edgeone.app",
    "href": "https://mlp-proj-t126.edgeone.app/",
    "desc": "Statistical analysis and feature distribution study on Machine Learning Practice (MLP) project data, evaluating feature correlations, baseline model error bounds, and statistical metrics.",
    "tags": [
      "Statistical Analysis",
      "Python",
      "MLP",
      "EDA"
    ],
    "cat": "analysis",
    "catLabel": "Analysis"
  },
  {
    "title": "TerraHeal",
    "sub": "Post-Wildfire Vegetation Recovery",
    "href": "https://zenodo.org/records/19630252",
    "desc": "A remote sensing study analysing post-wildfire vegetation recovery using satellite imagery and spectral indices (NDVI, NBR). Identifies recovery trajectories, affected zone extents, and ecological resilience patterns across burn scar regions.",
    "tags": [
      "Remote Sensing",
      "NDVI",
      "Satellite Imagery",
      "Ecology"
    ],
    "cat": "paper",
    "catLabel": "Research Paper"
  },
  {
    "title": "TypeState",
    "sub": "Keystroke Dynamics Study",
    "href": "https://zenodo.org/records/19387975",
    "desc": "Investigation into keystroke dynamics as a behavioural biometric. Collects and analyses typing patterns : dwell time, flight time, and inter-key latency : to explore identity verification and cognitive state inference from typing behaviour.",
    "tags": [
      "Biometrics",
      "Python",
      "Data Collection",
      "Signal Processing"
    ],
    "cat": "paper",
    "catLabel": "Research Paper"
  },
  {
    "title": "GitSyntropy",
    "sub": "Astrology-Inspired Dev Team Matching",
    "href": "https://zenodo.org/records/20001501",
    "desc": "A research paper exploring a novel multi-agent algorithm inspired by Vedic astrology principles to optimize development team composition and hiring compatibility using behavioral metadata.",
    "tags": [
      "Algorithms",
      "Multi-Agent",
      "Vedic Astrology",
      "Team Optimization"
    ],
    "cat": "paper",
    "catLabel": "Research Paper"
  },
  {
    "title": "Bhopal Food Delivery : Geospatial Study",
    "sub": "bhopal-food-delivery.vercel.app",
    "href": "https://bhopal-food-delivery.vercel.app",
    "desc": "Comprehensive data-driven study of 5,000 Zomato and Swiggy orders across 20 Bhopal localities. Maps delivery hotspots, platform market share, cuisine preferences, and temporal demand patterns for the city's food delivery ecosystem.",
    "tags": [
      "GeoPandas",
      "Pandas",
      "Matplotlib",
      "Spatial Analysis"
    ],
    "cat": "analysis",
    "catLabel": "Analysis"
  },
  {
    "title": "Statistics II : Course Analysis",
    "sub": "IIT Madras BS Programme",
    "href": "https://sites.google.com/ds.study.iitm.ac.in/atharvkhare/courses/statistics-ii",
    "desc": "Detailed statistical analyses and problem sets completed as part of the IIT Madras BS Data Science programme's Statistics II course : covering hypothesis testing, regression, ANOVA, and probability distributions.",
    "tags": [
      "Statistics",
      "Hypothesis Testing",
      "Regression",
      "ANOVA"
    ],
    "cat": "analysis",
    "catLabel": "Analysis"
  },
  {
    "title": "QSR Demand Forecasting & Affinity Analysis",
    "sub": "Business Data Analysis",
    "href": null,
    "cat": "analysis",
    "catLabel": "Analysis",
    "desc": "Business analytics study focused on quick-service restaurant demand forecasting and product affinity mining. Applies time-series modelling, market basket analysis, and segmentation to derive actionable insights for operational planning.",
    "tags": [
      "Forecasting",
      "Market Basket",
      "Time Series",
      "Segmentation"
    ]
  }
];

  var _eduRes    = [
  {
    "title": "Interactive ML Algorithms",
    "sub": "1mystic.github.io/ML-Algos",
    "href": "https://1mystic.github.io/ML-Algos/",
    "cat": "edu",
    "catLabel": "Education",
    "desc": "Interactive web suite implementing classical Machine Learning algorithms in vanilla JavaScript with real-time visual step-by-step parameter tuning and mathematical explanations.",
    "tags": [
      "ML",
      "JavaScript",
      "Interactive",
      "Algorithms"
    ],
    "github": "https://github.com/1mystic/ML-Algos"
  },
  {
    "title": "Full-Stack AI Engineer Guide",
    "sub": "daily-guide.pages.dev",
    "href": "https://daily-guide.pages.dev/",
    "cat": "edu",
    "catLabel": "Education",
    "desc": "Step-by-step daily roadmap, skill matrix, and practical project guide designed for fresher Full-Stack AI Engineers mastering LLMs, RAG, agent orchestration, and production serving.",
    "tags": [
      "AI Engineering",
      "Roadmap",
      "Full-Stack AI",
      "Guide"
    ],
    "github": "https://github.com/1mystic/ai-engineer-guide"
  },
  {
    "title": "PsychoLectures Hub",
    "sub": "1mystic.github.io/Psycho-lectures",
    "href": "https://1mystic.github.io/Psycho-lectures/",
    "cat": "edu",
    "catLabel": "Education",
    "desc": "Curated resource repository and lecture notes spanning psychology, cognitive dynamics, and behavioral science specialization for tech builders.",
    "tags": [
      "Cognitive Science",
      "Psychology",
      "Resource Hub"
    ],
    "github": "https://github.com/1mystic/Psycho-lectures"
  },
  {
    "title": "Daily Data Science Feed",
    "sub": "feed-daily.pages.dev",
    "href": "https://feed-daily.pages.dev/",
    "cat": "edu",
    "catLabel": "Education",
    "desc": "Automated daily feed aggregating top research papers, data science updates, ML breakthroughs, and industry insights for practitioners.",
    "tags": [
      "Data Science",
      "Daily Feed",
      "Curated"
    ],
    "github": "https://github.com/1mystic/daily-ds-feed"
  },
  {
    "title": "IITM BS Data Science Syllabus",
    "sub": "iitmbs-syllabus.pages.dev",
    "href": "https://iitmbs-syllabus.pages.dev/",
    "cat": "edu",
    "catLabel": "Education",
    "desc": "Interactive course directory, subject breakdown, and term roadmap for the IIT Madras Bachelor of Science in Data Science & Applications program.",
    "tags": [
      "IIT Madras",
      "Syllabus",
      "Education"
    ],
    "github": "https://github.com/1mystic/iitmbs-syllabus"
  },
  {
    "title": "Tools in Data Science (TDS) Summary",
    "sub": "tds-summary.pages.dev",
    "href": "https://tds-summary.pages.dev/",
    "cat": "edu",
    "catLabel": "Education",
    "desc": "Print-ready summary notes covering essential data science tools, Unix shell CLI commands, Git version control, and data pipeline fundamentals.",
    "tags": [
      "Data Science Tools",
      "Cheatsheet",
      "Print-Ready"
    ],
    "github": "https://github.com/1mystic/tds-summary"
  },
  {
    "title": "Machine Learning Practice (MLP) Notes",
    "sub": "mlp-summary.pages.dev",
    "href": "https://mlp-summary.pages.dev/#syllabus",
    "cat": "edu",
    "catLabel": "Education",
    "desc": "Print-ready reference notes covering scikit-learn models, hyperparameter tuning, cross-validation, feature preprocessing, and evaluation metrics.",
    "tags": [
      "Machine Learning",
      "scikit-learn",
      "Notes",
      "Print-Ready"
    ],
    "github": "https://github.com/1mystic/mlp-notes"
  },
  {
    "title": "Applied AI Engineering Challenges",
    "sub": "ai-challenges-by-1mystic.edgeone.app",
    "href": "https://ai-challenges-by-1mystic.edgeone.app/",
    "cat": "edu",
    "catLabel": "Education",
    "desc": "Interactive collection of practical, hands-on coding challenges for mastering modern AI engineering, prompt design, vector search, and agentic workflows.",
    "tags": [
      "AI Engineering",
      "Challenges",
      "Hands-On"
    ],
    "github": "https://github.com/1mystic/ai-challenges"
  },
  {
    "title": "Data Science Compendium",
    "sub": "data-science-compendium.vercel.app",
    "href": "https://data-science-compendium.vercel.app/",
    "cat": "edu",
    "catLabel": "Education",
    "desc": "Data science interview mini notes, quick revision summaries, core statistical concepts, and machine learning fundamentals.",
    "tags": [
      "Data Science",
      "Interview",
      "Cheatsheet",
      "Notes"
    ],
    "github": "https://github.com/1mystic/data-science-compendium"
  }
];

  var _blogs     = [
  {
    "title": "Should You Move Abroad? A First-Principles Take",
    "sub": "ESSAY · Aug 30, 2026",
    "href": "fresh/posts/move-abroad-first-principles.html",
    "cat": "blog",
    "catLabel": "Essay",
    "desc": "A grounded take on moving abroad, lifestyle trade-offs, and whether the decision should be driven by purpose rather than social noise.",
    "tags": [
      "Essay",
      "Philosophy"
    ],
    "date": "Aug 30, 2026",
    "readTime": "7 min read",
    "badge": "ESSAY"
  },
  {
    "title": "Bigger Is Not the Same as Better",
    "sub": "ANALYSIS · Jul 20, 2026",
    "href": "fresh/posts/bigger-not-better.html",
    "cat": "blog",
    "catLabel": "Essay",
    "desc": "What \"growth\" actually means, whether we even need it, and where India's demographic dividend is really heading before the window closes.",
    "tags": [
      "Essay",
      "Economics"
    ],
    "date": "Jul 20, 2026",
    "readTime": "16 min read",
    "badge": "ANALYSIS"
  },
  {
    "title": "From a 0.752 Kaggle Score to a Metacognition Engine: The Reflecta Story",
    "sub": "PROJECT · Jul 17, 2026",
    "href": "fresh/posts/reflecta.html",
    "cat": "tutorial",
    "catLabel": "Tutorial",
    "desc": "A stalled Kaggle MCQ competition, a ~25% wrong answer-key rate, and three knowledge-tracing models later: how Reflecta became a reflective learning intelligence layer.",
    "tags": [
      "Machine Learning",
      "Project"
    ],
    "date": "Jul 17, 2026",
    "readTime": "14 min read",
    "badge": "PROJECT"
  },
  {
    "title": "Reflection on This World",
    "sub": "ESSAY · Jun 25, 2026",
    "href": "fresh/posts/reflection-on-this-world.html",
    "cat": "blog",
    "catLabel": "Essay",
    "desc": "A deep philosophical analysis of modern societal hyper-convenience, capitalism, metric obsession, and the loss of collective wisdom.",
    "tags": [
      "Essay",
      "Philosophy"
    ],
    "date": "Jun 25, 2026",
    "readTime": "4 min read",
    "badge": "ESSAY"
  },
  {
    "title": "A Pilgrim of Passing Things",
    "sub": "POETRY · Jun 25, 2026",
    "href": "fresh/posts/pilgrim.html",
    "cat": "poem",
    "catLabel": "Poetry",
    "desc": "A prose poem exploring wandering, curiosity, transience, and the beauty hidden within ordinary moments.",
    "tags": [
      "Poetry",
      "Philosophy"
    ],
    "date": "Jun 25, 2026",
    "readTime": "2 min read",
    "badge": "POETRY"
  },
  {
    "title": "My Reflection on My Recent Life and Why I Got Into the IITM BS Degree",
    "sub": "ESSAY · Jun 15, 2026",
    "href": "fresh/posts/reflection-on-iitm-bs.html",
    "cat": "blog",
    "catLabel": "Essay",
    "desc": "A personal reflection on family, health, loss, and rediscovery, and the winding path that led me to take the IITM BS degree seriously.",
    "tags": [
      "Essay",
      "Personal"
    ],
    "date": "Jun 15, 2026",
    "readTime": "12 min read",
    "badge": "ESSAY"
  },
  {
    "title": "Anime as a Unique Content Medium: The Art of Climbing the Summit",
    "sub": "ART FORM · May 31, 2026",
    "href": "fresh/posts/anime-medium.html",
    "cat": "blog",
    "catLabel": "Essay",
    "desc": "An in-depth examination of why anime stands as a sophisticated narrative art form, built on decades of rich Japanese artistic tradition and raw storytelling honesty.",
    "tags": [
      "Art Form",
      "Opinion"
    ],
    "date": "May 31, 2026",
    "readTime": "8 min read",
    "badge": "ART FORM"
  },
  {
    "title": "The Apple Propaganda",
    "sub": "OPINION · Feb 11, 2026",
    "href": "fresh/posts/apple-propaganda.html",
    "cat": "blog",
    "catLabel": "Essay",
    "desc": "Peeling back the layers on both the fruit and the tech giant. Are they really what they seem?",
    "tags": [
      "Tech Analysis",
      "Opinion"
    ],
    "date": "Feb 11, 2026",
    "readTime": "6 min read",
    "badge": "OPINION"
  },
  {
    "title": "GitSyntropy: Astrology-Inspired Team Matching",
    "sub": "ALGORITHM · Jan 28, 2026",
    "href": "fresh/posts/gitsyntropy.html",
    "cat": "blog",
    "catLabel": "Essay",
    "desc": "A novel algorithm inspired by Vedic astrology to find perfect development\n                        teams using GitHub metrics and behavioral analysis.",
    "tags": [
      "Algorithms",
      "DevOps"
    ],
    "date": "Jan 28, 2026",
    "readTime": "6 min read",
    "badge": "ALGORITHM"
  },
  {
    "title": "Resonance",
    "sub": "POETRY · Feb 10, 2026",
    "href": "fresh/posts/resonance.html",
    "cat": "poem",
    "catLabel": "Poetry",
    "desc": "A reflection on perseverance, hope, and the journey of self-discovery\n                        through poetic verse.",
    "tags": [
      "Poetry",
      "Creative Writing"
    ],
    "date": "Feb 10, 2026",
    "readTime": "2 min read",
    "badge": "POETRY"
  },
  {
    "title": "Time",
    "sub": "POETRY · Feb 8, 2026",
    "href": "fresh/posts/time.html",
    "cat": "poem",
    "catLabel": "Poetry",
    "desc": "A meditation on time's fleeting nature and the importance of cherishing each\n                        precious moment.",
    "tags": [
      "Poetry",
      "Philosophy"
    ],
    "date": "Feb 8, 2026",
    "readTime": "2 min read",
    "badge": "POETRY"
  },
  {
    "title": "Women Empowerment?",
    "sub": "ESSAY · Feb 5, 2026",
    "href": "fresh/posts/women-empowerment.html",
    "cat": "blog",
    "catLabel": "Essay",
    "desc": "A philosophical essay on gender equality, societal conditioning, and the\n                        path to true liberation.",
    "tags": [
      "Social Commentary",
      "Philosophy"
    ],
    "date": "Feb 5, 2026",
    "readTime": "4 min read",
    "badge": "ESSAY"
  },
  {
    "title": "Understanding LSTM Networks",
    "sub": "BLOG PREVIEW · Jan 24, 2026",
    "href": "fresh/posts/blog-lstm.html",
    "cat": "blog",
    "catLabel": "Essay",
    "desc": "A deep dive into Long Short-Term Memory networks and how they help in\n                        sequence prediction tasks.",
    "tags": [
      "Data Science",
      "Python"
    ],
    "date": "Jan 24, 2026",
    "readTime": "5 min read",
    "badge": "BLOG PREVIEW"
  },
  {
    "title": "Pen — Simple Write-ups",
    "sub": "1mystic.github.io/pen",
    "href": "https:",
    "desc": "Minimalist digital garden collecting simple essays, technical notes, ideas, and reflections on computer science and philosophy.",
    "tags": [
      "Essays",
      "Writing",
      "Digital Garden"
    ],
    "badge": "EXTERNAL",
    "date": "Digital Garden"
  },
  {
    "title": "Understanding Attention Mechanisms",
    "sub": "Technical deep-dive",
    "href": "fresh/posts/attention-mechanisms.html",
    "cat": "tutorial",
    "catLabel": "Tutorial",
    "desc": "A detailed walkthrough of the self-attention mechanism in Transformers : from the mathematical formulation of scaled dot-product attention to multi-head attention, with annotated code and visualizations.",
    "tags": [
      "Transformers",
      "NLP",
      "Deep Learning",
      "PyTorch"
    ],
    "badge": "TUTORIAL",
    "date": "Technical Deep-Dive",
    "readTime": "5 min read"
  },
  {
    "title": "Building Pipelines with DominoML",
    "sub": "Project spotlight",
    "href": "fresh/posts/domino-ml-pipelines.html",
    "cat": "tutorial",
    "catLabel": "Tutorial",
    "desc": "A guide to constructing end-to-end machine learning pipelines using DominoML's node-based canvas : covering data ingestion, feature engineering, model selection, and evaluation within the visual interface.",
    "tags": [
      "ML Pipelines",
      "Flask",
      "DominoML",
      "Tutorial"
    ],
    "badge": "TUTORIAL",
    "date": "Project Spotlight",
    "readTime": "4 min read"
  },
  {
    "title": "Geospatial Analysis with GeoPandas",
    "sub": "Data science article",
    "href": "fresh/posts/geopandas-analysis.html",
    "cat": "blog",
    "catLabel": "Blog",
    "desc": "A practical introduction to geospatial data analysis using GeoPandas and Folium. Walks through coordinate systems, spatial joins, choropleth mapping, and real-world applications using the Bhopal food delivery dataset.",
    "tags": [
      "GeoPandas",
      "Folium",
      "Python",
      "Spatial Data"
    ],
    "badge": "BLOG",
    "date": "Data Science Article",
    "readTime": "4 min read"
  },
  {
    "title": "From Markdown to PDF : Building MarkTex",
    "sub": "Dev journal",
    "href": "fresh/posts/building-marktex.html",
    "cat": "blog",
    "catLabel": "Blog",
    "desc": "The engineering story behind MarkTex : how a frustration with existing editors led to building a full Markdown + LaTeX tool with annotation support, live preview, and PDF export from scratch in a browser environment.",
    "tags": [
      "Markdown",
      "LaTeX",
      "Wasmer",
      "Product"
    ],
    "badge": "BLOG",
    "date": "Dev Journal",
    "readTime": "4 min read"
  },
  {
    "title": "Keystroke Dynamics as a Biometric",
    "sub": "Research-to-blog",
    "href": "fresh/posts/keystroke-dynamics.html",
    "cat": "blog",
    "catLabel": "Blog",
    "desc": "A reader-friendly adaptation of the TypeState research project, exploring how the way you type : not what you type : can serve as a unique behavioural fingerprint for identity verification and cognitive monitoring.",
    "tags": [
      "Biometrics",
      "Security",
      "Research",
      "Python"
    ],
    "badge": "BLOG",
    "date": "Research-to-Blog",
    "readTime": "4 min read"
  },
  {
    "title": "GitSyntropy Algorithm",
    "sub": "Astrology-Inspired Team Matching",
    "href": "fresh/posts/gitsyntropy.html",
    "cat": "blog",
    "catLabel": "Blog",
    "desc": "A novel algorithm inspired by Vedic astrology to find perfect development teams using GitHub metrics like chronotype clustering and sentiment analysis.",
    "tags": [
      "Algorithms",
      "DevOps",
      "Innovation"
    ],
    "badge": "BLOG",
    "date": "Jan 28, 2026",
    "readTime": "6 min read"
  },
  {
    "title": "Wishes | Akshaj Khare",
    "sub": "Article",
    "href": "fresh/posts/wishes-and-becoming.html",
    "cat": "poem",
    "catLabel": "Poetry",
    "desc": "Read 'Wishes | Akshaj Khare' by Atharv Khare.",
    "tags": [
      "Writing",
      "Article"
    ],
    "badge": "POETRY",
    "date": "Article",
    "readTime": "1 min read"
  }
];

  var _certs     = [
  {
    "title": "Oracle Agentic AI Certified Foundations",
    "sub": "Oracle · 2026",
    "href": "https://catalog-education.oracle.com/ords/certview/sharebadge?id=899E45D97BCBF8B489F169421B50BC2819DC1ACB2ED7ECC2EB6853A39CBEBD59",
    "desc": "Oracle Certified Foundations Associate validating core concepts of Agentic AI architectures, autonomous agents, LLM tool orchestration, and multi-agent workflows.",
    "tags": [
      "Agentic AI",
      "Oracle",
      "LLMs",
      "AI Agents",
      "2026"
    ],
    "cat": "cert",
    "catLabel": "Certificate"
  },
  {
    "title": "BDM Best Capstone Award",
    "sub": "IIT Madras · 2026",
    "href": "https://drive.google.com/file/d/1ryrmy_IYZPWy2MsnWUpaVnvwxN2ACkKC/view?usp=sharing",
    "desc": "Best Capstone Project Certificate awarded for outstanding project implementation and data modeling in the Business Data Management course in the IIT Madras BS program.",
    "tags": [
      "SQL",
      "Databases",
      "Business Analytics",
      "IIT Madras"
    ],
    "cat": "cert",
    "catLabel": "Certificate"
  },
  {
    "title": "HackerRank SQL (Advanced)",
    "sub": "HackerRank · 2024",
    "href": "https://www.hackerrank.com/certificates/d366117ff2b9",
    "desc": "Certified proficiency in advanced SQL : covering complex joins, window functions, subqueries, aggregations, and query optimisation on real-world database schemas.",
    "tags": [
      "SQL",
      "Databases",
      "HackerRank"
    ],
    "cat": "cert",
    "catLabel": "Certificate"
  },
  {
    "title": "DataCamp Data Science Associate",
    "sub": "DataCamp · 2025",
    "href": "https://drive.google.com/file/d/1cJCsRdCffS1Z0RTXr0XELxlqySsg1P0s/view?usp=sharing",
    "desc": "Professional certification validating skills in Python, SQL, statistical analysis, data wrangling, and machine learning fundamentals across a proctored multi-stage assessment.",
    "tags": [
      "Python",
      "SQL",
      "PyTorch",
      "DataCamp",
      "2025"
    ],
    "cat": "cert",
    "catLabel": "Certificate"
  },
  {
    "title": "GCP Cloud Workshop",
    "sub": "Google Cloud",
    "href": "https://drive.google.com/file/d/1QvVS0EJSL60TOnbs5ZFTpgE1jcJlfh-X/view",
    "desc": "Workshop certification covering Google Cloud Platform core services : Compute Engine, Cloud Storage, BigQuery, and Vertex AI : with hands-on deployment and data pipeline exercises.",
    "tags": [
      "GCP",
      "Cloud",
      "BigQuery",
      "Vertex AI"
    ],
    "cat": "cert",
    "catLabel": "Certificate"
  },
  {
    "title": "Dynamic Programming Workshop",
    "sub": "IIT Madras",
    "href": "https://drive.google.com/file/d/1Ru0ShGa4jEx2j4BsGiIVRf2HTLWhJxtE/view",
    "desc": "Certification from a focused workshop on dynamic programming paradigms : covering memoisation, tabulation, state-space design, and classic DP problem patterns.",
    "tags": [
      "Algorithms",
      "DP",
      "Competitive Programming"
    ],
    "cat": "cert",
    "catLabel": "Certificate"
  },
  {
    "title": "Machine Learning Workshop",
    "sub": "IIT Madras",
    "href": "https://drive.google.com/file/d/1RWIVo5YHam_mqswe_A5NlX0VXH5TcLyX/view",
    "desc": "Workshop certificate covering supervised and unsupervised machine learning : linear models, decision trees, clustering, dimensionality reduction, and model evaluation with scikit-learn.",
    "tags": [
      "Machine Learning",
      "scikit-learn",
      "Python"
    ],
    "cat": "cert",
    "catLabel": "Certificate"
  },
  {
    "title": "Python Programming",
    "sub": "IIT Madras",
    "href": "https://drive.google.com/file/d/192zatB1EimlnHuJyFu7wcGbvb4QMrDSa/view",
    "desc": "Foundational Python programming certificate covering data types, control flow, functions, object-oriented programming, file I/O, and standard libraries.",
    "tags": [
      "Python",
      "OOP",
      "Programming"
    ],
    "cat": "cert",
    "catLabel": "Certificate"
  },
  {
    "title": "NPTEL Distributed Systems & Cloud Computing",
    "sub": "NPTEL · Elite Tier · 2026",
    "href": "https://drive.google.com/file/d/1XQ370Ym7WbiMCelf7I7i5pAM6aYwFaBH/view?usp=sharing",
    "desc": "Elite tier certification in Distributed Systems and Cloud Computing from NPTEL : covering architecture, virtualisation, resource management, and scalable system design.",
    "tags": [
      "Distributed Systems",
      "Cloud Computing",
      "Elite Tier",
      "NPTEL"
    ],
    "cat": "cert",
    "catLabel": "Certificate"
  },
  {
    "title": "Machine Learning using Python",
    "sub": "Simplilearn · 2026",
    "href": "https://drive.google.com/file/d/1b0oOTDg5SqRQtlzQmwwOD17CNUqd3leJ/view?usp=sharing",
    "desc": "Comprehensive training in machine learning concepts using Python, covering data preprocessing, regression, classification, clustering, and model deployment.",
    "tags": [
      "Machine Learning",
      "Python",
      "Simplilearn"
    ],
    "cat": "cert",
    "catLabel": "Certificate"
  },
  {
    "title": "Cloud Computing Foundations",
    "sub": "Simplilearn · 2026",
    "href": "https://drive.google.com/file/d/1eFqV5gONP0AfkhjaOjMjau1mdr9YyKr9/view?usp=sharing",
    "desc": "Foundational training in cloud computing models, service architectures, virtualization, and deployment strategies across major cloud platforms.",
    "tags": [
      "Cloud Computing",
      "Infrastructure",
      "Simplilearn"
    ],
    "cat": "cert",
    "catLabel": "Certificate"
  }
];

  var _education = [
  {
    "title": "B.S. Data Science & Applications",
    "sub": "IIT Madras · 2023 – 2027",
    "href": "https://study.iitm.ac.in",
    "desc": "Bachelor of Science in Data Science & Applications from IIT Madras : one of India's premier technical institutes. Curriculum spans mathematics, statistics, machine learning, databases, programming, and AI. Currently maintaining a CGPA of 9.15.",
    "tags": [
      "IIT Madras",
      "CGPA 9.15",
      "Data Science",
      "AI/ML",
      "Python",
      "SQL"
    ],
    "cat": "degree",
    "catLabel": "Degree"
  },
  {
    "title": "Diploma in Programming",
    "sub": "IIT Madras · Completed 2025",
    "href": "https://study.iitm.ac.in",
    "desc": "Diploma-level qualification in programming from IIT Madras, completed with a 9.44 CGPA. Covered systems thinking, data structures, algorithms, web technologies, and application development.",
    "tags": [
      "IIT Madras",
      "CGPA 9.44",
      "Diploma",
      "Algorithms",
      "Web Dev"
    ],
    "cat": "diploma",
    "catLabel": "Diploma"
  }
];

  var _achieves  = [
  {
    "title": "IIT Madras Merit Prize Certificate",
    "sub": "IIT Madras · Academic Excellence",
    "href": "https://drive.google.com/file/d/1cWg8Dqw0Xwb-ovccBXeFuhXJYKQ5eSSP/view?usp=sharing",
    "desc": "Awarded Merit Prize Certificate by IIT Madras in recognition of academic excellence and top performance in the BS Data Science & Applications program.",
    "tags": [
      "Merit Award",
      "IIT Madras",
      "Academic Excellence"
    ],
    "cat": "award",
    "catLabel": "Award"
  },
  {
    "title": "Kaggle Comment Category Prediction : Top 0.8%",
    "sub": "Rank 21 / 2,744 · 2026",
    "href": "https://github.com/1mystic/kaggle-comment-classification",
    "desc": "Achieved Rank 21 out of 2,744 participants (Top 0.8%) in toxic comment sentiment classification using stacked ensembles (TF-IDF, LightGBM, NB-SVM, Logistic Regression) and custom feature engineering.",
    "tags": [
      "Kaggle",
      "Top 0.8%",
      "Ensemble ML",
      "NLP",
      "Rank 21"
    ],
    "cat": "competition",
    "catLabel": "Competition Rank"
  },
  {
    "title": "BDM Best Capstone Project Award",
    "sub": "IIT Madras · 2026",
    "href": "https://drive.google.com/file/d/1ryrmy_IYZPWy2MsnWUpaVnvwxN2ACkKC/view?usp=sharing",
    "desc": "Received the Business Data Management (BDM) Best Capstone Project Award at IIT Madras BS for outstanding project execution and predictive analytics modeling.",
    "tags": [
      "Award",
      "IIT Madras",
      "Best Capstone"
    ],
    "cat": "award",
    "catLabel": "Award"
  },
  {
    "title": "Anthropic Claude Builder Club : 2nd Runner Up",
    "sub": "Spring 2026 Hackathon · April 2026",
    "href": null,
    "cat": "hackathon",
    "catLabel": "Hackathon Win",
    "desc": "Secured 2nd runner-up position in Anthropic's Claude Builder Club Hackathon (Spring 2026), receiving a $300 prize for innovative application of LLM technology.",
    "tags": [
      "Anthropic",
      "Claude",
      "Hackathon",
      "Prize Winner"
    ]
  },
  {
    "title": "Hack4Health Hackathon : 3rd Position",
    "sub": "Health-Tech · June 2025",
    "href": null,
    "cat": "hackathon",
    "catLabel": "Hackathon Win",
    "desc": "Won 3rd position at the Hack4Health hackathon for developing technology-driven health solutions in a competitive environment.",
    "tags": [
      "Health-Tech",
      "Hackathon",
      "Third Place"
    ]
  },
  {
    "title": "Inter-house Tech Dominion : 2nd Place",
    "sub": "IIT Madras · January 2026",
    "href": null,
    "cat": "hackathon",
    "catLabel": "Hackathon Win",
    "desc": "Achieved 2nd place at the Tech Dominion hackathon at IIT Madras : January 2026 edition. Recognized for rapid prototyping and system design excellence.",
    "tags": [
      "Hackathon",
      "IIT Madras",
      "Second Place"
    ]
  },
  {
    "title": "Silver Medal : Anukriti, Paradox IITM",
    "sub": "IIT Madras · 2025",
    "href": null,
    "cat": "medal",
    "catLabel": "Medal",
    "desc": "Silver medal at Anukriti : part of Paradox, IIT Madras's annual technical and cultural fest. Recognised for outstanding performance in the technical arts competition category.",
    "tags": [
      "Silver Medal",
      "Paradox IITM",
      "2025"
    ]
  },
  {
    "title": "MR Focused Title : SPSN",
    "sub": "School recognition",
    "href": null,
    "cat": "title",
    "catLabel": "Title",
    "desc": "Awarded the 'Mr Focused' title at SPSN : a recognition of consistent dedication, academic discipline, and focused pursuit of excellence over the course of the school programme.",
    "tags": [
      "Award",
      "Title",
      "School"
    ]
  }
];

  var _origami   = [
  {
    "name": "pegasus.fold",
    "title": "Pegasus",
    "image": "assets/origami/1pegasus.webp",
    "featured": true
  },
  {
    "name": "darkness-dragon",
    "title": "Darkness Dragon",
    "image": "assets/origami/Darkness Dragon main 2.webp",
    "featured": true
  },
  {
    "name": "sun-wukong",
    "title": "Sun Wukong",
    "image": "assets/origami/SUn wukong 1.webp",
    "featured": true
  },
  {
    "name": "yoda",
    "title": "Master Yoda",
    "image": "assets/origami/Yoda cleaned.webp",
    "featured": true
  },
  {
    "name": "beetle-h",
    "title": "Hercules Beetle",
    "image": "assets/origami/1Beetle-H.webp",
    "featured": true
  },
  {
    "name": "wyvern.v2",
    "title": "Wyvern V2",
    "image": "assets/origami/wyv2.webp",
    "featured": true
  }
];

  var _stream    = [
  {
    "title": "Sentio",
    "sub": "sentio-go.vercel.app",
    "href": "https://sentio-go.vercel.app/",
    "catLabel": "Project",
    "desc": "AI-driven cognitive wellness platform leveraging NLP and Deep Learning for real-time journaling bias analysis. Engineered a RAG-enhanced Socratic assistant, therapist scrapers, Coherence caching for sub-100ms latency, and Supabase OAuth.",
    "type": "project",
    "tags": [
      "Vue 3",
      "FastAPI",
      "NLP/DL",
      "Supabase",
      "Web Scraping"
    ],
    "github": "https://github.com/1mystic/Sentio"
  },
  {
    "title": "Reflecta",
    "sub": "reflecta-j1wz.onrender.com",
    "href": "https://reflecta-j1wz.onrender.com/",
    "catLabel": "Project",
    "desc": "AI-powered learning intelligence platform combining Item Response Theory (IRT), Bayesian Knowledge Tracing (BKT), SAKT, and behavioral analytics over 525k interaction logs to estimate learner mastery and goal readiness.",
    "type": "project",
    "tags": [
      "PyTorch",
      "FastAPI",
      "MLflow",
      "IRT",
      "BKT",
      "SAKT",
      "Claude"
    ],
    "github": "https://github.com/1mystic/reflecta"
  },
  {
    "title": "Plume",
    "sub": "1mystic.github.io/plumefile",
    "href": "https://1mystic.github.io/plumefile/",
    "catLabel": "Project",
    "desc": "Python CLI tool performing offline pre-flight security analysis (secret/PII detection, file profiling, sentiment analysis) before generating self-destructing LAN or Cloudflare sharing links with QR codes.",
    "type": "project",
    "tags": [
      "Python",
      "FastAPI",
      "Typer",
      "Rich",
      "Pandas",
      "PyPI"
    ],
    "github": "https://github.com/1mystic/plumefile"
  },
  {
    "title": "GitSyntropy",
    "sub": "git-syntropy.vercel.app",
    "href": "https://zenodo.org/records/20001501",
    "catLabel": "Project",
    "desc": "Multi-agent system that scores team compatibility and simulates hiring impact using GitHub behavioral data and psychometric profiling across 8 behavioral dimensions.",
    "type": "project",
    "tags": [
      "Python",
      "FastAPI",
      "LangGraph",
      "Claude",
      "Astro",
      "TypeScript"
    ],
    "github": "https://github.com/1mystic/git-syntropy"
  },
  {
    "title": "Comment Sentiment Classification",
    "sub": "Kaggle Rank 21/2,744 (Top 0.8%)",
    "href": null,
    "github": "https://github.com/1mystic/kaggle-comment-classification",
    "catLabel": "Project",
    "desc": "Stacked ensemble combining TF-IDF (word/char n-grams), LightGBM, Logistic Regression, NB-SVM, and engineered linguistic features to classify obfuscated toxic comments, achieving 0.83499 Macro-F1 without deep learning.",
    "type": "project",
    "tags": [
      "Python",
      "TF-IDF",
      "LightGBM",
      "Logistic Regression",
      "NB-SVM",
      "Kaggle"
    ]
  },
  {
    "title": "EcoView",
    "sub": "eco-view.vercel.app",
    "href": "https://eco-view.vercel.app/",
    "catLabel": "Project",
    "desc": "Serverless civic tech platform for real-time pollution reporting, AI classification, and NGO coordination. Distilled Gemini VLM into an edge-ready ONNX model (~6MB) for mobile deployment.",
    "type": "project",
    "tags": [
      "React",
      "Firebase",
      "FastAPI",
      "Gemini AI",
      "ONNX"
    ],
    "github": "https://github.com/1mystic/ecoview"
  },
  {
    "title": "Mitra",
    "sub": "mitra-theta.vercel.app",
    "href": "https://mitra-theta.vercel.app",
    "catLabel": "Project",
    "desc": "Multi-agent career platform that personalizes internship discovery, resume analysis, interview prep, and skill roadmaps using LangGraph, semantic memory, vector retrieval, and adaptive user profiling.",
    "type": "project",
    "tags": [
      "LangGraph",
      "RAG",
      "LLM Agents",
      "Vector Memory",
      "Full-Stack AI"
    ],
    "github": "https://github.com/1mystic/mitra"
  },
  {
    "title": "Flipkart Gridlock",
    "sub": "flipkart-gridlock.vercel.app",
    "href": "https://flipkart-gridlock.vercel.app/",
    "catLabel": "Project",
    "desc": "Spatio-temporal traffic demand forecasting system (score 92.39%) in Flipkart GRiD. CatBoost & LightGBM ensemble pipeline integrated with interactive Leaflet cyberpunk operations dashboard.",
    "type": "project",
    "tags": [
      "React",
      "Vite",
      "CatBoost",
      "LightGBM",
      "Leaflet.js"
    ],
    "github": "https://github.com/1mystic/flipkart-gridlock"
  },
  {
    "title": "BayesInspector",
    "sub": "bayes-inspector.pages.dev",
    "href": "https://bayes-inspector.pages.dev/",
    "catLabel": "Project",
    "desc": "Client-side probabilistic text classifier exposing the full Naive Bayes reasoning chain word-by-word as you type. Uses a custom TypeScript inference engine with pre-baked model weights.",
    "type": "project",
    "tags": [
      "React",
      "TypeScript",
      "Vite",
      "Naive Bayes"
    ],
    "github": "https://github.com/1mystic/bayes-inspector"
  },
  {
    "title": "Axiom Canvas",
    "sub": "axiom-canvas.onrender.com",
    "href": "https://axiom-canvas.onrender.com",
    "catLabel": "Project",
    "desc": "Math visualization engine powered by Desmos API and OpenRouter AI with RAG for interactive concept exploration.",
    "type": "project",
    "tags": [
      "Desmos API",
      "OpenRouter",
      "RAG",
      "JavaScript"
    ],
    "github": "https://github.com/1mystic/axiom-canvas"
  },
  {
    "title": "Episteme",
    "sub": "episteme-chat.vercel.app",
    "href": "https://episteme-chat.vercel.app",
    "catLabel": "Project",
    "desc": "Socratic Study Engine AI that refuses to answer your questions, and instead helps you answer them yourself via Bayesian Knowledge Tracing and Metacognitive agents.",
    "type": "project",
    "tags": [
      "Next.js 15",
      "Claude 3.5",
      "Supabase",
      "BKT"
    ],
    "github": "https://github.com/1mystic/episteme-chat"
  },
  {
    "title": "DominoML",
    "sub": "domino-ml.onrender.com",
    "href": "https://domino-ml.onrender.com",
    "catLabel": "Project",
    "desc": "Visual drag-and-drop ML pipeline builder built with Flask and SQLite. Compose, connect, and run machine learning steps via a node-based canvas.",
    "type": "project",
    "tags": [
      "Flask",
      "SQLite",
      "Drag & Drop",
      "MathJax"
    ],
    "github": "https://github.com/1mystic/domino-ml"
  },
  {
    "title": "SOHOS ED",
    "sub": "School Optimization Platform",
    "href": null,
    "github": "https://github.com/1mystic/Sohos-ED",
    "catLabel": "Project",
    "desc": "Data-driven educational SaaS for budget private schools automating NEP 2020 compliance via Japanese Tokkatsu methodologies and linear programming.",
    "type": "project",
    "tags": [
      "JavaScript",
      "Linear Programming",
      "NEP 2020",
      "PDF Gen"
    ]
  },
  {
    "title": "DineOps",
    "sub": "Restaurant Intelligence System",
    "href": null,
    "github": "https://github.com/1mystic/dineops",
    "catLabel": "Project",
    "desc": "6-layer restaurant intelligence system combining demand forecasting (SARIMA/LSTM ensemble), LP staffing optimization, and LLM-driven executive reporting.",
    "type": "project",
    "tags": [
      "FastAPI",
      "PostgreSQL",
      "SARIMA",
      "LSTM",
      "Optimization"
    ]
  },
  {
    "title": "MLP Project Statistical Analysis",
    "sub": "mlp-proj-t126.edgeone.app",
    "href": "https://mlp-proj-t126.edgeone.app/",
    "catLabel": "Research",
    "desc": "Statistical analysis and feature distribution study on Machine Learning Practice dataset evaluating feature correlations, baseline error bounds, and statistical metrics.",
    "type": "research",
    "tags": [
      "Statistical Analysis",
      "Python",
      "MLP",
      "EDA"
    ]
  },
  {
    "title": "TerraHeal",
    "sub": "Post-Wildfire Vegetation Recovery",
    "href": "https://zenodo.org/records/19630252",
    "catLabel": "Research Paper",
    "desc": "Remote sensing study analysing post-wildfire vegetation recovery using satellite imagery and spectral indices (NDVI, NBR) published on Zenodo.",
    "type": "research",
    "tags": [
      "Remote Sensing",
      "NDVI",
      "Satellite Imagery",
      "Ecology"
    ]
  },
  {
    "title": "TypeState",
    "sub": "Keystroke Dynamics Biometrics",
    "href": "https://zenodo.org/records/19387975",
    "catLabel": "Research Paper",
    "desc": "Investigation into keystroke dynamics as a behavioral biometric. Analyzes dwell time, flight time, and latency for authentication and cognitive inference.",
    "type": "research",
    "tags": [
      "Biometrics",
      "Python",
      "Signal Processing",
      "Security"
    ]
  },
  {
    "title": "GitSyntropy",
    "sub": "Vedic Astrology Team Matching",
    "href": "https://zenodo.org/records/20001501",
    "catLabel": "Research Paper",
    "desc": "Research paper exploring novel multi-agent algorithm inspired by Vedic astrology principles to optimize development team hiring compatibility.",
    "type": "research",
    "tags": [
      "Algorithms",
      "Multi-Agent",
      "Vedic Astrology",
      "Optimization"
    ],
    "github": "https://github.com/1mystic/git-syntropy"
  },
  {
    "title": "Bhopal Food Delivery Geospatial Study",
    "sub": "bhopal-food-delivery.vercel.app",
    "href": "https://bhopal-food-delivery.vercel.app",
    "catLabel": "Geospatial Study",
    "desc": "Data-driven study of 5,000 delivery orders across 20 Bhopal localities mapping demand hotspots, platform share, and spatial cuisine trends.",
    "type": "research",
    "tags": [
      "GeoPandas",
      "Pandas",
      "Matplotlib",
      "Spatial Analysis"
    ]
  },
  {
    "title": "Statistics II Coursework Analysis",
    "sub": "IIT Madras BS Programme",
    "href": "https://sites.google.com/ds.study.iitm.ac.in/atharvkhare/courses/statistics-ii",
    "catLabel": "Analysis",
    "desc": "Detailed statistical analyses and problem sets covering hypothesis testing, regression modeling, ANOVA, and probability distributions at IIT Madras.",
    "type": "research",
    "tags": [
      "Statistics",
      "Hypothesis Testing",
      "ANOVA",
      "Regression"
    ]
  },
  {
    "title": "Pen — Simple Write-ups",
    "sub": "1mystic.github.io/pen",
    "href": "https://1mystic.github.io/pen/",
    "catLabel": "Essay",
    "desc": "Minimalist digital garden collecting simple essays, technical notes, ideas, and reflections on computer science and philosophy.",
    "type": "article",
    "tags": [
      "Essays",
      "Writing",
      "Digital Garden"
    ]
  },
  {
    "title": "Reflection on This World",
    "sub": "Philosophical Essay",
    "href": "fresh/posts/reflection-on-this-world.html",
    "catLabel": "Essay",
    "desc": "Deep philosophical analysis of modern societal hyper-convenience, capitalism, metric obsession, and loss of collective wisdom.",
    "type": "article",
    "tags": [
      "Social Commentary",
      "Philosophy"
    ]
  },
  {
    "title": "Understanding Attention Mechanisms",
    "sub": "Technical Walkthrough",
    "href": "fresh/posts/attention-mechanisms.html",
    "catLabel": "Tutorial",
    "desc": "Detailed walkthrough of self-attention in Transformers — from mathematical formulation of scaled dot-product attention to multi-head PyTorch implementation.",
    "type": "article",
    "tags": [
      "Transformers",
      "NLP",
      "PyTorch",
      "Deep Learning"
    ]
  },
  {
    "title": "Building Pipelines with DominoML",
    "sub": "Project Spotlight",
    "href": "fresh/posts/domino-ml-pipelines.html",
    "catLabel": "Tutorial",
    "desc": "Guide to constructing end-to-end machine learning pipelines using DominoML's node-based visual interface.",
    "type": "article",
    "tags": [
      "ML Pipelines",
      "Flask",
      "DominoML",
      "Tutorial"
    ]
  },
  {
    "title": "Geospatial Analysis with GeoPandas",
    "sub": "Data Science Article",
    "href": "fresh/posts/geopandas-analysis.html",
    "catLabel": "Article",
    "desc": "Practical introduction to geospatial data analysis using GeoPandas, spatial joins, and choropleth maps with real-world delivery data.",
    "type": "article",
    "tags": [
      "GeoPandas",
      "Folium",
      "Python",
      "Spatial Data"
    ]
  },
  {
    "title": "From Markdown to PDF: Building MarkTex",
    "sub": "Dev Journal",
    "href": "fresh/posts/building-marktex.html",
    "catLabel": "Article",
    "desc": "Engineering story behind building MarkTex — full Markdown + LaTeX editor with annotation support and in-browser PDF generation.",
    "type": "article",
    "tags": [
      "Markdown",
      "LaTeX",
      "Wasmer",
      "Product"
    ]
  },
  {
    "title": "Keystroke Dynamics as a Biometric",
    "sub": "Research Adaptation",
    "href": "fresh/posts/keystroke-dynamics.html",
    "catLabel": "Article",
    "desc": "Reader-friendly adaptation of TypeState research exploring typing patterns as behavioral fingerprints for security.",
    "type": "article",
    "tags": [
      "Biometrics",
      "Security",
      "Research"
    ]
  },
  {
    "title": "GitSyntropy Algorithm Article",
    "sub": "Team Matching Story",
    "href": "fresh/posts/gitsyntropy.html",
    "catLabel": "Article",
    "desc": "Deep dive into Vedic astrology inspired team matching using GitHub chronotype metrics.",
    "type": "article",
    "tags": [
      "Algorithms",
      "DevOps",
      "Innovation"
    ]
  },
  {
    "title": "IIT Madras Merit Prize Certificate",
    "sub": "IIT Madras · Academic Excellence",
    "href": "https:",
    "catLabel": "Merit Award",
    "desc": "Awarded Merit Prize Certificate by IIT Madras for academic excellence and top performance in BS Data Science & Applications.",
    "type": "award",
    "tags": [
      "Merit Award",
      "IIT Madras",
      "Academic Excellence"
    ]
  },
  {
    "title": "Kaggle Comment Category Prediction — Top 0.8%",
    "sub": "Rank 21 / 2,744",
    "href": "https:",
    "catLabel": "Rank 21",
    "desc": "Achieved Rank 21/2,744 (Top 0.8%) in toxic comment sentiment classification using stacked ensembles without deep learning.",
    "type": "award",
    "tags": [
      "Kaggle",
      "Top 0.8%",
      "Ensemble ML",
      "Rank 21"
    ]
  },
  {
    "title": "BDM Best Capstone Project Award",
    "sub": "IIT Madras · 2026",
    "href": "https://drive.google.com/file/d/1ryrmy_IYZPWy2MsnWUpaVnvwxN2ACkKC/view?usp=sharing",
    "catLabel": "Best Capstone",
    "desc": "Received Business Data Management Best Capstone Project Award at IIT Madras BS for predictive modeling and data engineering.",
    "type": "award",
    "tags": [
      "Award",
      "IIT Madras",
      "Best Capstone"
    ]
  },
  {
    "title": "Anthropic Claude Builder Club — 2nd Runner Up",
    "sub": "Spring 2026 Hackathon",
    "href": null,
    "catLabel": "Hackathon Win",
    "desc": "2nd runner-up in Anthropic Claude Builder Club Hackathon ($300 prize) for innovative LLM system integration.",
    "type": "award",
    "tags": [
      "Anthropic",
      "Claude",
      "Hackathon",
      "Prize Winner"
    ]
  },
  {
    "title": "Hack4Health Hackathon — 3rd Position",
    "sub": "Health-Tech · 2025",
    "href": null,
    "catLabel": "Hackathon Win",
    "desc": "3rd position in Hack4Health hackathon for clinical status tracking and healthcare predictive tools.",
    "type": "award",
    "tags": [
      "Health-Tech",
      "Hackathon",
      "Third Place"
    ]
  },
  {
    "title": "Inter-house Tech Dominion — 2nd Place",
    "sub": "IIT Madras · 2026",
    "href": null,
    "catLabel": "Hackathon Win",
    "desc": "2nd place in Tech Dominion hackathon at IIT Madras for rapid prototyping and system design.",
    "type": "award",
    "tags": [
      "Hackathon",
      "IIT Madras",
      "Second Place"
    ]
  },
  {
    "title": "Silver Medal: Anukriti, Paradox IITM",
    "sub": "IIT Madras · 2025",
    "href": null,
    "catLabel": "Medal",
    "desc": "Silver medal at Anukriti (Paradox IITM) for mathematical and digital visualization challenges.",
    "type": "award",
    "tags": [
      "Silver Medal",
      "Paradox IITM",
      "2025"
    ]
  },
  {
    "title": "Oracle Certified Associate — Agentic AI Foundations",
    "sub": "Oracle · 2026",
    "href": "https:",
    "catLabel": "Certificate",
    "desc": "Oracle Certified Foundations Associate validating core competencies in Agentic AI architectures, autonomous agents, LLM tool-calling orchestration, and multi-agent workflows.",
    "type": "cert",
    "tags": [
      "Agentic AI",
      "Oracle",
      "LLMs",
      "AI Agents",
      "2026"
    ]
  },
  {
    "title": "BDM Best Capstone Award Certificate",
    "sub": "IIT Madras · 2026",
    "href": "https:",
    "catLabel": "Certificate",
    "desc": "Official certificate awarded for best capstone project execution in Business Data Management at IIT Madras.",
    "type": "cert",
    "tags": [
      "SQL",
      "Databases",
      "IIT Madras"
    ]
  },
  {
    "title": "HackerRank SQL (Advanced)",
    "sub": "HackerRank · 2024",
    "href": "https:",
    "catLabel": "Certificate",
    "desc": "Advanced SQL certification covering window functions, complex joins, subqueries, and query optimization.",
    "type": "cert",
    "tags": [
      "SQL",
      "Databases",
      "HackerRank"
    ]
  },
  {
    "title": "DataCamp Data Science Associate",
    "sub": "DataCamp · 2025",
    "href": "https:",
    "catLabel": "Certificate",
    "desc": "Multi-stage assessment validating Python, SQL, statistical analysis, and ML fundamentals.",
    "type": "cert",
    "tags": [
      "Python",
      "SQL",
      "DataCamp"
    ]
  },
  {
    "title": "GCP Cloud Workshop",
    "sub": "Google Cloud",
    "href": "https:",
    "catLabel": "Certificate",
    "desc": "Hands-on GCP certification covering Compute Engine, BigQuery, Cloud Storage, and Vertex AI.",
    "type": "cert",
    "tags": [
      "GCP",
      "Cloud",
      "BigQuery"
    ]
  },
  {
    "title": "Dynamic Programming Workshop",
    "sub": "IIT Madras",
    "href": "https:",
    "catLabel": "Certificate",
    "desc": "Focused algorithm certification in dynamic programming state space design, memoization, and tabulation.",
    "type": "cert",
    "tags": [
      "Algorithms",
      "DP",
      "Competitive Prog"
    ]
  },
  {
    "title": "Machine Learning Workshop",
    "sub": "IIT Madras",
    "href": "https:",
    "catLabel": "Certificate",
    "desc": "Supervised and unsupervised ML models, linear regression, decision trees, K-means, and scikit-learn metrics.",
    "type": "cert",
    "tags": [
      "Machine Learning",
      "scikit-learn",
      "Python"
    ]
  },
  {
    "title": "Python Programming Certificate",
    "sub": "IIT Madras",
    "href": "https:",
    "catLabel": "Certificate",
    "desc": "Python programming logic, OOP concepts, file I/O, and mathematical standard library integrations.",
    "type": "cert",
    "tags": [
      "Python",
      "OOP",
      "Programming"
    ]
  },
  {
    "title": "NPTEL Distributed Systems & Cloud Computing",
    "sub": "NPTEL · Elite Tier · 2026",
    "href": "https:",
    "catLabel": "Certificate",
    "desc": "Elite tier certification in Distributed Systems architecture, cloud virtualization, and consensus algorithms.",
    "type": "cert",
    "tags": [
      "Distributed Systems",
      "Cloud",
      "NPTEL"
    ]
  },
  {
    "title": "Machine Learning using Python",
    "sub": "Simplilearn · 2026",
    "href": "https:",
    "catLabel": "Certificate",
    "desc": "Training in machine learning preprocessing, classification, clustering models, and Python serving.",
    "type": "cert",
    "tags": [
      "Machine Learning",
      "Python",
      "Simplilearn"
    ]
  },
  {
    "title": "B.S. Data Science & Applications",
    "sub": "IIT Madras · 2023 – 2027",
    "href": "https:",
    "catLabel": "Degree",
    "desc": "Bachelor of Science in Data Science & Applications from IIT Madras. Currently maintaining CGPA of 9.15.",
    "type": "degree",
    "tags": [
      "IIT Madras",
      "CGPA 9.15",
      "Data Science",
      "AI/ML"
    ]
  },
  {
    "title": "Diploma in Programming",
    "sub": "IIT Madras · Completed 2025",
    "href": "https:",
    "catLabel": "Diploma",
    "desc": "Diploma in Programming from IIT Madras completed with 9.44 CGPA in algorithms and web systems.",
    "type": "degree",
    "tags": [
      "IIT Madras",
      "CGPA 9.44",
      "Diploma",
      "Algorithms"
    ]
  },
  {
    "title": "Interactive ML Algorithms",
    "sub": "1mystic.github.io/ML-Algos",
    "href": "https:",
    "catLabel": "Edu Content",
    "desc": "Interactive web suite implementing classical Machine Learning algorithms in vanilla JS with visual parameter tuning.",
    "type": "edu",
    "tags": [
      "ML",
      "JavaScript",
      "Interactive",
      "Algorithms"
    ]
  },
  {
    "title": "Full-Stack AI Engineer Guide",
    "sub": "daily-guide.pages.dev",
    "href": "https:",
    "catLabel": "Edu Content",
    "desc": "Daily roadmap, skill matrix, and practical project guide for fresher Full-Stack AI Engineers mastering LLMs & RAG.",
    "type": "edu",
    "tags": [
      "AI Engineering",
      "Roadmap",
      "Full-Stack AI"
    ]
  },
  {
    "title": "PsychoLectures Hub",
    "sub": "1mystic.github.io/Psycho-lectures",
    "href": "https:",
    "catLabel": "Edu Content",
    "desc": "Curated resource repository and lecture notes spanning psychology, cognitive dynamics, and behavioral science.",
    "type": "edu",
    "tags": [
      "Cognitive Science",
      "Psychology",
      "Resource Hub"
    ]
  },
  {
    "title": "Daily Data Science Feed",
    "sub": "feed-daily.pages.dev",
    "href": "https:",
    "catLabel": "Edu Content",
    "desc": "Automated daily feed aggregating research papers, data science updates, ML breakthroughs, and industry insights.",
    "type": "edu",
    "tags": [
      "Data Science",
      "Daily Feed",
      "Curated"
    ]
  },
  {
    "title": "IITM BS Data Science Syllabus",
    "sub": "iitmbs-syllabus.pages.dev",
    "href": "https:",
    "catLabel": "Edu Content",
    "desc": "Interactive course directory, subject breakdown, and term roadmap for the IIT Madras BS Data Science program.",
    "type": "edu",
    "tags": [
      "IIT Madras",
      "Syllabus",
      "Education"
    ]
  },
  {
    "title": "Tools in Data Science (TDS) Summary",
    "sub": "tds-summary.pages.dev",
    "href": "https:",
    "catLabel": "Edu Content",
    "desc": "Print-ready summary notes covering essential data science tools, Unix shell CLI commands, Git, and data pipelines.",
    "type": "edu",
    "tags": [
      "Data Science Tools",
      "Cheatsheet",
      "Print-Ready"
    ]
  },
  {
    "title": "Machine Learning Practice (MLP) Notes",
    "sub": "mlp-summary.pages.dev",
    "href": "https:",
    "catLabel": "Edu Content",
    "desc": "Print-ready reference notes covering scikit-learn models, hyperparameter tuning, cross-validation, and metrics.",
    "type": "edu",
    "tags": [
      "Machine Learning",
      "scikit-learn",
      "Print-Ready"
    ]
  },
  {
    "title": "Applied AI Engineering Challenges",
    "sub": "ai-challenges-by-1mystic.edgeone.app",
    "href": "https:",
    "catLabel": "Edu Content",
    "desc": "Practical hands-on coding challenges for mastering modern AI engineering, prompt design, vector search, and agents.",
    "type": "edu",
    "tags": [
      "AI Engineering",
      "Challenges",
      "Hands-On"
    ]
  },
  {
    "title": "Data Science Compendium",
    "sub": "data-science-compendium.vercel.app",
    "href": "https:",
    "catLabel": "Edu Content",
    "desc": "Data science interview mini notes, quick revision summaries, core statistical concepts, and ML fundamentals.",
    "type": "edu",
    "tags": [
      "Data Science",
      "Interview",
      "Cheatsheet"
    ]
  }
];

  var _iconMap   = {
  "LangGraph": {
    "slug": "langchain",
    "color": "#1c3c3c"
  },
  "LangChain": {
    "slug": "langchain",
    "color": "#1c3c3c"
  },
  "scikit-learn": {
    "slug": "scikitlearn",
    "color": "#f7931e"
  },
  "Vue 3": {
    "slug": "vuedotjs",
    "color": "#4fc08d"
  },
  "FastAPI": {
    "slug": "fastapi",
    "color": "#05998b"
  },
  "Flask": {
    "slug": "flask",
    "color": "#ffffff"
  },
  "Python": {
    "slug": "python",
    "color": "#3776ab"
  },
  "Claude": {
    "slug": "anthropic",
    "color": "#d97757"
  },
  "Claude 3.5": {
    "slug": "anthropic",
    "color": "#d97757"
  },
  "Claude 3.5 Sonnet": {
    "slug": "anthropic",
    "color": "#d97757"
  },
  "Claude API": {
    "slug": "anthropic",
    "color": "#d97757"
  },
  "Supabase": {
    "slug": "supabase",
    "color": "#3ecf8e"
  },
  "PostgreSQL": {
    "slug": "postgresql",
    "color": "#4169e1"
  },
  "PyTorch": {
    "slug": "pytorch",
    "color": "#ee4c2c"
  },
  "React": {
    "slug": "react",
    "color": "#61dafb"
  },
  "Next.js": {
    "slug": "nextdotjs",
    "color": "#ffffff"
  },
  "Next.js 15": {
    "slug": "nextdotjs",
    "color": "#ffffff"
  },
  "TypeScript": {
    "slug": "typescript",
    "color": "#3178c6"
  },
  "JavaScript": {
    "slug": "javascript",
    "color": "#f7df1e"
  },
  "ONNX": {
    "slug": "onnx",
    "color": "#005ced"
  },
  "Docker": {
    "slug": "docker",
    "color": "#2496ed"
  },
  "Kaggle": {
    "slug": "kaggle",
    "color": "#20beff"
  },
  "SQL": {
    "slug": "postgresql",
    "color": "#336791"
  },
  "Vite": {
    "slug": "vite",
    "color": "#646cff"
  },
  "SQLite": {
    "slug": "sqlite",
    "color": "#003b57"
  },
  "Astro": {
    "slug": "astro",
    "color": "#ff5d01"
  },
  "GCP": {
    "slug": "googlecloud",
    "color": "#4285f4"
  },
  "Oracle": {
    "slug": "oracle",
    "color": "#f80000"
  },
  "Leaflet.js": {
    "slug": "leaflet",
    "color": "#199900"
  },
  "HTML5": {
    "slug": "html5",
    "color": "#e34f26"
  },
  "GitHub": {
    "slug": "github",
    "color": "#ffffff"
  },
  "Firebase": {
    "slug": "firebase",
    "color": "#ffca28"
  },
  "HuggingFace": {
    "slug": "huggingface",
    "color": "#ffd21e"
  },
  "Pandas": {
    "slug": "pandas",
    "color": "#150458"
  },
  "NumPy": {
    "slug": "numpy",
    "color": "#013243"
  },
  "Three.js": {
    "slug": "threedotjs",
    "color": "#ffffff"
  },
  "Tailwind CSS": {
    "slug": "tailwindcss",
    "color": "#06b6d4"
  },
  "Tailwind": {
    "slug": "tailwindcss",
    "color": "#06b6d4"
  }
};

  /* ── HELPERS ────────────────────────────────────────────── */

  function prefixImg(items, basePath) {
    return items.map(function(item) {
      if (!item.img && !item.image) return item;
      var copy = Object.assign({}, item);
      if (!basePath) return copy;
      if (copy.img && !copy.img.startsWith('http') && !copy.img.startsWith(basePath)) {
        copy.img = basePath + copy.img;
      }
      if (copy.image && !copy.image.startsWith('http') && !copy.image.startsWith(basePath)) {
        copy.image = basePath + copy.image;
      }
      return copy;
    });
  }

  function prefixHref(items, basePath) {
    return items.map(function(item) {
      var copy = Object.assign({}, item);
      if (copy.href && copy.href.startsWith('fresh/')) {
        copy.href = basePath + copy.href;
      }
      return copy;
    });
  }

  /* ── PUBLIC API ─────────────────────────────────────────── */

  return {
    profile:    _profile,
    stats:      _stats,
    techIconMap: _iconMap,

    getProjects: function(opts) {
      var bp = (opts && opts.basePath != null) ? opts.basePath : '';
      return prefixImg(_projects, bp);
    },

    getResearch: function() {
      return _research;
    },

    /** squishy uses only research (7 items) */
    getSquishyResearch: function(opts) {
      var bp = (opts && opts.basePath != null) ? opts.basePath : '';
      return _research;
    },

    getBlogs: function(opts) {
      var bp = (opts && opts.basePath != null) ? opts.basePath : '';
      return prefixHref(_blogs, bp);
    },

    getCertificates: function() {
      return _certs;
    },

    getEducation: function() {
      return _education;
    },

    getAchievements: function() {
      return _achieves;
    },

    getEduResources: function(opts) {
      var bp = (opts && opts.basePath != null) ? opts.basePath : '';
      return prefixImg(_eduRes, bp);
    },

    getOrigami: function(opts) {
      var bp = (opts && opts.basePath != null) ? opts.basePath : '';
      return prefixImg(_origami, bp);
    },

    getStreamDataset: function() {
      return _stream;
    }
  };
});
