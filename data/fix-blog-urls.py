import json

with open('data/portfolio-data.json', 'r') as f:
    data = json.load(f)

# Fix blog URLs - remove 'fresh/' prefix since blog.html is in fresh/ directory
for b in data['blogs']:
    if b.get('href', '').startswith('fresh/posts/'):
        b['href'] = b['href'].replace('fresh/posts/', 'posts/')
        print(f"Fixed: {b['title']} -> {b['href']}")

# Also fix any other blog URLs that might have the wrong path
for b in data['blogs']:
    href = b.get('href', '')
    if href and 'fresh/fresh/posts' in href:
        b['href'] = href.replace('fresh/fresh/posts/', 'posts/')
        print(f"Fixed double fresh: {b['title']} -> {b['href']}")

with open('data/portfolio-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Fixed blog URLs")

# Regenerate JS
import subprocess
subprocess.run(['python3', 'data/update-data.py'], check=True)
print("Regenerated portfolio-data.js")