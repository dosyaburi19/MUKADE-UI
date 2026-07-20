<script lang="ts">
	import { Avatar, Stack, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';
</script>

<BaseSection id="AVATAR" sectionTitle="Avatar">
	<Stack gap="1.5rem" wrap={true} align="center">
		<Avatar name="MUKADE" />
		<Avatar name="MUKADE" online />
		<Avatar name="MUKADE" sub="@mukade" />
		<Avatar name="MUKADE" sub="online now" online size="4rem" />
	</Stack>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>profile</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>online</TableCell>
			<TableCell>boolean</TableCell>
			<TableCell>false</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>name</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>sub</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>size</TableCell>
			<TableCell>string | undefined</TableCell>
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
