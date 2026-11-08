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

To send inquiries to Google Sheets, follow the setup below. The endpoint URL is public browser-side configuration; do not put Google credentials or other secrets in this repository.

### Google Sheets contact form setup

1. Create a Google Sheet for inquiries. Copy the ID from its URL: the text between `/d/` and `/edit`.
2. In the sheet, open **Extensions → Apps Script**. Replace the editor contents with `google-apps-script/Code.gs`.
3. In `Code.gs`, replace `PASTE_YOUR_GOOGLE_SHEET_ID_HERE` with the copied ID. Save the project.
4. In Apps Script, choose **Deploy → New deployment**, select the gear icon, and choose **Web app**.
5. Set **Execute as** to **Me**. Set **Who has access** to **Anyone**, then select **Deploy** and authorize the script when Google prompts you.
6. Copy the deployed web app URL ending in `/exec` (not the `/dev` test URL).
7. Paste that URL into `formEndpoint` in `assets/js/config.js`, commit, and push the site. The contact form sends the listed fields to a `Contact submissions` sheet tab, creating the tab and its headers if needed.
8. Submit a test inquiry on the live contact page and check the sheet. The browser cannot read the Apps Script response because the cross-origin request uses `no-cors`; the on-page message says the request was sent but cannot confirm that the row was saved. Verify the row in the sheet. If the Apps Script code changes later, create a new deployment version or update the existing deployment so the live `/exec` endpoint uses it.

The web app must be accessible to anyone for the public site to submit without a Google sign-in. Keep the spreadsheet private and do not share its access with the public. This endpoint has no CAPTCHA or strong abuse protection; add spam protection before relying on it for high-volume or sensitive inquiries. Avoid collecting highly sensitive personal information through this form.

## Replace before publishing

- `assets/js/config.js`: set a real public contact email, actual social profile URLs, and a secure form endpoint if desired.
- `assets/js/data.js`: replace the three clearly labeled self-initiated concept projects with Greg’s real, accurately described work as it becomes available.
- Review the service list and skill descriptions in `assets/js/data.js`, `assets/js/site.js`, and `about/index.html` as offerings and experience change.
- `sitemap.xml` contains the explicit `https://YOUR-DOMAIN.example` placeholder; replace it with the final canonical domain before submitting it to search engines.

## Deployment

Deploy the project root to any static hosting service that serves `index.html` files from directories and preserves root paths such as `/assets/...`. No environment variables are needed for the current disconnected form. If a server-backed form is added, configure its secrets in that host’s environment settings and document the required variable names here and in an `.env.example` file.

## Design and content notes

The browser and project visuals are CSS illustrations, not screenshots of client work. No testimonials, client names, metrics, pricing, or booking links are fabricated. Analytics scripts are not included.
