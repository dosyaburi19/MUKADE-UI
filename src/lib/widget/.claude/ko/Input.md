# Input

외곽선/채움/무테 변형을 갖춘 한 줄 텍스트 입력입니다. `value`로 양방향 바인딩됩니다.

## Import

```svelte
import { Input } from 'mukade-ui';
```

## 사용법

```svelte
<script>
	let name = $state('');
</script>

<Input placeholder="username" bind:value={name} />
<Input variant="filled" type="password" placeholder="password" />
```

## Props

| Prop      | 타입                                                    | 기본값       | 설명                                        |
| --------- | ------------------------------------------------------- | ------------ | ------------------------------------------- |
| `variant` | `'outlined' \| 'filled' \| 'none'`                      | `'outlined'` | 테두리 처리 방식.                           |
| `type`    | `'text' \| 'password' \| 'number' \| 'email' \| 'search'` | `'text'`     | 네이티브 input 타입.                        |
| `value`   | `string \| number`                                      | `''`         | 입력 값. 바인딩 가능(`bind:value`).         |

그 외 모든 `HTMLInputAttributes`(`placeholder`, `disabled`, `name`, `onchange` 등)는 input으로 전달됩니다.

## CSS 커스텀 프로퍼티

| 프로퍼티                | 폴백                 | 설명                     |
| ----------------------- | -------------------- | ------------------------ |
| `--mukade-input-accent` | `--mukade-primary`   | 테두리와 캐럿 색상.       |
| `--mukade-input-bg`     | `--mukade-bg`        | input 배경.             |

## 참고

- `:focus`는 `--mukade-bright`로 테두리를 밝히고, `:disabled`는 배경과 테두리를 낮춥니다.
