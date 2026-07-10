<script lang="ts">
	interface Props {
		orientation?: 'horizontal' | 'vertical';
		variant?: 'solid' | 'dashed' | 'dotted';
		label?: string;
		size?: string;
		weight?: string;
	}

	let { orientation = 'horizontal', variant = 'solid', label, size, weight }: Props = $props();
</script>

<div class="divider {orientation} {variant}" role="separator" aria-orientation={orientation} style:--mukade-divider-line-weight={weight}>
	{#if label}
		<span class="label" style:--mukade-divider-font-size={size}>{label}</span>
	{/if}
</div>

<style>
	.divider {
		display: flex;
		align-items: center;
	}

	.divider:has(> .label) {
		gap: 0.5rem;
	}

	.divider.horizontal {
		flex-direction: row;

		width: 100%;
	}

	.divider.horizontal::before,
	.divider.horizontal::after {
		content: '';
		flex: 1;
		height: var(--mukade-divider-line-weight, 1px);
		background: var(--mukade-primary);
	}

	.divider.vertical {
		width: fit-content;
		flex-direction: column;

		height: 100%;
	}

	.divider.vertical::before,
	.divider.vertical::after {
		content: '';
		flex: 1;
		width: var(--mukade-divider-line-weight, 1px);
		background-color: var(--mukade-primary);
	}

	.divider.vertical .label {
		writing-mode: vertical-lr;

		text-orientation: upright;
	}

	.label {
		font-size: var(--mukade-divider-font-size, 1rem);
		font-family: var(--mukade-font-vt);
		color: var(--mukade-primary);
	}
</style>
