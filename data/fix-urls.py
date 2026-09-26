import json

with open('data/portfolio-data.json', 'r') as f:
    data = json.load(f)

# Fix malformed URLs in projects
for project in data['projects']:
    # Fix href
    if project.get('href') and 'desc:' in project['href']:
        # Extract the actual URL from the malformed string
        href = project['href']
        if 'https:' in href:
            # Find the actual URL part
            parts = href.split('https:')
            if len(parts) > 1:
                url_part = 'https:' + parts[1].split('\n')[0].strip()
                project['href'] = url_part
            else:
                project['href'] = None
    if project.get('github') and 'desc:' in project['github']:
        github = project['github']
        if 'https:' in github:
            parts = github.split('https:')
            if len(parts) > 1:
                url_part = 'https:' + parts[1].split('\n')[0].strip()
                project['github'] = url_part
            else:
                project['github'] = None

# Fix malformed URLs in research
for research in data['research']:
    if research.get('href') and 'desc:' in research['href']:
        href = research['href']
        if 'https:' in href:
            parts = href.split('https:')
            if len(parts) > 1:
                url_part = 'https:' + parts[1].split('\n')[0].strip()
                research['href'] = url_part
            else:
                research['href'] = None

# Fix malformed URLs in certificates
for cert in data['certificates']:
    if cert.get('href') and 'desc:' in cert['href']:
        href = cert['href']
        if 'https:' in href:
            parts = href.split('https:')
            if len(parts) > 1:
                url_part = 'https:' + parts[1].split('\n')[0].strip()
                cert['href'] = url_part
            else:
                cert['href'] = None

# Fix malformed URLs in education
for edu in data['education']:
    if edu.get('href') and 'desc:' in edu['href']:
        href = edu['href']
        if 'https:' in href:
            parts = href.split('https:')
            if len(parts) > 1:
                url_part = 'https:' + parts[1].split('\n')[0].strip()
                edu['href'] = url_part
            else:
                edu['href'] = None

# Fix malformed URLs in achievements
for ach in data['achievements']:
    if ach.get('href') and 'desc:' in ach['href']:
        href = ach['href']
        if 'https:' in href:
            parts = href.split('https:')
            if len(parts) > 1:
                url_part = 'https:' + parts[1].split('\n')[0].strip()
                ach['href'] = url_part
            else:
                ach['href'] = None

# Fix malformed URLs in blogs
for blog in data['blogs']:
    if blog.get('href') and 'desc:' in blog['href']:
        href = blog['href']
        if 'https:' in href:
            parts = href.split('https:')
            if len(parts) > 1:
                url_part = 'https:' + parts[1].split('\n')[0].strip()
                blog['href'] = url_part
            else:
                blog['href'] = None

# Fix malformed URLs in educationalResources
for edu in data['educationalResources']:
    if edu.get('href') and 'desc:' in edu['href']:
        href = edu['href']
        if 'https:' in href:
            parts = href.split('https:')
            if len(parts) > 1:
                url_part = 'https:' + parts[1].split('\n')[0].strip()
                edu['href'] = url_part
            else:
                edu['href'] = None
    if edu.get('github') and 'desc:' in edu['github']:
        github = edu['github']
        if 'https:' in github:
            parts = github.split('https:')
            if len(parts) > 1:
                url_part = 'https:' + parts[1].split('\n')[0].strip()
                edu['github'] = url_part
            else:
                edu['github'] = None

# Fix malformed URLs in streamDataset
for item in data['streamDataset']:
    if item.get('href') and 'desc:' in item['href']:
        href = item['href']
        if 'https:' in href:
            parts = href.split('https:')
            if len(parts) > 1:
                url_part = 'https:' + parts[1].split('\n')[0].strip()
                item['href'] = url_part
            else:
                item['href'] = None
    if item.get('github') and 'desc:' in item['github']:
        github = item['github']
        if 'https:' in github:
            parts = github.split('https:')
            if len(parts) > 1:
                url_part = 'https:' + parts[1].split('\n')[0].strip()
                item['github'] = url_part
            else:
                item['github'] = None

with open('data/portfolio-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Fixed malformed URLs in portfolio-data.json")

# Regenerate JS
import subprocess
subprocess.run(['python3', 'data/update-data.py'], check=True)
print("Regenerated portfolio-data.js")