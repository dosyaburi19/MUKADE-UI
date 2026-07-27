# MUKADE-UI

A terminal-style **Svelte 5** UI component library. Retro hacker / CRT aesthetics for modern web applications, with a minimal dependency footprint.

> Aiming to be for Svelte what MUI is for React — but with its own scanline soul.

---

## Installation

```bash
npm install mukade-ui
```

**Peer dependency:** `svelte ^5.0.0`

---

## Setup

Importing any component automatically pulls in the default theme (CSS custom properties) as a side effect — no separate stylesheet import is required.

```svelte
<script>
	import { Button, Panel, Input } from 'mukade-ui';
</script>
```

### Fonts

The `VT323` and `Share Tech Mono` web fonts are core to the terminal look, so the theme loads them from Google Fonts automatically — no extra import is needed. If a font fails to load (offline, blocked, etc.), the components fall back to the system monospace stack.

### Theming

Override any token in your global CSS to retheme the whole library. This requires **no** `:global()` — custom properties cascade normally:

```css
:root {
	--mukade-primary: #e03030; /* accent / brand */
	--mukade-bg: #0a0a0a;
	--mukade-bg-soft: #0f0f0f;
	--mukade-text: #e8e8e8;
	--mukade-text-dim: #888;
	--mukade-success: #39ff14;
	--mukade-warn: #ff9900;
}
```

The full default palette ships in [`src/lib/common/index.css`](src/lib/common/index.css).

---

## Quick start

```svelte
<script>
	import { Panel, Input, Button, Container } from 'mukade-ui';
</script>

<Container style="display:flex; justify-content:center; align-items:center; height:100%;">
	<Panel width="20rem">
		{#snippet header()}
			<span>LOGIN</span>
		{/snippet}

		<Input style="width:100%" placeholder="username" />
		<Input style="width:100%" type="password" placeholder="password" />

		{#snippet footer()}
			<Button variant="primary">[CONFIRM]</Button>
		{/snippet}
	</Panel>
</Container>
```

---

## Customization model

MUKADE-UI is customizable in three layers, from broad to precise:

1. **Theme tokens** — `--mukade-*` globals retheme everything at once.
2. **Props** — curated `variant` / `size` / `width` options per component.
3. **Per-component CSS hooks** — `--mukade-{widget}-accent` / `-bg` recolor a single component (or a subtree) without `:global()`. For example:

```svelte
<Button variant="primary">default red</Button>
<Table style="--mukade-table-accent: cyan; --mukade-table-bg: #001010;">…</Table>
```

Internal-only variables use the `--_mukade-*` prefix and are locked with `@property { inherits: false }`, so external CSS never leaks into a component's private layout.

---

## Components

Per-component documentation lives in [`src/lib/widget/.claude/`](src/lib/widget/.claude) (English) and [`.claude/ko/`](src/lib/widget/.claude/ko) (한국어).

### Primitive

| Component                                      | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- |
| [`Text`](src/lib/widget/.claude/Text.md)       | Themed text with color, font, CRT/LED variants |
| [`Badge`](src/lib/widget/.claude/Badge.md)     | Status tag / corner overlay with count support |
| [`Avatar`](src/lib/widget/.claude/Avatar.md)   | Profile image with status and name block       |
| [`Divider`](src/lib/widget/.claude/Divider.md) | Horizontal / vertical separator with label     |

### Layout

| Component                                            | Description                              |
| ---------------------------------------------------- | ---------------------------------------- |
| [`Container`](src/lib/widget/.claude/Container.md)   | Full-width centering wrapper             |
| [`Stack`](src/lib/widget/.claude/Stack.md)           | Flex row / column layout                 |
| [`Section`](src/lib/widget/.claude/Section.md)       | Semantic block with terminal-style title |
| [`Panel`](src/lib/widget/.claude/Panel.md)           | Card with header / footer / status dots  |
| [`ScrollArea`](src/lib/widget/.claude/ScrollArea.md) | Overflow container with custom scrollbar |

### Input

