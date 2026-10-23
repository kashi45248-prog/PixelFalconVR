# PixelFalconVR website

Studio site for PixelFalconVR — a VR company crafting original virtual reality games.
Live at: https://kashi45248-prog.github.io/PixelFalconVR/

## How to add a new game (3 steps)

1. **games-data.js** — copy the Neon Katana object, paste it before the closing `];`, fill in slug/title/genre/price/storeUrl/image.
2. **New page** — copy `game-template.html` to `<slug>.html`, replace ALL-CAPS placeholders (title, genre, price, store URL, FAQs in users' search phrasings).
3. **sitemap.xml** — copy a `<url>` block with the new page URL.

The homepage grid renders automatically from `games-data.js`. No build step.

## Per-game SEO checklist (see also: vr-game-launch-seo-checklist.md)
- Keyword-first `<title>`: "<Game> – <Genre> for Meta Quest"
- H1 + intro lead with the genre query
- 6–8 FAQs phrased how users search ("games like X", "best <genre> quest 3")
- VideoGame + FAQPage JSON-LD (generate FAQPage from the FAQ blocks)
- Screenshots in `images/` with keyword-rich filenames + alt text
- Meta Horizon Store description rewritten with genre keywords (dashboard edit)

## Notes
- Deploy: GitHub Pages from main branch (repo: kashi45248-prog/PixelFalconVR).
  Pushes go via GitHub web UI (API pushes blocked on this account).
- Contact everywhere: pixelfalconvr@gmail.com
- TODO: real Meta Horizon Store URL for Neon Katana (placeholder in 2 spots);
  drop gameplay screenshots into images/ and wire into neon-katana.html.
