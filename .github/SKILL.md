---
name: ai-todo-dev-workflow
description: >
  End-to-end AI-powered Angular development skill for the Todo app.
  Drives the Issue → Code Generation → Pull Request → AI Review pipeline.
  USE FOR: implementing todo features from GitHub issues, generating Angular
  components/services, opening PRs, reviewing code. Always follow the
  issue-driven workflow — never implement features outside of an issue context.
applyTo: "ai-todo-angular16/**"
---

# AI Todo Development Workflow Skill

## Purpose

Orchestrate the full AI-powered development lifecycle for the Angular Todo app.
Every feature, bug fix, or refactor flows through this pipeline:

```
GitHub Issue → Plan → Code Generation → PR → AI Review → Merge
```

## Architecture Reference

```
ai-todo-angular16/src/app/
├── core/                   # Singleton services, guards, interceptors
├── shared/                 # Reusable components, pipes, directives
└── features/
    └── todo/
        ├── models/         # Todo interface & types
        ├── data/           # Mock data seed
        ├── services/       # TodoService (BehaviorSubject-based state)
        ├── components/     # Presentational components (built via issues)
        ├── todo-page/      # Smart/container page component
        ├── todo.module.ts
        └── todo-routing.module.ts
```

## Tech Stack & Constraints

| Concern       | Choice                              |
|---------------|-------------------------------------|
| Framework     | Angular 16.2.x (NgModules, not standalone) |
| State         | BehaviorSubject in `TodoService`    |
| Forms         | Reactive Forms (`FormBuilder`)      |
| Styling       | SCSS, inline `styles` array         |
| Templates     | Inline `template` string            |
| Testing       | Jasmine + Karma                     |
| TypeScript    | Strict mode enabled                 |
| Data          | In-memory mock data (no backend)    |

## Pipeline Stages

### Stage 1 — GitHub Issue

Every piece of work starts as a GitHub issue using the repo's templates
(`.github/ISSUE_TEMPLATE/`).

**Required fields:**
- Clear **title** prefixed with `feat:`, `fix:`, or `refactor:`
- **Acceptance criteria** as a checklist
- **Technical notes** referencing the architecture above
- Labels: `enhancement`, `bug`, `documentation`, etc.

### Stage 2 — Plan

Given an issue, produce a plan:
1. Identify affected files and modules
2. List new files to create (components, services, specs)
3. Define the public API (inputs, outputs, methods)
4. Note module declarations/imports needed in `todo.module.ts`

### Stage 3 — Code Generation

Generate Angular code that:
- Follows the **inline template/style** convention used in this project
- Uses `OnPush` change detection where the component is purely presentational
- Puts smart logic in the page component (`TodoPageComponent`), not in child components
- Adds the component to `TodoModule.declarations`
- Includes a `.spec.ts` file alongside every new component/service
- Uses `trackBy` for `*ngFor`
- Validates form inputs via `Validators` from `@angular/forms`

**File naming:** `kebab-case` matching Angular CLI conventions.

**Branch naming:** `feat/<issue-number>-<short-slug>` or `fix/<issue-number>-<short-slug>`

### Stage 4 — Pull Request

Open a PR that:
- Uses the repo PR template (`.github/pull_request_template.md`)
- References the issue: `Closes #<number>`
- Has a clear scope section
- Passes `npm run build` and `npm test`

### Stage 5 — AI Review

Review the PR for:
- Angular best practices (lifecycle hooks, immutability, unsubscribe patterns)
- Template correctness (no missing bindings, no unsafe access)
- Test coverage (at least one spec per component/service)
- Performance (trackBy, OnPush where applicable)
- Security (no `innerHTML` binding, no user input in templates without sanitization)

## Code Generation Templates

### New Presentational Component

```typescript
import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-<name>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<!-- template here -->`,
  styles: [` /* styles here */ `],
})
export class <Name>Component {
  @Input() /* ... */;
  @Output() /* ... */ = new EventEmitter();
}
```

### New Service

```typescript
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class <Name>Service {
  // implementation
}
```

### New Spec

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { <Name>Component } from './<name>.component';

describe('<Name>Component', () => {
  let component: <Name>Component;
  let fixture: ComponentFixture<<Name>Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [<Name>Component],
    }).compileComponents();
    fixture = TestBed.createComponent(<Name>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## Mock Data

The app uses `MOCK_TODOS` from `features/todo/data/mock-todos.ts` as seed data.
`TodoService` manages state in-memory via `BehaviorSubject`. No HTTP calls.

Available operations: `getAll()`, `getById(id)`, `add(payload)`, `toggle(id)`,
`update(id, changes)`, `remove(id)`.

## Quick Commands

```bash
cd ai-todo-angular16
npm install          # install deps
npm start            # dev server at localhost:4200
npm run build        # production build
npm test             # run Jasmine/Karma specs
```

## Issue-to-Feature Mapping (Roadmap)

| # | Feature                  | Status      |
|---|--------------------------|-------------|
| 1 | Todo List Component      | To Do       |
| 2 | Todo Form Component      | To Do       |
| 3 | Filter & Search          | To Do       |
| 4 | Priority Badges          | To Do       |
| 5 | Toggle / Complete Todos  | To Do       |
| 6 | Delete Todos             | To Do       |
| 7 | Unit Test Suite          | To Do       |
| 8 | Responsive Styles        | To Do       |
