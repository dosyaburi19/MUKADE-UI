<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import TextFieldBase from './TextFieldBase.svelte';

	interface Props extends Omit<HTMLInputAttributes, 'value' | 'size' | 'type' | 'children'> {
		type?: string;
		label?: string;
		placeholder?: string;
		value?: string;
		width?: string;
	}

	let { value = $bindable(''), width, class: className, style, ...props }: Props = $props();
</script>

<div class={['mukade-textfield-outlined', className]} style:width {style}>
	<TextFieldBase bind:value {...props}>
		{#snippet children({ focused, floated, label })}
			<fieldset class="mukade-textfield-fieldset-outlined" class:mukade-textfield-focused={focused}>
				{#if label}
					<legend class="mukade-textfield-legend" class:mukade-textfield-floated={floated}>
						<span class="mukade-textfield-legend-text">{floated ? label : ''}</span>
					</legend>
				{/if}
			</fieldset>
		{/snippet}
	</TextFieldBase>
</div>

<style>
	.mukade-textfield-outlined {
		--_mukade-textfield-label-floated-top: 0;
		--_mukade-textfield-label-floated-left: 16px;
		--_mukade-textfield-label-floated-transform: translateY(-50%) scale(0.75);

		width: 100%;
		height: auto;
		padding-top: 12px;
	}

	.mukade-textfield-fieldset-outlined {
		position: absolute;

		padding: 0 8px;
		margin: 0;

		inset: -5px 0 0 0;
		border: 1px solid var(--mukade-border-soft);
		border-radius: 4px;
		background-color: var(--mukade-textfield-bg, var(--mukade-bg-soft));
		transition: border-color 0.2s;
		pointer-events: none;
	}

	.mukade-textfield-fieldset-outlined.mukade-textfield-focused {
		border: 2px solid var(--mukade-textfield-accent, var(--mukade-primary));
	}

	.mukade-textfield-fieldset-outlined:not(:has(.mukade-textfield-legend)) {
		inset: 0;
	}

	.mukade-textfield-fieldset-outlined.mukade-textfield-focused:not(:has(.mukade-textfield-legend)) {
		inset: 1px 0 1px 0;
	}

	.mukade-textfield-legend {
		display: block;

		width: 0.01px;
		height: 0.7rem;
		padding: 0;

		font-size: 0.7rem;
		font-family: var(--mukade-font-vt);

		opacity: 0;
		overflow: hidden;
	}

	.mukade-textfield-legend.mukade-textfield-floated {
		width: auto;

		padding: 0 5px;
	}

	.mukade-textfield-legend .mukade-textfield-legend-text {
		display: inline-block;

		padding: 0 5px;

		opacity: 0;
	}
</style>
