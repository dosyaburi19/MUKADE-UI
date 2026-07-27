<script lang="ts">
	import type { Font, TextAlign, TextTone, TextVariant } from '$lib/utils/type';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type TextTag = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'label' | 'small';

	interface Props extends HTMLAttributes<HTMLElement> {
		tag?: TextTag;
		variant?: TextVariant;
		glow?: boolean;
		color?: TextTone;
		font?: Font;
		size?: string;
		spacing?: string;
		align?: TextAlign;
		children?: Snippet<[]>;
	}

	const {
		tag = 'p',
		variant = 'led',
		glow = false,
		color = 'default',
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
	class="mukade-text mukade-text-{variant} mukade-text-{color} mukade-text-{font}"
	class:mukade-text-glow={glow}
	style:font-size={size}
	style:letter-spacing={spacing}
	style:text-align={align}
	{...props}
>
	{@render children?.()}
</svelte:element>

<style>
	.mukade-text {
		margin: 0;
		padding: 0;

		font-size: 1rem;
		letter-spacing: 0.4rem;

		--_mukade-text-tone: var(--mukade-text-accent, var(--mukade-text));
		color: var(--_mukade-text-tone);
	}

	/* ============ TEXT VARIANT STYLE ============ */

	.mukade-text.mukade-text-crt {
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
	.mukade-text.mukade-text-glow {
		text-shadow: 0 0 15px color-mix(in srgb, currentColor 50%, transparent);
	}

	/* ============ TEXT FONT STYLE ============ */
	.mukade-text.mukade-text-mono {
		font-family: var(--mukade-font-mono);
	}

	.mukade-text.mukade-text-vt {
		font-family: var(--mukade-font-vt);
	}

	/* ============ TEXT COLOR STYLE ============ */
	.mukade-text.mukade-text-dim {
		--_mukade-text-tone: var(--mukade-text-accent, var(--mukade-text-dim));
	}

	.mukade-text.mukade-text-primary {
		--_mukade-text-tone: var(--mukade-text-accent, var(--mukade-primary));
	}

	.mukade-text.mukade-text-danger {
		--_mukade-text-tone: var(--mukade-text-accent, var(--mukade-bright));
	}

	.mukade-text.mukade-text-warn {
		--_mukade-text-tone: var(--mukade-text-accent, var(--mukade-warn));
	}

	.mukade-text.mukade-text-success {
		--_mukade-text-tone: var(--mukade-text-accent, var(--mukade-success));
	}
</style>
