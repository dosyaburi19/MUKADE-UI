<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Dots = { index: number; max: number };

	interface Props extends HTMLAttributes<HTMLDivElement> {
		header?: Snippet;
		footer?: Snippet;
		variant?: 'primary' | 'soft-line';
		width?: string;
		dots?: Dots;
		children?: Snippet<[]>;
	}

	let { header, footer, variant = 'primary', width, dots, children, ...props }: Props = $props();

	let dotItems = $derived(Array.from({ length: dots?.max ?? 0 }, (_, index) => ({ key: index, positive: index < (dots?.index ?? 0) })));
</script>

<div class="mukade-panel mukade-panel-{variant}" style:--panel-width={width} {...props}>
	{#if header}
		<div class="mukade-panel-header">
			{@render header()}
			{#if dots}
				<div class="mukade-panel-dots">
					{#each dotItems as { key, positive } (key)}
						<span class="mukade-panel-dot" class:mukade-panel-dot-positive={positive}></span>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
	<div class="mukade-panel-content">
		{@render children?.()}
	</div>
	{#if footer}
		<div class="mukade-panel-footer">{@render footer()}</div>
	{/if}
</div>

<style>
	.mukade-panel {
		width: var(--panel-width, fit-content);
		border: solid 1px var(--mukade-panel-accent, var(--mukade-primary));

		background-color: var(--mukade-panel-bg, var(--mukade-bg-soft));

		font-family: var(--mukade-font-vt);
		font-size: 1rem;
		color: var(--mukade-text);
	}

	.mukade-panel-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;

		padding: 0.4rem 0.7rem;
		border-bottom: 1px solid var(--mukade-panel-accent, var(--mukade-primary));
		background-color: color-mix(in srgb, var(--mukade-panel-accent, var(--mukade-primary)) 5%, var(--mukade-panel-bg, var(--mukade-bg-soft)));

		color: var(--mukade-panel-accent, var(--mukade-primary));
	}

	.mukade-panel-dots {
		display: flex;
		align-items: center;
		gap: 0.3rem;
	}

	.mukade-panel-dot {
		width: 0.4rem;
		height: 0.4rem;

		border: solid 1px var(--mukade-panel-accent, var(--mukade-primary));
		background-color: color-mix(in srgb, var(--mukade-panel-accent, var(--mukade-primary)) 5%, var(--mukade-panel-bg, var(--mukade-bg-soft)));
	}

	.mukade-panel-dot.mukade-panel-dot-positive {
		background-color: var(--mukade-panel-accent, var(--mukade-primary));
	}

	.mukade-panel-content {
		padding: 0.7rem;
	}

	.mukade-panel-footer {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 0.3rem;

		padding: 0.4rem 0.7rem;
		border-top: 1px solid var(--mukade-panel-accent, var(--mukade-primary));

		color: var(--mukade-panel-accent, var(--mukade-primary));
	}

	/* ============ SOFT-LINE VARIANT STYLE ============ */
	.mukade-panel.mukade-panel-soft-line {
		border-color: var(--mukade-border-soft);
	}
	.mukade-panel.mukade-panel-soft-line * {
		border-color: var(--mukade-border-soft);
	}

	.mukade-panel.mukade-panel-soft-line .mukade-panel-header {
		background-color: color-mix(in srgb, var(--mukade-panel-accent, var(--mukade-primary)) 2%, var(--mukade-panel-bg, var(--mukade-bg-soft)));
	}
	.mukade-panel.mukade-panel-soft-line .mukade-panel-header .mukade-panel-dot:not(.mukade-panel-dot-positive) {
		background-color: color-mix(in srgb, var(--mukade-panel-accent, var(--mukade-primary)) 2%, var(--mukade-panel-bg, var(--mukade-bg-soft)));
	}
</style>
