# Select

A dropdown selector. Compose it with `SelectOption` children. The current selection is two-way bindable via `selected`. Closes on outside click or the `Escape` key.

## Import

```svelte
import { Select, SelectOption } from 'mukade-ui';
```

## Usage

```svelte
<script>
	let region = $state('');
</script>

<Select bind:selected={region} placeholder="region">
	<SelectOption key="kr" label="KOREA" />
	<SelectOption key="jp" label="JAPAN" />
</Select>
```

## Props

| Prop          | Type      | Default | Description                                              |
| ------------- | --------- | ------- | -------------------------------------------------------- |
| `selected`    | `string`  | `''`    | Selected option key. Bindable (`bind:selected`).         |
| `open`        | `boolean` | `false` | Dropdown open state. Bindable (`bind:open`).             |
| `placeholder` | `string`  | —       | Shown when nothing is selected.                          |
| `width`       | `string`  | —       | Fixes the trigger's min/max width.                       |
| `children`    | `Snippet` | —       | `SelectOption` items.                                    |

All other `HTMLAttributes` are forwarded to the root element.

## CSS Custom Properties

| Property                   | Falls back to        | Description                        |
| -------------------------- | -------------------- | ---------------------------------- |
| `--mukade-select-accent`   | `--mukade-primary`   | Trigger border, text, and arrow.   |
| `--mukade-select-bg`       | `--mukade-bg`        | Trigger and dropdown background.    |
| `--mukade-select-z-index`  | `10`                 | Stacking order of the dropdown.    |

## Notes

- Provides context to child `SelectOption`s; use them rather than raw options.
- Outside-click and `Escape` listeners are attached only while `open`, and removed on close.
- Raise `--mukade-select-z-index` when the dropdown must sit above other stacked layers (e.g. inside a modal).
