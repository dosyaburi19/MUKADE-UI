<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import FilledTextField from './FilledTextField.svelte';
	import OutlinedTextField from './OutlinedTextField.svelte';

	type TextFieldVariant = 'outlined' | 'filled';

	interface Props extends Omit<HTMLInputAttributes, 'value' | 'size' | 'type' | 'children'> {
		variant?: TextFieldVariant;
		type?: string;
		width?: string;
		label?: string;
		placeholder?: string;
		value?: string;
	}

	let { variant = 'outlined', type = 'text', label = '', placeholder = '', value = $bindable(''), width, ...props }: Props = $props();
</script>

{#if variant === 'outlined'}
	<OutlinedTextField {type} {label} {placeholder} bind:value {width} {...props} />
{:else if variant === 'filled'}
	<FilledTextField {type} {label} {placeholder} bind:value {width} {...props} />
{/if}
