# Di-Core Labs (static site)

Plain HTML/CSS/JS. No build step.

## Before deploying
1. Copy your logos into `public/images/` as `1.png` and `2.png`.
2. Contact form: create a free form at https://formspree.io (use hello@dicorelabs.com),
   copy its ID, and in `public/contact.html` replace `YOUR_FORM_ID` in
   `https://formspree.io/f/YOUR_FORM_ID`.

## Preview locally
Open `public/index.html` in a browser, or run `npx serve public`.

## Deploy on Cloudflare (Workers & Pages, connected to GitHub)
- Build command: leave empty
- Deploy command: `npx wrangler deploy`   (reads wrangler.jsonc, serves ./public)
- Root directory: the folder that contains wrangler.jsonc
