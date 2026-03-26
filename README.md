# AI Todo Angular

This repository demonstrates an AI-powered development lifecycle for an Angular application:

- Issue-first planning with clear acceptance criteria
- Focused implementation in feature branches
- Pull requests that link back to issues
- Review and merge workflow for controlled delivery

## Project Layout

- `ai-todo-angular16/`: Angular 16 application (routing + SCSS + strict mode)
- `.github/ISSUE_TEMPLATE/`: Standardized issue templates
- `.github/pull_request_template.md`: PR checklist for quality gates

## Runtime and Tooling

- Node.js: 18 LTS (compatible with Angular 16)
- Angular CLI: 16.2.x
- Angular framework: 16.2.x

## AI-Driven Workflow (Issues -> PR)

1. Create an issue using the provided template.
2. Define acceptance criteria and implementation notes.
3. Implement changes in a dedicated branch.
4. Open a PR using the PR template and link the issue.
5. Run validation checks (`build`, `test`, lint if configured).
6. Review, approve, and merge.

## Local Development

From the application directory:

```bash
cd ai-todo-angular16
npm install
npm start
```

Then open http://localhost:4200.

## Validation

```bash
cd ai-todo-angular16
npm run build
```
