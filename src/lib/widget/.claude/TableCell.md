# TableCell

A single cell inside a [`TableRow`](./TableRow.md). Accepts any content and can be given a fixed width.

## Import

```svelte
import {(Table, TableRow, TableCell)} from 'mukade-ui';
```

## Usage

```svelte
<TableRow>
	<TableCell width="4rem">01</TableCell>
	<TableCell>
		<Badge variant="success" label="OK" />
	</TableCell>
</TableRow>
```

## Props

| Prop       | Type      | Default | Description                              |
| ---------- | --------- | ------- | ---------------------------------------- |
| `width`    | `string`  | `auto`  | Fixed cell width; also caps `max-width`. |
| `children` | `Snippet` | —       | Cell content (text or nested widgets).   |

All other `HTMLAttributes` are forwarded to the `<td>`.

## Notes

- Overflow is clipped with an ellipsis and `white-space: nowrap`; set `width` to control truncation.
