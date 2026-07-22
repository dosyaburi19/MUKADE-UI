# SelectOption

[`Select`](./Select.md)의 옵션 항목입니다. 반드시 `Select` 안에서 렌더링되어야 하며, 그로부터 선택 컨텍스트를 받습니다. 선택하면 부모의 `selected`가 이 옵션의 `key`로 설정되고 드롭다운이 닫힙니다.

## Import

```svelte
import { Select, SelectOption } from 'mukade-ui';
```

## 사용법

```svelte
<Select bind:selected={value}>
	<SelectOption key="a" label="ALPHA" />
	<SelectOption key="b" label="BRAVO" />
</Select>
```

## Props

| Prop    | 타입     | 기본값  | 설명                                                       |
| ------- | -------- | ------- | ---------------------------------------------------------- |
| `key`   | `string` | —       | **필수.** `Select`의 `selected`에 기록되는 값.             |
| `label` | `string` | —       | 표시 텍스트. 생략 시 `key`로 대체됩니다.                    |

그 외 모든 `HTMLButtonAttributes`(`onclick` 포함)가 전달됩니다. 지정한 `onclick`은 내장 선택 동작에 더해 함께 실행됩니다.

## 참고

- 마운트 시 자신의 `key`/`label`을 부모에 등록하여 트리거가 선택된 라벨을 표시할 수 있게 합니다.
- 색상은 부모 `Select`의 `--mukade-select-accent` / `--mukade-select-bg`를 따릅니다.
- 선택 컨텍스트가 필요하므로 `Select` 밖에서 사용하면 오류가 발생합니다.
