# Alert

아이콘, 제목, 선택적 본문을 갖춘 상태 메시지 박스입니다. 4가지 상태 변형이 심각도를 전달합니다. `danger` 변형은 단독으로도 눈에 띄도록 시각적으로 더 무겁게 처리됩니다.

## Import

```svelte
import { Alert } from 'mukade-ui';
```

## 사용법

```svelte
<Alert variant="success" title="SYNC COMPLETE" />

<Alert variant="danger" title="CONNECTION LOST">
	retrying in 5s...
</Alert>
```

## Props

| Prop       | 타입                                             | 기본값   | 설명                                        |
| ---------- | ------------------------------------------------ | -------- | ------------------------------------------- |
| `variant`  | `'info' \| 'success' \| 'warn' \| 'danger'`      | `'info'` | 상태 심각도와 색상.                         |
| `title`    | `string`                                         | —        | **필수.** 굵은 제목 줄.                     |
| `width`    | `string`                                         | —        | 알림 너비 고정(지정하지 않으면 유동적).     |
| `children` | `Snippet`                                        | —        | 제목 아래 선택적 상세 본문.                 |

그 외 모든 `HTMLAttributes`는 루트 요소로 전달됩니다.

## 참고

- 각 변형은 시맨틱 상태 색상에 매핑됩니다. `info`/`success`는 `role="status"`, `warn`/`danger`는 `role="alert"`로 렌더링됩니다.
- `danger`는 채움형 스캔라인 배경과 굵은 글자를 써서, 단독으로 떠 있어도 비교 없이 심각함이 읽히도록 합니다.
- 변형별로 자동 선택된 아이콘(`i`, `✓`, `⚠`, `!`)이 제목 앞에 붙습니다.
