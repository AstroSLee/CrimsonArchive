# CrimsonArchive

Installation_MANSE_2026

A companion website to **The Crimson Archive**, a projected garden
installation of red flowers. The site is a living archive of stories of
bloodshed and sacrifice in the fight for Korean independence — each flower
in the installation corresponds to a story here.

## Structure

- `index.html` (root) — redirects to `/archive/`
- `CNAME` — custom domain config for GitHub Pages (`crimsonarchive.astrolee.com`)
- `archive/index.html` — the site itself (hero, about, garden, entries, footer)
- `archive/style.css` — the dark, red-and-black visual language
- `archive/stories.js` — **the archive's content**, as a plain array of objects
- `archive/script.js` — renders the garden and entries from `stories.js`,
  handles interaction (click a flower → jump to and expand its story)

No build step or framework — open `archive/index.html` in a browser, or
deploy the folder as-is to any static host.

## Adding a story

You can edit this directly on GitHub: open `archive/stories.js` in the repo,
click the pencil (edit) icon, make your change, and commit to `main` — the
live site rebuilds automatically within a minute or two.

Add a new object to the `STORIES` array, following the shape of the existing
entries:

```js
{
  id: "unique-slug",
  name: "Name of person or event",
  kind: "person", // or "event"
  years: "1900 – 1950",
  role: "One-line description",
  summary: "1-2 sentence summary shown collapsed.",
  body: [
    "First paragraph of the full story.",
    "Second paragraph, etc.",
  ],
  source: "Optional short note on where this account draws from.",
}
```

Save the file and refresh the page — a new flower appears in the garden
automatically.

## Deploying

The site is static, so any host works (Vercel, Netlify, GitHub Pages, etc).
It's currently deployed via GitHub Pages at
[crimsonarchive.astrolee.com/archive](https://crimsonarchive.astrolee.com/archive),
with a CNAME DNS record at the registrar pointing to `astroslee.github.io`.
