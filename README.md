# Type-Todo

<img src='https://user-images.githubusercontent.com/67448481/152044448-cf6d8ad8-7859-4e07-838b-096db836ac7a.png' alt="img" width="600px">

타입스크립트를 활용해 만든 심플하고 쉬운 Todo 앱입니다.

## 배포 주소

[https://type-todo.netlify.app/](https://type-todo.netlify.app/)

---

## 사용 기술 및 스택

| ⚙️  Stack |
| --- |
| Typescript |
| React Hooks |
| styled-components |
| React-icons |
| Deploy : Netilfy |
| Other : Git / GitHub |
| Build Tool (Create React App) |
| Code Quality Tool (Prettier) |

---
## 프로젝트 구조

```bash
.
├── App.tsx
├── components
│   ├── AddButton.tsx
│   ├── Todo.tsx
│   ├── TodoBox.tsx
│   ├── TodoForm.tsx
│   ├── TodoHeader.tsx
│   └── TodoList.tsx
├── constants
│   └── index.ts
├── index.tsx
├── pages
│   └── main.tsx
├── react-app-env.d.ts
├── styles
│   └── GlobalStyles.ts
└── utils
    └── getDate.ts
```
---

## 구현 기능

1. 새로고침 시에도 TODO 리스트가 유실되지 않도록 로컬스토리지 활용
2. 원형 프로그레스바 활용하여 오늘의 TODO 달성률 표시
3. 그 외의 기본적인 TODO Add, Delete, Checked 기능

---
