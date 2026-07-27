# Button

5가지 색상 변형과 독립적인 크기/너비 제어를 갖춘 클릭 버튼입니다. 네이티브 `<button>` 속성을 모두 확장합니다.

## Import

```svelte
import { Button } from 'mukade-ui';
```

## 사용법

```svelte
<Button variant="primary" onclick={submit}>[CONFIRM]</Button>
<Button variant="ghost" disabled>[CANCEL]</Button>
<Button width="100%" size="1.5rem">[BIG]</Button>
```

## Props

| Prop       | 타입                                                      | 기본값      | 설명                                        |
| ---------- | -------------------------------------------------------- | ----------- | ------------------------------------------- |
| `variant`  | `'primary' \| 'danger' \| 'warn' \| 'success' \| 'ghost'`| `'primary'` | 색상 구성.                                  |
| `size`     | `string`                                                | `1rem`      | CSS `font-size`(버튼 전체 크기를 조절).     |
| `width`    | `string`                                                | `fit-content` | CSS 너비.                                  |
| `children` | `Snippet`                                                | —           | 버튼 라벨.                                  |

그 외 모든 `HTMLButtonAttributes`(`onclick`, `disabled`, `type`, `form` 등)는 `<button>`으로 전달됩니다.

## 참고

- `size`는 글자 크기(요소 스케일)를, `width`는 가로 길이를 제어합니다. 서로 독립적인 축입니다.
- `disabled`는 버튼을 흐리게 하고 눌림 애니메이션을 막습니다.
- 모든 변형은 `:active` 시 `scale(0.94)`로 살짝 눌립니다.
