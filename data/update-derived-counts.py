import json

with open('data/portfolio-data.json', 'r') as f:
    data = json.load(f)

# Add derived counts to stats
data['stats']['projectsShipped'] = len(data['projects'])
data['stats']['researchCount'] = len(data['research'])
data['stats']['blogsCount'] = len(data['blogs'])
data['stats']['certificatesCount'] = len(data['certificates'])
data['stats']['educationCount'] = len(data['education'])
data['stats']['achievementsCount'] = len(data['achievements'])
data['stats']['verifiedRecords'] = len(data.get('streamDataset', []))

with open('data/portfolio-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Updated portfolio-data.json with derived counts")

# Regenerate JS
import subprocess
subprocess.run(['python3', 'data/update-data.py'], check=True)
print("Regenerated portfolio-data.js")