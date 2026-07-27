# Table

데이터 테이블입니다. `columns`로 열 헤더를 지정하고, `TableRow` / `TableCell` children으로 행을 구성합니다. 기본은 콘텐츠 크기에 맞추며, `width`로 고정할 수도 있습니다.

## Import

```svelte
import { Table, TableRow, TableCell } from 'mukade-ui';
```

## 사용법

```svelte
<Table columns={['ID', 'NAME', 'STATUS']} width="30rem">
	<TableRow>
		<TableCell>01</TableCell>
		<TableCell>KAEDE</TableCell>
		<TableCell>ONLINE</TableCell>
	</TableRow>
</Table>
```

## Props

| Prop       | 타입       | 기본값        | 설명                                                    |
| ---------- | ---------- | ------------- | ------------------------------------------------------- |
| `columns`  | `string[]` | —             | 헤더 라벨. 생략하면 헤더 행 없이 렌더링됩니다.           |
| `width`    | `string`   | `fit-content` | 고정 테이블 너비. `table-layout: fixed`를 활성화합니다. |
| `children` | `Snippet`  | —             | `TableRow` 항목들(테이블 본문).                         |

그 외 모든 `HTMLAttributes`는 루트 요소로 전달됩니다.

## CSS 커스텀 프로퍼티

| 프로퍼티                  | 폴백                 | 설명                          |
| ------------------------- | -------------------- | ----------------------------- |
| `--mukade-table-accent`   | `--mukade-primary`   | 헤더 밑줄과 헤더 글자.         |
| `--mukade-table-bg`       | `--mukade-bg-soft`   | 테이블 배경.                  |
| `--mukade-table-max-size` | `none`               | 가로 스크롤 전 최대 너비.     |

## 참고

- `width`가 지정되면 테이블은 오버플로를 잘라내고 고정 레이아웃을 사용합니다. 그렇지 않으면 `--mukade-table-max-size`까지 가로 스크롤됩니다.
- 깔끔한 터미널 느낌을 위해 네이티브 스크롤바는 숨깁니다.