| Component                                                | Description                          |
| -------------------------------------------------------- | ------------------------------------ |
| [`Button`](src/lib/widget/.claude/Button.md)             | Button with variants, size, width    |
| [`Input`](src/lib/widget/.claude/Input.md)               | Single-line text input               |
| [`Textarea`](src/lib/widget/.claude/Textarea.md)         | Multi-line text input                |
| [`Checkbox`](src/lib/widget/.claude/Checkbox.md)         | Boolean box with indeterminate state |
| [`Toggle`](src/lib/widget/.claude/Toggle.md)             | Switch-style boolean input           |
| [`Select`](src/lib/widget/.claude/Select.md)             | Dropdown selector                    |
| [`SelectOption`](src/lib/widget/.claude/SelectOption.md) | Option item for `Select`             |
| [`TextField`](src/lib/widget/.claude/TextField.md)       | Labeled input with floating label    |

### Feedback

| Component                                  | Description                      |
| ------------------------------------------ | -------------------------------- |
| [`Alert`](src/lib/widget/.claude/Alert.md) | Status message box with variants |

### Data

| Component                                          | Description                      |
| -------------------------------------------------- | -------------------------------- |
| [`Table`](src/lib/widget/.claude/Table.md)         | Data table (fixed / fit-content) |
| [`TableRow`](src/lib/widget/.claude/TableRow.md)   | Table row                        |
| [`TableCell`](src/lib/widget/.claude/TableCell.md) | Table cell (accepts any content) |

---

## Changelog

### v0.6.0 — Robustness, accessibility & the customization API

The largest release so far. It hardens every widget, closes accessibility gaps, and finalizes the CSS-hook customization API. **Contains breaking changes** — see the migration notes below.

**Customization API**

- Added per-component CSS hooks across the library: `--mukade-{widget}-accent` and, where relevant, `-bg` (`Button` excluded — it uses `size`/`width` props). Each falls back to a theme token, so setting nothing keeps the default look.
- All widget class names are namespaced with the `mukade-` prefix, preventing collisions with consumer global CSS.
- Internal-only variables moved to the `--_mukade-*` convention and locked with `@property { inherits: false }`, so ambient CSS can no longer leak into private layout values.

**Accessibility**

- `Checkbox` and `Toggle` now render a visible `:focus-visible` ring on the styled control (the native input is hidden, so keyboard focus was previously invisible).
- `Alert` sets `role="status"` / `role="alert"` per severity.

**Component fixes**

- `Select`: closes on outside click and `Escape`; the dropdown now has a solid background and a configurable `z-index` (`--mukade-select-z-index`).
- `TextField`: SSR-safe ids via `$props.id()`; forwards native input attributes (`name`, `required`, `disabled`, `onchange`, …) so it works in real forms; user `onfocus`/`onblur` handlers are preserved; label typing/cleanup no longer leaks a timer.
- `Text`: fixed color tones — `default` is the base text color and `primary`/`danger` map to their accents (previously mislabeled).
- `Alert`: `info` and `danger` are now visually distinct (`danger` uses a filled, bolder treatment).
- `Divider`: unified on a single `--mukade-divider-accent` hook for both orientations and the label.

**⚠️ Breaking changes**

- `Textarea`: the `text` prop was renamed to `value` (now consistent with every other input). Use `bind:value`.
- `Button`: `size` now takes a CSS length controlling font size (was `'large' | 'medium' | 'small'`); a separate `width` prop controls width.
- `Badge`: the `idle` variant was renamed to `ghost`.

### v0.5.0 — Namespacing & private variables

- Introduced the `mukade-` class prefix and the `--_mukade-*` private-variable convention.
- Added the first `--mukade-*-accent` hooks to `Checkbox` and `Toggle`.

### v0.4.0 — Widget expansion & demo site

- Expanded the widget set and added the demo / component showcase pages.

### v0.3.0

- `Text`: added `variant` (`'crt' | 'led'`) and `glow` props; default font swapped (`mono` → `vt`).
- `Panel`: added `variant` (`'primary' | 'soft-line'`).
- `Toggle`: added string `size`.

---

## License

MIT © dosyaburi19
