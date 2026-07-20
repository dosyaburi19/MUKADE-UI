<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		width?: string;
		children?: Snippet<[]>;
	}

	let { width, children, ...props }: Props = $props();
</script>

<td class="mukade-table-cell" style:--_mukade-table-cell-width={width} {...props}>
	{@render children?.()}
</td>

<style>
	/* 내부 전용: 상속 차단 (같은 요소에서 설정→소비) */
	@property --_mukade-table-cell-width {
		syntax: '*';
		inherits: false;
	}

	.mukade-table-cell {
		width: var(--_mukade-table-cell-width, auto);
		max-width: var(--_mukade-table-cell-width, none);
		padding: 0.4rem 0.7rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: var(--mukade-text);
	}
</style>
