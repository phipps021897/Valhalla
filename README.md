# Valhalla Martial Arts — Website

A modern, single-page site for [Valhalla Martial Arts](https://valhallaweymouth.co.uk/), a not-for-profit gym in Weymouth, Dorset. Built as plain HTML/CSS/JS — no build step, no dependencies.

## Structure

```
index.html      Page markup (hero, about, classes, timetable, pricing, coaches, location, contact)
css/style.css   All styling — dark/gold theme, responsive layout, animations
js/script.js    Mobile nav, sticky header, scroll-reveal animations, back-to-top
assets/img/     Hero image
```

## Running locally

No build tools required. From this folder:

```bash
python3 -m http.server 8420
```

Then open `http://localhost:8420`.

## Updating the timetable or prices

Both live directly in `index.html`:

- Timetable: the `#timetable` section, one `.day-card` per day.
- Prices: the `#pricing` section, one `.price-card` per plan.

Classes run by external instructors (currently the Weymouth BJJ sessions) use the `class-item external` class, which applies the red "Extra Cost" badge.

## Deploying

This is a static site, so it can be hosted for free on GitHub Pages:

1. Push to the `main` branch (already done if you're reading this from the deployed repo).
2. In the repo settings on GitHub, go to **Pages** → set source to the `main` branch, root folder.
3. The site will publish at `https://<username>.github.io/Valhalla/`.

For a custom domain (e.g. `valhallaweymouth.co.uk`), add a `CNAME` file with the domain name and point your DNS at GitHub Pages.
