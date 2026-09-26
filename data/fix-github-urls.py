import json

with open('data/portfolio-data.json', 'r') as f:
    data = json.load(f)

# Correct GitHub repo URLs for each project
github_repos = {
    "Sentio": "https://github.com/1mystic/Sentio",
    "Reflecta": "https://github.com/1mystic/reflecta",
    "Plume": "https://github.com/1mystic/plumefile",
    "GitSyntropy": "https://github.com/1mystic/git-syntropy",
    "Comment Sentiment Classification": "https://github.com/1mystic/kaggle-comment-classification",
    "EcoView": "https://github.com/1mystic/ecoview",
    "Mitra": "https://github.com/1mystic/mitra",
    "BayesInspector": "https://github.com/1mystic/bayes-inspector",
    "Axiom Canvas": "https://github.com/1mystic/axiom-canvas",
    "Flipkart Gridlock": "https://github.com/1mystic/flipkart-gridlock",
    "Episteme": "https://github.com/1mystic/episteme-chat",
    "DominoML": "https://github.com/1mystic/domino-ml",
    "Clearview Eco": "https://github.com/1mystic/clearview-eco",
    "SOHOS ED": "https://github.com/1mystic/Sohos-ED",
    "DineOps": "https://github.com/1mystic/dineops",
    "DevLoft": "https://github.com/1mystic/devloft",
    "MarkTex": "https://github.com/1mystic/marktex",
    "Aura-Delhi": "https://github.com/1mystic/aura-delhi",
    "PyCrumbs": "https://github.com/1mystic/pycrumbs",
    "Transformer: Text-to-Emoji": "https://github.com/1mystic/text-to-emoji",
    "VeraMind": "https://github.com/1mystic/veramind",
    "Bhopal Food Delivery Analysis": "https://github.com/1mystic/bhopal-food-delivery",
    "Whiz.it": "https://github.com/1mystic/whizit",
    "Qwix.it": "https://github.com/1mystic/qwix",
    "GlideML": "https://github.com/1mystic/glideml",
    "WikiViz": "https://github.com/1mystic/wikiviz",
    "CloudMorph Lens": "https://github.com/1mystic/cloudmorph-lens",
    "Wixplore": "https://github.com/1mystic/wixplore",
    "MindFluence": "https://github.com/1mystic/mindfluence",
    "Origami Simulator": "https://github.com/1mystic/origami-simulator",
    "Kanha Student House": "https://github.com/1mystic/kanha-student-house",
    "Portfolio : atharvk.me": "https://github.com/1mystic/portfolio",
    "Interactive ML Algorithms": "https://github.com/1mystic/ML-Algos",
    "Full-Stack AI Engineer Guide": "https://github.com/1mystic/ai-engineer-guide",
    "PsychoLectures Hub": "https://github.com/1mystic/Psycho-lectures",
    "Daily Data Science Feed": "https://github.com/1mystic/daily-ds-feed",
    "IITM BS Data Science Syllabus": "https://github.com/1mystic/iitmbs-syllabus",
    "Tools in Data Science (TDS) Summary": "https://github.com/1mystic/tds-summary",
    "Machine Learning Practice (MLP) Notes": "https://github.com/1mystic/mlp-notes",
    "Applied AI Engineering Challenges": "https://github.com/1mystic/ai-challenges",
    "Data Science Compendium": "https://github.com/1mystic/data-science-compendium",
}

# Fix projects
fixed = 0
for p in data['projects']:
    title = p['title']
    if title in github_repos:
        old = p.get('github', '')
        new = github_repos[title]
        if old != new:
            p['github'] = new
            fixed += 1
            print(f"  Fixed: {title} -> {new}")

# Also fix educational resources
edures_repos = {
    "Interactive ML Algorithms": "https://github.com/1mystic/ML-Algos",
    "Full-Stack AI Engineer Guide": "https://github.com/1mystic/ai-engineer-guide",
    "PsychoLectures Hub": "https://github.com/1mystic/Psycho-lectures",
    "Daily Data Science Feed": "https://github.com/1mystic/daily-ds-feed",
    "IITM BS Data Science Syllabus": "https://github.com/1mystic/iitmbs-syllabus",
    "Tools in Data Science (TDS) Summary": "https://github.com/1mystic/tds-summary",
    "Machine Learning Practice (MLP) Notes": "https://github.com/1mystic/mlp-notes",
    "Applied AI Engineering Challenges": "https://github.com/1mystic/ai-challenges",
    "Data Science Compendium": "https://github.com/1mystic/data-science-compendium",
}

for e in data['educationalResources']:
    title = e['title']
    if title in edures_repos:
        old = e.get('github', '')
        new = edures_repos[title]
        if old != new:
            e['github'] = new
            fixed += 1
            print(f"  Fixed Edu: {title} -> {new}")

# Also fix stream dataset
stream_repos = {
    "Sentio": "https://github.com/1mystic/Sentio",
    "Reflecta": "https://github.com/1mystic/reflecta",
    "Plume": "https://github.com/1mystic/plumefile",
    "GitSyntropy": "https://github.com/1mystic/git-syntropy",
    "Comment Sentiment Classification": "https://github.com/1mystic/kaggle-comment-classification",
    "EcoView": "https://github.com/1mystic/ecoview",
    "Mitra": "https://github.com/1mystic/mitra",
    "Flipkart Gridlock": "https://github.com/1mystic/flipkart-gridlock",
    "BayesInspector": "https://github.com/1mystic/bayes-inspector",
    "Axiom Canvas": "https://github.com/1mystic/axiom-canvas",
    "Episteme": "https://github.com/1mystic/episteme-chat",
    "DominoML": "https://github.com/1mystic/domino-ml",
    "SOHOS ED": "https://github.com/1mystic/Sohos-ED",
    "DineOps": "https://github.com/1mystic/dineops",
}

for s in data['streamDataset']:
    title = s['title']
    if title in stream_repos:
        old = s.get('github', '')
        new = stream_repos[title]
        if old != new:
            s['github'] = new
            fixed += 1
            print(f"  Fixed Stream: {title} -> {new}")

with open('data/portfolio-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print(f"\nFixed {fixed} GitHub URLs")

# Regenerate JS
import subprocess
subprocess.run(['python3', 'data/update-data.py'], check=True)
print("Regenerated portfolio-data.js")