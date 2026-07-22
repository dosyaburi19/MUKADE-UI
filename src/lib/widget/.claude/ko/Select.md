# Select

드롭다운 선택기입니다. `SelectOption` children으로 구성합니다. 현재 선택은 `selected`로 양방향 바인딩됩니다. 바깥 클릭이나 `Escape` 키로 닫힙니다.

## Import

```svelte
import { Select, SelectOption } from 'mukade-ui';
```

## 사용법

```svelte
<script>
	let region = $state('');
</script>

<Select bind:selected={region} placeholder="region">
	<SelectOption key="kr" label="KOREA" />
	<SelectOption key="jp" label="JAPAN" />
</Select>
```

## Props

| Prop          | 타입      | 기본값  | 설명                                                    |
| ------------- | --------- | ------- | ------------------------------------------------------- |
| `selected`    | `string`  | `''`    | 선택된 옵션 key. 바인딩 가능(`bind:selected`).          |
| `open`        | `boolean` | `false` | 드롭다운 열림 상태. 바인딩 가능(`bind:open`).           |
| `placeholder` | `string`  | —       | 아무것도 선택되지 않았을 때 표시.                       |
| `width`       | `string`  | —       | 트리거의 min/max 너비 고정.                            |
| `children`    | `Snippet` | —       | `SelectOption` 항목들.                                  |

그 외 모든 `HTMLAttributes`는 루트 요소로 전달됩니다.

## CSS 커스텀 프로퍼티

| 프로퍼티                   | 폴백                 | 설명                          |
| -------------------------- | -------------------- | ----------------------------- |
| `--mukade-select-accent`   | `--mukade-primary`   | 트리거 테두리, 글자, 화살표.   |
| `--mukade-select-bg`       | `--mukade-bg`        | 트리거와 드롭다운 배경.        |
| `--mukade-select-z-index`  | `10`                 | 드롭다운의 쌓임 순서.          |

## 참고

- 자식 `SelectOption`에 컨텍스트를 제공합니다. 원시 옵션 대신 `SelectOption`을 사용하세요.
- 바깥 클릭과 `Escape` 리스너는 `open`일 때만 부착되고 닫힐 때 제거됩니다.
- 드롭다운이 다른 쌓임 레이어(예: 모달) 위에 와야 하면 `--mukade-select-z-index`를 높이세요.
