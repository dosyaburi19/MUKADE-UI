# Badge

작은 상태 표시기입니다. children 없이 쓰면 독립 **태그**로, children과 함께 쓰면 감싼 콘텐츠(예: 아바타·아이콘)의 모서리에 붙는 **오버레이**로 렌더링됩니다.

## Import

```svelte
import { Badge } from 'mukade-ui';
```

## 사용법

```svelte
<!-- 태그 형태 -->
<Badge variant="success" label="ONLINE" />

<!-- 오버레이 형태 -->
<Badge count={12} max={9} position="top-right">
	<Avatar name="K" />
</Badge>
```

## Props

| Prop       | 타입                                                       | 기본값        | 설명                                                        |
| ---------- | ---------------------------------------------------------- | ------------- | --------------------------------------------------------- |
| `variant`  | `'primary' \| 'ghost' \| 'danger' \| 'warn' \| 'success'`  | `'primary'`   | 색상 구성. `danger`는 채움형이고 나머지는 외곽선형입니다.   |
| `label`    | `string`                                                   | —             | 텍스트 내용. `count`가 있으면 무시됩니다.                   |
| `count`    | `number`                                                   | —             | 숫자 내용. `label`보다 우선합니다.                          |
| `max`      | `number`                                                   | —             | `count` 상한. 초과 시 `{max}+`로 표시됩니다.               |
| `position` | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'top-right'` | 모서리 위치(오버레이 형태 전용).                          |
| `children` | `Snippet`                                                  | —             | 있으면 오버레이 형태로 전환되어 이 콘텐츠를 감쌉니다.       |

그 외 모든 `HTMLAttributes`는 루트 요소로 전달됩니다.

## CSS 커스텀 프로퍼티

| 프로퍼티                | 폴백                        | 설명                                                             |
| ----------------------- | --------------------------- | --------------------------------------------------------------- |
| `--mukade-badge-accent` | `variant` 색상              | 배지 색을 바꿉니다. 외곽선 변형은 테두리+글자에, 채움형 `danger`는 배경+테두리에 적용됩니다(대비를 위해 글자는 어둡게 유지). |

```svelte
<Badge variant="warn" label="A" style="--mukade-badge-accent: cyan" />
```

## 참고

- `--mukade-badge-accent`는 상속됩니다. 상위 요소에 지정하면 하위 모든 배지의 색이 바뀝니다.
- 오버레이 아이템은 `pointer-events: none`이라 감싼 콘텐츠의 클릭을 가로채지 않습니다.
