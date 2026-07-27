# Stack

A flexbox layout primitive for arranging children in a row or column with gap, alignment, and wrapping control.

## Import

```svelte
import { Stack } from 'mukade-ui';
```

## Usage

```svelte
<Stack direction="column" gap="0.5rem" align="stretch">
	<Button>[A]</Button>
	<Button>[B]</Button>
</Stack>
```

## Props

| Prop        | Type                                                | Default    | Description                                        |
| ----------- | --------------------------------------------------- | ---------- | ------------------------------------------------- |
| `direction` | `'row' \| 'column'`                                 | `'row'`    | Main axis direction (`flex-direction`).           |
| `gap`       | `string`                                            | —          | CSS `gap` between children.                       |
| `align`     | `'start' \| 'center' \| 'end' \| 'stretch'`         | `'start'`  | Cross-axis alignment (`align-items`).             |
| `justify`   | `'start' \| 'center' \| 'end' \| 'between' \| 'around'` | `'start'`  | Main-axis distribution (`justify-content`).       |
| `wrap`      | `boolean`                                           | `false`    | Allows children to wrap onto multiple lines.      |
| `children`  | `Snippet`                                           | —          | Stacked content.                                  |

All other `HTMLAttributes` are forwarded to the root element.

## Notes

- `align` and `justify` use friendly keywords that map to the corresponding flexbox values.
