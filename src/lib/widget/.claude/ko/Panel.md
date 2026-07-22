# Panel

선택적 헤더/푸터 영역과 헤더의 상태 점 행을 갖춘 테두리 카드 컨테이너입니다. 터미널 스타일 창이나 로그인 박스를 만드는 핵심 요소입니다.

## Import

```svelte
import { Panel } from 'mukade-ui';
```

## 사용법

```svelte
<Panel width="20rem" dots={{ index: 2, max: 3 }}>
	{#snippet header()}
		<span>SESSION</span>
	{/snippet}

	<!-- 본문 -->

	{#snippet footer()}
		<Button>[CONFIRM]</Button>
	{/snippet}
</Panel>
```

## Props

| Prop       | 타입                          | 기본값        | 설명                                                    |
| ---------- | ----------------------------- | ------------- | ------------------------------------------------------- |
| `variant`  | `'primary' \| 'soft-line'`    | `'primary'`   | `soft-line`은 모든 테두리를 은은한 톤으로 낮춥니다.      |
| `header`   | `Snippet`                     | —             | 헤더 콘텐츠. 생략하면 헤더 영역이 숨겨집니다.            |
| `footer`   | `Snippet`                     | —             | 푸터 콘텐츠. 생략하면 푸터 영역이 숨겨집니다.            |
| `width`    | `string`                      | `fit-content` | 패널의 CSS 너비.                                        |
| `dots`     | `{ index: number; max: number }` | —          | 헤더에 `max`개의 점을 렌더링하고 앞 `index`개를 채웁니다.|
| `children` | `Snippet`                     | —             | 패널 본문.                                              |

그 외 모든 `HTMLAttributes`는 루트 요소로 전달됩니다.

## CSS 커스텀 프로퍼티

| 프로퍼티                | 폴백                   | 설명                              |
| ----------------------- | ---------------------- | --------------------------------- |
| `--mukade-panel-accent` | `--mukade-primary`     | 테두리, 헤더/푸터, 점 색상.        |
| `--mukade-panel-bg`     | `--mukade-bg-soft`     | 패널 배경.                        |

## 참고

- `dots`는 `header` 스니펫이 있을 때만 렌더링됩니다.
- 헤더/푸터 색조는 `--mukade-panel-accent`를 `--mukade-panel-bg`에 섞으므로 두 훅이 자연스럽게 조합됩니다.
