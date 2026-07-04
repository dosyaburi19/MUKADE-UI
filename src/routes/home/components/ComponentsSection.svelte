<script lang="ts">
	import { Container, Stack, Text } from '$lib/index.ts';

	const components = [
		// primitive
		{ name: 'Avatar', link: '/components#AVATAR' },
		{ name: 'Badge', link: '/components#BADGE' },
		{ name: 'Divider', link: '/components#DIVIDER' },
		{ name: 'Text', link: '/components#TEXT' },
		// layout
		{ name: 'Container', link: '/components#CONTAINER' },
		{ name: 'Stack', link: '/components#STACK' },
		{ name: 'ScrollArea', link: '/components#SCROLLAREA' },
		{ name: 'Panel', link: '/components#PANEL' },
		// input
		{ name: 'Button', link: '/components#BUTTON' },
		{ name: 'Checkbox', link: '/components#CHECKBOX' },
		{ name: 'Input', link: '/components#INPUT' },
		{ name: 'Textarea', link: '/components#TEXTAREA' },
		{ name: 'Toggle', link: '/components#TOGGLE' },
		{ name: 'TextField', link: '/components#TEXTFIELD' },
		{ name: 'Select', link: '/components#SELECT' },
		// { name: 'SelectOption', link: '/components#SELECTOPTION' },
		// feedback
		{ name: 'Alert', link: '/components#ALERT' },
		// data
		{ name: 'Table', link: '/components#TABLE' }
		// { name: 'TableRow', link: '/components#TABLEROW' },
		// { name: 'TableCell', link: '/components#TABLECELL' }
	];
</script>

<section id="components" class="components-section">
	<Container>
		<Stack direction="column" gap="0.5rem" style="margin-bottom: 1rem;">
			<Text size="1rem" color="danger">// FULL LIST</Text>
			<Text font="vt" size="3rem">Components</Text>
		</Stack>
		<Stack direction="row" wrap={true} gap="1rem">
			{#each components as { name, link } (link)}
				<a class="box" href={link}>
					<Text size="1.5rem" font="vt" color="danger" spacing="0.2rem">{name}</Text>
					<Text size="1.2rem" font="vt" color="danger" spacing="0">--></Text>
				</a>
			{/each}
		</Stack>
	</Container>
</section>

<style>
	.components-section {
		padding-bottom: 20rem;
	}
	.box {
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
	}
</style>
