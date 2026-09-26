import json

with open('data/portfolio-data.json', 'r') as f:
    data = json.load(f)

# Fix blog URLs - they need to start with 'fresh/' so prefixHref adds basePath correctly
# For blog.html (in fresh/), basePath='' so fresh/posts/ works
# For squishy/minimal/dev-profile, basePath='../' so ../fresh/posts/ works
for b in data['blogs']:
    if b.get('href', '').startswith('posts/'):
        b['href'] = 'fresh/' + b['href']
        print(f"Fixed: {b['title']} -> {b['href']}")

with open('data/portfolio-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Fixed blog URLs with fresh/ prefix")

# Regenerate JS
import subprocess
subprocess.run(['python3', 'data/update-data.py'], check=True)
print("Regenerated portfolio-data.js")