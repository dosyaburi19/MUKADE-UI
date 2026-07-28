// Reexport your entry widgets here
import './common/index.css';

/* ============ PRIMITIVE ============ */
export { default as Avatar } from '$lib/widget/primitive/Avatar.svelte';
export { default as Badge } from '$lib/widget/primitive/Badge.svelte';
export { default as Divider } from '$lib/widget/primitive/Divider.svelte';
export { default as Text } from '$lib/widget/primitive/Text.svelte';

/* ============ LAYOUT ============ */

export { default as Container } from '$lib/widget/layout/Container.svelte';
export { default as Stack } from '$lib/widget/layout/Stack.svelte';
export { default as ScrollArea } from '$lib/widget/layout/ScrollArea.svelte';
export { default as Panel } from '$lib/widget/layout/Panel.svelte';
export { default as Section } from '$lib/widget/layout/Section.svelte';

/* ============ INPUT ============ */

export { default as Button } from '$lib/widget/input/Button.svelte';
export { default as Checkbox } from '$lib/widget/input/Checkbox.svelte';
export { default as Input } from '$lib/widget/input/Input.svelte';
export { default as Textarea } from '$lib/widget/input/Textarea.svelte';
export { default as Toggle } from '$lib/widget/input/Toggle.svelte';
export { default as TextField } from '$lib/widget/input/TextField/TextField.svelte';
export { default as Select } from '$lib/widget/input/Select/Select.svelte';
export { default as SelectOption } from '$lib/widget/input/Select/SelectOption.svelte';

/* ============ FEEDBACK ============ */

export { default as Alert } from '$lib/widget/feedback/Alert.svelte';

/* ============ DATA ============ */

export { default as Table } from '$lib/widget/data/table/Table.svelte';
export { default as TableRow } from '$lib/widget/data/table/TableRow.svelte';
export { default as TableCell } from '$lib/widget/data/table/TableCell.svelte';
