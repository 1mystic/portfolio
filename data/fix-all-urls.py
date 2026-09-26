import json
import re

with open('data/portfolio-data.json', 'r') as f:
    content = f.read()

# Fix the malformed URLs pattern: "https:\n        desc: "
# Replace with proper URLs

# Project URL mappings
project_urls = {
    "Sentio": {"href": "https://sentio-go.vercel.app/", "github": "https://github.com/1mystic/Sentio"},
    "Reflecta": {"href": "https://reflecta-j1wz.onrender.com/", "github": "https://github.com/1mystic/reflecta"},
    "Plume": {"href": "https://1mystic.github.io/plumefile/", "github": "https://github.com/1mystic/plumefile"},
    "GitSyntropy": {"href": "https://git-syntropy.vercel.app", "github": "https://github.com/1mystic"},
    "Comment Sentiment Classification": {"href": None, "github": "https://github.com/1mystic/kaggle-comment-classification"},
    "EcoView": {"href": "https://eco-view.vercel.app/", "github": "https://github.com/1mystic"},
    "Mitra": {"href": "https://mitra-theta.vercel.app", "github": "https://github.com/1mystic"},
    "BayesInspector": {"href": "https://bayes-inspector.pages.dev/", "github": "https://github.com/1mystic"},
    "Axiom Canvas": {"href": "https://axiom-canvas.onrender.com", "github": "https://github.com/1mystic"},
    "Flipkart Gridlock": {"href": "https://flipkart-gridlock.vercel.app/", "github": "https://github.com/1mystic"},
    "Episteme": {"href": "https://episteme-chat.vercel.app", "github": "https://github.com/1mystic/episteme-chat"},
    "DominoML": {"href": "https://domino-ml.onrender.com", "github": "https://github.com/1mystic"},
    "Clearview Eco": {"href": "https://clearvieweco.netlify.app", "github": "https://github.com/1mystic"},
    "SOHOS ED": {"href": None, "github": "https://github.com/1mystic/Sohos-ED"},
    "DineOps": {"href": None, "github": "https://github.com/1mystic"},
    "DevLoft": {"href": "https://devloft-tools.netlify.app", "github": "https://github.com/1mystic"},
    "MarkTex": {"href": "https://marktex.wasmer.app", "github": "https://github.com/1mystic"},
    "Aura-Delhi": {"href": None, "github": "https://github.com/1mystic"},
    "PyCrumbs": {"href": "https://pycrumbs.netlify.app", "github": "https://github.com/1mystic"},
    "Transformer: Text-to-Emoji": {"href": None, "github": "https://github.com/1mystic"},
    "VeraMind": {"href": None, "github": "https://github.com/1mystic"},
    "Bhopal Food Delivery Analysis": {"href": "https://bhopal-food-delivery.vercel.app", "github": "https://github.com/1mystic"},
    "Whiz.it": {"href": None, "github": "https://github.com/1mystic"},
    "Qwix.it": {"href": None, "github": "https://github.com/1mystic"},
    "GlideML": {"href": "https://glideml.vercel.app", "github": "https://github.com/1mystic"},
    "WikiViz": {"href": None, "github": "https://github.com/1mystic"},
    "CloudMorph Lens": {"href": None, "github": "https://github.com/1mystic"},
    "Wixplore": {"href": None, "github": "https://github.com/1mystic"},
    "MindFluence": {"href": "https://mindfluence.netlify.app", "github": "https://github.com/1mystic"},
    "Origami Simulator": {"href": None, "github": "https://github.com/1mystic"},
    "Kanha Student House": {"href": "https://kanha-min.netlify.app", "github": "https://github.com/1mystic"},
    "Portfolio : atharvk.me": {"href": "https://www.atharvk.me", "github": "https://github.com/1mystic"},
    "Interactive ML Algorithms": {"href": "https://1mystic.github.io/ML-Algos/", "github": "https://github.com/1mystic"},
    "Full-Stack AI Engineer Guide": {"href": "https://daily-guide.pages.dev/", "github": "https://github.com/1mystic"},
    "PsychoLectures Hub": {"href": "https://1mystic.github.io/Psycho-lectures/", "github": "https://github.com/1mystic"},
    "Daily Data Science Feed": {"href": "https://feed-daily.pages.dev/", "github": "https://github.com/1mystic"},
    "IITM BS Data Science Syllabus": {"href": "https://iitmbs-syllabus.pages.dev/", "github": "https://github.com/1mystic"},
    "Tools in Data Science (TDS) Summary": {"href": "https://tds-summary.pages.dev/", "github": "https://github.com/1mystic"},
    "Machine Learning Practice (MLP) Notes": {"href": "https://mlp-summary.pages.dev/#syllabus", "github": "https://github.com/1mystic"},
    "Applied AI Engineering Challenges": {"href": "https://ai-challenges-by-1mystic.edgeone.app/", "github": "https://github.com/1mystic"},
    "Data Science Compendium": {"href": "https://data-science-compendium.vercel.app/", "github": "https://github.com/1mystic"},
}

