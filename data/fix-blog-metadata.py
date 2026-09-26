import json

with open('data/portfolio-data.json', 'r') as f:
    data = json.load(f)

# Correct metadata: badge (thumb label), date (actual date), readTime (actual "X min read")
# Sourced from original fresh/blog.html (git history)
blog_fixes = {
    "Should You Move Abroad? A First-Principles Take": {
        "badge": "ESSAY", "date": "Aug 30, 2026", "readTime": "7 min read"
    },
    "Bigger Is Not the Same as Better": {
        "badge": "ANALYSIS", "date": "Jul 20, 2026", "readTime": "16 min read"
    },
    "From a 0.752 Kaggle Score to a Metacognition Engine: The Reflecta Story": {
        "badge": "PROJECT", "date": "Jul 17, 2026", "readTime": "14 min read"
    },
    "Reflection on This World": {
        "badge": "ESSAY", "date": "Jun 25, 2026", "readTime": "4 min read"
    },
    "A Pilgrim of Passing Things": {
        "badge": "POETRY", "date": "Jun 25, 2026", "readTime": "2 min read"
    },
    "My Reflection on My Recent Life and Why I Got Into the IITM BS Degree": {
        "badge": "ESSAY", "date": "Jun 15, 2026", "readTime": "12 min read"
    },
    "Anime as a Unique Content Medium: The Art of Climbing the Summit": {
        "badge": "ART FORM", "date": "May 31, 2026", "readTime": "8 min read"
    },
    "The Apple Propaganda": {
        "badge": "OPINION", "date": "Feb 11, 2026", "readTime": "6 min read"
    },
    "GitSyntropy: Astrology-Inspired Team Matching": {
        "badge": "ALGORITHM", "date": "Jan 28, 2026", "readTime": "6 min read"
    },
    "Resonance": {
        "badge": "POETRY", "date": "Feb 10, 2026", "readTime": "2 min read"
    },
    "Time": {
        "badge": "POETRY", "date": "Feb 8, 2026", "readTime": "2 min read"
    },
    "Women Empowerment?": {
        "badge": "ESSAY", "date": "Feb 5, 2026", "readTime": "4 min read"
    },
    "Understanding LSTM Networks": {
        "badge": "BLOG PREVIEW", "date": "Jan 24, 2026", "readTime": "5 min read"
    },
    # These never had cards in fresh/blog.html originally (research/writing-only refs
    # in profile.html) - estimate reasonable read time from actual post content.
    "Pen — Simple Write-ups": {
        "badge": "EXTERNAL", "date": "Digital Garden", "readTime": None
    },
    "Understanding Attention Mechanisms": {
        "badge": "TUTORIAL", "date": "Technical Deep-Dive", "readTime": "5 min read"
    },
    "Building Pipelines with DominoML": {
        "badge": "TUTORIAL", "date": "Project Spotlight", "readTime": "4 min read"
    },
    "Geospatial Analysis with GeoPandas": {
        "badge": "BLOG", "date": "Data Science Article", "readTime": "4 min read"
    },
    "From Markdown to PDF : Building MarkTex": {
        "badge": "BLOG", "date": "Dev Journal", "readTime": "4 min read"
    },
    "Keystroke Dynamics as a Biometric": {
        "badge": "BLOG", "date": "Research-to-Blog", "readTime": "4 min read"
    },
    "GitSyntropy Algorithm": {
        "badge": "BLOG", "date": "Jan 28, 2026", "readTime": "6 min read"
    },
    "Wishes | Akshaj Khare": {
        "badge": "POETRY", "date": "Article", "readTime": "1 min read",
        "cat": "poem", "catLabel": "Poetry"
    },
}

fixed = 0
for b in data['blogs']:
    title = b['title']
    if title in blog_fixes:
        fix = blog_fixes[title]
        b['badge'] = fix['badge']
        b['date'] = fix['date']
        if fix['readTime'] is not None:
            b['readTime'] = fix['readTime']
        else:
            b.pop('readTime', None)
        if 'cat' in fix:
            b['cat'] = fix['cat']
        if 'catLabel' in fix:
            b['catLabel'] = fix['catLabel']
        fixed += 1
    else:
        print(f"  WARNING: no fix mapping for '{title}'")

with open('data/portfolio-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print(f"\nFixed {fixed}/{len(data['blogs'])} blog entries")

import subprocess
subprocess.run(['python3', 'data/update-data.py'], check=True)
print("Regenerated portfolio-data.js")