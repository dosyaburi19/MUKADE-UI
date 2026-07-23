<script lang="ts">
	import { Checkbox, Divider, Stack } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	let isIndeterminate = $state(false);

	const usage = `<script>
  import { Checkbox } from 'mukade-ui';
  let agreed = $state(false);
<\/script>

<Checkbox label="ACCEPT" bind:checked={agreed} />
<Checkbox label="PARTIAL" indeterminate />`;

	const props = [
		{ p: 'checked', t: 'boolean', d: 'false' },
		{ p: 'indeterminate', t: 'boolean', d: '—' },
		{ p: 'label', t: 'string', d: '—' },
		{ p: 'disabled', t: 'boolean', d: '—' },
		{ p: 'size', t: 'string', d: '1rem' }
	];

	const css = [
		{
			p: '--mukade-checkbox-accent',
			f: '--mukade-primary',
			d: 'Border, mark, and label color. Hover/focus uses a brighter derivation.'
		}
	];

	const notes = [
		'Keyboard focus is shown via :focus-visible on the hidden input, drawn as an outline on the styled box.',
		'size is remapped from the native size attribute (meaningless for checkboxes) to a CSS dimension.'
	];
</script>

<BaseSection
	id="CHECKBOX"
	category="INPUT"
	sectionTitle="Checkbox"
	description="A boolean checkbox with an indeterminate state and optional label. Two-way bindable via checked."
	{usage}
	{props}
	{css}
	{notes}
>
	<Stack gap="1rem" wrap={true} style="width: 100%;">
		<Checkbox />
		<Checkbox label="label" />
		<Checkbox disabled />
		<Checkbox label="label" disabled />
	</Stack>
	<Divider label="indeterminate" />
	<Stack gap="1rem">
		<Checkbox bind:checked={isIndeterminate} label="root" />
		<Checkbox indeterminate={isIndeterminate} />
		<Checkbox indeterminate={isIndeterminate} size="1.3rem" label="label" />
		<Checkbox indeterminate={isIndeterminate} disabled />
	</Stack>
</BaseSection>
