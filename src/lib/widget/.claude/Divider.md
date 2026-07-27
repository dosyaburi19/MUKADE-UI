# Divider

A horizontal or vertical separator line, optionally with a centered label.

## Import

```svelte
import { Divider } from 'mukade-ui';
```

## Usage

```svelte
<Divider label="SECTION" />
<Divider orientation="vertical" weight="2px" />
```

## Props

| Prop          | Type                              | Default        | Description                                             |
| ------------- | --------------------------------- | -------------- | ------------------------------------------------------ |
| `orientation` | `'horizontal' \| 'vertical'`      | `'horizontal'` | Line direction. Vertical needs a bounded parent height.|
| `variant`     | `'solid' \| 'dashed' \| 'dotted'` | `'solid'`      | Border style of the line.                              |
| `label`       | `string`                          | —              | Centered label between the two line segments.          |
| `size`        | `string`                          | `1rem`         | CSS `font-size` of the label.                          |
| `weight`      | `string`                          | `1px`          | Line thickness.                                        |

All other `HTMLAttributes` are forwarded to the root element.

## CSS Custom Properties

| Property                  | Falls back to        | Description               |
| ------------------------- | -------------------- | ------------------------- |
| `--mukade-divider-accent` | `--mukade-primary`   | Line and label color.     |

## Notes

- The vertical form uses `writing-mode: vertical-lr` for the label; it needs a parent with a defined height to stretch.
