<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		maxHeight?: string;
		maxWidth?: string;
		direction?: 'vertical'; // *fixed direction type
		variant?: 'sticky' | 'hide' | 'natural';
		header?: Snippet<[]>;
		// sidebar?: Snippet<[]>; *add to next version
		children?: Snippet<[]>;
	}

	let { maxHeight, maxWidth, direction = 'vertical', variant = 'sticky', header, /*sidebar,*/ children, ...props }: Props = $props();

	let viewport = $state<HTMLDivElement>();
	let content = $state<HTMLDivElement>();
	let track = $state<HTMLDivElement>();
	let head = $state<HTMLDivElement>();

	let thumbHeight = $state(0);
	let thumbTop = $state(0);
	let headerTop = $state(0);

	let lastScrollTop = 0;

	function thumbUpdate() {
		if (!viewport) return;

		const { scrollTop, scrollHeight, clientHeight } = viewport!;
		const headerH = head?.clientHeight ?? 0;
		const thumbH = (clientHeight / scrollHeight) * 100;

		thumbHeight = thumbH;

		if (!track) return;
		const ratio = scrollTop / (scrollHeight - clientHeight);
		thumbTop = ratio * (track.clientHeight - (track.clientHeight * thumbH) / 100);

		if (head) {
			if (variant === 'hide') {
				const delta = scrollTop - lastScrollTop;
				headerTop = Math.min(0, Math.max(-headerH, headerTop - delta));
			} else if (variant === 'natural') {
				headerTop = -Math.min(headerH, scrollTop);
			}
		}

		lastScrollTop = scrollTop;
	}

	$effect(() => {
		if (viewport) {
			thumbHeight = (viewport.clientHeight / viewport.scrollHeight) * 100;
		}
	});

	$effect(() => {
		if (!viewport || !content) return;

		const resizeObserver = new ResizeObserver(() => thumbUpdate());
		resizeObserver.observe(content);
		resizeObserver.observe(viewport);
		return () => resizeObserver.disconnect();
	});
</script>

<div class="mukade-scroll-area mukade-scroll-area-{direction}" style:max-height={maxHeight} style:max-width={maxWidth} {...props}>
	{#if header}
		<div class="mukade-scroll-area-header" bind:this={head} style:top="{headerTop}px">
			{@render header()}
		</div>
	{/if}
	<!-- {#if sidebar}
		<div class="mukade-scroll-area-sidebar">
			{@render sidebar()}
		</div>
	{/if} -->
	<div class="mukade-scroll-area-viewport" bind:this={viewport} onscroll={thumbUpdate} style:padding-top="{head?.clientHeight || 0}px">
		<div class="mukade-scroll-area-content" bind:this={content}>
			{@render children?.()}
		</div>
	</div>
	{#if thumbHeight < 100 && thumbHeight > 0}
		<div class="mukade-scroll-area-track" bind:this={track} style:top="{Math.max(0, (head?.clientHeight || 0) + headerTop)}px">
			<div class="mukade-scroll-area-thumb" style:height="{thumbHeight}%" style:top="{thumbTop}px"></div>
		</div>
	{/if}
</div>

<style>
	.mukade-scroll-area {
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		height: fit-content;
	}

	.mukade-scroll-area-viewport {
		position: relative;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		scrollbar-width: none;
	}

	.mukade-scroll-area-viewport::-webkit-scrollbar {
		display: none;
	}

	.mukade-scroll-area.mukade-scroll-area-vertical .mukade-scroll-area-viewport {
		overflow-x: hidden;
		overflow-y: scroll;
	}
	.mukade-scroll-area.mukade-scroll-area-horizontal .mukade-scroll-area-viewport {
		overflow-x: scroll;
		overflow-y: hidden;
	}
	.mukade-scroll-area.mukade-scroll-area-both .mukade-scroll-area-viewport {
		overflow: scroll;
	}

	.mukade-scroll-area-track {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 6px;

		background-color: color-mix(in srgb, var(--mukade-bg-soft) 90%, var(--mukade-bg));
	}

	.mukade-scroll-area-thumb {
		position: absolute;
		width: 100%;
		min-height: 20px;
		background-color: var(--mukade-primary);
	}

	.mukade-scroll-area-thumb:hover {
		background-color: var(--mukade-bright);
	}

	.mukade-scroll-area-header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1;

		border-bottom: solid 1px var(--mukade-primary);
		background-color: var(--mukade-bg);
	}

	.mukade-scroll-area-sidebar {
		position: absolute;
		top: 0;
		left: 0;
		width: fit-content;
		height: 100%;
		z-index: 1;

		background-color: var(--mukade-bg);
	}
</style>
