<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		maxHeight?: string;
		maxWidth?: string;
		direction?: 'vertical' | 'horizontal' | 'both';
		children?: Snippet<[]>;
	}

	let { maxHeight, maxWidth, direction = 'vertical', children, ...props }: Props = $props();
</script>

<div class="scroll-area {direction}" style:max-height={maxHeight} style:max-width={maxWidth} {...props}>
	{@render children?.()}
</div>

<style>
	.scroll-area {
		&.vertical {
			overflow: hidden auto;
		}

		&.horizontal {
			overflow: auto hidden;
		}

		&.both {
			overflow: auto;
		}
	}

	.scroll-area::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}

	.scroll-area::-webkit-scrollbar-track {
		background-color: var(--mukade-bg-soft);
	}

	.scroll-area::-webkit-scrollbar-thumb {
		background-color: var(--mukade-primary);
	}

	.scroll-area::-webkit-scrollbar-thumb:hover {
		background-color: var(--mukade-bright);
	}
</style>
