<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLInputAttributes, 'size'> {
		label?: string;
		checked?: boolean;
		indeterminate?: boolean;
		disabled?: boolean;
		size?: string;
	}

	let { label, checked = $bindable(false), indeterminate, disabled, size, class: className, style, ...props }: Props = $props();

	let inputTag: HTMLInputElement | undefined;

	$effect(() => {
		if (inputTag) inputTag.indeterminate = indeterminate ?? false;
	});
</script>

<label class={['checkbox-row', className]} class:disabled style:--mukade-checkbox-size={size} {style}>
	<input class="checkbox-input" type="checkbox" bind:this={inputTag} bind:checked {disabled} {...props} />
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

		width: var(--mukade-checkbox-size, 1rem);
		height: var(--mukade-checkbox-size, 1rem);
		border: solid 1px var(--mukade-primary);

		box-sizing: border-box;
	}

	.checkbox::before {
		font-size: calc(var(--mukade-checkbox-size, 1rem) * 0.75);
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
		font-size: var(--mukade-checkbox-size, 1rem);
		font-family: var(--mukade-font-vt);
		color: var(--mukade-primary);

		user-select: none;
	}
</style>
