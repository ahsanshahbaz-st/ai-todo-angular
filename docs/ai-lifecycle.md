# AI Development Lifecycle

## Pipeline

```
┌─────────────┐    ┌──────────┐    ┌───────────────┐    ┌──────────┐    ┌───────────┐    ┌─────────┐
│ GitHub Issue │───▶│   Plan   │───▶│ Code Generate │───▶│    PR    │───▶│ AI Review │───▶│  Merge  │
└─────────────┘    └──────────┘    └───────────────┘    └──────────┘    └───────────┘    └─────────┘
```

## Stages

### 1. GitHub Issue
- Create using `.github/ISSUE_TEMPLATE/ai-workflow-task.md`
- Define acceptance criteria, affected files, and AI hints
- Label with `ai-workflow` + priority + type

### 2. Plan
- Use `prompts/plan-feature.prompt.md`
- Parse acceptance criteria into file list and implementation order
- Create branch: `feat/<issue-number>-<slug>`

### 3. Code Generation
- Use `prompts/generate-feature.prompt.md`
- Follow `.github/SKILL.md` conventions and templates
- Generate component + spec + module updates

### 4. Pull Request
- Use `.github/pull_request_template.md`
- Link issue: `Closes #<number>`
- Validate: `npm run build` && `npm test`

### 5. AI Review
- Use `prompts/review-pr.prompt.md`
- Check Angular best practices, security, test coverage
- Approve or request changes

### 6. Merge
- Squash merge into `develop`
- Issue auto-closes via PR link

## Tools Used

| Tool | Purpose |
|------|---------|
| GitHub Issues | Feature definition and tracking |
| GitHub Copilot | Code generation and review |
| Copilot Chat | Planning and AI review |
| GitHub CLI (`gh`) | Issue/PR automation |
| VS Code GitHub PR Extension | In-editor issue and PR management |

## Outcome

Structured, traceable, AI-assisted development where every line of code is linked
to an issue, reviewed by AI, and delivered through a pull request.
