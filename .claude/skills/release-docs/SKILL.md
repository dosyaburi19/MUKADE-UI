---
name: release-docs
description: 릴리스 문서를 갱신한다. 마지막 태그 이후의 git 커밋과 변경된 파일을 읽어 CHANGELOG.md 에 새 버전 항목을 추가하고, README.md 의 위젯 목록과 버전 표기를 맞춘다. 위젯을 추가했거나 버그를 고친 뒤 배포 직전에 사용한다.
---

# 릴리스 문서 갱신

마지막 릴리스 이후의 변경 내역을 수집해 `CHANGELOG.md` 와 `README.md` 를 갱신한다.

## 사용법

```
/release-docs --version 1.1.0    # 버전을 직접 지정
/release-docs                    # 변경 내역을 분석해 버전을 제안
```

`--version` 이 없으면 수집한 변경을 근거로 버전을 제안하고 **사용자 확인을 받은 뒤** 진행한다. 임의로 정하지 않는다.

## 동작 순서

1. 변경 범위 수집
2. 실제 변경 내용 분류
3. 버전 확정
4. **초안 제시 → 승인 대기**
5. 승인 후 파일 반영
6. 일관성 검사 결과 보고

---

## 1. 변경 범위 수집

```bash
git describe --tags --abbrev=0        # 마지막 릴리스 태그
git log <tag>..HEAD --no-merges       # 이후 커밋
git diff <tag>..HEAD --stat           # 변경된 파일
git status --short                    # 아직 커밋되지 않은 변경
```

병합 커밋은 `--no-merges` 로 제외한다. 같은 내용이 두 번 집계되기 때문이다.

커밋되지 않은 변경도 포함하되, 초안에서 **`(uncommitted)` 로 표시**해 사용자가 커밋 여부를 판단할 수 있게 한다.

## 2. 분류

**커밋 메시지만 읽고 판단하지 않는다.** 이 저장소의 커밋 메시지는 형식이 일정하지 않으므로, `git diff` 로 **실제 변경된 코드를 확인**해서 분류한다.

| 분류 | 기준 |
|---|---|
| **Added** | `src/lib/widget/` 에 새 `.svelte` 파일, 또는 기존 위젯의 새 prop·variant |
| **Fixed** | 잘못 동작하던 것을 고친 변경 |
| **Accessibility** | `aria-*`, `role`, `prefers-reduced-motion`, `pointer`, 포커스 처리 |
| **Internal** | 사용자에게 보이지 않는 정리 — 죽은 코드 제거, 리팩터링 |
| **⚠️ Breaking changes** | prop 이름 변경·삭제, `mukade-` 클래스명 변경, `--mukade-*` 훅 제거 |

해당 항목이 없으면 그 소제목은 쓰지 않는다.

## 3. 버전 확정

`--version` 이 있으면 그대로 쓴다. 없으면 아래를 근거로 제안한다.

- **Breaking changes 있음** → major
- **새 위젯 또는 새 prop** → minor
- **버그 수정·접근성·내부 정리만** → patch

제안한 버전과 그 근거를 함께 제시하고 확인을 받는다.

## 4. CHANGELOG.md

`# Changelog` 바로 아래에 새 항목을 **삽입**한다. 기존 항목은 건드리지 않는다.

형식은 **`CHANGELOG.md` 파일 자체의 기존 항목을 따른다.** 별도 템플릿을 두지 않으므로 항상 최신 형식과 일치한다.

```markdown
## v1.1.0 — 한 줄 요약

(선택) 릴리스 성격을 설명하는 한 문단. API 변경 여부처럼 사용자가 가장 먼저 궁금해할 내용을 앞에 둔다.

**Added**

- ...
```

### 작성 원칙

- **"무엇을"과 함께 "왜"를 적는다.** 나중에 같은 판단을 다시 하지 않게 된다
- 사용자 입장에서 **무엇이 달라지는지**를 쓴다. 커밋 메시지를 옮겨 적지 않는다
- 위젯 이름은 `` `Progress` `` 처럼 백틱으로 감싼다
- 영문으로 작성한다

## 5. README.md

**README 는 npm 페이지에 노출되는 개요다. 최소한만 손댄다.**

갱신 대상은 다음 셋뿐이다.

1. **제목의 버전 표기** — `# MUKADE-UI [v_1.0.1]` 형태가 있으면 새 버전으로 바꾼다. 없으면 만들지 않는다
2. **Widgets 표** — 새 위젯을 해당 카테고리 행에 추가한다
3. **사용자가 알아야 할 새 동작** — 터치·모션 대응처럼 눈에 보이지 않지만 알아두면 좋은 변화가 생겼을 때만 짧은 절을 추가하거나 기존 절을 수정한다

### 건드리지 않을 것

- 변경 이력 — `CHANGELOG.md` 담당이다. README 에 옮기지 않는다
- npm 배지 — shields.io 가 자동 갱신하므로 손대면 안 된다
- Installation, Quick start, Theming, Customization model — 해당 내용이 실제로 바뀌었을 때만

## 6. 일관성 검사

문서를 갱신한 뒤 아래를 대조하고 **결과를 반드시 보고한다.** 과거에 `Progress` 와 `Spinner` 의 export 가 누락된 적이 있다.

```bash
# index.ts 가 export 하는 위젯
grep -o "as [A-Za-z]*" src/lib/index.ts | sed 's/as //' | sort

# README Widgets 표에 적힌 위젯
sed -n '/^| \*\*/p' README.md | sed 's/.*| //; s/ *|$//' | tr ',' '\n' | sed 's/^ *//; s/ *$//' | sort
```

**검사 항목**

- export 목록과 README 표가 일치하는가
- `src/lib/widget/` 의 `.svelte` 파일 중 export 되지 않은 것이 있는가

두 번째 항목은 **오류가 아니라 확인 요청**이다. `TextFieldBase`, `FilledTextField`, `OutlinedTextField` 는 의도적으로 내부 전용이다. 새로 발견된 미export 위젯만 사용자에게 알린다.

---

## 초안 제시 형식

파일을 수정하기 전에 아래를 보여주고 승인을 받는다.

```
## 수집 범위
v1.0.1 → HEAD, 커밋 N개 (+ uncommitted M건)

## 제안 버전
1.1.0 (minor) — 새 위젯 Radio 추가

## CHANGELOG 에 추가할 내용
(작성한 항목 전문)

## README 변경
- 제목: [v_1.0.1] → [v_1.1.0]
- Widgets 표 Input 행에 Radio 추가

## 일관성 검사
- export ↔ README: 불일치 1건 (Radio 가 README 에 없음 → 이번에 추가됨)
- 미export 위젯: 없음
```

## 지켜야 할 것

- **실제 diff 에 없는 내용을 지어내지 않는다.** 커밋 메시지가 모호하면 코드를 직접 확인하고, 그래도 불분명하면 사용자에게 묻는다
- 기존 CHANGELOG 항목을 **수정하거나 재작성하지 않는다.** 새 항목만 추가한다
- 승인 없이 파일을 수정하지 않는다
