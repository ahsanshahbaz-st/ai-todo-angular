---
mode: automate
description: Automate the full Issue → Branch → Code → PR pipeline
---

## Implement Issue Prompt

### Usage
When given a GitHub issue number, this prompt drives the full pipeline:

### Step 1 — Fetch Issue
```
gh issue view <number> --json title,body,labels
```

### Step 2 — Create Branch
```
git checkout -b feat/<number>-<slug> develop
```

### Step 3 — Plan
Use the planning prompt (`prompts/plan-feature.prompt.md`) to:
- Parse acceptance criteria
- Identify files to create/modify
- Define implementation order

### Step 4 — Generate Code
Use the generation prompt (`prompts/generate-feature.prompt.md`) to:
- Generate all new files
- Update `TodoModule` declarations
- Generate spec files

### Step 5 — Validate
```bash
cd ai-todo-angular16
npm run build
npm test
```

### Step 6 — Commit & Push
```bash
git add -A
git commit -m "feat: <issue-title> (closes #<number>)"
git push -u origin feat/<number>-<slug>
```

### Step 7 — Open PR
```bash
gh pr create \
  --title "feat: <issue-title>" \
  --body-file .github/pull_request_template.md \
  --base develop \
  --label "ai-workflow"
```

### Step 8 — AI Review
Use the review prompt (`prompts/review-pr.prompt.md`) to validate the PR.
