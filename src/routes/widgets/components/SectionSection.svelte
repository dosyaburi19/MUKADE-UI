<script lang="ts">
	import { Section, Text } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const usage = `<script>
  import { Section } from 'mukade-ui';
<\/script>

<Section>
  {#snippet title()}
    <Text tag="h2">DIAGNOSTICS</Text>
  {/snippet}

  <!-- section body -->
</Section>`;

	const props = [
		{ p: 'tag', t: "'section' | 'div' | 'article' | 'aside' | 'header' | 'footer'", d: "'section'" },
		{ p: 'title', t: 'Snippet', d: '—' }
	];

	const notes = ['The > prefix bar uses --mukade-primary for its accent border and text.'];
</script>

<BaseSection
	id="SECTION"
	category="LAYOUT"
	sectionTitle="Section"
	description="A semantic content block with an optional terminal-style title row, prefixed with a > marker."
	{usage}
	{props}
	{notes}
>
	<Section tag="div" style="border: 1px dashed var(--mukade-border-soft); padding: 1rem; width: 100%; box-sizing: border-box;">
		{#snippet title()}
			<Text size="1.5rem" font="vt" color="danger">TITLE</Text>
		{/snippet}
		<Text color="dim">// Section renders a semantic block with an optional title</Text>
	</Section>
</BaseSection>
