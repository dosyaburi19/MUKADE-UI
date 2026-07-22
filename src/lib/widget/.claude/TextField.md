# TextField

A labeled text input with a floating, terminal-style animated label. Comes in outlined and filled variants. Two-way bindable via `value`. Forwards native input attributes, so it works in real forms.

## Import

```svelte
import { TextField } from 'mukade-ui';
```

## Usage

```svelte
<script>
	let email = $state('');
</script>

<TextField label="EMAIL" type="email" bind:value={email} name="email" required />
<TextField variant="filled" label="PASSWORD" type="password" width="20rem" />
```

## Props

| Prop          | Type                     | Default      | Description                                          |
| ------------- | ------------------------ | ------------ | ---------------------------------------------------- |
| `variant`     | `'outlined' \| 'filled'` | `'outlined'` | Visual style.                                        |
| `type`        | `string`                 | `'text'`     | Native input type.                                   |
| `label`       | `string`                 | —            | Floating label text (types in on focus/fill).        |
| `placeholder` | `string`                 | —            | Placeholder, shown when focused or unlabeled.        |
| `value`       | `string`                 | `''`         | Input value. Bindable (`bind:value`).                |
| `width`       | `string`                 | `100%`       | CSS width of the field wrapper.                      |

Other native `HTMLInputAttributes` (`name`, `required`, `disabled`, `readonly`, `onchange`, `id`, `class`, `style`, …) are forwarded to the underlying `<input>` — `class`/`style` land on the outer wrapper.

## CSS Custom Properties

| Property                    | Falls back to        | Description                          |
| --------------------------- | -------------------- | ------------------------------------ |
| `--mukade-textfield-accent` | `--mukade-primary`   | Focused border/underline and label.  |
| `--mukade-textfield-bg`     | variant-dependent    | Field background.                    |

## Notes

- Supplying `id` is honored and kept in sync with the label's `for`; otherwise a stable SSR-safe id is generated via `$props.id()`.
- User `onfocus`/`onblur` handlers are preserved — the internal focus tracking composes with, and does not replace, yours.
- The label "types" one character at a time when it floats; unlabeled fields show the placeholder immediately.
