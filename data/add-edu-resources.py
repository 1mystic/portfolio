import json

# Educational resources data
educational_resources = [
    {
        "title": "Interactive ML Algorithms",
        "sub": "1mystic.github.io/ML-Algos",
        "href": "https://1mystic.github.io/ML-Algos/",
        "cat": "edu",
        "catLabel": "Education",
        "desc": "Interactive web suite implementing classical Machine Learning algorithms in vanilla JavaScript with real-time visual step-by-step parameter tuning and mathematical explanations.",
        "tags": ["ML", "JavaScript", "Interactive", "Algorithms"]
    },
    {
        "title": "Full-Stack AI Engineer Guide",
        "sub": "daily-guide.pages.dev",
        "href": "https://daily-guide.pages.dev/",
        "cat": "edu",
        "catLabel": "Education",
        "desc": "Step-by-step daily roadmap, skill matrix, and practical project guide designed for fresher Full-Stack AI Engineers mastering LLMs, RAG, agent orchestration, and production serving.",
        "tags": ["AI Engineering", "Roadmap", "Full-Stack AI", "Guide"]
    },
    {
        "title": "PsychoLectures Hub",
        "sub": "1mystic.github.io/Psycho-lectures",
        "href": "https://1mystic.github.io/Psycho-lectures/",
        "cat": "edu",
        "catLabel": "Education",
        "desc": "Curated resource repository and lecture notes spanning psychology, cognitive dynamics, and behavioral science specialization for tech builders.",
        "tags": ["Cognitive Science", "Psychology", "Resource Hub"]
    },
    {
        "title": "Daily Data Science Feed",
        "sub": "feed-daily.pages.dev",
        "href": "https://feed-daily.pages.dev/",
        "cat": "edu",
        "catLabel": "Education",
        "desc": "Automated daily feed aggregating top research papers, data science updates, ML breakthroughs, and industry insights for practitioners.",
        "tags": ["Data Science", "Daily Feed", "Curated"]
    },
    {
        "title": "IITM BS Data Science Syllabus",
        "sub": "iitmbs-syllabus.pages.dev",
        "href": "https://iitmbs-syllabus.pages.dev/",
        "cat": "edu",
        "catLabel": "Education",
        "desc": "Interactive course directory, subject breakdown, and term roadmap for the IIT Madras Bachelor of Science in Data Science & Applications program.",
        "tags": ["IIT Madras", "Syllabus", "Education"]
    },
    {
        "title": "Tools in Data Science (TDS) Summary",
        "sub": "tds-summary.pages.dev",
        "href": "https://tds-summary.pages.dev/",
        "cat": "edu",
        "catLabel": "Education",
        "desc": "Print-ready summary notes covering essential data science tools, Unix shell CLI commands, Git version control, and data pipeline fundamentals.",
        "tags": ["Data Science Tools", "Cheatsheet", "Print-Ready"]
    },
    {
        "title": "Machine Learning Practice (MLP) Notes",
        "sub": "mlp-summary.pages.dev",
        "href": "https://mlp-summary.pages.dev/#syllabus",
        "cat": "edu",
        "catLabel": "Education",
        "desc": "Print-ready reference notes covering scikit-learn models, hyperparameter tuning, cross-validation, feature preprocessing, and evaluation metrics.",
        "tags": ["Machine Learning", "scikit-learn", "Notes", "Print-Ready"]
    },
    {
        "title": "Applied AI Engineering Challenges",
        "sub": "ai-challenges-by-1mystic.edgeone.app",
        "href": "https://ai-challenges-by-1mystic.edgeone.app/",
        "cat": "edu",
        "catLabel": "Education",
        "desc": "Interactive collection of practical, hands-on coding challenges for mastering modern AI engineering, prompt design, vector search, and agentic workflows.",
        "tags": ["AI Engineering", "Challenges", "Hands-On"]
    },
    {
        "title": "Data Science Compendium",
        "sub": "data-science-compendium.vercel.app",
        "href": "https://data-science-compendium.vercel.app/",
        "cat": "edu",
        "catLabel": "Education",
        "desc": "Data science interview mini notes, quick revision summaries, core statistical concepts, and machine learning fundamentals.",
        "tags": ["Data Science", "Interview", "Cheatsheet", "Notes"]
    }
]

# Load the JSON
with open('data/portfolio-data.json', 'r') as f:
    data = json.load(f)

# Update educationalResources
data['educationalResources'] = educational_resources

# Save
with open('data/portfolio-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Updated portfolio-data.json with educational resources")

# Regenerate JS
import subprocess
subprocess.run(['python3', 'data/update-data.py'], check=True)
print("Regenerated portfolio-data.js")