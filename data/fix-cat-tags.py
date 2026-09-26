import json

with open('data/portfolio-data.json', 'r') as f:
    data = json.load(f)

# Fix certificate categories
for cert in data['certificates']:
    cert['cat'] = 'cert'
    cert['catLabel'] = 'Certificate'

# Fix achievement categories - properly categorize them
for ach in data['achievements']:
    if 'Merit' in ach['title'] or 'Prize' in ach['title'] or 'Award' in ach['title']:
        ach['cat'] = 'award'
        ach['catLabel'] = 'Award'
    elif 'Medal' in ach['title']:
        ach['cat'] = 'medal'
        ach['catLabel'] = 'Medal'
    elif 'Title' in ach['title']:
        ach['cat'] = 'title'
        ach['catLabel'] = 'Title'
    elif 'Rank' in ach['title'] or 'Top' in ach['title']:
        ach['cat'] = 'competition'
        ach['catLabel'] = 'Competition Rank'
    elif 'Hackathon' in ach['title']:
        ach['cat'] = 'hackathon'
        ach['catLabel'] = 'Hackathon Win'
    elif 'Runner' in ach['title'] or 'Position' in ach['title'] or 'Place' in ach['title']:
        ach['cat'] = 'hackathon'
        ach['catLabel'] = 'Hackathon Win'
    elif 'Certified' in ach['title'] or 'Certification' in ach['title']:
        ach['cat'] = 'cert'
        ach['catLabel'] = 'Certification'
    else:
        ach['cat'] = 'award'
        ach['catLabel'] = 'Award'

# Fix educationalResources categories
for edu in data['educationalResources']:
    edu['cat'] = 'edu'
    edu['catLabel'] = 'Education'

with open('data/portfolio-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Fixed certificate and achievement categories")

# Regenerate JS
import subprocess
subprocess.run(['python3', 'data/update-data.py'], check=True)
print("Regenerated portfolio-data.js")