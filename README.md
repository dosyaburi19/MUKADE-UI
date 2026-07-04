# PATCH [v0.2.1]

- add variant props in Text Widget ('crt' | 'led' variant added!)
- add glow props in Text Widget (true | false type added!)

# MUKADE-UI (DEMO)

Terminal-style Svelte 5 UI component library.  
Retro hacker aesthetics for modern web applications.

---

## Installation

```bash
npm install mukade-ui
```

**Peer dependency:** `svelte ^5.0.0`

---

## Setup

MUKADE-UI uses CSS custom properties for theming. Add the following variables to your global CSS:

```css
:root {
	--mukade-primary: #00ff88;
	--mukade-bg-soft: #0d0d0d;
	--mukade-text: #e0e0e0;
	--mukade-text-dim: #666666;
	--mukade-placeholder: #444444;
	--mukade-success: #00ff88;
	--mukade-danger: #ff4444;
	--mukade-warn: #ffaa00;
	--mukade-font-mono: monospace;
}
```

---

## Usage

```svelte
<script>
	import { Button, Container, Input, Panel } from 'mukade-ui';
	import 'mukade-ui/dist/index.css';
</script>

<Container style="display:flex; justify-content:center; align-items:center; height: 100%;">
	<Panel size="20rem">
		{#snippet header()}
			<span>LOGIN</span>
		{/snippet}

		<Input style="width: 100%" placeholder="username" />
		<Input style="width: 100%" placeholder="password" />

		{#snippet footer()}
			<Button variant="primary">[CONFIRM]</Button>
		{/snippet}
	</Panel>
</Container>
```

---

## Components

### Base

| Component | Description                              |
| --------- | ---------------------------------------- |
| `Text`    | Styled text with color and size variants |
| `Badge`   | Status indicator with count support      |
| `Divider` | Horizontal / vertical separator          |

### Action

| Component      | Description                             |
| -------------- | --------------------------------------- |
| `Button`       | Clickable button with variants          |
| `Input`        | Single-line text input                  |
| `Textarea`     | Multi-line text input                   |
| `Checkbox`     | Boolean toggle with indeterminate state |
| `Toggle`       | Switch-style boolean input              |
| `Select`       | Dropdown selector                       |
| `SelectOption` | Option item for Select                  |
| `TextField`    | Input with label and variants           |

### Layout

| Component    | Description                              |
| ------------ | ---------------------------------------- |
| `Panel`      | Card-like container with header / footer |
| `Container`  | Block layout wrapper                     |
| `Stack`      | Flex-based stacking layout               |
| `ScrollArea` | Overflow container with scroll           |

### Display

| Component   | Description                                |
| ----------- | ------------------------------------------ |
| `Avatar`    | User profile image with status indicator   |
| `Table`     | Data table with fixed / fit-content sizing |
| `TableRow`  | Table row                                  |
| `TableCell` | Table cell (supports any content)          |

### Feedback

| Component | Description                      |
| --------- | -------------------------------- |
| `Alert`   | Status message box with variants |

---

## Variants

```svelte
<Button variant="primary">[CONFIRM]</Button>
<Button variant="danger">[DELETE]</Button>
<Button variant="warn">[CAUTION]</Button>
<Button variant="success">[OK]</Button>
<Button variant="ghost">[CANCEL]</Button>
```

---

## License

MIT © dosyaburi
