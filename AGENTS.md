Agent Notes – CV Frontend

Purpose
- Quick context for future edits: where things live, how features work, and which knobs to turn.

Stack Overview
- Angular standalone components, Angular Router.
- Global SCSS with CSS variables for theming.

Run/Develop
- Start dev server: `npm start` (Angular CLI `ng serve`).
- Entry: `src/main.ts`, routes in `src/app/app.routes.ts`.

Key Shell Files
- App shell: `src/app/app.component.html`, `src/app/app.component.scss` (header/nav), `src/app/app.routes.ts` (routes).
- Global theme: `src/styles.scss` (CSS vars, dark background, smoothing, fixed gradients).

Timeline Feature
- Model: `src/app/features/timeline/timeline.model.ts`
  - `interface TimelineEvent { date: string; title: string; subtitle?; description?; tags?; photos?; golden?; diamond? }`
  - `date` is ISO (e.g., `"2021-08-01"`). Only one date per event.
- Data: `src/app/features/timeline/timeline.data.ts`
  - Keep events in increasing order (oldest first → newest last).
  - Add `golden: true` for a golden glow without changing its fill.
  - Add `diamond: true` for a diamond-shaped marker with an icy shimmer. Do not combine with `golden`.
- Component: `src/app/features/timeline/timeline.component.ts`
  - Filtering: tag chips in a right sidebar. `selectedTags` manages active tags.
  - Dot color: `getDotBackground(e)` derives a color or conic gradient from visible tag colors.
  - Golden glow: `e.golden` adds a light halo (does not override fill).
  - Diamond marker: `e.diamond` rotates the dot 45° with cyan shimmer.
  - Spacing toggle: `useTemporalSpacing` (checkbox in filters).
    - Default spacing: 48px between nodes.
    - Temporal spacing formula: `nodeHeightPx + diffDays * 4` (uses absolute days between adjacent event dates). `nodeHeightPx` ≈ 56.
    - Adjust multiplier or base in `getItemMargin()`.
  - Dates/labels: `getDate(e)` parses `e.date`. Template uses pipes for display: `yyyy` and `MMM yyyy`.
  - Year markers: `yearMarkers` computes axis tick positions (Jan 1 for each year) via linear interpolation using cumulative offsets. Shown when temporal spacing is on.
  - Year badge: `.timeline__year` shows the first event of each year next to the axis.
- Styles: `src/app/features/timeline/timeline.component.scss`
  - Layout: vertical axis at `--axis-x` (default 150px). Date label width `--date-width`.
  - Right sidebar width assumed ~240px; container has extra `padding-right` to make room.
  - Dark theme colors for line, chips, popover, tags.

Projects Feature
- Model: `src/app/features/projects/projects.model.ts` (`Project`, `ProjectLink`).
- Data: `src/app/features/projects/projects.data.ts` (add new projects here).
- Component: `src/app/features/projects/projects.component.ts` (card grid, details toggle per project).
- Styles: `src/app/features/projects/projects.component.scss` (dark card UI, tags, buttons).

Theming
- Variables: in `src/styles.scss`
  - `--accent`, `--accent-2`, `--text`, `--muted` tuned for dark backgrounds.
- Background: layered gradients + `background-attachment: fixed` to avoid scroll glitches.
- Headings use higher-contrast colors; global font smoothing and letter-spacing set.

Accessibility
- Timeline dot button uses `aria-pressed` binding.
- Decorative images use empty `alt` in timeline popovers.

Common Gotchas
- Angular template casts: use `$any($event.target).checked` for checkbox change handlers.
- Keep timeline data sorted increasing (old → new) so spacing and ticks feel natural. The code handles either order, but increasing is expected.

Quick How-Tos
- Add timeline event: append to `timeline.data.ts` with ISO `date`, keep list sorted ascending.
- Highlight an event: set `golden: true`.
- Add project: add an item to `projects.data.ts` with `id`, `name`, `short`, optional `description`, `details`, `tags`, `links`.
- Tweak spacing: in `timeline.component.ts#getItemMargin`, change `nodeHeightPx` or the `* 4` multiplier.
- Always show year ticks: render `timeline__year-markers` unconditionally in template, or gate with a separate toggle.

Photos Options
- Timeline photos can be strings or objects.
- Object shape: `{ src: 'assets/pic.jpg', keepRatio?: boolean, initialSize?: 0 | 1 | 2 }`.
- `keepRatio` preserves the intrinsic aspect ratio (uses `object-fit: contain`).
- `initialSize` sets starting zoom: 0 (default), 1 (big), 2 (bigger).
