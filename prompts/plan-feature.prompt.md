---
mode: plan
description: Generate an implementation plan from a GitHub issue
---

## AI Planning Prompt

Given a GitHub issue from this repository:

### Context
- Read `.github/SKILL.md` for architecture, conventions, and tech stack
- The app uses Angular 16 with NgModules, inline templates, SCSS, strict TypeScript
- State lives in `TodoService` (BehaviorSubject pattern)
- Mock data is in `features/todo/data/mock-todos.ts`

### Instructions
1. Parse the issue title, description, and acceptance criteria
2. Identify which files need to be **created** vs **modified**
3. For each new file, specify:
   - Full path relative to `ai-todo-angular16/src/app/`
   - Public API (inputs, outputs, methods)
   - Dependencies (imports, injections)
4. For each modified file, specify:
   - What changes are needed (new declarations, imports, template updates)
5. Define the implementation order (dependencies first)
6. List the branch name: `feat/<issue-number>-<short-slug>`

### Output Format
```markdown
## Plan for Issue #<number>: <title>

### Branch: `feat/<number>-<slug>`

### New Files
1. `path/to/file.ts` — description
2. `path/to/file.spec.ts` — description

### Modified Files
1. `path/to/module.ts` — add declaration for X

### Implementation Order
1. Step 1
2. Step 2

### Acceptance Criteria Mapping
- [ ] Criterion → implemented in `file.ts`
```
