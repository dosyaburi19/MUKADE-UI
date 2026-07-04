<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		profile?: string;
		online?: boolean;
		name?: string;
		sub?: string;
		size?: string;
		children?: Snippet<[]>;
	}

	let { profile, online = false, name, sub, size, children }: Props = $props();
	let imgLoadFail = $state(false);

	function onImageLoadError() {
		imgLoadFail = true;
	}

	function onImageLoadStart() {
		imgLoadFail = false;
	}

	$effect(() => {
		console.log('imgLoadFail : ', imgLoadFail);
	});
</script>

<div class="avatar" style:--avatar-size={size}>
	<div class="profile">
		<span class="profile-view">
			{#if profile && !imgLoadFail}
				<img class="image" src={profile} alt={name} onloadstart={onImageLoadStart} onerror={onImageLoadError} />
			{:else}
				{name?.slice(0, 1)}
			{/if}
		</span>
		{#if children}
			<span class="status custom">{@render children?.()}</span>
		{:else}
			<span class="status" class:online></span>
		{/if}
	</div>
	{#if name || sub}
		<div class="information">
			{#if name}<span class="name">{name}</span>{/if}
			{#if sub}<span class="sub">{sub}</span>{/if}
		</div>
	{/if}
</div>

<style>
	.avatar {
		display: flex;
		align-items: center;
		gap: 0.8rem;

		height: fit-content;
	}

	.profile {
		position: relative;
	}

	.profile-view {
		display: flex;
		justify-content: center;
		align-items: center;
		width: var(--avatar-size, 3rem);
		border: 1px solid var(--mukade-primary);
		background-color: color-mix(in srgb, var(--mukade-primary) 5%, transparent);
		overflow: hidden;

		aspect-ratio: 1 / 1;

		line-height: 1px;
		font-family: var(--mukade-font-vt);
		font-size: 3rem;
		font-weight: 700;
		color: var(--mukade-primary);
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.status {
		position: absolute;
		bottom: 0;
		right: 0;
	}

	.status:not(.custom) {
		height: 0.5rem;
		background-color: var(--mukade-placeholder);
		transform: translate(25%, 25%);
		aspect-ratio: 1 / 1;
	}

	.status:not(.custom).online {
		background-color: var(--mukade-success);
	}

	.status.custom {
		height: fit-content;
		transform: translate(50%, 50%);
	}

	.information {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 0.2rem;

		padding: 0.4rem 0;
		padding-right: 0.2rem;

		box-sizing: border-box;

		font-family: var(--mukade-font-vt);
	}

	.name {
		font-size: 1.2rem;
		color: var(--mukade-text);
	}

	.sub {
		font-size: 1rem;
		color: var(--mukade-text-dim);
	}
</style>
