# Textarea

A multi-line text input with configurable size, an optional resize handle, and a custom scrollbar. Two-way bindable via `value`.

## Import

```svelte
import { Textarea } from 'mukade-ui';
```

## Usage

```svelte
<script>
	let note = $state('');
</script>

<Textarea placeholder="log entry..." bind:value={note} width="24rem" height="8rem" resizing />
```

## Props

| Prop       | Type      | Default | Description                                        |
| ---------- | --------- | ------- | -------------------------------------------------- |
| `value`    | `string`  | `''`    | Text content. Bindable (`bind:value`).             |
| `width`    | `string`  | `12rem` | CSS width.                                          |
| `height`   | `string`  | `7rem`  | CSS height.                                         |
| `resizing` | `boolean` | `false` | Enables the user resize handle (`resize`).         |

All other `HTMLTextareaAttributes` except `value` (`placeholder`, `disabled`, `maxlength`, …) are forwarded to the textarea.

## CSS Custom Properties

| Property                   | Falls back to         | Description                    |
| -------------------------- | --------------------- | ------------------------------ |
| `--mukade-textarea-accent` | `--mukade-primary`    | Border and scrollbar color.    |
| `--mukade-textarea-bg`     | `--mukade-bg-inset`   | Textarea background.           |

## Notes

- `resizing` defaults to `false` (fixed size); set it to allow manual resizing.
