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

<div class="filled-textfield" style="width: {width ?? '100%'}">
	<TextFieldBase {type} {label} {placeholder} bind:value>
		{#snippet children({ focused })}
			<div class="background" class:focused></div>

			<div class="underline">
				<div class="underline-effecter" class:focused></div>
			</div>
		{/snippet}
	</TextFieldBase>
</div>

<style>
	.filled-textfield {
		--input-padding: 24px 14px 8px 14px;
		--label-floated-top: 6px;
		--label-floated-left: 14px;
		--label-floated-transform: translateY(0) scale(0.75);

		width: 100%;
		height: auto;
	}

	.background {
		position: absolute;

		inset: 0;
		border-radius: 4px 4px 0 0;
		background-color: var(--mukade-bg);

		transition: background-color 0.2s;
		pointer-events: none;
	}

	.background:hover,
	.background.focused {
		background-color: var(--mukade-bg-soft);
	}

	.underline {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		background-color: var(--mukade-border-soft);
	}

	.underline-effecter {
		position: absolute;
		left: 50%;
		bottom: 0;
		width: 0;
		height: 2px;
		background-color: var(--mukade-primary);
		transform: translateX(-50%);
		transition: width 0.2s ease-out;
	}

	.underline-effecter.focused {
		width: 100%;
	}
</style>
