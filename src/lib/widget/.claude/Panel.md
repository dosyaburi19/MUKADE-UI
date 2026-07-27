# Panel

A framed card container with optional header and footer regions, and an optional row of status dots in the header. The staple building block for terminal-style windows and login boxes.

## Import

```svelte
import { Panel } from 'mukade-ui';
```

## Usage

```svelte
<Panel width="20rem" dots={{ index: 2, max: 3 }}>
	{#snippet header()}
		<span>SESSION</span>
	{/snippet}

	<!-- body -->

	{#snippet footer()}
		<Button>[CONFIRM]</Button>
	{/snippet}
</Panel>
```

## Props

| Prop       | Type                          | Default     | Description                                                     |
| ---------- | ----------------------------- | ----------- | -------------------------------------------------------------- |
| `variant`  | `'primary' \| 'soft-line'`    | `'primary'` | `soft-line` mutes all borders to a subtle tone.                |
| `header`   | `Snippet`                     | —           | Header content. Omit to hide the header region.                |
| `footer`   | `Snippet`                     | —           | Footer content. Omit to hide the footer region.                |
| `width`    | `string`                      | `fit-content` | CSS width of the panel.                                       |
| `dots`     | `{ index: number; max: number }` | —        | Renders `max` dots in the header; the first `index` are filled.|
| `children` | `Snippet`                     | —           | Panel body.                                                    |

All other `HTMLAttributes` are forwarded to the root element.

## CSS Custom Properties

| Property                | Falls back to          | Description                              |
| ----------------------- | ---------------------- | ---------------------------------------- |
| `--mukade-panel-accent` | `--mukade-primary`     | Border, header/footer, and dot color.    |
| `--mukade-panel-bg`     | `--mukade-bg-soft`     | Panel background.                        |

## Notes

- `dots` only render when a `header` snippet is present.
- Header/footer tint blends `--mukade-panel-accent` into `--mukade-panel-bg`, so both hooks compose cleanly.
