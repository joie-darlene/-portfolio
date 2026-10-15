# Portfolio — Usanase Sheja Joie Darlene

Personal portfolio site. React + Vite + Tailwind CSS v4.

## Running it

```bash
npm install     # once
npm run dev     # local dev server
npm run build   # production build into dist/
npm run preview # serve the production build locally
```

## Editing the content

Everything you'd want to change — bio, jobs, projects, skills, education,
certificates — lives in a single file:

```
src/data/portfolio.js
```

The components just render whatever is in there. You shouldn't need to touch
JSX to update text.

## Link rules baked into the site

The project cards only show links that genuinely exist:

- `repo: null` and `demo: null` → no link is rendered at all.
- `status: 'in-progress'` → shows an amber "In Progress" badge instead of a demo
  link. Use this until something is actually deployed.
- `status: 'private'` → shows a lock badge and a short note explaining the source
  is proprietary. Used for AlphaBank.
- `status: 'complete'` → green badge; add `repo`/`demo` URLs once they're real.

To publish a link later, just fill in the URL in `src/data/portfolio.js`.

## Still to fill in

- **AQS internship** — `experience[1]` in the data file has empty `period`,
  `summary` and `bullets`, and is flagged `needsDetails: true`. The card
  currently renders as "Details coming soon." Add the real dates and
  description, then delete the `needsDetails` flag.
- **Project repos** — Smart Parking System, FOSEC and Toursite have `repo: null`.
  If public GitHub repos exist, drop the URLs in.
- **Zac Electronics** — add `demo` once the site is deployed and flip `status`
  to `'complete'`.
- **Profile photo** — not currently used. Drop an image in `public/` and wire it
  into `Hero.jsx` if you want one.

## Deliberately left off

The CV's phone number, street address and the three referees are **not** on the
site. Add them to `src/data/portfolio.js` only if you want them public.
