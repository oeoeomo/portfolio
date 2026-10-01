# Agent Instructions — Hyojin mo

## Source of truth

- Read `PRD.md` before changing product behavior, content, layout, or visual design. Treat it as the current product requirements.
- Preserve the user's latest explicit request when it differs from an older PRD detail; update the PRD when the requested change alters product requirements.

## Current product snapshot

- The site has `Home`, `Hyojin mo` (About), `Works`, and `contact` routes.
- The Home page currently shows three projects: `orizine fair`, `샌드위치, 샌디치, 샌치`, and `미끄럼틀체`.
- Project image files live in `images/`: `orizine fair.jpg`, `샌디치.jpg`, and `팔레트.png`.
- Keep the sandwich card connected to `#work-sandwich` and the typeface card connected to `#work-mikkeulche`.
- Refer to `PRD.md` for full current page content, typography, layout, and acceptance criteria.

## Technical constraints

- This is a static website built with vanilla HTML, CSS, and JavaScript.
- Do not introduce a framework, build system, package manager, or dependency unless explicitly requested.
- Keep page content in `index.html`, shared presentation in `styles.css`, and hash navigation or browser behavior in `script.js`.
- Keep existing image assets in their current locations and reference their exact filenames, including spaces and Korean characters. Do not rename or replace user assets without permission.
- The stylesheet URL in `index.html` uses a version query to prevent stale browser caching. Update that query when CSS changes so browser previews load the new styles.

## Navigation and behavior

- Preserve the four header routes: `#home`, `#about`, `#works`, and `#contact`.
- Keep project-specific hash routes connected to the matching `.work-detail` IDs. A project-card route shows only its selected detail; the `Works` navigation route shows the full project list.
- Preserve browser back/forward behavior through the `hashchange` handler.
- Preserve keyboard access, visible focus behavior, meaningful image alt text, and semantic headings and lists.

## Design conventions

- Keep the page background white, the sticky header transparent, and header menu boxes very light gray.
- Use the existing serif content typography and Pretendard for header navigation; reuse current CSS rules and page patterns.
- Home project cards are edge-to-edge tiles: two columns on desktop and one column on narrow screens. Keep title and image alignment consistent with the relevant card.
- Preserve source image proportions unless the PRD or user explicitly requests a fixed frame or crop. Avoid broken image paths.
- Keep scroll-reveal behavior responsive to `prefers-reduced-motion`.

## Change and verification workflow

- Make the smallest focused change that satisfies the request; avoid unrelated cleanup or formatting churn.
- Before editing, inspect the owning markup, style, or behavior and nearby responsive rules.
- After editing, verify the affected route in a browser, including image loading, project selection, and responsive behavior where relevant.
- Check workspace diagnostics for edited files. There is no configured build or test suite; do not invent one for small static-site changes.
