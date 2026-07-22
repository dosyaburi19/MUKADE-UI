# Stack

자식 요소를 행 또는 열로 배치하는 플렉스박스 레이아웃 기본 요소입니다. 간격, 정렬, 줄바꿈을 제어합니다.

## Import

```svelte
import { Stack } from 'mukade-ui';
```

## 사용법

```svelte
<Stack direction="column" gap="0.5rem" align="stretch">
	<Button>[A]</Button>
	<Button>[B]</Button>
</Stack>
```

## Props

| Prop        | 타입                                                | 기본값     | 설명                                          |
| ----------- | --------------------------------------------------- | ---------- | --------------------------------------------- |
| `direction` | `'row' \| 'column'`                                 | `'row'`    | 주축 방향(`flex-direction`).                  |
| `gap`       | `string`                                            | —          | 자식 사이 CSS `gap`.                          |
| `align`     | `'start' \| 'center' \| 'end' \| 'stretch'`         | `'start'`  | 교차축 정렬(`align-items`).                   |
| `justify`   | `'start' \| 'center' \| 'end' \| 'between' \| 'around'` | `'start'`  | 주축 분배(`justify-content`).                 |
| `wrap`      | `boolean`                                           | `false`    | 자식이 여러 줄로 줄바꿈되도록 허용.           |
| `children`  | `Snippet`                                           | —          | 배치할 콘텐츠.                                |

그 외 모든 `HTMLAttributes`는 루트 요소로 전달됩니다.

## 참고

- `align`과 `justify`는 친숙한 키워드를 대응하는 플렉스박스 값으로 매핑합니다.
