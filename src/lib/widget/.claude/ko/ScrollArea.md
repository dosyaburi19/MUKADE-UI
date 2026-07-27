# ScrollArea

커스텀 터미널 스타일 스크롤바를 갖춘 세로 오버플로 컨테이너입니다. 스크롤 방향에 반응하는 스티키 헤더를 넣을 수 있습니다.

## Import

```svelte
import { ScrollArea } from 'mukade-ui';
```

## 사용법

```svelte
<ScrollArea maxHeight="20rem" variant="sticky">
	{#snippet header()}
		<Text>LOG</Text>
	{/snippet}

	<!-- 긴 콘텐츠 -->
</ScrollArea>
```

## Props

| Prop        | 타입                              | 기본값       | 설명                                                            |
| ----------- | --------------------------------- | ------------ | -------------------------------------------------------------- |
| `maxHeight` | `string`                          | —            | CSS `max-height`. 초과분은 스크롤됩니다.                        |
| `maxWidth`  | `string`                          | —            | CSS `max-width`.                                               |
| `direction` | `'vertical'`                      | `'vertical'` | 스크롤 축(이번 버전에서는 세로 전용).                           |
| `variant`   | `'sticky' \| 'hide' \| 'natural'` | `'sticky'`   | 헤더 동작: 고정 / 아래로 스크롤 시 숨김 / 콘텐츠와 함께 스크롤. |
| `header`    | `Snippet`                         | —            | 스티키 헤더 콘텐츠.                                            |
| `children`  | `Snippet`                         | —            | 스크롤될 콘텐츠.                                              |

그 외 모든 `HTMLAttributes`는 루트 요소로 전달됩니다.

## CSS 커스텀 프로퍼티

| 프로퍼티                     | 폴백                 | 설명                                  |
| ---------------------------- | -------------------- | ------------------------------------- |
| `--mukade-scrollarea-accent` | `--mukade-primary`   | 스크롤바 썸과 헤더 밑줄 색상.          |

## 참고

- 네이티브 스크롤바는 숨기고, 뷰포트를 추적하는 합성 썸이 `ResizeObserver`로 갱신됩니다.
- `hide`는 아래로 스크롤할 때 헤더를 접고 위로 스크롤할 때 복원합니다. `natural`은 콘텐츠와 함께 스크롤되어 사라집니다.
