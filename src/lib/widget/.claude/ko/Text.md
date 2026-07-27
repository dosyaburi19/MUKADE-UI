# Text

색상, 폰트, CRT/LED 표시 변형을 갖춘 터미널 스타일 텍스트입니다. `tag` prop으로 여러 시맨틱 태그 중 하나로 렌더링됩니다.

## Import

```svelte
import { Text } from 'mukade-ui';
```

## 사용법

```svelte
<Text tag="h1" color="primary" glow>SYSTEM ONLINE</Text>
<Text color="dim" size="0.8rem">last sync: 04:12</Text>
<Text variant="crt">scanline text</Text>
```

## Props

| Prop       | 타입                                                          | 기본값      | 설명                                                             |
| ---------- | ------------------------------------------------------------- | ----------- | -------------------------------------------------------------- |
| `tag`      | `'p' \| 'span' \| 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'label' \| 'small'` | `'p'`       | 렌더링할 HTML 요소.                                            |
| `variant`  | `'led' \| 'crt'`                                             | `'led'`     | `'crt'`는 글자에 클립된 스캔라인 그라디언트를 적용합니다.       |
| `glow`     | `boolean`                                                    | `false`     | 현재 색상으로 부드러운 텍스트 그림자(발광)를 추가합니다.        |
| `color`    | `'default' \| 'dim' \| 'primary' \| 'success' \| 'warn' \| 'danger'` | `'default'` | 시맨틱 텍스트 톤. `default`는 기본 텍스트 색상을 사용합니다.    |
| `font`     | `'vt' \| 'mono'`                                             | `'vt'`      | 폰트: `vt`(VT323) 또는 `mono`(Share Tech Mono).                |
| `size`     | `string`                                                     | `1rem`      | CSS `font-size`.                                              |
| `spacing`  | `string`                                                     | `0.2rem`    | CSS `letter-spacing`.                                         |
| `align`    | `'start' \| 'left' \| 'center' \| 'right' \| 'end' \| 'justify'` | `'left'`    | CSS `text-align`.                                            |
| `children` | `Snippet`                                                    | —           | 텍스트 내용.                                                 |

그 외 모든 `HTMLAttributes`(`class`, `style`, `id` 등)는 루트 요소로 전달됩니다.

## CSS 커스텀 프로퍼티

| 프로퍼티                | 폴백                        | 설명                                                            |
| ----------------------- | --------------------------- | -------------------------------------------------------------- |
| `--mukade-text-accent`  | `color` 변형의 톤           | 모든 변형의 색상을 덮어씁니다. `crt` 스캔라인과 `glow`에도 반영됩니다. |

```svelte
<Text color="warn" style="--mukade-text-accent: cyan">recolored warning</Text>
```

## 참고

- `--mukade-text-accent`는 상속됩니다. 상위 요소에 지정하면 하위 모든 `<Text>`의 색이 바뀝니다.
- `crt`와 `glow`가 `currentColor`에서 파생되므로, accent가 스캔라인과 그림자까지 자동으로 흐릅니다.
