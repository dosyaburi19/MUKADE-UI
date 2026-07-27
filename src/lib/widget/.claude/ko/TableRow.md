# TableRow

[`Table`](./Table.md) 본문 안의 행입니다. `TableCell` children을 포함합니다.

## Import

```svelte
import { Table, TableRow, TableCell } from 'mukade-ui';
```

## 사용법

```svelte
<Table columns={['A', 'B']}>
	<TableRow>
		<TableCell>1</TableCell>
		<TableCell>2</TableCell>
	</TableRow>
</Table>
```

## Props

| Prop       | 타입      | 기본값  | 설명               |
| ---------- | --------- | ------- | ------------------ |
| `children` | `Snippet` | —       | `TableCell` 항목들.|

그 외 모든 `HTMLAttributes`는 `<tr>`로 전달됩니다.

## 참고

- 행 사이에 하단 테두리를 렌더링하며, 마지막 행의 테두리는 자동으로 제거됩니다.
