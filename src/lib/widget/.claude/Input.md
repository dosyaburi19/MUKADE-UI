# Input

A single-line text input with outlined, filled, or borderless variants. Two-way bindable via `value`.

## Import

```svelte
import { Input } from 'mukade-ui';
```

## Usage

```svelte
<script>
	let name = $state('');
</script>

<Input placeholder="username" bind:value={name} />
<Input variant="filled" type="password" placeholder="password" />
```

## Props

| Prop      | Type                                                    | Default      | Description                                    |
| --------- | ------------------------------------------------------- | ------------ | ---------------------------------------------- |
| `variant` | `'outlined' \| 'filled' \| 'none'`                      | `'outlined'` | Border treatment.                              |
| `type`    | `'text' \| 'password' \| 'number' \| 'email' \| 'search'` | `'text'`     | Native input type.                             |
| `value`   | `string \| number`                                      | `''`         | Input value. Bindable (`bind:value`).          |

All other `HTMLInputAttributes` (`placeholder`, `disabled`, `name`, `onchange`, …) are forwarded to the input.

## CSS Custom Properties

| Property                | Falls back to        | Description                          |
| ----------------------- | -------------------- | ------------------------------------ |
| `--mukade-input-accent` | `--mukade-primary`   | Border and caret color.              |
| `--mukade-input-bg`     | `--mukade-bg`        | Input background.                    |

## Notes

- `:focus` brightens the border via `--mukade-bright`; `:disabled` mutes background and border.
