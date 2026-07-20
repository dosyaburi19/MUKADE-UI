<script lang="ts">
	import { Select, SelectOption, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	let selected = $state('');
</script>

<BaseSection id="SELECT" sectionTitle="Select">
	<Select bind:selected placeholder="// SELECT" width="10rem">
		<SelectOption key="scan" label="[SCAN]" />
		<SelectOption key="build" label="[BUILD]" />
		<SelectOption key="deploy" label="[DEPLOY]" />
	</Select>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>selected</TableCell>
			<TableCell>string (bindable)</TableCell>
			<TableCell>''</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>open</TableCell>
			<TableCell>boolean (bindable)</TableCell>
			<TableCell>false</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>placeholder</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>width</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>others</TableCell>
			<TableCell>HTMLAttributes</TableCell>
			<TableCell>-</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>SelectOption.key</TableCell>
			<TableCell>string (required)</TableCell>
			<TableCell>-</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>SelectOption.label</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
