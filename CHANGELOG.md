# Changelog

## v1.1.0 — Drawer, Radio, and Spinner

Three new widgets. No changes to existing APIs.

**Added**

- `Drawer` — an edge panel that anchors to any of the four sides. `permanent` sits in the layout as a flex sibling and reserves space; `temporary` opens as a modal overlay built on the native `<dialog>` element, which supplies focus trapping, `Escape` to close, and top-layer stacking without hand-rolled logic. Closes on backdrop click and slides in via `@starting-style`.
- `Radio` — single-choice input, drawn in the terminal convention as `( )` and `(X)` so it stays distinguishable at a glance from `Checkbox`'s `[ ]`. Selection is driven by a bindable `group` prop paired with each option's `value`; passing a shared `name` additionally enables the browser's native arrow-key navigation between options.
- `Spinner` — an indeterminate loading indicator cycling through `-\|/`. It covers the case `Progress` cannot: work whose completion ratio is unknown. Exposed as a `status` region while the cycling glyphs stay out of screen reader output, so the change never reads as noise.

**Accessibility**

- `Drawer` and `Spinner` respect `prefers-reduced-motion`. `Spinner` holds a single glyph rather than cycling, and `Drawer` appears without sliding.

## v1.0.1 — Mobile and accessibility pass

No API changes. This release is entirely CSS, and desktop rendering is untouched — every adjustment sits behind a device-capability query (`hover`, `pointer`, `prefers-reduced-motion`).

**Fixed**

- Hover styles no longer stick after a tap on touch devices. Every `:hover` rule is now guarded with `@media (hover: hover)`, so a tapped button no longer stays highlighted until you tap somewhere else.
- `Button` now brightens while pressed, so touch users still get press feedback even though hover never applies to them.
- `Checkbox` and `Toggle` meet a 44px minimum touch target on coarse pointers. The controls themselves are unchanged — only the label's hit area grows, and only on touch devices.
- `Alert` no longer overflows narrow viewports. Its `min-width` is now capped at the container width.

**Accessibility**

- `Progress` respects `prefers-reduced-motion`. Simply stopping the animation would have made the in-flight packet indistinguishable from an idle one, so the transmitting packet takes a static intermediate color instead — progress stays readable without motion.

**Internal**

- Removed two undesigned placeholder rules: `Button`'s empty `:active` block and a no-op background rule in `FilledTextField`. The library now type-checks with zero warnings.

## v1.0.0 — First stable release

The public surface — prop names, `mukade-` class names, and `--mukade-*` hooks — is now considered settled. Semantic versioning applies from here on.

**Added**

- `Progress` — a determinate progress indicator with two variants. `bar` renders a continuous fill with a glowing leading edge; `packets` renders discrete blocks that light up one by one as the transfer advances, with the in-flight packet pulsing. Carries `role="progressbar"` with full `aria-value*` wiring, and coerces and clamps out-of-range or non-numeric input.

**Docs**

- Per-widget documentation moved to the documentation site.
- The changelog moved out of the README into this file.

## v0.6.1 — Theme CSS packaging fix

- Fixed the default theme — every `--mukade-*` token and the web font `@import` — being dropped from consumers' production builds. `dist/index.js` was implicitly marked side-effect-free by the `sideEffects` field, so bundlers tree-shook away its `import './common/index.css'`. Development builds were unaffected, which is why the problem surfaced only after `npm install` followed by a production build.

## v0.6.0 — Robustness, accessibility & the customization API

The largest release so far. It hardens every widget, closes accessibility gaps, and finalizes the CSS-hook customization API. **Contains breaking changes** — see the migration notes below.

**Customization API**

- Added per-widget CSS hooks across the library: `--mukade-{widget}-accent` and, where relevant, `-bg` (`Button` excluded — it uses `size`/`width` props). Each falls back to a theme token, so setting nothing keeps the default look.
- All widget class names are namespaced with the `mukade-` prefix, preventing collisions with consumer global CSS.
- Internal-only variables moved to the `--_mukade-*` convention and locked with `@property { inherits: false }`, so ambient CSS can no longer leak into private layout values.

**Accessibility**

- `Checkbox` and `Toggle` now render a visible `:focus-visible` ring on the styled control (the native input is hidden, so keyboard focus was previously invisible).
- `Alert` sets `role="status"` / `role="alert"` per severity.

**Widget fixes**

- `Select`: closes on outside click and `Escape`; the dropdown now has a solid background and a configurable `z-index` (`--mukade-select-z-index`).
- `TextField`: SSR-safe ids via `$props.id()`; forwards native input attributes (`name`, `required`, `disabled`, `onchange`, …) so it works in real forms; user `onfocus`/`onblur` handlers are preserved; label typing/cleanup no longer leaks a timer.
- `Text`: fixed color tones — `default` is the base text color and `primary`/`danger` map to their accents (previously mislabeled).
- `Alert`: `info` and `danger` are now visually distinct (`danger` uses a filled, bolder treatment).
- `Divider`: unified on a single `--mukade-divider-accent` hook for both orientations and the label.

**⚠️ Breaking changes**

- `Textarea`: the `text` prop was renamed to `value` (now consistent with every other input). Use `bind:value`.
- `Button`: `size` now takes a CSS length controlling font size (was `'large' | 'medium' | 'small'`); a separate `width` prop controls width.
- `Badge`: the `idle` variant was renamed to `ghost`.

## v0.5.0 — Namespacing & private variables

- Introduced the `mukade-` class prefix and the `--_mukade-*` private-variable convention.
- Added the first `--mukade-*-accent` hooks to `Checkbox` and `Toggle`.

## v0.4.0 — Widget expansion & demo site

- Expanded the widget set and added the demo / widget showcase pages.

## v0.3.0

- `Text`: added `variant` (`'crt' | 'led'`) and `glow` props; default font swapped (`mono` → `vt`).
- `Panel`: added `variant` (`'primary' | 'soft-line'`).
- `Toggle`: added string `size`.
