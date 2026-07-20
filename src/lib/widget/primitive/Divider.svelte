<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		orientation?: 'horizontal' | 'vertical';
		variant?: 'solid' | 'dashed' | 'dotted';
		label?: string;
		size?: string;
		weight?: string;
	}

	let { orientation = 'horizontal', variant = 'solid', label, size, weight, ...props }: Props = $props();
</script>

<div
	class="mukade-divider mukade-divider-{orientation}"
	role="separator"
	aria-orientation={orientation}
	style:--mukade-divider-variant={variant}
	style:--mukade-divider-line-weight={weight}
	{...props}
>
	{#if label}
		<span class="mukade-divider-label" style:--mukade-divider-font-size={size}>{label}</span>
	{/if}
</div>

<style>
	.mukade-divider {
		display: flex;
		align-items: center;
	}

	.mukade-divider:has(> .mukade-divider-label) {
		gap: 0.5rem;
	}

	.mukade-divider.mukade-divider-horizontal {
		flex-direction: row;

		width: 100%;
	}

	.mukade-divider.mukade-divider-horizontal::before,
	.mukade-divider.mukade-divider-horizontal::after {
		content: '';
		flex: 1;
		/* height: var(--mukade-divider-line-weight, 1px);
		background: var(--mukade-primary); */
		border-top: var(--mukade-divider-line-weight, 1px) var(--mukade-divider-variant) var(--mukade-divider-color, var(--mukade-primary));
	}

	.mukade-divider.mukade-divider-vertical {
		width: fit-content;
		flex-direction: column;

		height: 100%;
	}

	.mukade-divider.mukade-divider-vertical::before,
	.mukade-divider.mukade-divider-vertical::after {
		content: '';
		flex: 1;
		/* width: var(--mukade-divider-line-weight, 1px);
		background-color: var(--mukade-primary); */
		border-left: var(--mukade-divider-line-weight, 1px) var(--mukade-divider-variant) var(--mukade-primary);
	}

	.mukade-divider.mukade-divider-vertical .mukade-divider-label {
		writing-mode: vertical-lr;

		text-orientation: upright;
	}

	.mukade-divider-label {
		font-size: var(--mukade-divider-font-size, 1rem);
		font-family: var(--mukade-font-vt);
		color: var(--mukade-divider-color, var(--mukade-primary));
	}
</style>
