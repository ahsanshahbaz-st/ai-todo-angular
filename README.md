# AI-Powered Angular Development Lab

> Every feature flows through **GitHub Issue → Plan → Code Generation → PR → AI Review → Merge**.

An Angular 16 todo application built entirely through an AI-assisted, issue-driven development pipeline. The project demonstrates how GitHub Copilot, structured prompts, and Agile process automation can work together in a real-world workflow.

---

## AI Development Pipeline

```
┌─────────────┐    ┌──────────┐    ┌───────────────┐    ┌──────────┐    ┌───────────┐    ┌─────────┐
│ GitHub Issue │───▶│   Plan   │───▶│ Code Generate │───▶│    PR    │───▶│ AI Review │───▶│  Merge  │
└─────────────┘    └──────────┘    └───────────────┘    └──────────┘    └───────────┘    └─────────┘
```

| Stage          | Tool / File                                  |
|----------------|----------------------------------------------|
| Issue          | `.github/ISSUE_TEMPLATE/` templates           |
| Plan           | `prompts/plan-feature.prompt.md`              |
| Code Generate  | `prompts/generate-feature.prompt.md`          |
| Pull Request   | `.github/pull_request_template.md`            |
| AI Review      | `prompts/review-pr.prompt.md`                 |
| Full Pipeline  | `prompts/implement-issue.prompt.md`           |

---

## Tech Stack

| Concern       | Choice                                       |
|---------------|----------------------------------------------|
| Framework     | Angular 16.2.x (NgModules)                   |
| Language      | TypeScript (strict mode)                      |
| State         | `BehaviorSubject` in `TodoService`            |
| Forms         | Reactive Forms (`FormBuilder`)                |
| Testing       | Jasmine + Karma                               |
| Styling       | SCSS (inline styles array)                    |
| CI/CD         | GitHub Actions (`ci.yml`, `pr-validation.yml`)|
| AI Tooling    | GitHub Copilot + Copilot Chat + SKILL.md      |

---

## Project Structure

```
ai-todo-angular/
├── .github/
│   ├── SKILL.md                    # Copilot development skill (architecture + conventions)
│   ├── copilot-instructions.md     # Copilot context for this project
│   ├── pull_request_template.md    # PR checklist with quality gates
│   ├── ISSUE_TEMPLATE/
│   │   ├── epic.md                 # Epic issue template
│   │   ├── ai-workflow-task.md     # Feature / task template
│   │   ├── user-story.md           # User story template
│   │   └── defect.md               # Bug / defect template
│   └── workflows/
│       ├── ci.yml                  # Build + test on push / PR
│       ├── pr-validation.yml       # Branch naming + issue link enforcement
│       └── release-tag.yml         # Auto-tag on release → main merge
├── ai-todo-angular16/              # Angular 16 application (see app README)
├── prompts/                        # AI prompt files for each pipeline stage
├── docs/
│   └── ai-lifecycle.md             # Full pipeline documentation
└── README.md                       # ← You are here
```

---

## Branching Strategy

```
feature/* ──▶ develop ──▶ release/m<n>-sprint-<n> ──▶ main
  fix/*   ──┘
```

| Branch              | Purpose                                    |
|---------------------|--------------------------------------------|
| `main`              | Production-ready code (end of milestone)   |
| `release/*`         | Stable sprint release candidate            |
| `develop`           | Active development — all PRs target here   |
| `feat/<#>-<slug>`   | Per-issue feature branch                   |
| `fix/<#>-<slug>`    | Per-issue bug fix branch                   |
| `chore/<#>-<slug>`  | Infrastructure / docs work                 |

---

## Agile Process

- **Milestones** represent 1 month of work
- **2 sprints** per milestone (2 weeks each) → 2 releases per month
- **Issue hierarchy:** Epic → Feature → User Story → Bug/Defect
- **Labels:** `type:*`, `sprint:*`, `priority:*`, `status:*`, `milestone:*`

---

## Getting Started

```bash
cd ai-todo-angular16
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

### Build & Test

```bash
npm run build          # Production build
npm test               # Unit tests (Karma + Jasmine)
```

---

## Key Files

| File                            | Purpose                                      |
|---------------------------------|----------------------------------------------|
| `.github/SKILL.md`             | Full development skill — architecture, code templates, conventions |
| `.github/copilot-instructions.md` | Copilot project context                   |
| `prompts/implement-issue.prompt.md` | End-to-end pipeline automation prompt   |
| `docs/ai-lifecycle.md`         | Pipeline stage documentation                 |

---

## Contributing

1. Pick or create a GitHub issue using the provided templates
2. Create a branch: `feat/<issue-number>-<slug>`
3. Implement following `.github/SKILL.md` conventions
4. Open a PR using the template — include `Closes #<number>`
5. Pass CI checks (`npm run build`, `npm test`)
6. Get AI + human review, then merge
