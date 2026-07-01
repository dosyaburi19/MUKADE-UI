<script lang="ts">
	import { Input, Stack, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';
</script>

<BaseSection id="INPUT" sectionTitle="Input">
	<Stack gap="1rem" wrap={true}>
		<Input type="text" placeholder="// text type" />
		<Input type="email" placeholder="// email type" />
		<Input type="password" placeholder="// password type" />
		<Input variant="filled" placeholder="// filled variant" />
		<Input variant="none" placeholder="// none variant" />
	</Stack>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>variant</TableCell>
			<TableCell>'outlined' | 'filled' | 'none'</TableCell>
			<TableCell>'outlined'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>type</TableCell>
			<TableCell>'text' | 'password' | 'number' | 'email' | 'search'</TableCell>
			<TableCell>'text'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>others</TableCell>
			<TableCell>HTMLInputAttributes</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
