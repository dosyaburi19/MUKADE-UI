<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	type InputVariant = 'outlined' | 'filled' | 'none';

	interface Props extends HTMLInputAttributes {
		variant?: InputVariant;
		type?: 'text' | 'password' | 'number' | 'email' | 'search';
		value?: string | number;
	}

	let { variant = 'outlined', value = $bindable(''), type = 'text', ...props }: Props = $props();
</script>

<input class="input {variant}" bind:value {type} {...props} />

<style>
	.input {
		padding: 0.4rem 0.6rem;

		background-color: var(--mukade-bg);

		box-sizing: border-box;

		font-size: 1rem;
		font-weight: 700;
		font-family: monospace;
		color: var(--mukade-text);

		outline: none;
		caret-color: var(--mukade-primary);
		transition: border-color 0.2s;
	}

	.input.outlined {
		border: 1px solid var(--mukade-primary);
	}

	.input.filled {
		border: 1px solid var(--mukade-border-subtle);
		border-bottom: 1px solid var(--mukade-primary);
	}

	.input.none {
		border: none;
	}

	.input:focus {
		border-color: var(--mukade-bright);
	}

	.input::placeholder {
		color: var(--mukade-placeholder);
	}

	.input:disabled {
		background-color: var(--mukade-bg-soft);
		border-color: var(--mukade-border-soft);
		cursor: not-allowed;
	}
</style>
