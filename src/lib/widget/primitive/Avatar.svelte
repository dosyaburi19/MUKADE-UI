<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		profile?: string;
		online?: boolean;
		name?: string;
		sub?: string;
		size?: string;
		children?: Snippet<[]>;
	}

	let { profile, online = false, name, sub, size, children, ...props }: Props = $props();
	let imgLoadFail = $state(false);

	function onImageLoadError() {
		imgLoadFail = true;
	}

	function onImageLoadStart() {
		imgLoadFail = false;
	}
</script>

<div class="mukade-avatar" style:--_mukade-avatar-size={size} {...props}>
	<div class="mukade-avatar-profile">
		<span class="mukade-avatar-profile-view">
			{#if profile && !imgLoadFail}
				<img class="mukade-avatar-image" src={profile} alt={name} onloadstart={onImageLoadStart} onerror={onImageLoadError} />
			{:else}
				{name?.slice(0, 1)}
			{/if}
		</span>
		{#if children}
			<span class="mukade-avatar-status mukade-avatar-status-custom">{@render children?.()}</span>
		{:else}
			<span class="mukade-avatar-status" class:mukade-avatar-status-online={online}></span>
		{/if}
	</div>
	{#if name || sub}
		<div class="mukade-avatar-information">
			{#if name}<span class="mukade-avatar-name">{name}</span>{/if}
			{#if sub}<span class="mukade-avatar-sub">{sub}</span>{/if}
		</div>
	{/if}
</div>

<style>
	.mukade-avatar {
		display: flex;
		align-items: center;
		gap: 0.8rem;

		height: fit-content;
	}

	.mukade-avatar-profile {
		position: relative;
	}

	.mukade-avatar-profile-view {
		display: flex;
		justify-content: center;
		align-items: center;
		width: var(--_mukade-avatar-size, 3rem);
		border: 1px solid var(--mukade-avatar-accent, var(--mukade-primary));
		background-color: color-mix(in srgb, var(--mukade-avatar-accent, var(--mukade-primary)) 5%, transparent);
		overflow: hidden;

		aspect-ratio: 1 / 1;

		line-height: 1px;
		font-family: var(--mukade-font-mono);
		font-size: 2rem;
		font-weight: 700;
		color: var(--mukade-avatar-accent, var(--mukade-primary));
	}

	.mukade-avatar-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.mukade-avatar-status {
		position: absolute;
		bottom: 0;
		right: 0;
	}

	.mukade-avatar-status:not(.mukade-avatar-status-custom) {
		height: 0.5rem;
		background-color: var(--mukade-placeholder);
		transform: translate(25%, 25%);
		aspect-ratio: 1 / 1;
	}

	.mukade-avatar-status:not(.mukade-avatar-status-custom).mukade-avatar-status-online {
		background-color: var(--mukade-success);
	}

	.mukade-avatar-status.mukade-avatar-status-custom {
		height: fit-content;
		transform: translate(50%, 50%);
	}

	.mukade-avatar-information {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 0.2rem;

		padding: 0.4rem 0;
		padding-right: 0.2rem;

		box-sizing: border-box;

		font-family: var(--mukade-font-mono);
	}

	.mukade-avatar-name {
		font-size: 1rem;
		color: var(--mukade-text);
	}

	.mukade-avatar-sub {
		font-size: 0.8rem;
		color: var(--mukade-text-dim);
	}
</style>
