---
name: AI Workflow Task
about: AI-driven feature or fix following the Issue → Code → PR → Review pipeline
title: "feat: "
labels: [enhancement, ai-workflow]
assignees: []
---

## Summary
<!-- One-line description of the feature or fix -->

## Problem Statement
<!-- What limitation or bug does this address? -->

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Affected Files
<!-- List files to create or modify — reference the architecture in .github/SKILL.md -->
- `features/todo/components/<name>/<name>.component.ts`
- `features/todo/components/<name>/<name>.component.spec.ts`
- `features/todo/todo.module.ts` (add declaration)

## Technical Notes
<!-- Implementation guidance, constraints, dependencies on other issues -->

## AI Code Generation Hints
<!-- Specific instructions for Copilot when generating code for this issue -->
- Use inline template and styles
- Follow `ChangeDetectionStrategy.OnPush` for presentational components
- Include unit test file
- Reference mock data from `data/mock-todos.ts`

## Definition of Done
- [ ] Implementation completed
- [ ] Tests added and passing (`npm test`)
- [ ] Build succeeds (`npm run build`)
- [ ] PR opened using template, linked with `Closes #<number>`
- [ ] AI review passed
