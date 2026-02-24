# Technological Risk Framework — Announcement Page

Open `index.html` in your browser to view the announcement site.

Serve locally (recommended):

```bash
# from this folder
python3 -m http.server 8000
# then open http://localhost:8000
```

Start a local static server for preview:

```bash
# from this folder
python3 -m http.server 8000
# then open http://localhost:8000
```

Self-host Inter font files (recommended for privacy and offline reliability):

1. Create a `fonts/` folder at the project root.
2. Download Inter WOFF2 files (Regular, Medium, SemiBold, Bold) and place them in `fonts/` with names:
	- `Inter-Regular.woff2`
	- `Inter-Medium.woff2`
	- `Inter-SemiBold.woff2`
	- `Inter-Bold.woff2`
3. The site will use those local fonts automatically. Serving fonts locally avoids external Google Fonts calls.

Run a JavaScript linter (ESLint) locally:

```bash
# install eslint locally (no package.json change)
npm install eslint --no-save
# run eslint on the site script
npx eslint script.js --max-warnings=0 || true
```

Files in the project:

- index.html
- styles.css
- script.js
- package.json
- .gitignore
- images/
- fonts/ (create and add font files if self-hosting)

Website summary: Announcement page for the Technological Risk Framework for Energy Companies.
# Technological Risk Framework — Announcement Page

Open `index.html` in your browser to view the announcement site.

To serve it locally (recommended):

```bash
# from this folder
python3 -m http.server 8000
# then open http://localhost:8000
```

Files added:

- index.html
- styles.css
- script.js
# tech-risk-informational
Website to announce the release Technological Risk Framework for Energy Companies 
