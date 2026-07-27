# TableRow

A row inside a [`Table`](./Table.md) body. Contains `TableCell` children.

## Import

```svelte
import { Table, TableRow, TableCell } from 'mukade-ui';
```

## Usage

```svelte
<Table columns={['A', 'B']}>
	<TableRow>
		<TableCell>1</TableCell>
		<TableCell>2</TableCell>
	</TableRow>
</Table>
```

## Props

| Prop       | Type      | Default | Description         |
| ---------- | --------- | ------- | ------------------- |
| `children` | `Snippet` | —       | `TableCell` items.  |

All other `HTMLAttributes` are forwarded to the `<tr>`.

## Notes

- Renders a bottom border between rows; the last row's border is removed automatically.
