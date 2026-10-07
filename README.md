# YES Genesis — Products page (Next.js 14)

Built from the Figma frame **Desktop - 68** (1440 × 3554).

## Run locally

```bash
npm install
npm run assets     # downloads the Figma images into public/assets/images (see below)
npm run dev        # http://localhost:3000
```

Production check: `npm run lint && npm run build && npm start`

## Images (important)

Vector icons are already in `public/assets/icons`. The photographic images and logo
must be downloaded from Figma once:

```bash
npm run assets            # skips files that already exist
npm run assets -- --force # re-download everything
```

`scripts/assets-manifest.json` maps each filename to its Figma asset URL.
**Those URLs expire after ~7 days.** If a download fails, export the node from Figma
(2x PNG) and save it into `public/assets/images/` using the same filename, then **commit
the images** so deployments don't depend on Figma.

| File | Figma layer |
| --- | --- |
| hero.png | Rectangle 2590 (hero, 1440×680) |
| logo.png | "Screenshot 2026-07-14 140253 - Copy 1" (logo, used in navbar + footer) |
| category-solar-energy / wind-energy / vertical-wind.png | Rectangle 2538 / 2539 / 2577 |
| product-solar-light … product-solar-fencing.png | Rectangle 2568 … 2576 (8 product cards) |

## Structure

```
app/
  layout.js            metadata (SEO / Open Graph), Navbar + Footer, skip link
  page.js              Hero → Categories → TrendingProducts
  [...slug]/page.js    placeholder pages for linked-but-undesigned routes
  not-found.js
  globals.css          design tokens + reset
components/            Navbar, Logo, Hero, Categories, CategoryCard,
                       TrendingProducts, ProductCard, Footer, PlaceholderPage
data/site.js           all copy, links, contact details, categories, products
lib/routes.js          placeholder route list
scripts/               fetch-assets.mjs + assets-manifest.json
public/assets/         icons/ (SVG, from Figma) and images/ (run `npm run assets`)
```

## Things to fill in

- **Social links** (`SOCIAL_LINKS` in `data/site.js`) point to each platform's homepage — replace with real profiles.
- **Placeholder routes**: `/subsidy`, `/solar-scheme`, `/about`, `/calculator`, `/privacy-policy`, `/faq`,
  `/categories/*`, `/products/*` show a "coming soon" page until designed. Replace by adding real
  `app/<route>/page.js` files (they take precedence over the catch-all).
- No favicon was in the Figma file; add `app/icon.png` when available.

## Deploy to Vercel

1. Make sure `public/assets/images/*` is committed.
2. Push the repo to GitHub/GitLab/Bitbucket.
3. In Vercel: **Add New → Project →** import the repo (framework auto-detected as Next.js; no settings to change).
4. Add env var `NEXT_PUBLIC_SITE_URL` = your production URL.
5. Deploy. (CLI alternative: `npx vercel` then `npx vercel --prod`.)
