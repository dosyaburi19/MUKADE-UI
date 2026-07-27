# Avatar

Displays a user's profile image with an optional online-status dot and name/subtitle block. Falls back to the first letter of `name` when no image is set or the image fails to load.

## Import

```svelte
import { Avatar } from 'mukade-ui';
```

## Usage

```svelte
<Avatar profile="/me.png" name="KAEDE" sub="operator" online />

<!-- Custom status indicator via children -->
<Avatar name="K">
	<span>●</span>
</Avatar>
```

## Props

| Prop       | Type      | Default | Description                                                        |
| ---------- | --------- | ------- | ----------------------------------------------------------------- |
| `profile`  | `string`  | —       | Image URL. On load error, falls back to the initial of `name`.    |
| `online`   | `boolean` | `false` | Shows a green status dot (ignored when `children` is provided).   |
| `name`     | `string`  | —       | Display name; its first character is the image fallback.          |
| `sub`      | `string`  | —       | Secondary line under the name.                                    |
| `size`     | `string`  | `3rem`  | CSS width/height of the profile square.                           |
| `children` | `Snippet` | —       | Custom status indicator, replacing the default dot.               |

All other `HTMLAttributes` are forwarded to the root element.

## CSS Custom Properties

| Property                 | Falls back to        | Description                                    |
| ------------------------ | -------------------- | ---------------------------------------------- |
| `--mukade-avatar-accent` | `--mukade-primary`   | Border and fallback-initial color.             |

## Notes

- The profile area keeps a `1 / 1` aspect ratio at any `size`.
- `--mukade-avatar-accent` inherits; scope it to a single avatar via `style` if needed.
