# CrimsonArchive

Installation_MANSE_2026

A companion website to **The Crimson Archive**, a projected garden
installation of red flowers. The site is a living archive of stories of
bloodshed and sacrifice in the fight for Korean independence — each flower
in the installation corresponds to a story here.

## Structure

- `index.html` — page structure (hero, about, garden, entries, footer)
- `style.css` — the dark, red-and-black visual language
- `stories.js` — **the archive's content**, as a plain array of objects
- `script.js` — renders the garden and entries from `stories.js`, handles
  interaction (click a flower → jump to and expand its story)

No build step or framework — open `index.html` in a browser, or deploy the
folder as-is to any static host.

## Adding a story

Open `stories.js` and add a new object to the `STORIES` array, following the
shape of the existing entries:

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
It's currently deployed via Vercel.
