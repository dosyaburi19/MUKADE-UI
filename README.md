# MUKADE-UI [v_1.0.0]

[![npm](https://img.shields.io/npm/v/mukade-ui)](https://www.npmjs.com/package/mukade-ui)
[![license](https://img.shields.io/npm/l/mukade-ui)](LICENSE)

A terminal-style **Svelte 5** UI widget library. Retro hacker / CRT aesthetics for modern web applications, with a minimal dependency footprint.

> Retro by design, not by decoration.

**[Documentation→](https://mukade-ui.com)**

---

## Installation

```bash
npm install mukade-ui
```

**Requires** `svelte ^5.0.0` as a peer dependency.

---

## Quick start

Importing a widget pulls in the default theme automatically — there is no separate stylesheet to import.

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

Works in TypeScript and plain JavaScript projects alike, and renders correctly under SSR.

---

## Setup

No configuration step is required — importing any widget is enough.

### Fonts

`VT323` and `Share Tech Mono` are core to the terminal look, so the theme loads them from Google Fonts automatically. If a font fails to load — offline, blocked, or otherwise — widgets fall back to the system monospace stack.

---

## Theming

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

## Customization model

MUKADE-UI is customizable in three layers, from broad to precise:

1. **Theme tokens** — `--mukade-*` globals retheme everything at once.
2. **Props** — curated `variant` / `size` / `width` options per widget.
3. **Per-widget CSS hooks** — most widgets expose `--mukade-{widget}-accent`, plus `-bg` where relevant, to recolor a single widget or subtree without `:global()`.

```svelte
<Button variant="primary">default red</Button>
<Table style="--mukade-table-accent: cyan; --mukade-table-bg: #001010;">…</Table>
```

Internal-only variables use the `--_mukade-*` prefix and are locked with `@property { inherits: false }`, so external CSS never leaks into a widget's private layout.

---

## Widgets

Props, CSS variables, and live examples for each widget are on the documentation site.

| Category      | Widgets                                                                    |
| ------------- | -------------------------------------------------------------------------- |
| **Primitive** | Text, Badge, Avatar, Divider                                               |
| **Layout**    | Container, Stack, Section, Panel, ScrollArea                               |
| **Input**     | Button, Input, Textarea, Checkbox, Toggle, Select, SelectOption, TextField |
| **Feedback**  | Alert, Progress                                                            |
| **Data**      | Table, TableRow, TableCell                                                 |

---

## API stability

1.0.0 is the first stable release. The public surface — prop names, `mukade-` class names, and `--mukade-*` hooks — is now considered settled, and semantic versioning applies from here on.

Early 1.0.x releases may still bring small, targeted adjustments as real-world usage surfaces edge cases. Anything genuinely breaking waits for the next major.

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

---

## License

MIT © dosyaburi19
