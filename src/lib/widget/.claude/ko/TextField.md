# TextField

떠오르는 터미널 스타일 애니메이션 라벨을 갖춘 라벨 텍스트 입력입니다. 외곽선과 채움 두 변형이 있습니다. `value`로 양방향 바인딩됩니다. 네이티브 input 속성을 전달하므로 실제 폼에서 동작합니다.

## Import

```svelte
import { TextField } from 'mukade-ui';
```

## 사용법

```svelte
<script>
	let email = $state('');
</script>

<TextField label="EMAIL" type="email" bind:value={email} name="email" required />
<TextField variant="filled" label="PASSWORD" type="password" width="20rem" />
```

## Props

| Prop          | 타입                     | 기본값       | 설명                                             |
| ------------- | ------------------------ | ------------ | ------------------------------------------------ |
| `variant`     | `'outlined' \| 'filled'` | `'outlined'` | 시각 스타일.                                     |
| `type`        | `string`                 | `'text'`     | 네이티브 input 타입.                             |
| `label`       | `string`                 | —            | 떠오르는 라벨 텍스트(포커스/입력 시 타이핑됨).    |
| `placeholder` | `string`                 | —            | 포커스되거나 라벨이 없을 때 표시되는 플레이스홀더.|
| `value`       | `string`                 | `''`         | 입력 값. 바인딩 가능(`bind:value`).              |
| `width`       | `string`                 | `100%`       | 필드 래퍼의 CSS 너비.                            |

그 외 네이티브 `HTMLInputAttributes`(`name`, `required`, `disabled`, `readonly`, `onchange`, `id`, `class`, `style` 등)는 내부 `<input>`으로 전달됩니다 — `class`/`style`은 바깥 래퍼에 적용됩니다.

## CSS 커스텀 프로퍼티

| 프로퍼티                    | 폴백                 | 설명                        |
| --------------------------- | -------------------- | --------------------------- |
| `--mukade-textfield-accent` | `--mukade-primary`   | 포커스 테두리/밑줄과 라벨.   |
| `--mukade-textfield-bg`     | 변형에 따라 다름     | 필드 배경.                  |

## 참고

- `id`를 지정하면 그대로 존중되며 라벨의 `for`와 동기화됩니다. 없으면 `$props.id()`로 SSR 안전한 안정적 id가 생성됩니다.
- 사용자의 `onfocus`/`onblur` 핸들러는 보존됩니다 — 내부 포커스 추적은 여러분의 핸들러를 대체하지 않고 함께 동작합니다.
- 라벨은 떠오를 때 한 글자씩 "타이핑"됩니다. 라벨이 없는 필드는 플레이스홀더를 즉시 표시합니다.
