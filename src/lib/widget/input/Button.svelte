<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		children?: Snippet<[]>;
		variant?: 'primary' | 'danger' | 'warn' | 'success' | 'ghost';
		size?: 'large' | 'medium' | 'small';
	}

	const { children, variant = 'primary', size = 'medium', ...props }: Props = $props();
</script>

<button class="button {variant} {size}" {...props}>
	{@render children?.()}
</button>

<style>
	.button {
		padding: 0.2rem 0.7rem;

		border-width: 1px;
		border-style: solid;

		font-size: 1rem;
		font-family: monospace;

		transition: transform 0.08s;
		cursor: pointer;
		user-select: none;
	}

	.button:active:not([disabled]) {
		transform: scale(0.94);
	}

	.button[disabled] {
		cursor: not-allowed;
		opacity: 0.6;
	}

	.button.large {
		font-size: 1.5rem;
	}

	.button.small {
		font-size: 0.7rem;
	}

	/* ============ PRIMARY VARIANT STYLE ============ */

	.button.primary {
		background-color: var(--mukade-bg);
		border-color: var(--mukade-primary);
		color: var(--mukade-primary);
	}

	.button.primary:hover:not([disabled]) {
		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		background-color: var(--mukade-primary);
		color: var(--mukade-text-dark);
	}

	.button.primary:active:not([disabled]) {
		/* 디자인 미정 */
	}

	/* ============ DANGER VARIANT STYLE ============ */

	.button.danger {
		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		background-color: var(--mukade-dim);
		border-color: var(--mukade-primary);
		color: var(--mukade-bright);
	}

	.button.danger:hover:not([disabled]) {
		background-color: var(--mukade-primary);
		color: var(--mukade-text-dark);
	}

	/* ============ WARN VARIANT STYLE ============ */

	.button.warn {
		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		border-color: var(--mukade-warn-dim);
		color: var(--mukade-warn-dim);
	}

	.button.warn:hover:not([disabled]) {
		background-color: var(--mukade-warn);
		color: var(--mukade-text-dark);
	}

	/* ============ SUCCESS VARIANT STYLE ============ */

	.button.success {
		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		border-color: var(--mukade-success-dim);
		color: var(--mukade-success-dim);
	}

	.button.success:hover:not([disabled]) {
		background-color: var(--mukade-success);
		color: var(--mukade-text-dark);
	}

	/* ============ GHOST VARIANT STYLE ============ */

	.button.ghost {
		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		background-color: var(--mukade-bg);
		border-color: var(--mukade-border-soft);
		color: var(--mukade-text-dim);
	}

	.button.ghost:hover:not([disabled]) {
		border-color: var(--mukade-text-dim);
	}
</style>
