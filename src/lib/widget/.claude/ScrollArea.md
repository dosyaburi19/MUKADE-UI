# ScrollArea

A vertical overflow container with a custom terminal-style scrollbar and an optional sticky header that can react to scroll direction.

## Import

```svelte
import { ScrollArea } from 'mukade-ui';
```

## Usage

```svelte
<ScrollArea maxHeight="20rem" variant="sticky">
	{#snippet header()}
		<Text>LOG</Text>
	{/snippet}

	<!-- long content -->
</ScrollArea>
```

## Props

| Prop        | Type                              | Default      | Description                                                            |
| ----------- | --------------------------------- | ------------ | --------------------------------------------------------------------- |
| `maxHeight` | `string`                          | —            | CSS `max-height`; content beyond it scrolls.                          |
| `maxWidth`  | `string`                          | —            | CSS `max-width`.                                                      |
| `direction` | `'vertical'`                      | `'vertical'` | Scroll axis (vertical only in this version).                          |
| `variant`   | `'sticky' \| 'hide' \| 'natural'` | `'sticky'`   | Header behavior: pinned, hide-on-scroll-down, or scrolls with content.|
| `header`    | `Snippet`                         | —            | Sticky header content.                                                |
| `children`  | `Snippet`                         | —            | Scrollable content.                                                   |

All other `HTMLAttributes` are forwarded to the root element.

## CSS Custom Properties

| Property                     | Falls back to        | Description                                  |
| ---------------------------- | -------------------- | -------------------------------------------- |
| `--mukade-scrollarea-accent` | `--mukade-primary`   | Scrollbar thumb and header underline color.  |

## Notes

- The native scrollbar is hidden; a synthetic thumb tracks the viewport and updates via a `ResizeObserver`.
- `hide` retracts the header as you scroll down and restores it as you scroll up; `natural` lets it scroll away with the content.
