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

---

## Branching Strategy

### Branch Hierarchy

```
main                          ← production-ready (end of milestone)
├── release/m1-sprint-1       ← stable sprint 1 release
├── release/m1-sprint-2       ← stable sprint 2 release
└── develop                   ← active development
    ├── feat/1-todo-list      ← per-issue feature branch
    ├── fix/7-resolve-xyz     ← per-issue fix branch
    └── ...
```

### Branch Naming Conventions

| Type     | Pattern                          | Example                          |
|----------|----------------------------------|----------------------------------|
| Feature  | `feat/<issue>-<slug>`            | `feat/1-todo-list-component`     |
| Bug fix  | `fix/<issue>-<slug>`             | `fix/12-checkbox-toggle`         |
| Refactor | `refactor/<issue>-<slug>`        | `refactor/15-service-cleanup`    |
| DevOps   | `chore/<issue>-<slug>`           | `chore/9-agile-devops-workflow`  |
| Epic     | `epic/<issue>-<slug>`            | `epic/10-todo-mvp`               |
| Release  | `release/m<milestone>-sprint-<n>`| `release/m1-sprint-1`            |

### Merge Flow

```
feat/* ──→ develop        (PR during sprint — squash merge)
develop ──→ release/*     (at sprint end — merge commit)
release/* ──→ main        (at milestone end — merge commit)
```

1. **During a sprint:** developers create `feat/*` or `fix/*` branches from `develop`, open PRs back to `develop`.
2. **At sprint end:** `develop` is merged into `release/m<n>-sprint-<n>`. This triggers the release tag workflow.
3. **After 2 sprints:** both release branches merge into `main` for the final monthly release.

### Branch Protection Rules (Recommended)

| Branch    | Rules                                                |
|-----------|------------------------------------------------------|
| `main`    | Require PR, require status checks, no force push     |
| `develop` | Require PR, require CI pass, squash merge only       |
| `release/*` | Require PR from develop only, require CI pass      |

---

## Agile Process

### Milestones (Monthly Planning)

Each GitHub milestone = **1 month of work**, containing **2 sprints** (2 weeks each).

| Milestone | Period    | Scope                                  | Sprints |
|-----------|-----------|----------------------------------------|---------|
| M1        | Apr 2026  | Todo App MVP — CRUD, UI, tests         | 1, 2    |
| M2        | May 2026  | Advanced — due dates, drag-drop, a11y  | 3, 4    |

**Naming:** `M<n> — <Month Year> — <Theme>`

### Sprint Structure

| Sprint | Dates          | Milestone | Release Branch          |
|--------|----------------|-----------|-------------------------|
| 1      | Apr 1–14       | M1        | `release/m1-sprint-1`   |
| 2      | Apr 15–30      | M1        | `release/m1-sprint-2`   |
| 3      | May 1–14       | M2        | `release/m2-sprint-3`   |
| 4      | May 15–31      | M2        | `release/m2-sprint-4`   |

Each sprint = 1 release cycle → each milestone produces 2 releases.

### Issue Hierarchy

```
Epic
 └── Feature
      └── User Story
           └── Bug / Defect
```

| Level       | Template                   | Label          | Scope                        |
|-------------|----------------------------|----------------|------------------------------|
| Epic        | `epic.md`                  | `type:epic`    | Large body of work (multi-sprint) |
| Feature     | `ai-workflow-task.md`      | `type:feature` | Deliverable capability       |
| User Story  | `user-story.md`            | `type:user-story` | Single unit of user value |
| Bug/Defect  | `defect.md`                | `type:bug`     | Something broken             |

### Label Strategy

| Category   | Labels                                          | Purpose                |
|------------|--------------------------------------------------|------------------------|
| **Type**   | `type:epic`, `type:feature`, `type:user-story`, `type:bug`, `type:devops` | Issue classification |
| **Sprint** | `sprint:1`, `sprint:2`, `sprint:3`, `sprint:4`  | Sprint assignment      |
| **Status** | `status:backlog`, `status:in-progress`, `status:review`, `status:done` | Workflow state |
| **Priority** | `priority:high`, `priority:medium`, `priority:low` | Urgency            |
| **Milestone** | `milestone:m1`, `milestone:m2`               | Monthly grouping       |

### GitHub Workflow (Issue + PR Flow)

```
1. Create Issue  ─── Use template matching the issue type
       │              Assign milestone, sprint, priority, and type labels
       ▼
2. Create Branch ─── feat/<issue>-<slug> from develop
       │
       ▼
3. Plan          ─── Use prompts/plan-feature.prompt.md
       │              Break issue into tasks, identify files
       ▼
4. Generate Code ─── Use prompts/generate-feature.prompt.md
       │              Follow SKILL.md conventions
       ▼
5. Validate      ─── npm run build && npm test
       │
       ▼
6. Open PR       ─── Target: develop
       │              Body: "Closes #<issue>"
       │              Use .github/pull_request_template.md
       ▼
7. AI Review     ─── Use prompts/review-pr.prompt.md
       │              Check: best practices, tests, security
       ▼
8. Merge         ─── Squash merge into develop
       │              Update issue label → status:done
       ▼
9. Sprint End    ─── Merge develop → release/m<n>-sprint-<n>
       │              Auto-tag via GitHub Action
       ▼
10. Milestone End ── Merge release branches → main
```

### GitHub Actions (CI/CD)

| Workflow           | Trigger                       | Purpose                          |
|--------------------|-------------------------------|----------------------------------|
| `ci.yml`           | PR to develop/release/main    | Build + test validation          |
| `pr-validation.yml`| PR opened/edited              | Check issue link + branch naming |
| `release-tag.yml`  | Push to release/*             | Auto-create version tag          |

---

## Issue-to-Feature Mapping (M1 Roadmap)

| Issue | Feature                           | Sprint | Status   |
|-------|-----------------------------------|--------|----------|
| #10   | Epic: Todo App MVP                | 1–2    | Open     |
| #1    | Todo List Component               | 1      | Backlog  |
| #2    | Todo Form Component               | 1      | Backlog  |
| #4    | Wire TodoPage as smart container  | 1      | Backlog  |
| #3    | Todo Filter Component             | 2      | Backlog  |
| #6    | Global styles & responsive layout | 2      | Backlog  |
| #5    | Unit test suite                   | 2      | Backlog  |
