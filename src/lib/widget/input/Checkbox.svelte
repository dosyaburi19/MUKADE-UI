<script lang="ts">
	interface Props {
		label?: string;
		checked?: boolean;
		indeterminate?: boolean;
		disabled?: boolean;
	}

	let { label, checked = $bindable(false), indeterminate, disabled }: Props = $props();

	let inputTag: HTMLInputElement | undefined;

	$effect(() => {
		if (inputTag) inputTag.indeterminate = indeterminate ?? false;
	});
</script>

<label class="checkbox-row" class:disabled>
	<input class="checkbox-input" type="checkbox" bind:this={inputTag} bind:checked {disabled} />
	<div class="checkbox" class:checked class:indeterminate></div>
	{#if label}
		<span class="label">{label}</span>
	{/if}
</label>

<style>
	/* ============ CHECKBOX ROW STYLE ============ */

	.checkbox-row {
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;

		cursor: pointer;
	}

	.checkbox-row.disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	/* ============ CHECKBOX INPUT STYLE ============ */

	.checkbox-input {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}

	/* ============ CHECKBOX MAIN STYLE ============ */

	.checkbox-row:not(.disabled):hover .checkbox {
		border-color: var(--mukade-bright);
	}

	.checkbox {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 1rem;
		height: 1rem;
		border: solid 1px var(--mukade-primary);

		box-sizing: border-box;
	}

	.checkbox::before {
		font-size: 0.75rem;
		font-weight: 700;
		font-family: var(--mukade-font-vt);
		color: var(--mukade-primary);
	}

	.checkbox:not(.indeterminate).checked::before {
		content: 'X';
	}

	.checkbox.indeterminate::before {
		content: '-';
	}

	/* ============ CHECKBOX LABEL STYLE ============ */

	.label {
		font-size: 1rem;
		font-family: var(--mukade-font-vt);
		color: var(--mukade-primary);

		user-select: none;
	}
</style>
