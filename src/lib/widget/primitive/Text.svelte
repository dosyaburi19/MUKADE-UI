<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type TextTag = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'label' | 'small';
	type TextColor = 'default' | 'dim' | 'primary' | 'danger' | 'success' | 'warn';
	type TextSize = 'large' | 'medium' | 'small' | 'l' | 'm' | 's';

	interface Props extends HTMLAttributes<HTMLElement> {
		tag?: TextTag;
		color?: TextColor;
		size?: TextSize;
		children?: Snippet<[]>;
	}

	const { tag = 'p', color = 'default', size = 'medium', children, ...props }: Props = $props();
</script>

<svelte:element this={tag} class="text {color} {size}" {...props}>
	{@render children?.()}
</svelte:element>

<style>
	.text {
		margin: 0;
		padding: 0;

		font-size: 1rem;
		font-family: var(--mukade-font-mono);
		color: var(--mukade-text);
	}

	/* ============ TEXT SIZE STYLE ============ */
	.text.large,
	.text.l {
		font-size: 1.5rem;
	}

	/* .text.medium,
	.text.m {
		font-size: 1rem;
	} */

	.text.small,
	.text.s {
		font-size: 0.75rem;
	}

	/* ============ TEXT COLOR STYLE ============ */

	.text.dim {
		color: var(--mukade-text-dim);
	}

	.text.primary {
		color: var(--mukade-text);
	}

	.text.danger {
		color: var(--mukade-primary);
	}

	.text.warn {
		color: var(--mukade-warn);
	}

	.text.success {
		color: var(--mukade-success);
	}
</style>
