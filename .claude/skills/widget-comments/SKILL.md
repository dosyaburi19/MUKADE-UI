---
name: widget-comments
description: MUKADE-UI 위젯의 문서 파일을 생성한다. src/lib/widget 의 위젯 소스를 읽어 props·CSS 변수·사용 예시를 담은 영문 문서와 그 한글 번역본을 만든다. 새 위젯을 추가했거나 기존 위젯의 props 가 바뀌어 문서를 갱신해야 할 때 사용한다.
---

# 위젯 설명 파일 생성

MUKADE-UI 위젯의 소스를 읽어, MUI 같은 UI 라이브러리에서 쓰는 문서 규격으로 설명 파일을 생성한다.

## 사용법

```
/widget-comments --name Progress    # 지정한 위젯 하나
/widget-comments --all              # 전체 위젯
```

**인자 없이 호출된 경우 아무것도 생성하지 않는다.** `--name` 또는 `--all` 중 하나가 반드시 필요하며, 둘 다 없으면 어떤 위젯을 대상으로 할지 사용자에게 되묻고 대기한다.

## 대상 위젯 찾기

- `--name {WidgetName}` — `src/lib/widget/` 하위에서 같은 이름의 `.svelte` 파일을 재귀적으로 찾는다.
- `--all` — `src/lib/index.ts` 가 export 하는 위젯 전체를 대상으로 한다.

## 출력 위치

이 저장소를 기준으로 한 상대 경로에 생성한다. (MUKADE-UI 와 MUKADE-UI-HOME 은 같은 상위 디렉토리에 나란히 있다고 가정한다.)

| 언어 | 경로                                                          |
| ---- | ------------------------------------------------------------- |
| 영문 | `../MUKADE-UI-HOME/.claude/widget-comment/{WidgetName}.md`    |
| 한글 | `../MUKADE-UI-HOME/.claude/widget-comment/ko/{WidgetName}.md` |

**같은 이름의 파일이 이미 있으면 덮어쓴다.**

## 작성 규격

이 스킬 디렉토리의 `TEMPLATE.md` 를 따른다. 경로는 `.claude/skills/widget-comments/TEMPLATE.md` 이며, 다른 곳에서 찾지 않는다.

이 파일은 Alert 위젯의 완성된 문서다. 설명이 아니라 실물 예시이므로, 섹션 구성과 표 형식을 그대로 맞춘다.

섹션 구성:

1. `# {WidgetName}` — 위젯의 역할과 특징을 한두 문장으로
2. `## Import`
3. `## Usage` — 대표적인 사용 예시 2개 내외
4. `## Props` — 표 형식. 소스의 `interface Props` 를 근거로 한다
5. `## CSS Variables` — 공개 훅과 참조하는 테마 토큰
6. `## Notes` — 접근성 처리, 동작상 주의점, 시각적 의도

### 지켜야 할 것

- Props 표의 타입과 기본값은 **반드시 소스에서 확인한 값**을 쓴다. 존재하지 않는 prop 이나 CSS 변수를 지어내지 않는다.
- `## CSS Variables` 는 `--mukade-{widget}-accent` 같은 공개 훅을 우선 기술한다. **공개 훅이 없는 위젯이라도 어떤 전역 테마 토큰을 읽는지 기술한다** (TEMPLATE.md 의 Alert 이 이 경우에 해당한다).
- `--_mukade-*` 로 시작하는 내부 전용 변수는 문서화하지 않는다. 외부에서 설정하는 값이 아니며 `@property` 로 상속이 차단되어 있다.
- 나머지 속성이 루트 요소로 전달되는 위젯은 그 사실을 명시한다.

## 한글 문서

영문 문서를 번역한 것으로 충분하다. 다음은 번역하지 않고 원문을 유지한다:

- prop 이름, 타입 표기, CSS 변수명
- 코드 예시 전체
- 표의 구조와 열 구성

## 예시

```
/widget-comments --name Progress
```

`src/lib/widget/feedback/Progress.svelte` 를 읽어 아래 두 파일을 생성한다.

- `../MUKADE-UI-HOME/.claude/widget-comment/Progress.md`
- `../MUKADE-UI-HOME/.claude/widget-comment/ko/Progress.md`