# Research URL mappings
research_urls = {
    "MLP Project Statistical Analysis": {"href": "https://mlp-proj-t126.edgeone.app/"},
    "TerraHeal": {"href": "https://zenodo.org/records/19630252"},
    "TypeState": {"href": "https://zenodo.org/records/19387975"},
    "GitSyntropy": {"href": "https://zenodo.org/records/20001501"},
    "Bhopal Food Delivery : Geospatial Study": {"href": "https://bhopal-food-delivery.vercel.app"},
    "Statistics II : Course Analysis": {"href": "https://sites.google.com/ds.study.iitm.ac.in/atharvkhare/courses/statistics-ii"},
    "QSR Demand Forecasting & Affinity Analysis": {"href": None},
}

# Certificate URL mappings
cert_urls = {
    "Oracle Agentic AI Certified Foundations": {"href": "https://catalog-education.oracle.com/ords/certview/sharebadge?id=899E45D97BCBF8B489F169421B50BC2819DC1ACB2ED7ECC2EB6853A39CBEBD59"},
    "BDM Best Capstone Award": {"href": "https://drive.google.com/file/d/1ryrmy_IYZPWy2MsnWUpaVnvwxN2ACkKC/view?usp=sharing"},
    "HackerRank SQL (Advanced)": {"href": "https://www.hackerrank.com/certificates/d366117ff2b9"},
    "DataCamp Data Science Associate": {"href": "https://drive.google.com/file/d/1cJCsRdCffS1Z0RTXr0XELxlqySsg1P0s/view?usp=sharing"},
    "GCP Cloud Workshop": {"href": "https://drive.google.com/file/d/1QvVS0EJSL60TOnbs5ZFTpgE1jcJlfh-X/view"},
    "Dynamic Programming Workshop": {"href": "https://drive.google.com/file/d/1Ru0ShGa4jEx2j4BsGiIVRf2HTLWhJxtE/view"},
    "Machine Learning Workshop": {"href": "https://drive.google.com/file/d/1RWIVo5YHam_mqswe_A5NlX0VXH5TcLyX/view"},
    "Python Programming": {"href": "https://drive.google.com/file/d/192zatB1EimlnHuJyFu7wcGbvb4QMrDSa/view"},
    "NPTEL Distributed Systems & Cloud Computing": {"href": "https://drive.google.com/file/d/1XQ370Ym7WbiMCelf7I7i5pAM6aYwFaBH/view?usp=sharing"},
    "Machine Learning using Python": {"href": "https://drive.google.com/file/d/1b0oOTDg5SqRQtlzQmwwOD17CNUqd3leJ/view?usp=sharing"},
    "Cloud Computing Foundations": {"href": "https://drive.google.com/file/d/1eFqV5gONP0AfkhjaOjMjau1mdr9YyKr9/view?usp=sharing"},
}

# Education URL mappings
edu_urls = {
    "B.S. Data Science & Applications": {"href": "https://study.iitm.ac.in"},
    "Diploma in Programming": {"href": "https://study.iitm.ac.in"},
}

