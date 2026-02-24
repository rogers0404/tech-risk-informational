# Technological Risk Framework — Announcement Page

Project README for announcement site.

**Purpose of this announcement**
- **Title:** Building a Technological Risk Framework for Energy Companies – Engineering First
- **Summary:** Over the past weeks, a structured, engineering-focused framework has been developed to assess technological risk in energy companies. The model evaluates exposure across core domains (OT infrastructure & reliability, cyber-physical risk, obsolescence & vendor risk, system complexity & integration, monitoring & predictive capability, and governance & organizational risk) and produces a transparent, auditable Technological Risk Index.

Open the site by opening `index.html` in a browser or serving the folder locally. For the live site, [Click here to visit](https://rogers0404.github.io/tech-risk-informational/).

**Project file structure**
- `index.html` — main single-page announcement markup (hero, carousel, about, contact, footer).
- `styles.css` — styling, color variables, responsive layout, carousel styles, and `@font-face` rules for self-hosted fonts.
- `script.js` — carousel behavior, keyboard support, and small UI helpers (year injection).
- `images/` — image assets used by the carousel and page illustrations.
- `fonts/` — (optional) place local WOFF2 font files here if self-hosting Inter.
- `.gitignore` — ignores `node_modules`, build artifacts, and editor/OS files.

How to preview locally:

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000
```

Self-host fonts (optional, recommended):
1. Create a `fonts/` folder at project root.
2. Add Inter WOFF2 files named like `Inter-Regular.woff2`, `Inter-Medium.woff2`, etc.
3. `styles.css` already contains `@font-face` rules that reference `fonts/`.

Notes and next steps:
- Images and fonts are local for reliability and privacy — add any missing files to `images/` and `fonts/`.
- If you want, I can run ESLint or add the font files into the repo; tell me which to do next.

---
Generated from the announcement content in `index.html`.
