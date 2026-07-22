# Table

A data table. Provide column headers via `columns`, and rows by composing `TableRow` / `TableCell` children. Sizes to content by default, or to a fixed `width`.

## Import

```svelte
import { Table, TableRow, TableCell } from 'mukade-ui';
```

## Usage

```svelte
<Table columns={['ID', 'NAME', 'STATUS']} width="30rem">
	<TableRow>
		<TableCell>01</TableCell>
		<TableCell>KAEDE</TableCell>
		<TableCell>ONLINE</TableCell>
	</TableRow>
</Table>
```

## Props

| Prop       | Type       | Default       | Description                                                    |
| ---------- | ---------- | ------------- | ------------------------------------------------------------- |
| `columns`  | `string[]` | —             | Header labels. Omit to render without a header row.           |
| `width`    | `string`   | `fit-content` | Fixed table width; enables `table-layout: fixed`.             |
| `children` | `Snippet`  | —             | `TableRow` items (table body).                                |

All other `HTMLAttributes` are forwarded to the root element.

## CSS Custom Properties

| Property                  | Falls back to        | Description                          |
| ------------------------- | -------------------- | ------------------------------------ |
| `--mukade-table-accent`   | `--mukade-primary`   | Header underline and header text.    |
| `--mukade-table-bg`       | `--mukade-bg-soft`   | Table background.                    |
| `--mukade-table-max-size` | `none`               | Maximum width before horizontal scroll. |

## Notes

- When `width` is set, the table clips overflow and uses a fixed layout; otherwise it scrolls horizontally up to `--mukade-table-max-size`.
- The native scrollbar is hidden for a cleaner terminal look.
