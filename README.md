# Greg Garnett — Freelance Website

A responsive, static portfolio site built with HTML, CSS, and vanilla JavaScript. It includes Home, Services, Work, About, and Contact pages.

The interface defaults to English and includes a Simplified Chinese (简体中文) switch in the header. The selected language is remembered in the browser. English remains the primary presentation language.

## Run locally

From this directory, start any static server that serves directory `index.html` files and supports root-relative paths. For example, with Python installed:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. The site has no package installation or build step.

All page and asset links are relative or repository-base-aware, so the same files work on a domain root and on GitHub Pages project URLs such as `https://username.github.io/repository/`.

## Contact form setup

The form validates the required name, email, and project details fields accessibly. It does **not** send messages until a provider or server endpoint is configured. No message is stored or transmitted by the current implementation.

To connect it, update `window.SITE_CONFIG.formEndpoint` in `assets/js/config.js` and update the submit handler in `assets/js/site.js` to POST the form data to that endpoint, handle loading and failures, and show success only after a successful provider response. Keep provider secrets on the server or in the provider dashboard; never put secrets in browser code. Add provider-supported spam protection and any required consent language before launch. Test a real end-to-end submission before describing the form as active.

## Replace before publishing

- `assets/js/config.js`: set a real public contact email, actual social profile URLs, and a secure form endpoint if desired.
- `assets/js/data.js`: replace the three clearly labeled self-initiated concept projects with Greg’s real, accurately described work as it becomes available.
- Review the service list and skill descriptions in `assets/js/data.js`, `assets/js/site.js`, and `about/index.html` as offerings and experience change.
- `sitemap.xml` contains the explicit `https://YOUR-DOMAIN.example` placeholder; replace it with the final canonical domain before submitting it to search engines.

## Deployment

Deploy the project root to any static hosting service that serves `index.html` files from directories and preserves root paths such as `/assets/...`. No environment variables are needed for the current disconnected form. If a server-backed form is added, configure its secrets in that host’s environment settings and document the required variable names here and in an `.env.example` file.

## Design and content notes

The browser and project visuals are CSS illustrations, not screenshots of client work. No testimonials, client names, metrics, pricing, or booking links are fabricated. Analytics scripts are not included.
