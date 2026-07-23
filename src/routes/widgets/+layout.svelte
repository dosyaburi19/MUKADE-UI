<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, ScrollArea, Text } from '$lib/index.ts';
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet<[]>;
	}
	let { children }: Props = $props();

	const categories: { name: string; items: [string, string][] }[] = [
		{
			name: 'PRIMITIVE',
			items: [
				['TEXT', 'Text'],
				['AVATAR', 'Avatar'],
				['BADGE', 'Badge'],
				['DIVIDER', 'Divider']
			]
		},
		{
			name: 'LAYOUT',
			items: [
				['CONTAINER', 'Container'],
				['STACK', 'Stack'],
				['SCROLLAREA', 'ScrollArea'],
				['PANEL', 'Panel'],
				['SECTION', 'Section']
			]
		},
		{
			name: 'INPUT',
			items: [
				['BUTTON', 'Button'],
				['CHECKBOX', 'Checkbox'],
				['INPUT', 'Input'],
				['TEXTAREA', 'Textarea'],
				['TOGGLE', 'Toggle'],
				['TEXTFIELD', 'TextField'],
				['SELECT', 'Select']
			]
		},
		{ name: 'FEEDBACK', items: [['ALERT', 'Alert']] },
		{ name: 'DATA', items: [['TABLE', 'Table']] }
	];

	function linkToGithub() {
		window.open('https://github.com/dosyaburi19/MUKADE-UI', 'noopener');
	}

	function goTo(event: MouseEvent, id: string) {
		event.preventDefault();
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	onMount(() => {
		const id = location.hash.slice(1);
		if (id) {
			requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }));
		}
	});
</script>

<div class="widgets-layout">
	<header class="topbar">
		<a class="home-link" href={resolve('/home')}>&lt;-- HOME</a>
		<Text tag="span" font="vt" size="1.8rem" spacing="0.1rem">WIDGETS</Text>
		<Button variant="primary" onclick={linkToGithub} style="font-size: 1.1rem;">[GITHUB]</Button>
	</header>

	<div class="body">
		<div class="sidebar-wrap">
			<ScrollArea maxHeight="calc(100vh - 4rem)">
				<nav class="sidebar">
					{#each categories as { name, items } (name)}
						<div class="sidebar-group">
							<span class="sidebar-cat">{name}</span>
							{#each items as [id, label] (id)}
								<a class="sidebar-link" href="#{id}" onclick={(e) => goTo(e, id)}>{label}</a>
							{/each}
						</div>
					{/each}
				</nav>
			</ScrollArea>
		</div>

		<div class="main-wrap">
			<ScrollArea maxHeight="calc(100vh - 4rem)">
				<div class="content">
					{@render children?.()}
				</div>
			</ScrollArea>
		</div>
	</div>
</div>

<style>
	.widgets-layout {
		display: flex;
		flex-direction: column;

		height: 100vh;
		overflow: hidden;

		background-color: var(--mukade-bg);
		color: var(--mukade-text);
		font-family: var(--mukade-font-mono);
	}

	.topbar {
		flex-shrink: 0;

		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;

		height: 4rem;
		padding: 0.5rem 2rem;

		border-bottom: 1px solid var(--mukade-border-subtle);
		background-color: color-mix(in srgb, var(--mukade-bg) 92%, transparent);
	}

	.home-link {
		font-family: var(--mukade-font-vt);
		font-size: 1.2rem;
		color: var(--mukade-text-dim);
		text-decoration: none;
	}

	.home-link:hover {
		color: var(--mukade-bright);
	}

	.body {
		flex: 1;
		min-height: 0;

		display: flex;
		align-items: stretch;
	}

	.sidebar-wrap {
		flex-shrink: 0;

		width: 13rem;
		height: 100%;

		border-right: 1px solid var(--mukade-border-subtle);
	}

	.sidebar {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;

		padding: 2rem 1rem;
	}

	.sidebar-group {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.sidebar-cat {
		font-family: var(--mukade-font-mono);
		font-size: 0.75rem;
		letter-spacing: 0.15rem;
		color: var(--mukade-bright);
	}

	.sidebar-link {
		padding: 0.25rem 0;

		font-family: var(--mukade-font-mono);
		font-size: 0.95rem;
		color: var(--mukade-text-dim);
		text-decoration: none;
	}

	.sidebar-link:hover {
		color: var(--mukade-primary);
	}

	.main-wrap {
		flex: 1;
		min-width: 0;
		height: 100%;
	}

	.content {
		max-width: 56rem;
		padding: 2.5rem 3rem 8rem;
	}

	@media (max-width: 767px) {
		.sidebar-wrap {
			display: none;
		}

		.content {
			padding: 2rem 1.2rem 6rem;
		}
	}
</style>
