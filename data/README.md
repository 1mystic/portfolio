# Unified Portfolio Data Architecture

This directory is the **canonical single source of truth** for Atharv Khare's personal portfolio. All portfolio variants load their details and content from this compounded data source.

## Files

- **`portfolio-data.json`**:
  Comprehensive, structured JSON dataset containing all personal information, statistics, projects (41 entries), research papers & studies (7 entries), blog posts & essays (21 entries), certifications (11 entries), academic degrees (2 entries), competition & merit achievements (8 entries), educational resources (9 entries), origami folds, and tech stack icons.

- **`portfolio-data.js`**:
  Universal client module exporting `window.PORTFOLIO_DATA`. Works in both offline/local static environments (`file:///`) and live web deployments (`http://` / `https://`) without CORS restrictions.
  Provides helper functions with automatic path resolution:
  - `PORTFOLIO_DATA.getProjects({ basePath })`
  - `PORTFOLIO_DATA.getResearch({ basePath })`
  - `PORTFOLIO_DATA.getSquishyResearch({ basePath })`
  - `PORTFOLIO_DATA.getBlogs({ basePath })`
  - `PORTFOLIO_DATA.getCertificates()`
  - `PORTFOLIO_DATA.getEducation()`
  - `PORTFOLIO_DATA.getAchievements()`
  - `PORTFOLIO_DATA.getEduResources()`
  - `PORTFOLIO_DATA.getOrigami({ basePath })`
  - `PORTFOLIO_DATA.getStreamDataset()`
  - `PORTFOLIO_DATA.techIconMap`
  - `PORTFOLIO_DATA.stats`
  - `PORTFOLIO_DATA.profile`

- **`asset-manifest.json`**:
  Master registry indexing 131 assets across `geo-images/`, `projects/`, `fresh/assets/`, `fresh/cert/`, and root files. Categorizes projects, decorations, origami, certificates, documents, audio, brand/avatars, and blog media.

## How Portfolio Variants Use This Data

| Portfolio Variant | Entry File | Path Prefix (`basePath`) | Data Consumed |
| :--- | :--- | :--- | :--- |
| **Profile (Kinetic)** | `profile.html` | `""` (root) | `projects`, `research`, `blogs`, `certificates`, `education`, `achievements` |
| **Minimal** | `minimal/portfolio.html` | `"../"` | `projects`, `research`, `blogs`, `certificates`, `education`, `achievements` |
| **Squishy** | `squishy/portfolio.html` | `"../"` | `projects`, `squishyResearch` (research + edu), `blogs`, `certificates`, `education`, `achievements` |
| **Stream & Stack** | `stream.html` | `""` (root) | `streamDataset` (56 verified records), `techIconMap` |
| **Dev-Profile** | `dev-profile/portfolio.html` | `"../"` | Featured projects, stats, work ships, certs, edu, origami |
| **Fresh Blog** | `fresh/blog.html` | `"../"` | 21 essays, tutorials, and poetry in `fresh/posts/` |

## Updating Content

To add a new project, paper, certificate, or blog:
1. Update `data/portfolio-data.json` with the new entry.
2. Update `data/portfolio-data.js` (or regenerate via the generator script in `data/`).
3. All connected portfolio variants will automatically reflect the update upon refresh!

