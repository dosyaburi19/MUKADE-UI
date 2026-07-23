<script lang="ts">
	import { Divider, Stack } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const usage = `<script>
  import { Divider } from 'mukade-ui';
<\/script>

<Divider label="SECTION" />
<Divider orientation="vertical" weight="2px" />`;

	const props = [
		{ p: 'orientation', t: "'horizontal' | 'vertical'", d: "'horizontal'" },
		{ p: 'variant', t: "'solid' | 'dashed' | 'dotted'", d: "'solid'" },
		{ p: 'label', t: 'string', d: '—' },
		{ p: 'weight', t: 'string', d: '1px' }
	];

	const css = [
		{ p: '--mukade-divider-accent', f: '--mukade-primary', d: 'Line and label color.' }
	];

	const notes = [
		'The vertical form uses writing-mode: vertical-lr for the label; it needs a parent with a defined height to stretch.'
	];
</script>

<BaseSection
	id="DIVIDER"
	category="PRIMITIVE"
	sectionTitle="Divider"
	description="A horizontal or vertical separator line, optionally with a centered label."
	{usage}
	{props}
	{css}
	{notes}
>
	<Stack direction="column" gap="1rem" style="width: 100%;">
		<Divider />
		<Divider variant="dotted" label="LABEL" weight="3px" />
	</Stack>
	<Divider label="vertical" />
	<Stack gap="1.5rem" style="height: 10rem;">
		<Divider orientation="vertical" />
		<Divider variant="dashed" orientation="vertical" label="VERT" size="1.2rem" />
	</Stack>
</BaseSection>
