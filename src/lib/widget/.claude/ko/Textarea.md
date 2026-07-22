# Textarea

크기 조절이 가능한 여러 줄 텍스트 입력입니다. 선택적 리사이즈 핸들과 커스텀 스크롤바를 갖췄습니다. `value`로 양방향 바인딩됩니다.

## Import

```svelte
import { Textarea } from 'mukade-ui';
```

## 사용법

```svelte
<script>
	let note = $state('');
</script>

<Textarea placeholder="log entry..." bind:value={note} width="24rem" height="8rem" resizing />
```

## Props

| Prop       | 타입      | 기본값  | 설명                                        |
| ---------- | --------- | ------- | ------------------------------------------- |
| `value`    | `string`  | `''`    | 텍스트 내용. 바인딩 가능(`bind:value`).     |
| `width`    | `string`  | `12rem` | CSS 너비.                                   |
| `height`   | `string`  | `7rem`  | CSS 높이.                                   |
| `resizing` | `boolean` | `false` | 사용자 리사이즈 핸들(`resize`)을 활성화.    |

`value`를 제외한 그 외 모든 `HTMLTextareaAttributes`(`placeholder`, `disabled`, `maxlength` 등)는 textarea로 전달됩니다.

## CSS 커스텀 프로퍼티

| 프로퍼티                   | 폴백                  | 설명                       |
| -------------------------- | --------------------- | -------------------------- |
| `--mukade-textarea-accent` | `--mukade-primary`    | 테두리와 스크롤바 색상.     |
| `--mukade-textarea-bg`     | `--mukade-bg-inset`   | textarea 배경.            |

## 참고

- `resizing`은 기본값이 `false`(고정 크기)입니다. 수동 리사이즈를 허용하려면 지정하세요.
