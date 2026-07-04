<!-- <script lang="ts">
	import { Button, Container, Text } from '$lib/index.ts';
	import TextField from '$lib/widget/input/TextField/TextField.svelte';

	function StyleToString(styles: { [key: string]: string }) {
		let rv = '';
		for (const [key, value] of Object.entries(styles)) {
			const lowTextKey = key.replace(/[A-Z]/g, (substr) => '-' + substr.toLowerCase());
			rv += `${lowTextKey}:${value};`;
		}

		return rv;
	}
</script>

<div class="container-login">
	<Container
		style={StyleToString({ display: 'flex', flexDirection: 'column', alignItem: 'center', justifyContent: 'center', width: '30%', height: '70%', gap: '1%' })}
	>
		<Text style="font-size: 20px; font-weight: 700;">Login</Text>
		<div>
			<TextField variant="filled" label="ID" />
			<TextField variant="outlined" label="Password" type="password" />
		</div>
		<Button>Login</Button>
	</Container>
</div>

<style>
	.container-login {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100%;
	}
</style> -->

<script>
	import { Button, Container, Input, Panel } from '$lib/index.ts';
</script>

<Container style="display:flex; justify-content:center; align-items:center; height: 100%;">
	<Panel size="20rem" dots={{ index: 3, max: 4 }}>
		{#snippet header()}
			<span>LOGIN</span>
		{/snippet}

		<Input style="width: 100%" placeholder="username" />
		<Input style="width: 100%" placeholder="password" />

		{#snippet footer()}
			<Button variant="primary">[CONFIRM]</Button>
		{/snippet}
	</Panel>
</Container>
