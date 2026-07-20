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

<label
	class={['mukade-checkbox-row', className]}
	class:mukade-checkbox-disabled={disabled}
	style:--_mukade-checkbox-size={size}
	{style}
>
	<input class="mukade-checkbox-input" type="checkbox" bind:this={inputTag} bind:checked {disabled} {...props} />
	<div class="mukade-checkbox" class:mukade-checkbox-checked={checked} class:mukade-checkbox-indeterminate={indeterminate}></div>
	{#if label}
		<span class="mukade-checkbox-label">{label}</span>
	{/if}
</label>

<style>
	/* ============ CHECKBOX ROW STYLE ============ */

	.mukade-checkbox-row {
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;

		cursor: pointer;
	}

	.mukade-checkbox-row.mukade-checkbox-disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	/* ============ CHECKBOX INPUT STYLE ============ */

	.mukade-checkbox-input {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}

	/* ============ CHECKBOX MAIN STYLE ============ */

	.mukade-checkbox-row:not(.mukade-checkbox-disabled):hover .mukade-checkbox {
		border-color: var(--mukade-bright);
	}

	.mukade-checkbox {
		display: flex;
		align-items: center;
		justify-content: center;

		width: var(--_mukade-checkbox-size, 1rem);
		height: var(--_mukade-checkbox-size, 1rem);
		border: solid 1px var(--mukade-primary);

		box-sizing: border-box;
	}

	.mukade-checkbox::before {
		font-size: calc(var(--_mukade-checkbox-size, 1rem) * 0.75);
		font-weight: 700;
		font-family: var(--mukade-font-vt);
		color: var(--mukade-primary);
	}

	.mukade-checkbox:not(.mukade-checkbox-indeterminate).mukade-checkbox-checked::before {
		content: 'X';
	}

	.mukade-checkbox.mukade-checkbox-indeterminate::before {
		content: '-';
	}

	/* ============ CHECKBOX LABEL STYLE ============ */

	.mukade-checkbox-label {
		font-size: var(--_mukade-checkbox-size, 1rem);
		font-family: var(--mukade-font-vt);
		color: var(--mukade-primary);

		user-select: none;
	}
</style>
