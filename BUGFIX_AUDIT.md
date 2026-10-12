# Y.G Solar — Bug-fix audit

## Fixes applied
1. **Broken social preview image:** the Open Graph metadata referenced `/assets/images/hero.png`, which was not present in `public/assets/images`. It now uses the existing `category-solar-energy.png`.
2. **Missing enquiry configuration example:** `.env.example` now documents `GOOGLE_APPS_SCRIPT_URL`, required by `POST /api/enquiry`. Set it to the deployed Google Apps Script Web App URL in local and production environments.
3. **Unknown solar-brand URLs:** the brand page previously silently displayed Adani Solar for an unrecognized brand slug. It now returns a Next.js 404 instead.

## Checks
- Next.js ESLint: passed, with five existing `@next/next/no-img-element` performance warnings in the solar brand/category pages.
- Production build: could not complete in this environment because Next.js tried to download its Linux SWC binary and network access to `registry.npmjs.org` was unavailable. Run `npm run build` in an environment with dependencies/network available.

## Before deploying
- Configure `GOOGLE_APPS_SCRIPT_URL` in Vercel project environment variables (Production and Preview as needed).
- Verify the Apps Script deployment is accessible to the website and that a test enquiry arrives in the intended spreadsheet.
- Consider replacing the remaining plain `<img>` elements with `next/image` to address the lint performance warnings.
