# UK Christmas Family Holiday 2026

A polished single-page travel guide for a relaxed Christmas trip across England and Scotland. The site is designed for GitHub Pages and can be published as a static website with no backend or required API keys.

## What it includes

- Premium editorial travel design inspired by a personal itinerary journal
- Hero section with trip summary and live countdown
- Destination overview cards
- Full interactive map of the trip using Leaflet and OpenStreetMap tiles
- Daily itinerary with travel notes, opening-hour reminders, and driving directions
- Alternative-planning cards with selection persistence through localStorage
- Christmas Eve, Christmas Day, and Boxing Day family-focused planning
- Travel notes checklist and practical preparation guidance
- GitHub Pages-friendly static structure

## Project structure

- `index.html` — main site structure and content
- `css/styles.css` — full styling and responsive layout
- `js/app.js` — itinerary data, maps, countdown, alternatives, and localStorage interactions
- `assets/images/` — optional folder for local image assets

## Run locally

From the project root, run a simple local static server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages deployment

1. Push this repository to GitHub.
2. In the GitHub repository settings, open Pages.
3. Set the source to the `main` branch (or your default branch) and use the root folder.
4. Save the configuration.
5. GitHub will provide the deployed site URL.

If your site is published from the root directory, the default static file paths work correctly without extra configuration.

## Updating dates and trip content

The itinerary content is stored in `js/app.js`. Update the `itineraryData` array to change the trip dates, route notes, timings, or daily recommendations.

## Replacing photographs

- Place local images in `assets/images/` if you want a fully self-hosted gallery.
- Update the `image` or `src` values in the data objects and HTML.
- Keep image dimensions sensible and optimise them for the web.
- Prefer licensed photographs from Unsplash or Wikimedia Commons where permitted.
- Maintain the attribution text if required by the source licence.

## Map and Google Maps links

- The map uses Leaflet with OpenStreetMap tiles.
- The route map is intentionally schematic and is not a live road-geometry guarantee.
- Detailed navigation links open Google Maps in a new tab using encoded directions URLs.
- Use the provided links as the primary live navigation source instead of depending on the schematic route line.

## Changing recommended alternatives

The recommended alternatives are defined in the `groups` array inside `buildAlternativeCards()` in `js/app.js`. You can change the recommended default by editing the order or updating which option is selected in localStorage or default logic.

## Updating Christmas transport and attraction information

The itinerary includes reminders to verify actual Christmas transport timetables, attraction opening hours, and holiday engineering works. When official schedules are announced for December 2026:

- update the text in the relevant `notes` values in `js/app.js`
- verify any chosen attraction or transport as these details are time-sensitive
- prefer official operator or attraction websites as the source of truth

## Image licensing and attribution

This project uses remote lifestyle photography for visual richness and public static-site compatibility. If you replace or download images, make sure:

- the source permits commercial or web publication use
- attribution is preserved when required by licence terms
- image links remain stable and do not rely on a fragile third-party host

## Notes

- No cost or budget information is included anywhere in the site.
- Christmas Day is intentionally reserved for family time at home.
- All dates and day names have been anchored to the specified trip window: December 15–31, 2026.
