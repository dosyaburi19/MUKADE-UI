<script lang="ts">
	import type { Font, TextAlign, TextVariant } from '$lib/utils/type.ts';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type TextTag = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'label' | 'small';
	type TextColor = 'primary' | 'dim' | 'danger' | 'success' | 'warn';

	interface Props extends HTMLAttributes<HTMLElement> {
		tag?: TextTag;
		variant?: TextVariant;
		glow?: boolean;
		color?: TextColor;
		font?: Font;
		size?: string;
		spacing?: string;
		align?: TextAlign;
		children?: Snippet<[]>;
	}

	const {
		tag = 'p',
		variant = 'crt',
		glow = true,
		color = 'primary',
		font = 'vt',
		size,
		spacing = '0.2rem',
		align = 'left',
		children,
		...props
	}: Props = $props();
</script>

<svelte:element
	this={tag}
	class="text {variant} {color} {font}"
	class:glow
	style:font-size={size}
	style:letter-spacing={spacing}
	style:text-align={align}
	{...props}
>
	{@render children?.()}
</svelte:element>

<style>
	.text {
		margin: 0;
		padding: 0;

		font-size: 1rem;
		letter-spacing: 0.4rem;
		color: var(--mukade-text);
	}

	/* ============ TEXT VARIANT STYLE ============ */

	.text.crt {
		background-image: repeating-linear-gradient(
			0deg,
			currentColor 0px,
			currentColor 2px,
			color-mix(in srgb, currentColor 75%, var(--mukade-bg)) 2px,
			color-mix(in srgb, currentColor 75%, var(--mukade-bg)) 4px
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	/* ============ TEXT GLOW STYLE ============ */
	.text.glow {
		text-shadow: 0 0 15px color-mix(in srgb, currentColor 50%, transparent);
	}

	/* ============ TEXT FONT STYLE ============ */
	.text.mono {
		font-family: var(--mukade-font-mono);
	}

	.text.vt {
		font-family: var(--mukade-font-vt);
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
