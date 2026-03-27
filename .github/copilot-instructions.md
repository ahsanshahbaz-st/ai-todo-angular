# AI Todo Angular — Copilot Instructions

## Project Overview
This is an **AI-Powered Angular Development Lab** — a todo app where every feature
is built through a GitHub issue-driven pipeline:
**Issue → Plan → Code Generation → Pull Request → AI Review → Merge**

## Architecture
- Angular 16.2.x with NgModules (not standalone components)
- Feature-based structure under `ai-todo-angular16/src/app/features/todo/`
- In-memory state via `TodoService` using `BehaviorSubject` (no backend)
- Mock data seeded from `features/todo/data/mock-todos.ts`

## Conventions
- **Inline templates and styles** — no separate `.html` or `.css` files
- **ChangeDetectionStrategy.OnPush** for presentational components
- **trackBy** for all `*ngFor` loops
- **async pipe** in templates — avoid manual subscriptions
- **ReactiveFormsModule** for all forms
- **Strict TypeScript** — no `any`, no implicit returns
- **Jasmine + Karma** for testing — every file gets a `.spec.ts` sibling
- **kebab-case** file names, **PascalCase** class names

## Workflow Rules
1. Never implement features directly — always start from a GitHub issue
2. Branch naming: `feat/<issue-number>-<slug>` or `fix/<issue-number>-<slug>`
3. Every PR must link an issue with `Closes #<number>`
4. Validate with `npm run build` and `npm test` before pushing
5. Use prompts in `/prompts/` for planning, generation, and review
6. Reference `.github/SKILL.md` for detailed templates and architecture

## Key Files
- `.github/SKILL.md` — Full development skill with code templates
- `prompts/implement-issue.prompt.md` — End-to-end pipeline automation
- `prompts/plan-feature.prompt.md` — Issue → Plan
- `prompts/generate-feature.prompt.md` — Plan → Code
- `prompts/review-pr.prompt.md` — PR → Review
- `.github/ISSUE_TEMPLATE/ai-workflow-task.md` — Issue template
- `.github/pull_request_template.md` — PR template
