<script>
	import { Button, Input, Text, Badge } from '$lib/index.ts';
	import Checkbox from '$lib/widget/input/Checkbox.svelte';
	import Select from '$lib/widget/input/Select/Select.svelte';
	import SelectOption from '$lib/widget/input/Select/SelectOption.svelte';
	import Toggle from '$lib/widget/input/Toggle.svelte';
	import Alert from '$lib/widget/overlay/alert/Alert.svelte';
	import Divider from '$lib/widget/primitive/Divider.svelte';

	let checkbox = $state(false);
</script>

<!-- 
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->

<div class="container">
	<div style="padding: 16px;">
		<Input variant="outlined" placeholder="1231" />
	</div>
	<div style="display: flex; flex-direction: row; gap: 2rem;">
		<div>
			<Button variant="primary">[BUTTON]</Button>
		</div>

		<div>
			<Button variant="danger">[BUTTON]</Button>
		</div>

		<div>
			<Button variant="warn">[BUTTON]</Button>
		</div>

		<div>
			<Button variant="success">[BUTTON]</Button>
		</div>

		<div>
			<Button variant="ghost">[BUTTON]</Button>
		</div>
	</div>

	<div style="height: 10rem;">
		<Divider label="[GOOD]" orientation="vertical" />
	</div>

	<div style="display: flex; flex-direction: row; gap: 2rem; margin-top: 1rem;">
		<Text tag="small" color="success" size="large">안녕하십니까?</Text>
	</div>

	<div style="display: flex; flex-direction: row; gap: 1rem; margin-top: 1rem;">
		<Badge variant="primary" label="ERROR" />
		<Badge variant="idle" label="ERROR" />
		<Badge variant="danger" label="ERROR" />
		<Badge variant="warn" label="ERROR" />
		<Badge variant="success" label="ERROR" />
		<Badge variant="success" count={1001} max={100} position="bottom-right">
			<Button>[wow]</Button>
		</Badge>

		<Checkbox bind:checked={checkbox} />
		<Checkbox bind:checked={checkbox} label="asefasef" />
		<Checkbox bind:checked={checkbox} disabled />
		<Checkbox indeterminate={checkbox} />
		<Checkbox label="asefasef" indeterminate={checkbox} />
		<Checkbox label="asefasef" disabled indeterminate={checkbox} />

		<Toggle label="toggle" disabled />
	</div>

	<div style="display: flex; flex-direction: row; gap: 1rem; margin-top: 1rem">
		<Select>
			<SelectOption key="good-ka a a" label="good1 e asasefasf ea" />
			<SelectOption key="good-uk12" />
			<SelectOption key="good-jp" label="good3" />
			<SelectOption key="good-en" label="good4" />
		</Select>
	</div>

	<div style="display: flex; flex-direction: row; gap: 1rem; margin-top: 1rem">
		<Alert title="ERROR / Alert Test" variant="danger" size="15rem">This is Error Alert. You can create this alert.</Alert>
		<Alert title="ERROR / Alert Test" variant="warn">This is Error Alert. You can create this alert.</Alert>
		<Alert title="ERROR / Alert Test" variant="success">This is Error Alert. You can create this alert.</Alert>
	</div>

	<!-- <div class="header">
		<div class="header-title">
			<Text style="font-size: 20px; font-weight: 700; color: var(--mukade-primary-500)">{'>_ root@mssenger:~$'}</Text>
			<Text style="font-size: 20px; font-weight: 700; color: #88ff88">ONLINE</Text>
		</div>
		<div class="network">127.0.0.1 <Button>{'[HIDE]'}</Button></div>
	</div>
	<div class="body">
		<div class="chatting">
			<div class="title">
				<div>
					{'>'} 사용자 | ACTIVE
				</div>
				<div class="features">
					<Button>{'[CALL]'}</Button>
					<Button>{'[VIDEO]'}</Button>
					<Button>{'[...]'}</Button>
				</div>
			</div>
			<div class="chat-body">
				<div class="chat-item">
					<div class="divider"></div>
					<div class="chat-info">{'[10:00:23]'} {'[상대방] >'}</div>
					<div class="chat-message">
						<div class="line"></div>
						<div class="message">안녕하세요!</div>
					</div>
				</div>
			</div>
			<div class="message-input">
				<div class="feature-icon">$</div>
				<Input />
				<Button>{'[SEND]'}</Button>
			</div>
		</div>
		<div class="menu">
			<div class="navigation">
				<div class="navi-item">{'[CHATS]'}</div>
				<div class="navi-item">{'[FRIENDS]'}</div>
			</div>
			<div class="menu-content"></div>
		</div>
	</div> -->
</div>

<style>
</style>
