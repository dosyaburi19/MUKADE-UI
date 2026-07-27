# TableCell

[`TableRow`](./TableRow.md) 안의 셀 하나입니다. 어떤 콘텐츠든 받을 수 있고 너비를 고정할 수 있습니다.

## Import

```svelte
import { Table, TableRow, TableCell } from 'mukade-ui';
```

## 사용법

```svelte
<TableRow>
	<TableCell width="4rem">01</TableCell>
	<TableCell>
		<Badge variant="success" label="OK" />
	</TableCell>
</TableRow>
```

## Props

| Prop       | 타입      | 기본값  | 설명                                          |
| ---------- | --------- | ------- | --------------------------------------------- |
| `width`    | `string`  | `auto`  | 고정 셀 너비. `max-width`도 함께 제한합니다.   |
| `children` | `Snippet` | —       | 셀 콘텐츠(텍스트 또는 중첩 컴포넌트).          |

그 외 모든 `HTMLAttributes`는 `<td>`로 전달됩니다.

## 참고

- 오버플로는 말줄임(`...`)과 `white-space: nowrap`으로 잘립니다. 자르기를 제어하려면 `width`를 지정하세요.
