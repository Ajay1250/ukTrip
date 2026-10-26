# UK Christmas Family Holiday 2026

A polished single-page travel guide for a relaxed Christmas trip from Ajax, Ontario, to the UK and back. It includes the Virgin Atlantic Toronto Pearson–Heathrow flight leg, a five-night Edinburgh stay, Birmingham family time, and the return journey from Heathrow to Ajax. The site is designed for GitHub Pages and can be published as a static website with no backend or required API keys.

## What it includes

- Premium editorial travel design inspired by a personal itinerary journal
- Hero section with trip summary and live countdown
- Destination overview cards
- Full interactive map of the trip using Leaflet and OpenStreetMap tiles
- Daily itinerary with travel notes, opening-hour reminders, and driving directions
- Scotland stay extended to December 18–23, with Edinburgh, Glasgow, and weather-dependent Loch Lomond options
- Alternative plans that update the preferred itinerary and daily map, with selections saved through localStorage
- Ajax–Toronto Pearson transfer options by road or GO Transit plus UP Express
- Virgin Atlantic flight reminders without assumed flight numbers or unprovided departure/arrival times
- Christmas Eve, Christmas Day, and Boxing Day family-focused planning
- Travel notes checklist and practical preparation guidance
- GitHub Pages-friendly static structure

## Project structure

- `index.html` — main site structure and content
- `css/styles.css` — full styling and responsive layout
- `js/app.js` — itinerary data, maps, countdown, alternatives, and localStorage interactions
- `assets/images/` — locally stored, attributed Edinburgh Castle and Glasgow Kelvingrove photographs

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

The Ontario ground-transfer plan is December 14. The UK stay starts with the specified Heathrow arrival on December 15 at 7:00 PM local time. The recommended Scotland stay is December 18–23 (five nights), returning to Birmingham before Christmas. The December 31 Heathrow flight is shown at 4:00 PM; onward arrival at Toronto Pearson and the final transfer to Ajax are intentionally left subject to the confirmed booking and service timetable.

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

The recommended alternatives are defined in `alternativeGroups` in `js/app.js`. Change a group's `recommendedKey` to set its default plan. Selecting an option updates the day's text and map and stores the choice locally; the reset button restores that group's recommended plan.

## Updating Christmas transport and attraction information

The itinerary includes reminders to verify actual Christmas transport timetables, attraction opening hours, and holiday engineering works. When official schedules are announced for December 2026:

- update the text in the relevant `notes` values in `js/app.js`
- verify any chosen attraction or transport as these details are time-sensitive
- prefer official operator or attraction websites as the source of truth

## Image licensing and attribution

The site uses remote Unsplash images and two locally stored Wikimedia Commons photographs:

- Edinburgh Castle in December 2023 — Peulle, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source page](https://commons.wikimedia.org/wiki/File:Edinburgh_Castle_dec.23_(2).jpg)
- Kelvingrove Gallery in Glasgow — Herbert Frank, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), [source page](https://commons.wikimedia.org/wiki/File:Glasgow,_Kelvingrove_Gallery_(38560538976).jpg)

Both image files are in `assets/images/` and are credited in the page footer. Their source pages and downloads were checked on October 25, 2026. The remaining remote Unsplash image URLs were also checked for successful responses on that date. Remote hosts can change, so verify links before publishing or replacing images. If you replace or download images, make sure:

- the source permits commercial or web publication use
- attribution is preserved when required by licence terms
- image links remain stable and do not rely on a fragile third-party host

## Notes

- No cost or budget information is included anywhere in the site.
- Christmas Day is intentionally reserved for family time at home.
- No Virgin Atlantic flight number or Toronto departure time has been invented; use the confirmed booking for those details.
- Train schedules, Christmas opening hours, and airport terminal/check-in instructions remain subject to official confirmation.
- All dates and day names have been anchored to the specified trip window: December 14–31, 2026.
