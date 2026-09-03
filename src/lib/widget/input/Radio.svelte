<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLInputElement> {
		group?: string;
		value: string;
		size?: string;
		disabled?: boolean;
		label?: string;
	}

	let { group = $bindable(''), value, size, disabled, label, class: className, ...props }: Props = $props();

	let checked = $derived(group === value);
</script>

<label class={['mukade-radio-row', className]} class:mukade-radio-disabled={disabled} style:--_mukade-radio-size={size}>
	<input class="mukade-radio-input" type="radio" {value} {disabled} checked={group === value} onchange={() => (group = value)} {...props} />
	<div class="mukade-radio">
		{#if checked}
			<span class="mukade-radio-checked">X</span>
		{/if}
	</div>
	{#if label}
		<span class="mukade-radio-label">{label}</span>
	{/if}
</label>

<style>
	/* ============ RADIO ROW STYLE ============*/
	.mukade-radio-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		cursor: pointer;
	}

	.mukade-radio-row.mukade-radio-disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	@media (pointer: coarse) {
		.mukade-radio-row {
			min-height: 44px;
		}
	}

	/* ============ RADIO INPUT STYLE ============ */

	.mukade-radio-input {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}

	.mukade-radio-input:focus-visible + .mukade-radio {
		outline: solid 1px var(--mukade-radio-accent, var(--mukade-primary));
		outline-offset: 1px;
	}

	/* ============ RADIO MAIN STYLE ============ */

	@media (hover: hover) {
		.mukade-radio-row:not(.mukade-radio-disabled):hover .mukade-radio {
			--_mukade-radio-accent-bright: hsl(from var(--mukade-radio-accent) h s calc(l * 1.19));
			color: var(--_mukade-radio-accent-bright, var(--mukade-bright));
		}
		.mukade-radio-row:not(.mukade-radio-disabled):hover .mukade-radio .mukade-radio-checked {
			color: var(--mukade-radio-accent, var(--mukade-primary));
		}
	}

	.mukade-radio {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: calc(var(--_mukade-radio-size, 1rem) * 1.25);
		height: var(--_mukade-radio-size, 1rem);

		box-sizing: border-box;

		font-size: var(--_mukade-radio-size, 1rem);
		font-weight: 700;
		font-family: var(--mukade-font-vt);
		color: var(--mukade-radio-accent, var(--mukade-primary));
	}

	.mukade-radio-checked {
		font-size: calc(var(--_mukade-radio-size, 1rem) * 0.75);
	}

	.mukade-radio::before {
		content: '(';
	}

	.mukade-radio::after {
		content: ')';
	}

	/* ============ RADIO LABEL STYLE ============ */

	.mukade-radio-label {
		font-size: var(--_mukade-radio-size, 1rem);
		font-family: var(--mukade-font-vt);
		color: var(--mukade-radio-accent, var(--mukade-primary));

		user-select: none;
	}
</style>
