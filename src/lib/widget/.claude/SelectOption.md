# SelectOption

An option item for [`Select`](./Select.md). Must be rendered inside a `Select`, from which it receives selection context. Selecting it sets the parent's `selected` to this option's `key` and closes the dropdown.

## Import

```svelte
import { Select, SelectOption } from 'mukade-ui';
```

## Usage

```svelte
<Select bind:selected={value}>
	<SelectOption key="a" label="ALPHA" />
	<SelectOption key="b" label="BRAVO" />
</Select>
```

## Props

| Prop    | Type     | Default | Description                                                     |
| ------- | -------- | ------- | -------------------------------------------------------------- |
| `key`   | `string` | —       | **Required.** The value written to `Select`'s `selected`.      |
| `label` | `string` | —       | Display text. Falls back to `key` when omitted.                |

All other `HTMLButtonAttributes` (including `onclick`) are forwarded; a supplied `onclick` runs in addition to the built-in selection.

## Notes

- Registers its `key`/`label` with the parent on mount so the trigger can display the chosen label.
- Colors follow the parent `Select`'s `--mukade-select-accent` / `--mukade-select-bg`.
- Using it outside a `Select` throws, since the selection context is required.
