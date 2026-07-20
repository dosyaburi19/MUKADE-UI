<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
		tag?: 'section' | 'div' | 'article' | 'aside' | 'header' | 'footer';
		title?: Snippet<[]>;
		children?: Snippet<[]>;
	}

	let { tag = 'section', title, children, ...props }: Props = $props();
</script>

<svelte:element this={tag} class="mukade-section" {...props}>
	{#if title}
		<div class="mukade-section-title">
			<span class="mukade-section-title-prefix">></span>
			{@render title()}
		</div>
	{/if}
	{@render children?.()}
</svelte:element>

<style>
	.mukade-section {
		margin: 0;
		padding: 0;
	}

	.mukade-section-title {
		display: flex;
		align-items: center;
		gap: 1rem;

		margin-bottom: 1rem;
	}

	.mukade-section-title-prefix {
		display: flex;
		align-items: center;
		padding: 1rem;

		font-size: 2rem;
		font-family: var(--mukade-font-vt);
		font-weight: 700;
		color: var(--mukade-primary);

		border-left: 5px solid var(--mukade-primary);
	}
</style>
