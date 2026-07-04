<script lang="ts">
	import { TableCell, TableRow, Toggle } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';
</script>

<BaseSection id="TOGGLE" sectionTitle="Toggle">
	<Toggle />
	<Toggle label="label" />
	<Toggle size="1.5rem" label="label" />
	<Toggle disabled />
	{#snippet propsContent()}
		<TableRow>
			<TableCell>checked</TableCell>
			<TableCell>boolean | undefined</TableCell>
			<TableCell>false</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>label</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>disabled</TableCell>
			<TableCell>boolean | undefined</TableCell>
			<TableCell>false</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
