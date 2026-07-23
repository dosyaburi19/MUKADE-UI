<script lang="ts">
	import { Container, Text } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const usage = `<script>
  import { Container } from 'mukade-ui';
<\/script>

<Container style="max-width: 60rem;">
  <!-- page content -->
</Container>`;

	const props = [{ p: 'children', t: 'Snippet', d: '—' }];

	const notes = [
		'Defaults to width: 100% with margin: 0 auto. Constrain it with max-width via style/class.',
		'Adds no padding or visual styling — it is purely structural.'
	];
</script>

<BaseSection
	id="CONTAINER"
	category="LAYOUT"
	sectionTitle="Container"
	description="A minimal block wrapper that spans the full width of its parent and centers itself horizontally. Adds no padding or visual styling."
	{usage}
	{props}
	{notes}
>
	<Container style="border: 1px dashed var(--mukade-border-soft); padding: 1rem;">
		<Text color="dim">// Container centers content (margin: 0 auto) and spans full width</Text>
	</Container>
</BaseSection>
