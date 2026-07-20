<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLInputAttributes, 'size'> {
		checked?: boolean;
		size?: string;
		label?: string;
		disabled?: boolean;
	}

	let { checked = $bindable(false), size, label, disabled, class: className, style, ...props }: Props = $props();
</script>

<label class={['mukade-toggle-row', className]} style:--_mukade-toggle-size={size} class:mukade-toggle-disabled={disabled} {style}>
	<input class="mukade-toggle-input" type="checkbox" bind:checked {disabled} {...props} />
	<div class="mukade-toggle" class:mukade-toggle-checked={checked}></div>
	{#if label}
		<span class="mukade-toggle-label">{label}</span>
	{/if}
</label>

<style>
	/* ============ TOGGLE WRAPPER STYLE ============ */

	.mukade-toggle-row {
		position: relative;

		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.mukade-toggle-row.mukade-toggle-disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	/* ============ TOGGLE INPUT STYLE ============ */

	.mukade-toggle-input {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}

	/* ============ TOGGLE TRACK STYLE ============ */

	.mukade-toggle {
		position: relative;

		width: calc(var(--_mukade-toggle-size, 1rem) * 2);
		height: var(--_mukade-toggle-size, 1rem);
		border: solid 1px var(--mukade-primary);

		transition: background 0.5s;
	}

	.mukade-toggle.mukade-toggle-checked {
		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		background-color: color-mix(in srgb, var(--mukade-primary) 15%, transparent);
	}

	/* ============ TOGGLE THUMB STYLE ============ */

	.mukade-toggle::after {
		content: '';

		position: absolute;
		top: 0;
		left: 0;

		width: calc(var(--_mukade-toggle-size, 1rem) * 0.7);
		height: calc(var(--_mukade-toggle-size, 1rem) * 0.7);
		margin: calc(var(--_mukade-toggle-size, 1rem) * 0.15);

		transition:
			background 0.5s,
			left 0.5s;
		background-color: var(--mukade-dim);
	}

	.mukade-toggle.mukade-toggle-checked::after {
		left: var(--_mukade-toggle-size, 1rem);
		background-color: var(--mukade-primary);
	}

	/* ============ TOGGLE LABEL STYLE ============ */

	.mukade-toggle-label {
		font-size: var(--_mukade-toggle-size, 1rem);
		font-family: var(--mukade-font-vt);
		color: var(--mukade-primary);

		user-select: none;
	}
</style>
