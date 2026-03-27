# AI Todo Angular 16 — Application

The Angular 16 application for the AI-Powered Development Lab. Built with NgModules, feature-based architecture, and strict TypeScript.

---

## Quick Start

```bash
npm install
npm start               # http://localhost:4200
npm run build            # Production build
npm test                 # Jasmine + Karma unit tests
```

---

## Architecture

```
src/app/
├── app.module.ts                 # Root module (BrowserModule, routing, core, shared)
├── app-routing.module.ts         # Lazy-loads TodoModule at root path
├── app.component.ts              # Shell — header + <router-outlet>
├── core/
│   └── core.module.ts            # Singleton services, guards, interceptors
├── shared/
│   └── shared.module.ts          # Reusable components, pipes, directives
└── features/
    └── todo/
        ├── models/
        │   └── todo.model.ts     # Todo interface + CreateTodoPayload type
        ├── data/
        │   └── mock-todos.ts     # Seed data (6 mock todos)
        ├── services/
        │   ├── todo.service.ts   # In-memory CRUD via BehaviorSubject
        │   └── todo.service.spec.ts
        ├── components/           # Presentational components (built via issues)
        ├── todo-page/
        │   └── todo-page.component.ts  # Smart/container page
        ├── todo.module.ts
        └── todo-routing.module.ts
```

---

## Module Structure

| Module           | Role                                      |
|------------------|-------------------------------------------|
| `AppModule`      | Bootstraps the app, imports routing + core |
| `CoreModule`     | Singleton services (app-wide)              |
| `SharedModule`   | Reusable UI components, pipes, directives  |
| `TodoModule`     | Lazy-loaded feature — all todo concerns    |

---

## State Management

`TodoService` manages state in-memory using `BehaviorSubject<Todo[]>`:

| Method       | Description                     |
|--------------|---------------------------------|
| `getAll()`   | Returns `Observable<Todo[]>`    |
| `getById()`  | Returns `Observable<Todo>`      |
| `add()`      | Creates a new todo              |
| `toggle()`   | Toggles completed status        |
| `update()`   | Partial update by id            |
| `remove()`   | Deletes a todo by id            |

Mock data is seeded from `data/mock-todos.ts` on service initialization.

---

## Conventions

| Rule                              | Detail                                     |
|-----------------------------------|--------------------------------------------|
| Templates                         | Inline `template` string (no `.html` files)|
| Styles                            | Inline `styles` array with SCSS            |
| Change Detection                  | `OnPush` for presentational components     |
| `*ngFor`                          | Always use `trackBy`                       |
| Subscriptions                     | Use `async` pipe — no manual `.subscribe()`|
| Forms                             | `ReactiveFormsModule` + `FormBuilder`      |
| TypeScript                        | Strict mode — no `any`, no implicit returns|
| File naming                       | `kebab-case` files, `PascalCase` classes   |
| Testing                           | Every `.ts` file gets a `.spec.ts` sibling |

---

## Adding Features

Features are not created directly. Each one follows the issue-driven pipeline:

1. Create a GitHub issue from a template
2. Create branch: `feat/<issue-number>-<slug>`
3. Implement following `.github/SKILL.md` conventions
4. Open PR with `Closes #<number>`
5. Pass `npm run build` + `npm test`
6. Merge after review

See the root [README](../README.md) and [SKILL.md](../.github/SKILL.md) for full details.
