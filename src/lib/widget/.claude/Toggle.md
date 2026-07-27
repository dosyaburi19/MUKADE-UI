# Toggle

A switch-style boolean input with an optional label. The native checkbox is hidden; a sliding track/thumb renders the state. Two-way bindable via `checked`.

## Import

```svelte
import { Toggle } from 'mukade-ui';
```

## Usage

```svelte
<script>
	let power = $state(true);
</script>

<Toggle label="POWER" bind:checked={power} />
<Toggle label="SCALED" size="1.5rem" />
```

## Props

| Prop       | Type      | Default | Description                                       |
| ---------- | --------- | ------- | ------------------------------------------------- |
| `checked`  | `boolean` | `false` | On/off state. Bindable (`bind:checked`).          |
| `label`    | `string`  | —       | Text label beside the switch.                     |
| `disabled` | `boolean` | —       | Dims and blocks interaction.                      |
| `size`     | `string`  | `1rem`  | CSS size unit; the track is `2×` wide, `1×` tall. |

All other `HTMLInputAttributes` except `size` are forwarded to the input.

## CSS Custom Properties

| Property                 | Falls back to        | Description                                                         |
| ------------------------ | -------------------- | ------------------------------------------------------------------ |
| `--mukade-toggle-accent` | `--mukade-primary`   | Track border and thumb color. When set, the off-state thumb is a darkened mix of the accent; otherwise it uses `--mukade-dim`. |

## Notes

- Keyboard focus is shown via `:focus-visible` on the hidden input, drawn as an outline on the track.
