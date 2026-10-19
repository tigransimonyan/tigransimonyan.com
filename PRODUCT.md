# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Visitors who arrive wanting to see Tigran Simonyan's work, photography first. Most come from links on analog.am, Mastodon, Pixelfed or other independent platforms, or from the projects he has built. Their job is to look at the film photographs and short films, get a sense of who made them, and find a way to see more or get in touch.

## Product Purpose
A personal website for Tigran Simonyan, a film photographer, filmmaker, programmer and open-source contributor living in Yerevan, Armenia. Film photography and short films are the main event; software projects are secondary. Success: a visitor sees the photographs, follows through to analog.am or the films, and can find Tigran's projects and contacts without searching.

## Positioning
Analog-film work from someone who also builds the independent platforms it lives on (analog.am among them), and who deliberately avoids mainstream corporate platforms in favour of independent alternatives (Mastodon, XMPP, WriteFreely, Pixelfed).

## Operating Context
- Jekyll 4.3 static site on GitHub Pages with a custom domain (`CNAME`: tigransimonyan.com). Styles are Sass at `assets/css/home.scss`.
- Photos are hot-linked from analog.am (`photos.md` front matter); the full archive is at https://analog.am/tigran.
- Films are YouTube embeds via youtube-nocookie (`films.md` front matter).
- The visited-cities map uses Leaflet 1.9.4 from unpkg; data lives in `assets/js/visited-map.js`, and each city links to analog.am photo collections.

## Capabilities and Constraints
- Pages to keep: Home, Photos, Films.
- Must keep: the visited-cities map and the gift wishlist link (Amazon).
- Being dropped: the joke password-gated "Blog" page and the "Links / under construction" placeholder page.
- Home content to keep: the projects list (Choose Like Buddha, outage.am, joinrave.com, zoomment.com, analog.am, բառարան.հայ), the EVN Report article, GitHub, and contacts (email tigran@def.am, XMPP tigran@jabber.def.am).
- The two body paragraphs (bio and independent-web statement) were removed at the owner's request (2026-10-19); the "I am not my…" poem is the page's only body text.
- Undecided: whether a real blog will exist later (WriteFreely is mentioned in the bio).

## Brand Commitments
- Name: Tigran Simonyan.
- The owner wants the redesign to be minimalistic, simple and clean. The current 1996-homepage parody (marquee, visitor counter, Netscape badges, "under construction") is being replaced, not kept.
- Values to keep visible: independent web, free speech, no mainstream corporate platforms.
- Armenian-script content (բառարան.հայ) must render correctly.

## Evidence on Hand
- Portrait: `uploads/photo.jpg` (credit: "photo by Gaga").
- Nine film photographs (URLs in `photos.md`) and the full archive on analog.am.
- Two short films (YouTube IDs in `films.md`).
- Press: EVN Report, "Salt: analog photography in Yerevan" (https://evnreport.com/lifestyle/salt-analog-photography-in-yerevan/).
- Visited cities with photo sets: Dubrovnik, Vienna, Rome (2025); Hamburg, Berlin, Athens (2026). Visited without photo sets: Yerevan (home), Tbilisi, Odessa.
- None of these exist, so they must not be made up: client list, testimonials, awards, exhibition history.

## Product Principles
1. The photographs lead; everything else steps back.
2. Every outbound path (analog.am, films, projects, contact) is easy to find.
3. Independent and self-hosted in spirit: no tracking, no corporate embeds beyond what the content needs.
4. Small and easy to maintain by hand: adding a photo, film or city stays a one-line edit.
