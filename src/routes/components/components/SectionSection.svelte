<script lang="ts">
	import { Section, Text, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';
</script>

<BaseSection id="SECTION" sectionTitle="Section">
	<Section tag="div" style="border: 1px dashed var(--mukade-border-soft); padding: 1rem; width: 100%; box-sizing: border-box;">
		{#snippet title()}
			<Text size="1.5rem" font="vt" color="danger">TITLE</Text>
		{/snippet}
		<Text color="dim">// Section renders a semantic block with an optional title</Text>
	</Section>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>tag</TableCell>
			<TableCell>'section' | 'div' | 'article' | 'aside' | 'header' | 'footer'</TableCell>
			<TableCell>'section'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>title</TableCell>
			<TableCell>Snippet | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>children</TableCell>
			<TableCell>Snippet</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>others</TableCell>
			<TableCell>HTMLAttributes (title 제외)</TableCell>
			<TableCell>-</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