# Achievement URL mappings
achievement_urls = {
    "IIT Madras Merit Prize Certificate": {"href": "https://drive.google.com/file/d/1cWg8Dqw0Xwb-ovccBXeFuhXJYKQ5eSSP/view?usp=sharing"},
    "Kaggle Comment Category Prediction : Top 0.8%": {"href": "https://github.com/1mystic/kaggle-comment-classification"},
    "BDM Best Capstone Project Award": {"href": "https://drive.google.com/file/d/1ryrmy_IYZPWy2MsnWUpaVnvwxN2ACkKC/view?usp=sharing"},
    "Anthropic Claude Builder Club : 2nd Runner Up": {"href": None},
    "Hack4Health Hackathon : 3rd Position": {"href": None},
    "Inter-house Tech Dominion : 2nd Place": {"href": None},
    "Silver Medal : Anukriti, Paradox IITM": {"href": None},
    "MR Focused Title : SPSN": {"href": None},
}

# Blog URL mappings - already using fresh/posts/ relative paths, should be fine
# Educational Resources URL mappings
edures_urls = {
    "Interactive ML Algorithms": {"href": "https://1mystic.github.io/ML-Algos/", "github": "https://github.com/1mystic"},
    "Full-Stack AI Engineer Guide": {"href": "https://daily-guide.pages.dev/", "github": "https://github.com/1mystic"},
    "PsychoLectures Hub": {"href": "https://1mystic.github.io/Psycho-lectures/", "github": "https://github.com/1mystic"},
    "Daily Data Science Feed": {"href": "https://feed-daily.pages.dev/", "github": "https://github.com/1mystic"},
    "IITM BS Data Science Syllabus": {"href": "https://iitmbs-syllabus.pages.dev/", "github": "https://github.com/1mystic"},
    "Tools in Data Science (TDS) Summary": {"href": "https://tds-summary.pages.dev/", "github": "https://github.com/1mystic"},
    "Machine Learning Practice (MLP) Notes": {"href": "https://mlp-summary.pages.dev/#syllabus", "github": "https://github.com/1mystic"},
    "Applied AI Engineering Challenges": {"href": "https://ai-challenges-by-1mystic.edgeone.app/", "github": "https://github.com/1mystic"},
    "Data Science Compendium": {"href": "https://data-science-compendium.vercel.app/", "github": "https://github.com/1mystic"},
}

