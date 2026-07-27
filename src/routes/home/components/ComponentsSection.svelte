<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { Button, Container, Stack, Text } from '$lib/index.ts';

	const components = [
		// primitive
		{ name: 'Avatar', id: 'AVATAR' },
		{ name: 'Badge', id: 'BADGE' },
		{ name: 'Divider', id: 'DIVIDER' },
		{ name: 'Text', id: 'TEXT' },
		// layout
		{ name: 'Container', id: 'CONTAINER' },
		{ name: 'Stack', id: 'STACK' },
		{ name: 'ScrollArea', id: 'SCROLLAREA' },
		{ name: 'Panel', id: 'PANEL' },
		// input
		{ name: 'Button', id: 'BUTTON' },
		{ name: 'Checkbox', id: 'CHECKBOX' },
		{ name: 'Input', id: 'INPUT' },
		{ name: 'Textarea', id: 'TEXTAREA' },
		{ name: 'Toggle', id: 'TOGGLE' },
		{ name: 'TextField', id: 'TEXTFIELD' },
		{ name: 'Select', id: 'SELECT' },
		// { name: 'SelectOption', id:'SELECTOPTION' },
		// feedback
		{ name: 'Alert', id: 'ALERT' },
		// data
		{ name: 'Table', id: 'TABLE' }
		// { name: 'TableRow', id:'TABLEROW' },
		// { name: 'TableCell', id:'TABLECELL' }
	];

	function moveTo(id: string) {
		goto(`${resolve('/components')}#${id}`);
	}
</script>

<section id="components" class="components-section">
	<Container>
		<Stack direction="column" gap="0.5rem" style="margin-bottom: 1rem;">
			<Text size="1rem" color="danger">// FULL LIST</Text>
			<Text font="vt" size="3rem">Components</Text>
		</Stack>
		<Stack direction="row" wrap={true} gap="1rem">
			{#each components as { name, id } (id)}
				<Button size="2rem" onclick={() => moveTo(id)}>
					{name.toUpperCase()} -->
					<!-- <Text size="1.5rem" font="vt" color="danger" spacing="0.2rem">{name}</Text>
					<Text size="1.2rem" font="vt" color="danger" spacing="0"></Text> -->
				</Button>
			{/each}
		</Stack>
	</Container>
</section>

<style>
	.components-section {
		padding-bottom: 20rem;
	}
	/* .box {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;

		border: 1px solid var(--mukade-border-soft);
		background-color: var(--mukade-bg);

		transition: transform 0.2s;
		text-decoration: none;
	}

	.box:hover {
		border: 1px solid var(--mukade-border);
		transform: scale(1.05);
	} */
</style>
