# Avatar

사용자 프로필 이미지와 선택적 온라인 상태 점, 이름/부제 블록을 표시합니다. 이미지가 없거나 로드에 실패하면 `name`의 첫 글자로 대체됩니다.

## Import

```svelte
import { Avatar } from 'mukade-ui';
```

## 사용법

```svelte
<Avatar profile="/me.png" name="KAEDE" sub="operator" online />

<!-- children으로 커스텀 상태 표시 -->
<Avatar name="K">
	<span>●</span>
</Avatar>
```

## Props

| Prop       | 타입      | 기본값  | 설명                                                        |
| ---------- | --------- | ------- | --------------------------------------------------------- |
| `profile`  | `string`  | —       | 이미지 URL. 로드 실패 시 `name`의 첫 글자로 대체됩니다.     |
| `online`   | `boolean` | `false` | 초록 상태 점 표시(`children`이 있으면 무시).               |
| `name`     | `string`  | —       | 표시 이름. 첫 글자가 이미지 대체 문자로 쓰입니다.          |
| `sub`      | `string`  | —       | 이름 아래 보조 줄.                                         |
| `size`     | `string`  | `3rem`  | 프로필 정사각형의 CSS 너비/높이.                          |
| `children` | `Snippet` | —       | 기본 점을 대체하는 커스텀 상태 표시기.                     |

그 외 모든 `HTMLAttributes`는 루트 요소로 전달됩니다.

## CSS 커스텀 프로퍼티

| 프로퍼티                 | 폴백                 | 설명                          |
| ------------------------ | -------------------- | ----------------------------- |
| `--mukade-avatar-accent` | `--mukade-primary`   | 테두리와 대체 문자 색상.       |

## 참고

- 프로필 영역은 `size`와 무관하게 `1 / 1` 비율을 유지합니다.
- `--mukade-avatar-accent`는 상속됩니다. 하나만 바꾸려면 `style`로 해당 요소에 직접 지정하세요.
