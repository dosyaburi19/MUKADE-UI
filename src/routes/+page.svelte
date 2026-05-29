<script>
	import {
		Button,
		Input,
		Text,
		Badge,
		Panel,
		Divider,
		Toggle,
		Checkbox,
		Select,
		SelectOption,
		Alert,
		Avatar,
		ScrollArea,
		Table,
		TableRow,
		TableCell,
		Textarea
	} from '$lib/index.ts';

	let checkbox = $state(false);
</script>

<ScrollArea maxHeight="100%">
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

	<div style="display: flex; flex-direction: row; gap: 1rem; margin-top: 1rem">
		<Avatar
			online={true}
			profile="https://assets.clip-studio.com/ko-kr/description/1983627/img/e7a490f340-e64d-3088-a085-0f6baf88e6.jpg"
			name="good"
			sub="yeahhhhh"
		></Avatar>

		<Avatar
			profile="https://assets.clip-studio.com/ko-kr/description/1983627/img/e7a490f340-e64d-3088-a085-0f6baf88e6.jpg"
			name="AVATAR"
			sub="good. yeah. avatar"
		>
			<Badge label="ON" />
		</Avatar>
		<Avatar online={false} name="Good" sub="yeahhhhh"></Avatar>
		<Avatar online={false} name="Good"></Avatar>
		<Avatar online={false} profile="https://assets.clip-studio.com/ko-kr/description/1983627/img/e7a490f340-e64d-3088-a085-0f6baf88e6.jpg"></Avatar>
	</div>

	<div style="display: flex; flex-direction: row; gap: 1rem; margin-top: 1rem">
		<Panel dots={{ max: 4, index: 3 }} size="20rem">
			{#snippet header()}
				<span style="font-size:1.1rem; font-family: var(--mukade-font-mono);">SYS_INFO</span>
			{/snippet}
			<div style="height: 7rem;">
				<div>CONTENT1</div>
				<div>CONTENT2</div>
			</div>
			{#snippet footer()}
				<Button size="small" variant="success">[CONFIRM]</Button>
				<Button size="small">[DELETE]</Button>
			{/snippet}
		</Panel>
	</div>

	<div style="display: flex; flex-direction: row; gap: 1rem; margin-top: 1rem">
		<Textarea placeholder="$100m" width="30rem" height="15rem" />
	</div>

	<div style="display: flex; flex-direction: row; gap: 1rem; margin-top: 1rem">
		<Table columns={['one', 'two', 'three']}>
			<TableRow>
				<TableCell
					>123412123412341212341212341234123ma12341234123412341234123412343412341212341234123ma12341234123412341234123412343412341212341234123ma12341234123412341234123412343412341212341234123ma12341234123412341234123412343412341212341234123ma12341234123412341234123412343412341212341234123ma12341234123412341234123412343412341212341234123ma1234123412341234123412341234343ma123412341234123412341234123434</TableCell
				>
				<TableCell>
					<Badge variant="success" label="GOOD" />
				</TableCell>
				<TableCell>12</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>12341234</TableCell>
				<TableCell>1234</TableCell>
				<TableCell>
					<Badge variant="danger" label="BAD" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					<Badge variant="warn" label="WARNING" />
				</TableCell>
				<TableCell>1234</TableCell>
				<TableCell>12</TableCell>
			</TableRow>
		</Table>
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
</ScrollArea>

<style>
</style>
