<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		children?: Snippet<[]>;
		variant?: 'primary' | 'danger' | 'warn' | 'success' | 'ghost';
		size?: string;
		width?: string;
	}

	const { children, variant = 'primary', size, width, ...props }: Props = $props();
</script>

<button class="mukade-button mukade-button-{variant}" style:--_mukade-button-size={size} style:--_mukade-button-width={width} type="button" {...props}>
	{@render children?.()}
</button>

<style>
	@property --_mukade-button-size {
		syntax: '*';
		inherits: false;
	}
	@property --_mukade-button-width {
		syntax: '*';
		inherits: false;
	}

	.mukade-button {
		width: var(--_mukade-button-width, fit-content);
		padding: calc(var(--_mukade-button-size, 1rem) * 0.2) calc(var(--_mukade-button-size, 1rem) * 0.7);

		border-width: 1px;
		border-style: solid;

		font-size: var(--_mukade-button-size, 1rem);
		font-family: var(--mukade-font-vt);

		transition: transform 0.08s;
		cursor: pointer;
		user-select: none;
	}

	.mukade-button:active:not([disabled]) {
		transform: scale(0.94);
	}

	.mukade-button[disabled] {
		cursor: not-allowed;
		opacity: 0.6;
	}

	.mukade-button:focus-visible {
		outline: 1px solid;
		outline-offset: 1px;
	}

	/* ============ PRIMARY VARIANT STYLE ============ */

	.mukade-button.mukade-button-primary {
		background-color: transparent;
		border-color: var(--mukade-primary);
		color: var(--mukade-primary);
	}

	.mukade-button.mukade-button-primary:hover:not([disabled]) {
		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		background-color: var(--mukade-primary);
		color: var(--mukade-text-dark);
	}

	.mukade-button.mukade-button-primary:active:not([disabled]) {
		/* 디자인 미정 */
	}

	/* ============ DANGER VARIANT STYLE ============ */

	.mukade-button.mukade-button-danger {
		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		background-color: var(--mukade-dim);
		border-color: var(--mukade-primary);
		color: var(--mukade-bright);
	}

	.mukade-button.mukade-button-danger:hover:not([disabled]) {
		background-color: var(--mukade-primary);
		color: var(--mukade-text-dark);
	}

	/* ============ WARN VARIANT STYLE ============ */

	.mukade-button.mukade-button-warn {
		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		border-color: var(--mukade-warn-dim);
		color: var(--mukade-warn-dim);
	}

	.mukade-button.mukade-button-warn:hover:not([disabled]) {
		background-color: var(--mukade-warn);
		color: var(--mukade-text-dark);
	}

	/* ============ SUCCESS VARIANT STYLE ============ */

	.mukade-button.mukade-button-success {
		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		border-color: var(--mukade-success-dim);
		color: var(--mukade-success-dim);
	}

	.mukade-button.mukade-button-success:hover:not([disabled]) {
		background-color: var(--mukade-success);
		color: var(--mukade-text-dark);
	}

	/* ============ GHOST VARIANT STYLE ============ */

	.mukade-button.mukade-button-ghost {
		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		background-color: transparent;
		border-color: var(--mukade-border-soft);
		color: var(--mukade-text-dim);
	}

	.mukade-button.mukade-button-ghost:hover:not([disabled]) {
		border-color: var(--mukade-text-dim);
	}
</style>
