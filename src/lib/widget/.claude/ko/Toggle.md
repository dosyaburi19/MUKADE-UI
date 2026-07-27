# Toggle

선택적 라벨을 갖춘 스위치 형태의 불리언 입력입니다. 네이티브 체크박스는 숨기고 슬라이딩 트랙/썸이 상태를 렌더링합니다. `checked`로 양방향 바인딩됩니다.

## Import

```svelte
import { Toggle } from 'mukade-ui';
```

## 사용법

```svelte
<script>
	let power = $state(true);
</script>

<Toggle label="POWER" bind:checked={power} />
<Toggle label="SCALED" size="1.5rem" />
```

## Props

| Prop       | 타입      | 기본값  | 설명                                          |
| ---------- | --------- | ------- | --------------------------------------------- |
| `checked`  | `boolean` | `false` | 켜짐/꺼짐 상태. 바인딩 가능(`bind:checked`).   |
| `label`    | `string`  | —       | 스위치 옆 텍스트 라벨.                        |
| `disabled` | `boolean` | —       | 흐리게 하고 상호작용을 막습니다.             |
| `size`     | `string`  | `1rem`  | CSS 크기 단위. 트랙은 가로 `2×`, 세로 `1×`.  |

`size`를 제외한 그 외 모든 `HTMLInputAttributes`는 input으로 전달됩니다.

## CSS 커스텀 프로퍼티

| 프로퍼티                 | 폴백                 | 설명                                                              |
| ------------------------ | -------------------- | ---------------------------------------------------------------- |
| `--mukade-toggle-accent` | `--mukade-primary`   | 트랙 테두리와 썸 색상. 지정 시 꺼짐 상태 썸은 accent를 어둡게 섞은 색이고, 없으면 `--mukade-dim`을 씁니다. |

## 참고

- 키보드 포커스는 숨긴 input의 `:focus-visible`로 감지하여 트랙에 아웃라인으로 그립니다.
