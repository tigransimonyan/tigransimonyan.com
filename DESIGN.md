# Design

One white page that is only links: the name, one line about him, then labelled groups of links. No images, no embeds, no scripts. Ink on paper.

## Rules

- **White is the material.** No boxes, cards, rules, borders or shadows. Groups are separated by space only (`--space`).
- **Two columns per group** on wide screens: a small grey label in a narrow left column, links beside it. On phones (≤640px) the label sits above its links.
- **Links** are ink with a light grey underline that darkens on hover. A small grey note (year, platform) can follow a link.
- **Content** lives in `_data/links.yml`; adding a link is one line.
- **Motion**: only the underline colour transition, turned off under reduced-motion settings.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--paper` | `#ffffff` | ground |
| `--ink` | `#141414` | text, selection |
| `--ink-soft` | `#6b6b6b` | labels, notes, role (5.3:1) |
| `--line` | `#b5b5b5` | resting underline |
| `--space` | `clamp(2.75rem, 7vh, 4.5rem)` | gap between groups |
| `--gutter` | `clamp(16px, 4vw, 64px)` | page side margin |
| `--text` | `clamp(1.0625rem, …, 1.3125rem)` | links |
| `--name` | `clamp(1.75rem, …, 3rem)`, weight 500, tracking -0.03em | the name |

Type: Hanken Grotesk (self-hosted), Noto Sans Armenian for Armenian script.
