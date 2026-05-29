<script lang="ts">
	import FilledTextField from './FilledTextField.svelte';
	import OutlinedTextField from './OutlinedTextField.svelte';

	type TextFieldVariant = 'outlined' | 'filled';

	interface Props {
		variant?: TextFieldVariant;
		type?: string;
		width?: string;
		label?: string;
		placeholder?: string;
		value?: string;
	}

	let { variant = 'outlined', type = 'text', label = '', placeholder = '', value = $bindable(''), width = '' }: Props = $props();
</script>

{#if variant === 'outlined'}
	<OutlinedTextField {type} {label} {placeholder} bind:value {width} />
{:else if variant === 'filled'}
	<FilledTextField {type} {label} {placeholder} bind:value {width} />
{/if}
