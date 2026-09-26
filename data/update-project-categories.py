import json

# Category mapping for each project
project_categories = {
    "Sentio": {"cat": "platform", "catLabel": "Platform"},
    "Reflecta": {"cat": "ml-ai", "catLabel": "ML / AI"},
    "Plume": {"cat": "tool", "catLabel": "Dev Tool"},
    "GitSyntropy": {"cat": "ml-ai", "catLabel": "ML / AI"},
    "Comment Sentiment Classification": {"cat": "ml-ai", "catLabel": "ML / AI"},
    "EcoView": {"cat": "platform", "catLabel": "Platform"},
    "Mitra": {"cat": "ml-ai", "catLabel": "ML / AI"},
    "BayesInspector": {"cat": "ml-ai", "catLabel": "ML / AI"},
    "Axiom Canvas": {"cat": "ml-ai", "catLabel": "ML / AI"},
    "Flipkart Gridlock": {"cat": "data-science", "catLabel": "Data Science"},
    "Episteme": {"cat": "ml-ai", "catLabel": "ML / AI"},
    "DominoML": {"cat": "ml-ai", "catLabel": "ML / AI"},
    "Clearview Eco": {"cat": "platform", "catLabel": "Platform"},
    "SOHOS ED": {"cat": "edu", "catLabel": "Education"},
    "DineOps": {"cat": "data-science", "catLabel": "Data Science"},
    "DevLoft": {"cat": "tool", "catLabel": "Dev Tool"},
    "MarkTex": {"cat": "tool", "catLabel": "Dev Tool"},
    "Aura-Delhi": {"cat": "data-science", "catLabel": "Data Science"},
    "PyCrumbs": {"cat": "edu", "catLabel": "Education"},
    "Transformer: Text-to-Emoji": {"cat": "ml-ai", "catLabel": "ML / AI"},
    "VeraMind": {"cat": "ml-ai", "catLabel": "ML / AI"},
    "Bhopal Food Delivery Analysis": {"cat": "data-science", "catLabel": "Data Science"},
    "Whiz.it": {"cat": "edu", "catLabel": "Education"},
    "Qwix.it": {"cat": "platform", "catLabel": "Platform"},
    "GlideML": {"cat": "ml-ai", "catLabel": "ML / AI"},
    "WikiViz": {"cat": "ml-ai", "catLabel": "ML / AI"},
    "CloudMorph Lens": {"cat": "ml-ai", "catLabel": "ML / AI"},
    "Wixplore": {"cat": "edu", "catLabel": "Education"},
    "MindFluence": {"cat": "platform", "catLabel": "Platform"},
    "Origami Simulator": {"cat": "web", "catLabel": "Web App"},
    "Kanha Student House": {"cat": "web", "catLabel": "Web App"},
    "Portfolio : atharvk.me": {"cat": "web", "catLabel": "Web App"},
    "Interactive ML Algorithms": {"cat": "edu", "catLabel": "Education"},
    "Full-Stack AI Engineer Guide": {"cat": "edu", "catLabel": "Education"},
    "PsychoLectures Hub": {"cat": "edu", "catLabel": "Education"},
    "Daily Data Science Feed": {"cat": "edu", "catLabel": "Education"},
    "IITM BS Data Science Syllabus": {"cat": "edu", "catLabel": "Education"},
    "Tools in Data Science (TDS) Summary": {"cat": "edu", "catLabel": "Education"},
    "Machine Learning Practice (MLP) Notes": {"cat": "edu", "catLabel": "Education"},
    "Applied AI Engineering Challenges": {"cat": "edu", "catLabel": "Education"},
    "Data Science Compendium": {"cat": "edu", "catLabel": "Education"},
}

# Also add img fields where needed
project_images = {
    "Reflecta": "projects/reflecta.webp",
    "Plume": "projects/plume-web.webp",
    "Mitra": "projects/mitra.webp",
    "Episteme": "projects/episteme.webp",
    "Sentio": "projects/sentio.webp",
    "EcoView": "projects/ecoview.webp",
    "GitSyntropy": "projects/git-sync.webp",
    "Flipkart Gridlock": "projects/gridlock.webp",
    "BayesInspector": "projects/Bayes-inspector.webp",
}

# Load the JSON
with open('data/portfolio-data.json', 'r') as f:
    data = json.load(f)

# Update projects
for project in data['projects']:
    title = project['title']
    if title in project_categories:
        project['cat'] = project_categories[title]['cat']
        project['catLabel'] = project_categories[title]['catLabel']
    if title in project_images:
        project['img'] = project_images[title]

# Save
with open('data/portfolio-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Updated portfolio-data.json with categories and images")

# Also update portfolio-data.js
with open('data/portfolio-data.js', 'r') as f:
    js_content = f.read()

# The JS file has the same data embedded, we need to update it too
# For simplicity, let's regenerate the JS file from JSON
# But first, let's just update the JSON and then run the generator script