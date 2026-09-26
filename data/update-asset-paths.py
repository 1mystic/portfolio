import json

with open('data/portfolio-data.json', 'r') as f:
    data = json.load(f)

# Update project image paths to use assets/projects/
for project in data['projects']:
    title = project['title']
    # Map project titles to their image files in assets/projects/
    image_map = {
        'Sentio': 'assets/projects/sentio.webp',
        'Reflecta': 'assets/projects/reflecta.webp',
        'Plume': 'assets/projects/plume-web.webp',
        'GitSyntropy': 'assets/projects/git-sync.webp',
        'EcoView': 'assets/projects/ecoview.webp',
        'Mitra': 'assets/projects/mitra.webp',
        'BayesInspector': 'assets/projects/Bayes-inspector.webp',
        'Episteme': 'assets/projects/episteme.webp',
        'Flipkart Gridlock': 'assets/projects/gridlock.webp',
        'DominoML': 'assets/projects/domino-ml.webp',
        'Axiom Canvas': 'assets/projects/axiom.webp',
    }
    if title in image_map:
        project['img'] = image_map[title]

# Update origami paths to use assets/origami/
origami_map = {
    'pegasus.fold': 'assets/origami/1pegasus.webp',
    'darkness-dragon': 'assets/origami/Darkness Dragon main 2.webp',
    'sun-wukong': 'assets/origami/SUn wukong 1.webp',
    'yoda': 'assets/origami/Yoda cleaned.webp',
    'beetle-h': 'assets/origami/1Beetle-H.webp',
    'wyvern.v2': 'assets/origami/wyv2.webp',
}
for origami in data['origami']:
    if origami['name'] in origami_map:
        origami['image'] = origami_map[origami['name']]

# Update stats to reflect actual counts
data['stats']['projectsShipped'] = len(data['projects'])
data['stats']['verifiedRecords'] = len(data.get('streamDataset', []))

with open('data/portfolio-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Updated portfolio-data.json with correct asset paths and stats")

# Regenerate JS
import subprocess
subprocess.run(['python3', 'data/update-data.py'], check=True)
print("Regenerated portfolio-data.js")