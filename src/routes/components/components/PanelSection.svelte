<script lang="ts">
	import { Button, Panel, Stack, Text, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';
</script>

<BaseSection id="PANEL" sectionTitle="Panel">
	<Stack gap="1.5rem" wrap={true}>
		<Panel size="18rem">
			{#snippet header()}
				<Text size="1rem" font="vt" color="danger">SYSTEM</Text>
			{/snippet}
			<Text color="dim">// header + footer snippet</Text>
			{#snippet footer()}
				<Button variant="ghost">[OK]</Button>
			{/snippet}
		</Panel>
		<Panel size="18rem" dots={{ index: 2, max: 3 }}>
			{#snippet header()}
				<Text size="1rem" font="vt" color="danger">PROGRESS</Text>
			{/snippet}
			<Text color="dim">// header with dots indicator</Text>
		</Panel>
	</Stack>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>header</TableCell>
			<TableCell>Snippet | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>footer</TableCell>
			<TableCell>Snippet | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>size</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>dots</TableCell>
			<TableCell>{'{ index: number; max: number }'} | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>children</TableCell>
			<TableCell>Snippet</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
