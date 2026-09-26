#!/usr/bin/env python3
"""
update-data.py — Regenerate portfolio-data.js from portfolio-data.json

Usage:
    python3 data/update-data.py

Run this from the portfolio root whenever you update portfolio-data.json.
It rewrites data/portfolio-data.js in-place, keeping all helper methods intact.
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).parent
JSON_PATH = ROOT / "portfolio-data.json"
JS_PATH   = ROOT / "portfolio-data.js"

# ── Load JSON ──────────────────────────────────────────────────────────────────
with open(JSON_PATH, encoding="utf-8") as f:
    data = json.load(f)

def jdump(obj, indent=2):
    return json.dumps(obj, ensure_ascii=False, indent=indent)

# ── Render JS ──────────────────────────────────────────────────────────────────
js = f"""\
/* ============================================================
 *  PORTFOLIO UNIFIED DATA MODULE  —  AUTO-GENERATED
 *  Source: data/portfolio-data.json
 *  Regenerate: python3 data/update-data.py
 * ============================================================ */

(function (root, factory) {{
  if (typeof module !== 'undefined' && module.exports) {{
    module.exports = factory();
  }} else {{
    root.PORTFOLIO_DATA = factory();
  }}
}})(typeof globalThis !== 'undefined' ? globalThis : this, function () {{

  /* ── RAW DATA ───────────────────────────────────────────── */

  var _profile   = {jdump(data['profile'])};

  var _stats     = {jdump(data['stats'])};

  var _projects  = {jdump(data['projects'])};

  var _research  = {jdump(data['research'])};

  var _eduRes    = {jdump(data['educationalResources'])};

  var _blogs     = {jdump(data['blogs'])};

  var _certs     = {jdump(data['certificates'])};

  var _education = {jdump(data['education'])};

  var _achieves  = {jdump(data['achievements'])};

  var _origami   = {jdump(data['origami'])};

  var _stream    = {jdump(data['streamDataset'])};

  var _iconMap   = {jdump(data['techIconMap'])};

  /* ── HELPERS ────────────────────────────────────────────── */

  function prefixImg(items, basePath) {{
    return items.map(function(item) {{
      if (!item.img && !item.image) return item;
      var copy = Object.assign({{}}, item);
      if (!basePath) return copy;
      if (copy.img && !copy.img.startsWith('http') && !copy.img.startsWith(basePath)) {{
        copy.img = basePath + copy.img;
      }}
      if (copy.image && !copy.image.startsWith('http') && !copy.image.startsWith(basePath)) {{
        copy.image = basePath + copy.image;
      }}
      return copy;
    }});
  }}

  function prefixHref(items, basePath) {{
    return items.map(function(item) {{
      var copy = Object.assign({{}}, item);
      if (copy.href && copy.href.startsWith('fresh/')) {{
        copy.href = basePath + copy.href;
      }}
      return copy;
    }});
  }}

  /* ── PUBLIC API ─────────────────────────────────────────── */

  return {{
    profile:    _profile,
    stats:      _stats,
    techIconMap: _iconMap,

    getProjects: function(opts) {{
      var bp = (opts && opts.basePath != null) ? opts.basePath : '';
      return prefixImg(_projects, bp);
    }},

    getResearch: function() {{
      return _research;
    }},

    /** squishy uses only research (7 items) */
    getSquishyResearch: function(opts) {{
      var bp = (opts && opts.basePath != null) ? opts.basePath : '';
      return _research;
    }},

    getBlogs: function(opts) {{
      var bp = (opts && opts.basePath != null) ? opts.basePath : '';
      return prefixHref(_blogs, bp);
    }},

    getCertificates: function() {{
      return _certs;
    }},

    getEducation: function() {{
      return _education;
    }},

    getAchievements: function() {{
      return _achieves;
    }},

    getEduResources: function(opts) {{
      var bp = (opts && opts.basePath != null) ? opts.basePath : '';
      return prefixImg(_eduRes, bp);
    }},

    getOrigami: function(opts) {{
      var bp = (opts && opts.basePath != null) ? opts.basePath : '';
      return prefixImg(_origami, bp);
    }},

    getStreamDataset: function() {{
      return _stream;
    }}
  }};
}});
"""

JS_PATH.write_text(js, encoding="utf-8")
print(f"✓  Written {JS_PATH}  ({JS_PATH.stat().st_size:,} bytes)")
print(f"   Projects:  {len(data['projects'])}")
print(f"   Research:  {len(data['research'])}")
print(f"   Blogs:     {len(data['blogs'])}")
print(f"   Certs:     {len(data['certificates'])}")
print(f"   Stream:    {len(data['streamDataset'])}")
