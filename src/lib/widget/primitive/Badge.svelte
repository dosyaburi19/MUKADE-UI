<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		variant?: 'primary' | 'idle' | 'danger' | 'warn' | 'success';
		label?: string;
		count?: number;
		max?: number;
		position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
		children?: Snippet<[]>;
	}

	let { variant = 'primary', label, count, position = 'top-right', children, max, ...props }: Props = $props();

	function getDisplay() {
		if (count !== undefined) {
			if (max) {
				return count > max ? `${max}+` : count;
			}
			return count;
		}
		return label;
	}

	let display = $derived(getDisplay());
</script>

{#if children}
	<span class="mukade-badge-overlay mukade-badge-{variant}" {...props}>
		{@render children?.()}
		<span class="mukade-badge-overlay-item mukade-badge-{position}">
			{display}
		</span>
	</span>
{:else}
	<span class="mukade-badge-tag mukade-badge-{variant}" {...props}>
		{display}
	</span>
{/if}

<style>
	/* ============ OVERLAY-BADGE STYLE ============ */

	.mukade-badge-overlay {
		position: relative;
		display: inline-block;

		width: fit-content;
		height: fit-content;
	}

	.mukade-badge-overlay-item {
		position: absolute;
		display: inline-block;
		padding: 0.25rem 0.5rem;
		border: 1px solid;

		font-size: 0.7rem;
		font-family: var(--mukade-font-vt);
		background-color: transparent;
		letter-spacing: 0.1rem;

		pointer-events: none;
	}

	.mukade-badge-overlay-item.mukade-badge-top-left {
		top: 0;
		left: 0;
		transform: translate(-50%, -50%);
	}

	.mukade-badge-overlay-item.mukade-badge-top-right {
		top: 0;
		right: 0;
		transform: translate(50%, -50%);
	}

	.mukade-badge-overlay-item.mukade-badge-bottom-left {
		bottom: 0;
		left: 0;
		transform: translate(-50%, 50%);
	}

	.mukade-badge-overlay-item.mukade-badge-bottom-right {
		bottom: 0;
		right: 0;
		transform: translate(50%, 50%);
	}

	.mukade-badge-overlay.mukade-badge-primary > .mukade-badge-overlay-item {
		border-color: var(--mukade-primary);
		color: var(--mukade-primary);
	}

	.mukade-badge-overlay.mukade-badge-idle > .mukade-badge-overlay-item {
		border-color: var(--mukade-border-soft);
		color: var(--mukade-text-dim);
	}

	.mukade-badge-overlay.mukade-badge-danger > .mukade-badge-overlay-item {
		padding: 0.25rem 0.4rem;

		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		background-color: var(--mukade-primary);
		border-color: var(--mukade-primary);

		font-weight: 700;
		color: var(--mukade-text-dark);
	}

	.mukade-badge-overlay.mukade-badge-warn > .mukade-badge-overlay-item {
		border-color: var(--mukade-warn);
		color: var(--mukade-warn);
	}

	.mukade-badge-overlay.mukade-badge-success > .mukade-badge-overlay-item {
		border-color: var(--mukade-success);
		color: var(--mukade-success);
	}

	/* ============ TAG-BADGE STYLE ============ */

	.mukade-badge-tag {
		display: inline-block;
		padding: 0.25rem 0.5rem;
		border: 1px solid;

		height: fit-content;

		font-size: 0.7rem;
		font-family: var(--mukade-font-vt);
		letter-spacing: 0.15rem;

		background-color: transparent;
	}

	.mukade-badge-tag.mukade-badge-primary {
		border-color: var(--mukade-primary);
		color: var(--mukade-primary);
	}

	.mukade-badge-tag.mukade-badge-idle {
		border-color: var(--mukade-border-soft);
		color: var(--mukade-text-dim);
	}

	.mukade-badge-tag.mukade-badge-danger {
		padding: 0.25rem 0.4rem;

		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		background-color: var(--mukade-primary);
		border-color: var(--mukade-primary);

		font-weight: 700;
		color: var(--mukade-text-dark);
	}

	.mukade-badge-tag.mukade-badge-warn {
		border-color: var(--mukade-warn);
		color: var(--mukade-warn);
	}

	.mukade-badge-tag.mukade-badge-success {
		border-color: var(--mukade-success);
		color: var(--mukade-success);
	}
</style>
