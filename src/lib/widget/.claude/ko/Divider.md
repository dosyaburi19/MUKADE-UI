# Divider

가로 또는 세로 구분선입니다. 가운데에 라벨을 넣을 수도 있습니다.

## Import

```svelte
import { Divider } from 'mukade-ui';
```

## 사용법

```svelte
<Divider label="SECTION" />
<Divider orientation="vertical" weight="2px" />
```

## Props

| Prop          | 타입                              | 기본값         | 설명                                                    |
| ------------- | --------------------------------- | -------------- | ------------------------------------------------------- |
| `orientation` | `'horizontal' \| 'vertical'`      | `'horizontal'` | 선 방향. 세로형은 부모의 높이가 정해져 있어야 합니다.    |
| `variant`     | `'solid' \| 'dashed' \| 'dotted'` | `'solid'`      | 선의 border 스타일.                                    |
| `label`       | `string`                          | —              | 두 선분 사이 가운데 라벨.                              |
| `size`        | `string`                          | `1rem`         | 라벨의 CSS `font-size`.                                |
| `weight`      | `string`                          | `1px`          | 선 두께.                                               |

그 외 모든 `HTMLAttributes`는 루트 요소로 전달됩니다.

## CSS 커스텀 프로퍼티

| 프로퍼티                  | 폴백                 | 설명                 |
| ------------------------- | -------------------- | -------------------- |
| `--mukade-divider-accent` | `--mukade-primary`   | 선과 라벨 색상.       |

## 참고

- 세로형은 라벨에 `writing-mode: vertical-lr`을 사용하며, 늘어나려면 높이가 정의된 부모가 필요합니다.
