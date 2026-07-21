<script lang="ts">
	import { Stack, TextField, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	let outlinedValue = $state('');
	let filledValue = $state('');
</script>

<BaseSection id="TEXTFIELD" sectionTitle="TextField">
	<Stack gap="1.5rem" wrap={true}>
		<TextField
			label="USERNAME"
			placeholder="type here"
			bind:value={outlinedValue}
			width="14rem"
			style="font-size:2rem;"
			required={true}
			onfocus={() => console.log('onblur event executed!')}
		/>
		<TextField variant="filled" label="PASSWORD" type="password" bind:value={filledValue} width="14rem" />
		<TextField variant="outlined" type="text" placeholder="outlined" bind:value={outlinedValue} width="14rem" />
		<TextField variant="filled" type="text" placeholder="filled" bind:value={filledValue} width="14rem" />
	</Stack>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>variant</TableCell>
			<TableCell>'outlined' | 'filled'</TableCell>
			<TableCell>'outlined'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>type</TableCell>
			<TableCell>string</TableCell>
			<TableCell>'text'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>label</TableCell>
			<TableCell>string</TableCell>
			<TableCell>''</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>placeholder</TableCell>
			<TableCell>string</TableCell>
			<TableCell>''</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>value</TableCell>
			<TableCell>string (bindable)</TableCell>
			<TableCell>''</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>width</TableCell>
			<TableCell>string</TableCell>
			<TableCell>''</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
