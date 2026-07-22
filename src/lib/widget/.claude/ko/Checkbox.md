# Checkbox

중간 상태(indeterminate)와 선택적 라벨을 갖춘 불리언 체크박스입니다. 네이티브 input은 시각적으로 숨기고 스타일된 박스가 상태를 렌더링합니다. `checked`로 양방향 바인딩됩니다.

## Import

```svelte
import { Checkbox } from 'mukade-ui';
```

## 사용법

```svelte
<script>
	let agreed = $state(false);
</script>

<Checkbox label="ACCEPT" bind:checked={agreed} />
<Checkbox label="PARTIAL" indeterminate />
```

## Props

| Prop            | 타입      | 기본값  | 설명                                                         |
| --------------- | --------- | ------- | ----------------------------------------------------------- |
| `checked`       | `boolean` | `false` | 체크 상태. 바인딩 가능(`bind:checked`).                      |
| `indeterminate` | `boolean` | —       | `-`(대시) 상태를 렌더링하며 체크 표시를 덮어씁니다.          |
| `label`         | `string`  | —       | 박스 옆 텍스트 라벨.                                        |
| `disabled`      | `boolean` | —       | 흐리게 하고 상호작용을 막습니다.                            |
| `size`          | `string`  | `1rem`  | 박스와 라벨 글자의 CSS 크기.                               |

`size`를 제외한 그 외 모든 `HTMLInputAttributes`는 input으로 전달됩니다.

## CSS 커스텀 프로퍼티

| 프로퍼티                   | 폴백                  | 설명                                            |
| -------------------------- | --------------------- | ----------------------------------------------- |
| `--mukade-checkbox-accent` | `--mukade-primary`    | 테두리, 표시, 라벨 색상. 호버/포커스는 더 밝은 파생색을 사용합니다. |

## 참고

- 키보드 포커스는 숨긴 input의 `:focus-visible`로 감지하여 스타일된 박스에 아웃라인으로 그립니다.
- `size`는 (체크박스에서 의미 없는) 네이티브 `size` 속성을 CSS 치수로 재정의한 것입니다.
