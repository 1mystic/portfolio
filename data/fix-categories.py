import json

with open('data/portfolio-data.json', 'r') as f:
    data = json.load(f)

# Fix research categories
for r in data['research']:
    if r['title'] == 'MLP Project Statistical Analysis':
        r['cat'] = 'analysis'
        r['catLabel'] = 'Analysis'
    elif r['title'] == 'TerraHeal':
        r['cat'] = 'paper'
        r['catLabel'] = 'Research Paper'
    elif r['title'] == 'TypeState':
        r['cat'] = 'paper'
        r['catLabel'] = 'Research Paper'
    elif r['title'] == 'GitSyntropy':
        r['cat'] = 'paper'
        r['catLabel'] = 'Research Paper'
    elif r['title'] == 'Bhopal Food Delivery : Geospatial Study':
        r['cat'] = 'analysis'
        r['catLabel'] = 'Analysis'
    elif r['title'] == 'Statistics II : Course Analysis':
        r['cat'] = 'analysis'
        r['catLabel'] = 'Analysis'
    elif r['title'] == 'QSR Demand Forecasting & Affinity Analysis':
        r['cat'] = 'analysis'
        r['catLabel'] = 'Analysis'

# Fix education categories
for e in data['education']:
    if 'B.S.' in e['title']:
        e['cat'] = 'degree'
        e['catLabel'] = 'Degree'
    elif 'Diploma' in e['title']:
        e['cat'] = 'diploma'
        e['catLabel'] = 'Diploma'

with open('data/portfolio-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Updated portfolio-data.json with correct research and education categories")

# Regenerate JS
import subprocess
subprocess.run(['python3', 'data/update-data.py'], check=True)
print("Regenerated portfolio-data.js")