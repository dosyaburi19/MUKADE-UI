<script lang="ts">
	import { resolve } from '$app/paths';
	import { Container, Stack, Text } from '$lib/index.ts';

	const categories = [
		{
			name: 'PRIMITIVE',
			items: [
				{ id: 'TEXT', label: 'TEXT' },
				{ id: 'AVATAR', label: 'AVATAR' },
				{ id: 'BADGE', label: 'BADGE' },
				{ id: 'DIVIDER', label: 'DIVIDER' }
			]
		},
		{
			name: 'LAYOUT',
			items: [
				{ id: 'CONTAINER', label: 'CONTAINER' },
				{ id: 'STACK', label: 'STACK' },
				{ id: 'SCROLLAREA', label: 'SCROLLAREA' },
				{ id: 'PANEL', label: 'PANEL' },
				{ id: 'SECTION', label: 'SECTION' }
			]
		},
		{
			name: 'INPUT',
			items: [
				{ id: 'BUTTON', label: 'BUTTON' },
				{ id: 'CHECKBOX', label: 'CHECKBOX' },
				{ id: 'INPUT', label: 'INPUT' },
				{ id: 'TEXTAREA', label: 'TEXTAREA' },
				{ id: 'TOGGLE', label: 'TOGGLE' },
				{ id: 'TEXTFIELD', label: 'TEXTFIELD' },
				{ id: 'SELECT', label: 'SELECT' }
			]
		},
		{ name: 'FEEDBACK', items: [{ id: 'ALERT', label: 'ALERT' }] },
		{ name: 'DATA', items: [{ id: 'TABLE', label: 'TABLE' }] }
	];

	const docsHref = resolve('/widgets');
</script>

<section id="widgets" class="widgets-section">
	<Container>
		<div class="head">
			<Stack direction="column" gap="0.5rem">
				<Text font="mono" size="1rem" color="danger" spacing="0">// FULL LIST</Text>
				<Text font="vt" size="3rem" spacing="0.05rem">Widgets</Text>
			</Stack>
			<a class="docs-link" href={docsHref}>EXPLORE FULL DOCS --&gt;</a>
		</div>
		<Stack direction="column" gap="1.2rem">
			{#each categories as { name, items } (name)}
				<Stack direction="column" gap="0.6rem">
					<Text font="mono" size="0.8rem" color="dim" spacing="0.15rem">{name}</Text>
					<div class="links">
						{#each items as { id, label } (id)}
							<a class="widget-link" href={`${docsHref}#${id}`}>{label} --&gt;</a>
						{/each}
					</div>
				</Stack>
			{/each}
		</Stack>
	</Container>
</section>

<style>
	.widgets-section {
		padding-block: 2rem 8rem;
	}

	.head {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 1rem;
		flex-wrap: wrap;

		margin-bottom: 1.5rem;
	}

	.docs-link {
		flex-shrink: 0;

		padding: 0.5rem 1rem;
		border: 1px solid var(--mukade-primary);

		font-family: var(--mukade-font-vt);
		font-size: 1.1rem;
		color: var(--mukade-primary);
		text-decoration: none;

		transition:
			background-color 0.15s,
			color 0.15s;
	}

	.docs-link:hover {
		background-color: var(--mukade-primary);
		color: var(--mukade-text-dark);
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.7rem;
	}

	.widget-link {
		padding: 0.3rem 0.8rem;
		border: 1px solid var(--mukade-border-soft);

		font-family: var(--mukade-font-vt);
		font-size: 1.2rem;
		color: var(--mukade-text-dim);
		text-decoration: none;

		transition:
			border-color 0.15s,
			color 0.15s;
	}

	.widget-link:hover {
		border-color: var(--mukade-primary);
		color: var(--mukade-primary);
	}
</style>
