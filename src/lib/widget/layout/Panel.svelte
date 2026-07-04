<script lang="ts">
	import type { Snippet } from 'svelte';

	type Dots = { index: number; max: number };

	interface Props {
		header?: Snippet;
		footer?: Snippet;
		variant?: 'primary' | 'soft-line';
		size?: string;
		dots?: Dots;
		children?: Snippet<[]>;
	}

	let { header, footer, variant = 'primary', size, dots, children }: Props = $props();

	let dotItems = $derived(Array.from({ length: dots?.max ?? 0 }, (_, index) => ({ key: index, positive: index < (dots?.index ?? 0) })));
</script>

<div class="panel {variant}" style:--panel-size={size}>
	{#if header}
		<div class="header">
			{@render header()}
			{#if dots}
				<div class="dots">
					{#each dotItems as { key, positive } (key)}
						<span class="dot" class:positive></span>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
	<div class="content">
		{@render children?.()}
	</div>
	{#if footer}
		<div class="footer">{@render footer()}</div>
	{/if}
</div>

<style>
	.panel {
		width: var(--panel-size, fit-content);
		border: solid 1px var(--mukade-primary);

		background-color: var(--mukade-bg-soft);

		font-family: var(--mukade-font-vt);
		font-size: 1rem;
		color: var(--mukade-text);
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;

		padding: 0.4rem 0.7rem;
		border-bottom: 1px solid var(--mukade-primary);
		background-color: color-mix(in srgb, var(--mukade-primary) 5%, var(--mukade-bg-soft));

		color: var(--mukade-primary);
	}

	.dots {
		display: flex;
		align-items: center;
		gap: 0.3rem;
	}

	.dot {
		width: 0.4rem;
		height: 0.4rem;

		border: solid 1px var(--mukade-primary);
		background-color: color-mix(in srgb, var(--mukade-primary) 5%, var(--mukade-bg-soft));
	}

	.dot.positive {
		background-color: var(--mukade-primary);
	}

	.content {
		padding: 0.7rem;
	}

	.footer {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 0.3rem;

		padding: 0.4rem 0.7rem;
		border-top: 1px solid var(--mukade-primary);

		color: var(--mukade-primary);
	}

	/* ============ SOFT-LINE VARIANT STYLE ============ */
	.panel.soft-line {
		border-color: var(--mukade-border-soft);
	}
	.panel.soft-line * {
		border-color: var(--mukade-border-soft);
	}

	.panel.soft-line .header {
		background-color: color-mix(in srgb, var(--mukade-primary) 2%, var(--mukade-bg-soft));
	}
	.panel.soft-line .header .dot:not(.positive) {
		background-color: color-mix(in srgb, var(--mukade-primary) 2%, var(--mukade-bg-soft));
	}
</style>
