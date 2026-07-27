# Section

선택적 터미널 스타일 제목 행(`>` 마커가 앞에 붙음)을 갖춘 시맨틱 콘텐츠 블록입니다. 기본은 `<section>`이며 다른 시맨틱 태그로도 렌더링됩니다.

## Import

```svelte
import { Section } from 'mukade-ui';
```

## 사용법

```svelte
<Section>
	{#snippet title()}
		<Text tag="h2">DIAGNOSTICS</Text>
	{/snippet}

	<!-- 섹션 본문 -->
</Section>
```

## Props

| Prop       | 타입                                                          | 기본값      | 설명                                   |
| ---------- | ------------------------------------------------------------ | ----------- | -------------------------------------- |
| `tag`      | `'section' \| 'div' \| 'article' \| 'aside' \| 'header' \| 'footer'` | `'section'` | 렌더링할 시맨틱 요소.                  |
| `title`    | `Snippet`                                                    | —           | 제목 콘텐츠. `>` 접두사와 함께 표시.   |
| `children` | `Snippet`                                                    | —           | 섹션 본문.                            |

`title`을 제외한 그 외 모든 `HTMLAttributes`는 루트 요소로 전달됩니다. (여기서 `title`은 HTML 속성이 아니라 스니펫입니다.)

## 참고

- `>` 접두사 막대는 accent 테두리와 글자에 `--mukade-primary`를 사용합니다.
