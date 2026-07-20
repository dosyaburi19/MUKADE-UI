<script lang="ts">
	import { alignMap, justifyMap, type Align, type Justify } from '$lib/utils/type.ts';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		direction?: 'row' | 'column';
		gap?: string;
		align?: Align;
		justify?: Justify;
		wrap?: boolean;
		children?: Snippet<[]>;
	}

	let { direction = 'row', gap, align = 'start', justify = 'start', wrap = false, children, ...props }: Props = $props();
</script>

<div
	class="mukade-stack"
	style:flex-direction={direction}
	style:gap
	style:align-items={alignMap[align]}
	style:justify-content={justifyMap[justify]}
	style:flex-wrap={wrap ? 'wrap' : 'nowrap'}
	{...props}
>
	{@render children?.()}
</div>

<style>
	.mukade-stack {
		display: flex;
	}
</style>
