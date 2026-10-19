# Design

The site is one long white page composed as a loose collage, like prints pinned on a studio wall. Film photographs, films, the poem and the cities map sit in bands of two, at different sizes, each hanging at a different height, with a lot of white between bands. The photographs are black and white, so they are the only image on the page; everything else is ink on paper.

## Rules

- **White is the material.** No boxes, cards, rules, borders or shadows on content. Pieces are separated by space only (`--space`, about a fifth of the screen height).
- **Bands on a 12-column grid** (6 on phones). Each band (`group` in `_data/home.yml`) holds two pieces side by side, never overlapping. Each piece sets its own columns (`col`) and how far it hangs below the band's top (`drop`, in % of page width). Pair a large piece with a small one, and alternate which side the large one takes. On phones each band stacks, with photos alternating left and right indents.
- **Photographs** keep their natural aspect ratio and are never cropped. Clicking a photo opens it full size.
- **Films** show a greyscale thumbnail until played. The YouTube player loads only on click, from youtube-nocookie.
- **Map**: grey tiles, greyscale filter, ink dots. Scroll-wheel zoom is off so it never traps the scroll.
- **Motion**: almost none. Only link underlines darken on hover, and film thumbnails gain a little colour and scale slightly on hover. Turned off under reduced-motion settings.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--paper` | `#ffffff` | ground |
| `--ink` | `#141414` | text, map dots, selection |
| `--ink-soft` | `#6b6b6b` | captions, secondary text (5.3:1) |
| `--space` | `clamp(7rem, 22vh, 15rem)` (phones `clamp(5rem, 16vh, 8rem)`) | gap between bands |
| `--gutter` | `clamp(16px, 4vw, 64px)` | page side margin |
| `--name` | `clamp(1.75rem, …, 3rem)`, weight 500, tracking -0.03em | the name |
| `--text` | `clamp(1rem, …, 1.125rem)` | body |
| text pieces | `clamp(1.125rem, …, 1.375rem)`, 34ch measure | the short essays and "More" links |
| `--small` | `0.8125rem` | captions, labels |

## Type

Hanken Grotesk (variable, self-hosted in `assets/fonts/`) for everything, with Noto Sans Armenian under the same family name for Armenian text. Two sizes do the work: large for the name and the text pieces, small for captions. No eyebrows or section numbers.

## Editing

The home page is built from `_data/home.yml` as a list of groups. Each piece takes `col` and `drop`, plus: `photo` + `size`; `film` (YouTube id) + `title` + `year`; `poem` (line breaks kept, set in up to three columns); `map`; `links`.
