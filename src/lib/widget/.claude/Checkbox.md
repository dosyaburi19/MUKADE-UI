# Checkbox

A boolean checkbox with an indeterminate state and optional label. The native input is visually hidden; a styled box renders the state. Two-way bindable via `checked`.

## Import

```svelte
import { Checkbox } from 'mukade-ui';
```

## Usage

```svelte
<script>
	let agreed = $state(false);
</script>

<Checkbox label="ACCEPT" bind:checked={agreed} />
<Checkbox label="PARTIAL" indeterminate />
```

## Props

| Prop            | Type      | Default | Description                                                     |
| --------------- | --------- | ------- | --------------------------------------------------------------- |
| `checked`       | `boolean` | `false` | Checked state. Bindable (`bind:checked`).                       |
| `indeterminate` | `boolean` | —       | Renders the `-` (dash) state, overriding the check mark.        |
| `label`         | `string`  | —       | Text label beside the box.                                      |
| `disabled`      | `boolean` | —       | Dims and blocks interaction.                                    |
| `size`          | `string`  | `1rem`  | CSS size of the box and label font.                             |

All other `HTMLInputAttributes` except `size` are forwarded to the input.

## CSS Custom Properties

| Property                   | Falls back to         | Description                                     |
| -------------------------- | --------------------- | ----------------------------------------------- |
| `--mukade-checkbox-accent` | `--mukade-primary`    | Border, mark, and label color. Hover/focus uses a brighter derivation. |

## Notes

- Keyboard focus is shown via `:focus-visible` on the hidden input, drawn as an outline on the styled box.
- `size` is remapped from the native `size` attribute (which is meaningless for checkboxes) to a CSS dimension.
