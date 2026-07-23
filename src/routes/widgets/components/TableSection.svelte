<script lang="ts">
	import { Table, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const usage = `<script>
  import { Table, TableRow, TableCell } from 'mukade-ui';
<\/script>

<Table columns={['ID', 'NAME', 'STATUS']} width="30rem">
  <TableRow>
    <TableCell>01</TableCell>
    <TableCell>KAEDE</TableCell>
    <TableCell>ONLINE</TableCell>
  </TableRow>
</Table>`;

	const props = [
		{ p: 'columns', t: 'string[]', d: '—' },
		{ p: 'width', t: 'string', d: 'fit-content' }
	];

	const css = [
		{ p: '--mukade-table-accent', f: '--mukade-primary', d: 'Header underline and header text.' },
		{ p: '--mukade-table-bg', f: '--mukade-bg-soft', d: 'Table background.' },
		{ p: '--mukade-table-max-size', f: 'none', d: 'Maximum width before horizontal scroll.' }
	];

	const notes = [
		'When width is set, the table clips overflow and uses a fixed layout; otherwise it scrolls horizontally up to --mukade-table-max-size.',
		'The native scrollbar is hidden for a cleaner terminal look.',
		"TableRow renders a bottom border between rows; the last row's border is removed automatically.",
		'TableCell overflow is clipped with an ellipsis and white-space: nowrap; set width to control truncation.'
	];
</script>

<BaseSection
	id="TABLE"
	category="DATA"
	sectionTitle="Table"
	description="A data table. Provide column headers via columns, and rows by composing TableRow / TableCell children."
	{usage}
	{props}
	{css}
	{notes}
>
	<Table width="24rem" columns={['id', 'name', 'status']}>
		<TableRow>
			<TableCell>01</TableCell>
			<TableCell>mukade-core</TableCell>
			<TableCell>online</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>02</TableCell>
			<TableCell>mukade-ui</TableCell>
			<TableCell>online</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>03</TableCell>
			<TableCell>mukade-net</TableCell>
			<TableCell>idle</TableCell>
		</TableRow>
	</Table>
</BaseSection>
