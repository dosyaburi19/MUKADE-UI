<script lang="ts">
	import { Stack, Text } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const usage = `<script>
  import { Text } from 'mukade-ui';
<\/script>

<Text tag="h1" color="primary" glow>SYSTEM ONLINE</Text>
<Text color="dim" size="0.8rem">last sync: 04:12</Text>
<Text variant="crt">scanline text</Text>`;

	const props = [
		{ p: 'tag', t: "'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'label' | 'small'", d: "'p'" },
		{ p: 'variant', t: "'led' | 'crt'", d: "'led'" },
		{ p: 'glow', t: 'boolean', d: 'false' },
		{ p: 'color', t: "'default' | 'dim' | 'primary' | 'success' | 'warn' | 'danger'", d: "'default'" },
		{ p: 'font', t: "'vt' | 'mono'", d: "'vt'" },
		{ p: 'size', t: 'string', d: '1rem' },
		{ p: 'spacing', t: 'string', d: '0.2rem' },
		{ p: 'align', t: "'start' | 'left' | 'center' | 'right' | 'end' | 'justify'", d: "'left'" }
	];

	const css = [
		{
			p: '--mukade-text-accent',
			f: "the color variant's tone",
			d: 'Overrides the resolved color for any variant, including crt scanlines and glow.'
		}
	];

	const notes = [
		'--mukade-text-accent inherits. Setting it on an ancestor recolors every descendant <Text>.',
		'Because crt and glow derive from currentColor, the accent flows into the scanline and shadow automatically.'
	];
</script>

<BaseSection
	id="TEXT"
	category="PRIMITIVE"
	sectionTitle="Text"
	description="Themed terminal-style text with color, font, and CRT/LED display variants. Renders as any of several semantic tags via the tag prop."
	{usage}
	{props}
	{css}
	{notes}
>
	<Stack direction="column" gap="0.3rem" style="width: 100%;">
		<Text color="primary">// primary color</Text>
		<Text color="dim">// dim color</Text>
		<Text color="danger">// danger color</Text>
		<Text color="warn">// warn color</Text>
		<Text color="success">// success color</Text>
	</Stack>
	<Stack gap="1.5rem" wrap={true} align="center">
		<Text font="mono" glow={false}>mono font</Text>
		<Text variant="led" font="vt" size="1.5rem">vt font</Text>
		<Text tag="h2" size="2rem" spacing="0.1rem">heading</Text>
	</Stack>
</BaseSection>
