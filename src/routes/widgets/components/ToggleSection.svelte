<script lang="ts">
	import { Stack, Toggle } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const usage = `<script>
  import { Toggle } from 'mukade-ui';
  let power = $state(true);
<\/script>

<Toggle label="POWER" bind:checked={power} />
<Toggle label="SCALED" size="1.5rem" />`;

	const props = [
		{ p: 'checked', t: 'boolean', d: 'false' },
		{ p: 'label', t: 'string', d: '—' },
		{ p: 'disabled', t: 'boolean', d: '—' },
		{ p: 'size', t: 'string', d: '1rem' }
	];

	const css = [
		{
			p: '--mukade-toggle-accent',
			f: '--mukade-primary',
			d: 'Track border and thumb color. Off-state thumb darkens the accent when set, otherwise uses --mukade-dim.'
		}
	];

	const notes = [
		'Keyboard focus is shown via :focus-visible on the hidden input, drawn as an outline on the track.'
	];
</script>

<BaseSection
	id="TOGGLE"
	category="INPUT"
	sectionTitle="Toggle"
	description="A switch-style boolean input with an optional label. Two-way bindable via checked."
	{usage}
	{props}
	{css}
	{notes}
>
	<Stack gap="1rem" wrap={true} align="center" style="width: 100%;">
		<Toggle />
		<Toggle label="label" />
		<Toggle size="1.5rem" label="label" />
		<Toggle disabled />
	</Stack>
</BaseSection>