# Stream Dataset URL mappings
stream_urls = {
    "Sentio": {"href": "https://sentio-go.vercel.app/", "github": "https://github.com/1mystic/Sentio"},
    "Reflecta": {"href": "https://reflecta-j1wz.onrender.com/", "github": "https://github.com/1mystic/reflecta"},
    "Plume": {"href": "https://1mystic.github.io/plumefile/", "github": "https://github.com/1mystic/plumefile"},
    "GitSyntropy": {"href": "https://git-syntropy.vercel.app", "github": "https://github.com/1mystic"},
    "Comment Sentiment Classification": {"href": None, "github": "https://github.com/1mystic/kaggle-comment-classification"},
    "EcoView": {"href": "https://eco-view.vercel.app/", "github": "https://github.com/1mystic"},
    "Mitra": {"href": "https://mitra-theta.vercel.app", "github": "https://github.com/1mystic"},
    "Flipkart Gridlock": {"href": "https://flipkart-gridlock.vercel.app/", "github": "https://github.com/1mystic"},
    "BayesInspector": {"href": "https://bayes-inspector.pages.dev/", "github": "https://github.com/1mystic"},
    "Axiom Canvas": {"href": "https://axiom-canvas.onrender.com", "github": "https://github.com/1mystic"},
    "Episteme": {"href": "https://episteme-chat.vercel.app", "github": "https://github.com/1mystic/episteme-chat"},
    "DominoML": {"href": "https://domino-ml.onrender.com", "github": "https://github.com/1mystic"},
    "SOHOS ED": {"href": None, "github": "https://github.com/1mystic/Sohos-ED"},
    "DineOps": {"href": None, "github": "https://github.com/1mystic"},
    "MLP Project Statistical Analysis": {"href": "https://mlp-proj-t126.edgeone.app/"},
    "TerraHeal": {"href": "https://zenodo.org/records/19630252"},
    "TypeState": {"href": "https://zenodo.org/records/19387975"},
    "GitSyntropy": {"href": "https://zenodo.org/records/20001501"},
    "Bhopal Food Delivery Geospatial Study": {"href": "https://bhopal-food-delivery.vercel.app"},
    "Statistics II Coursework Analysis": {"href": "https://sites.google.com/ds.study.iitm.ac.in/atharvkhare/courses/statistics-ii"},
    "Pen — Simple Write-ups": {"href": "https://1mystic.github.io/pen/"},
    "Reflection on This World": {"href": "fresh/posts/reflection-on-this-world.html"},
    "Understanding Attention Mechanisms": {"href": "fresh/posts/attention-mechanisms.html"},
    "Building Pipelines with DominoML": {"href": "fresh/posts/domino-ml-pipelines.html"},
    "Geospatial Analysis with GeoPandas": {"href": "fresh/posts/geopandas-analysis.html"},
    "From Markdown to PDF: Building MarkTex": {"href": "fresh/posts/building-marktex.html"},
    "Keystroke Dynamics as a Biometric": {"href": "fresh/posts/keystroke-dynamics.html"},
    "BDM Best Capstone Project Award": {"href": "https://drive.google.com/file/d/1ryrmy_IYZPWy2MsnWUpaVnvwxN2ACkKC/view?usp=sharing"},
    "Flipkart GRiD Hackathon: Gridlock": {"href": "https://flipkart-gridlock.vercel.app/"},
    "Anthropic Claude Builder Club Hackathon": {"href": None},
    "Best Capstone Project Award": {"href": "https://drive.google.com/file/d/1ryrmy_IYZPWy2MsnWUpaVnvwxN2ACkKC/view?usp=sharing"},
    "Hack4Health Hackathon": {"href": None},
    "Tech Dominion Hackathon": {"href": None},
    "Silver Medal": {"href": None},
    "Merit Prize Certificate": {"href": "https://drive.google.com/file/d/1cWg8Dqw0Xwb-ovccBXeFuhXJYKQ5eSSP/view?usp=sharing"},
    "Kaggle Comment Category Prediction": {"href": "https://github.com/1mystic/kaggle-comment-classification"},
}

# Parse and fix
data = json.loads(content)

# Fix projects
for p in data['projects']:
    title = p['title']
    if title in project_urls:
        p['href'] = project_urls[title]['href']
        p['github'] = project_urls[title]['github']

# Fix research
for r in data['research']:
    title = r['title']
    if title in research_urls:
        r['href'] = research_urls[title]['href']

# Fix certificates
for c in data['certificates']:
    title = c['title']
    if title in cert_urls:
        c['href'] = cert_urls[title]['href']

# Fix education
for e in data['education']:
    title = e['title']
    if title in edu_urls:
        e['href'] = edu_urls[title]['href']

# Fix achievements
for a in data['achievements']:
    title = a['title']
    if title in achievement_urls:
        a['href'] = achievement_urls[title]['href']

# Fix educational resources
for e in data['educationalResources']:
    title = e['title']
    if title in edures_urls:
        e['href'] = edures_urls[title]['href']
        e['github'] = edures_urls[title]['github']

# Fix stream dataset
for s in data['streamDataset']:
    title = s['title']
    if title in stream_urls:
        s['href'] = stream_urls[title]['href']
        if 'github' in stream_urls[title]:
            s['github'] = stream_urls[title]['github']

with open('data/portfolio-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Fixed all URLs in portfolio-data.json")

# Regenerate JS
import subprocess
subprocess.run(['python3', 'data/update-data.py'], check=True)
print("Regenerated portfolio-data.js")