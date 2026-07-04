<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'primary' | 'idle' | 'danger' | 'warn' | 'success';
		label?: string;
		count?: number;
		max?: number;
		position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
		children?: Snippet<[]>;
	}

	let { variant = 'primary', label, count, position = 'top-right', children, max }: Props = $props();

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
	<span class="overlay-badge {variant}">
		{@render children?.()}
		<span class="overlay-badge-item {position}">
			{display}
		</span>
	</span>
{:else}
	<span class="tag-badge {variant}">
		{display}
	</span>
{/if}

<style>
	/* ============ OVERLAY-BADGE STYLE ============ */

	.overlay-badge {
		position: relative;
		display: inline-block;

		width: fit-content;
		height: fit-content;
	}

	.overlay-badge-item {
		position: absolute;
		display: inline-block;
		padding: 0.25rem 0.5rem;
		border: 1px solid;

		font-size: 0.7rem;
		font-family: var(--mukade-font-vt);
		background-color: var(--mukade-bg);
		letter-spacing: 0.1rem;

		pointer-events: none;
	}

	.overlay-badge-item.top-left {
		top: 0;
		left: 0;
		transform: translate(-50%, -50%);
	}

	.overlay-badge-item.top-right {
		top: 0;
		right: 0;
		transform: translate(50%, -50%);
	}

	.overlay-badge-item.bottom-left {
		bottom: 0;
		left: 0;
		transform: translate(-50%, 50%);
	}

	.overlay-badge-item.bottom-right {
		bottom: 0;
		right: 0;
		transform: translate(50%, 50%);
	}

	.overlay-badge.primary > .overlay-badge-item {
		border-color: var(--mukade-primary);
		color: var(--mukade-primary);
	}

	.overlay-badge.idle > .overlay-badge-item {
		border-color: var(--mukade-border-soft);
		color: var(--mukade-text-dim);
	}

	.overlay-badge.danger > .overlay-badge-item {
		padding: 0.25rem 0.4rem;

		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		background-color: var(--mukade-primary);
		border-color: var(--mukade-primary);

		font-weight: 700;
		color: var(--mukade-text-dark);
	}

	.overlay-badge.warn > .overlay-badge-item {
		border-color: var(--mukade-warn);
		color: var(--mukade-warn);
	}

	.overlay-badge.success > .overlay-badge-item {
		border-color: var(--mukade-success);
		color: var(--mukade-success);
	}

	/* ============ TAG-BADGE STYLE ============ */

	.tag-badge {
		display: inline-block;
		padding: 0.25rem 0.5rem;
		border: 1px solid;

		height: fit-content;

		font-size: 0.7rem;
		font-family: var(--mukade-font-vt);
		letter-spacing: 0.15rem;

		background-color: var(--mukade-bg);
	}

	.tag-badge.primary {
		border-color: var(--mukade-primary);
		color: var(--mukade-primary);
	}

	.tag-badge.idle {
		border-color: var(--mukade-border-soft);
		color: var(--mukade-text-dim);
	}

	.tag-badge.danger {
		padding: 0.25rem 0.4rem;

		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		background-color: var(--mukade-primary);
		border-color: var(--mukade-primary);

		font-weight: 700;
		color: var(--mukade-text-dark);
	}

	.tag-badge.warn {
		border-color: var(--mukade-warn);
		color: var(--mukade-warn);
	}

	.tag-badge.success {
		border-color: var(--mukade-success);
		color: var(--mukade-success);
	}
</style>
