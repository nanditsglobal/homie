# hammadakhawaja.com — portfolio site

Personal portfolio for **Hammad A. Khawaja** — Head of Creatives at 31G, brand strategist, UI/UX
designer and fine artist (BFA Painting), 18+ years. The site replaces the current WordPress/Elementor
site at hammadakhawaja.com. It was designed on a Claude design canvas and ported here; this repo is
now the source of truth.

## Stack and commands

- Vite 5 + React 18 + React Router 6. Plain JavaScript (JSX), no TypeScript.
- Styling: one hand-written stylesheet, `src/styles/global.css`, with tokens in `:root`. No Tailwind,
  no CSS-in-JS, no UI kit, no animation library — all motion is CSS.
- `npm install`, `npm run dev` (http://localhost:5173), `npm run build` (outputs `dist/`), `npm run preview`.
- Import alias: `@/` → `src/` (set in `vite.config.js`).

## Structure

```
index.html                  meta, Open Graph, fonts, JSON-LD (Person, WebSite, FAQPage)
public/                     images (WebP), favicon.svg, llms.txt (summary for AI crawlers)
src/data/site.js            ALL copy and data — edit content here, not in components
src/App.jsx                 routes + scroll-to-#hash on navigation
src/components/Header.jsx   glass toggle menu, scroll spy, border trail, glass CTA
src/components/Hero.jsx     portrait, shimmer line, per-character headline, stats, org strip
src/components/Portfolio.jsx  filterable grid (featured case studies + archive)
src/components/ServicesList.jsx, About.jsx, HomeSections.jsx (Testimonials, Faq, Contact), Footer.jsx
src/pages/Home.jsx, ServicePage.jsx (/services/:slug), CaseStudyPage.jsx (/work/:slug), NotFound.jsx
```

Routes: `/`, `/services/{brand-strategy|product-design|communication-multimedia|art-direction|ai-prototyping}`,
`/work/{iylus|dr-iq|abode|artwork}`. Homepage sections: `#top #work #services #about #testimonials #faq #contact`.

## Conventions

- Content lives in `src/data/site.js`. Components render data; don't hard-code copy in JSX.
- `[Square brackets]` in content = placeholder awaiting real content from Hammad. Never invent
  project facts, results, clients, dates or numbers to fill them — ask.
- Class names are BEM-ish (`block__element`, `is-active`). Add new tokens to `:root` rather than raw hex values.
- Keep `faq` in `site.js` and the FAQPage JSON-LD in `index.html` in sync.
- British English in copy (organisations, colour, centred).

## Design system (keep consistent)

- Ground `#100E0B`, raised `#161614`; ink `#EDEAE3`; muted `#A8A49B`; lines `#2A2925` / `#3A3934`.
- One accent family: `--accent #FF6A3D` (eyebrows, solid CTAs) and the flame gradient
  `#FF3D00 → #FF8A1F` (hero "View portfolio" button only, plus a faint drift inside "Start a project").
- Fonts: Bricolage Grotesque (display), Manrope (body), IBM Plex Mono (labels/eyebrows),
  Instrument Serif italic for the single accent word "Pixels" in the hero only.
- Everything interactive is pill-shaped (`border-radius: 999px`); cards use small radii (4–16px).
- Motion is subtle and always disabled under `prefers-reduced-motion` (see the block at the end of global.css).

## Signature interactions (built on purpose — don't simplify away)

- **Header menu**: recessed liquid-glass track. Hover = faint frosted ghost that slides between items.
  Current section = raised glossy thumb with a faint ember tint, springing between items (scroll spy on
  the homepage; fixed to Services/Portfolio on inner pages). A soft light circles the menu outline
  (CSS `offset-path` border trail, after the motion-primitives BorderTrail component).
- **Start a project**: monochrome liquid-glass pill with the flame gradient drifting very slowly beneath (9s loop).
- **Hero**: portrait in the right column with edges feathered to transparent (radial mask) and a very slow
  zoom; below 1100px it sits faded behind the copy. Location line has a text shimmer (after TextShimmer).
  Headline fades in per character (after TextEffect per="char" preset="fade"); screen readers get one plain sentence.
- **About**: on desktop the left column is `position: sticky` (top 120px) while the experience list scrolls, then releases.

## Open items (need Hammad's input)

- Case study content for Iylus, Dr. iQ, Abode, Artwork (problem, role, process images, outcomes).
  The current hammadakhawaja.com case pages contain only theme demo text — don't copy from them.
- Archive tile images (21 placeholders in `portfolio`). Source images are on Coroflot/Behance.
- `[N]` projects delivered (hero stat), `[University name]`, résumé PDF (`person.resumeUrl`; button hidden until set),
  other AI tools in the AI stack line, confirmed client regions in the last FAQ answer.
- Service pages: hero images and the four process-step descriptions on each.
- An AI prototype case study for the AI Prototyping service's "Related work".
- `og:image` (1200×630) at `/img/og-share.png`.
- Design question to raise: the hero H1 no longer contains his name (eyebrow reads
  "Creative Head | Brand strategist | ux expert"). Title tag and JSON-LD carry the name; adding it back to the H1 helps SEO.

## Deployment notes

- Static SPA. Hosts need a fallback to `index.html` for deep links (Vercel/Netlify do this with a rewrite).
- The previous plan was WordPress/Elementor: if the site goes back into Elementor, convert sections to
  Elementor template JSON; the custom interactions (menu thumb, border trail, shimmer, per-char headline)
  need custom code widgets.
