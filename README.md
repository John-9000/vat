# EU VAT Bridge (Static Site)

A clean, corporate Blue + Red theme homepage mock for **VAT consulting (China → EU)**.

## Files
- `index.html` — homepage
- `css/styles.css` — theme styles
- `privacy.html`, `terms.html`, `disclaimer.html` — placeholder legal pages
- `robots.txt`, `sitemap.xml` — SEO basics
- `assets/icons/` — SVG icons (favicon + apple touch)
- `assets/og-image.svg` — placeholder Open Graph image (replace with PNG if you want)

## Quick start (local)
Just open `index.html` in your browser.

## Deploy on GitHub Pages (recommended for static)
1. Create a GitHub repo (e.g. `eu-vat-bridge`).
2. Upload these files to the repo root.
3. In GitHub: **Settings → Pages**
   - Source: `Deploy from a branch`
   - Branch: `main` (or `master`), folder: `/ (root)`
4. Save. Your site will appear at `https://YOUR_GITHUB_USERNAME.github.io/REPO_NAME/`.

### Important: set your real domain in SEO tags
Replace `YOUR_DOMAIN` in:
- `index.html` (canonical + OG urls)
- `robots.txt`
- `sitemap.xml`

If you deploy under a GitHub Pages project URL (not a custom domain), use:
`https://YOUR_GITHUB_USERNAME.github.io/REPO_NAME/`

## Forms (static)
The demo form is static. Options:
- Formspree
- Netlify Forms
- A small server endpoint (ASP.NET, etc.)

## Notes
The legal pages are placeholders. Replace with your final policy/terms/disclaimer.
