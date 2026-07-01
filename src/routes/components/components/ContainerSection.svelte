<script lang="ts">
	import { Container, Text, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';
</script>

<BaseSection id="CONTAINER" sectionTitle="Container">
	<Container style="border: 1px dashed var(--mukade-border-soft); padding: 1rem;">
		<Text color="dim">// Container centers content (margin: 0 auto) and applies horizontal padding</Text>
	</Container>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>children</TableCell>
			<TableCell>Snippet</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>others</TableCell>
			<TableCell>HTMLAttributes</TableCell>
			<TableCell>-</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
