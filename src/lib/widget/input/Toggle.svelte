<script lang="ts">
	interface Props {
		checked?: boolean;
		label?: string;
		disabled?: boolean;
	}

	let { checked = $bindable(false), label, disabled }: Props = $props();
</script>

<label class="toggle-row" class:disabled>
	<input class="toggle-input" type="checkbox" bind:checked {disabled} />
	<div class="toggle" class:checked></div>
	{#if label}
		<span class="label">{label}</span>
	{/if}
</label>

<style>
	/* ============ TOGGLE WRAPPER STYLE ============ */

	.toggle-row {
		position: relative;

		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.toggle-row.disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	/* ============ TOGGLE INPUT STYLE ============ */

	.toggle-input {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}

	/* ============ TOGGLE TRACK STYLE ============ */

	.toggle {
		position: relative;

		width: 2rem;
		height: 1rem;
		border: solid 1px var(--mukade-primary);

		transition: background 0.5s;
	}

	.toggle.checked {
		background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
		background-color: color-mix(in srgb, var(--mukade-primary) 15%, transparent);
	}

	/* ============ TOGGLE THUMB STYLE ============ */

	.toggle::after {
		content: '';

		position: absolute;
		top: 0;
		left: 0;

		width: 0.7rem;
		height: 0.7rem;
		margin: 0.15rem;

		transition:
			background 0.5s,
			left 0.5s;
		background-color: var(--mukade-dim);
	}

	.toggle.checked::after {
		left: 1rem;
		background-color: var(--mukade-primary);
	}

	/* ============ TOGGLE LABEL STYLE ============ */

	.label {
		font-size: 1rem;
		font-family: var(--mukade-font-vt);
		color: var(--mukade-primary);

		user-select: none;
	}
</style>
