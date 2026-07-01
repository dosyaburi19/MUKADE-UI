<script lang="ts">
	import { ScrollArea, Stack, Text, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const lines = Array.from({ length: 20 }, (_, i) => i + 1);
</script>

<BaseSection id="SCROLLAREA" sectionTitle="ScrollArea">
	<ScrollArea maxHeight="12rem" maxWidth="22rem">
		{#snippet header()}
			<Text size="1rem" font="vt" color="danger" style="padding: 0.5rem;">// LOG</Text>
		{/snippet}
		<Stack direction="column" gap="0.4rem" style="padding: 0.5rem;">
			{#each lines as line (line)}
				<Text color="dim">// line {line}</Text>
			{/each}
		</Stack>
	</ScrollArea>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>maxHeight</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>maxWidth</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>direction</TableCell>
			<TableCell>'vertical' | 'horizontal' | 'both'</TableCell>
			<TableCell>'vertical'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>variant</TableCell>
			<TableCell>'sticky' | 'hide' | 'natural'</TableCell>
			<TableCell>'sticky'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>header</TableCell>
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
			<TableCell>HTMLAttributes</TableCell>
			<TableCell>-</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
