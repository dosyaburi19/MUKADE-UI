<script lang="ts">
	import { Stack, Button, TableRow, TableCell } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';
</script>

<BaseSection id="BUTTON" sectionTitle="Button">
	<Stack gap="1rem" wrap={true}>
		<Button variant="primary">[PRIMARY]</Button>
		<Button variant="ghost">[GHOST]</Button>
		<Button variant="danger">[DANGER]</Button>
		<Button variant="warn">[WARN]</Button>
		<Button variant="success">[SUCCESS]</Button>
	</Stack>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>variant</TableCell>
			<TableCell>'primary' | 'danger' | 'warn' | 'success' | 'ghost'</TableCell>
			<TableCell>'primary'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>size</TableCell>
			<TableCell>'large' | 'medium' | 'small'</TableCell>
			<TableCell>'medium'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>disabled</TableCell>
			<TableCell>boolean</TableCell>
			<TableCell>false</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>others</TableCell>
			<TableCell>HTMLButtonAttributes (type 기본 'button')</TableCell>
			<TableCell>-</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
