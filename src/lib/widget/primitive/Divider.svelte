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
	style:--_mukade-divider-variant={variant}
	style:--_mukade-divider-line-weight={weight}
	{...props}
>
	{#if label}
		<span class="mukade-divider-label" style:--_mukade-divider-font-size={size}>{label}</span>
	{/if}
</div>

<style>
	/* 내부 전용: 상속 차단 (같은 요소에서 설정→소비) */
	@property --_mukade-divider-font-size {
		syntax: '*';
		inherits: false;
	}

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
		/* height: var(--_mukade-divider-line-weight, 1px);
		background: var(--mukade-primary); */
		border-top: var(--_mukade-divider-line-weight, 1px) var(--_mukade-divider-variant) var(--mukade-divider-color, var(--mukade-primary));
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
		/* width: var(--_mukade-divider-line-weight, 1px);
		background-color: var(--mukade-primary); */
		border-left: var(--_mukade-divider-line-weight, 1px) var(--_mukade-divider-variant) var(--mukade-primary);
	}

	.mukade-divider.mukade-divider-vertical .mukade-divider-label {
		writing-mode: vertical-lr;

		text-orientation: upright;
	}

	.mukade-divider-label {
		font-size: var(--_mukade-divider-font-size, 1rem);
		font-family: var(--mukade-font-vt);
		color: var(--mukade-divider-color, var(--mukade-primary));
	}
</style>
