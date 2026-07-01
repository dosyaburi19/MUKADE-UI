<script lang="ts">
	import { Table, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';
</script>

<BaseSection id="TABLE" sectionTitle="Table">
	<Table size="24rem" columns={['id', 'name', 'status']}>
		<TableRow>
			<TableCell>01</TableCell>
			<TableCell>mukade-core</TableCell>
			<TableCell>online</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>02</TableCell>
			<TableCell>mukade-ui</TableCell>
			<TableCell>online</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>03</TableCell>
			<TableCell>mukade-net</TableCell>
			<TableCell>idle</TableCell>
		</TableRow>
	</Table>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>size</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>columns</TableCell>
			<TableCell>string[] | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>children</TableCell>
			<TableCell>Snippet</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>TableCell.width</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
