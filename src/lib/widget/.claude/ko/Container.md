# Container

부모의 전체 너비를 차지하고 가로 방향으로 가운데 정렬되는 최소 블록 래퍼입니다. 페이지나 섹션의 최외곽 경계로 사용하세요.

## Import

```svelte
import { Container } from 'mukade-ui';
```

## 사용법

```svelte
<Container style="max-width: 60rem;">
	<!-- 페이지 콘텐츠 -->
</Container>
```

## Props

| Prop       | 타입      | 기본값  | 설명            |
| ---------- | --------- | ------- | --------------- |
| `children` | `Snippet` | —       | 감싸는 콘텐츠.  |

그 외 모든 `HTMLAttributes`(`class`, `style` 등)는 루트 요소로 전달됩니다.

## 참고

- 기본값은 `width: 100%` + `margin: 0 auto`입니다. `max-width`를 `style`/`class`로 지정해 폭을 제한하세요.
- 패딩이나 시각적 스타일이 없는 순수 구조 요소입니다.
