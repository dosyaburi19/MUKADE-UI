<script lang="ts">
	import TextFieldBase from './TextFieldBase.svelte';

	interface Props {
		type?: string;
		label?: string;
		placeholder?: string;
		value?: string;
		width?: string;
	}

	let { type = '', label = '', placeholder = '', value = $bindable(''), width = '' }: Props = $props();
</script>

<div class="outlined-textfield" style="width: {width ?? '100%'}">
	<TextFieldBase {type} {label} {placeholder} bind:value>
		{#snippet children({ focused, floated, label })}
			<fieldset class:focused>
				{#if label}
					<legend class:floated>
						<span>{floated ? label : ''}</span>
					</legend>
				{/if}
			</fieldset>
		{/snippet}
	</TextFieldBase>
</div>

<style>
	.outlined-textfield {
		--label-floated-top: 0;
		--label-floated-left: 16px;
		--label-floated-transform: translateY(-50%) scale(0.75);

		width: 100%;
		height: auto;
		padding-top: 12px;
	}

	fieldset {
		position: absolute;

		padding: 0 8px;
		margin: 0;

		inset: -5px 0 0 0;
		border: 1px solid var(--mukade-border-soft);
		border-radius: 4px;
		background-color: var(--mukade-bg-soft);
		transition: border-color 0.2s;
		pointer-events: none;
	}

	fieldset.focused {
		border: 2px solid var(--mukade-primary);
	}

	fieldset:not(:has(legend)) {
		inset: 0;
	}

	fieldset.focused:not(:has(legend)) {
		inset: 1px 0 1px 0;
	}

	legend {
		display: block;

		width: 0.01px;
		height: 0.7rem;
		padding: 0;

		font-size: 0.7rem;
		font-family: var(--mukade-font-vt);

		opacity: 0;
		overflow: hidden;
	}

	legend.floated {
		width: auto;

		padding: 0 5px;
	}

	legend span {
		display: inline-block;

		padding: 0 5px;

		opacity: 0;
	}
</style>
