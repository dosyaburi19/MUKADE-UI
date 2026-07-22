# Button

A clickable button with five color variants and independent size/width control. Extends all native `<button>` attributes.

## Import

```svelte
import { Button } from 'mukade-ui';
```

## Usage

```svelte
<Button variant="primary" onclick={submit}>[CONFIRM]</Button>
<Button variant="ghost" disabled>[CANCEL]</Button>
<Button width="100%" size="1.5rem">[BIG]</Button>
```

## Props

| Prop       | Type                                                      | Default     | Description                                    |
| ---------- | -------------------------------------------------------- | ----------- | ---------------------------------------------- |
| `variant`  | `'primary' \| 'danger' \| 'warn' \| 'success' \| 'ghost'`| `'primary'` | Color scheme.                                  |
| `size`     | `string`                                                 | `1rem`      | CSS `font-size` (scales the whole button).     |
| `width`    | `string`                                                 | `fit-content` | CSS width.                                    |
| `children` | `Snippet`                                                | —           | Button label.                                  |

All other `HTMLButtonAttributes` (`onclick`, `disabled`, `type`, `form`, …) are forwarded to the `<button>`.

## Notes

- `size` controls font size (element scale); `width` controls horizontal length. They are separate axes.
- `disabled` dims the button and blocks the active-press transform.
- Every variant presses with a subtle `scale(0.94)` on `:active`.
