---
mode: review
description: AI review checklist for pull requests
---

## AI PR Review Prompt

### Context
- This is an Angular 16 Todo app following the issue-driven workflow
- Reference `.github/SKILL.md` for project conventions
- The PR should link to a GitHub issue via `Closes #<number>`

### Review Checklist

**Architecture & Conventions**
- [ ] Files placed in correct directory (`components/`, `services/`, etc.)
- [ ] Inline template and styles used (no separate `.html`/`.css` files)
- [ ] Component declared in `TodoModule`
- [ ] Follows smart/presentational component split

**Angular Best Practices**
- [ ] `ChangeDetectionStrategy.OnPush` on presentational components
- [ ] `trackBy` function used for `*ngFor`
- [ ] `async` pipe used in templates (no manual `.subscribe()` in components)
- [ ] Proper lifecycle hooks (no logic in constructor)
- [ ] No memory leaks (subscriptions cleaned up or avoided via `async` pipe)

**TypeScript & Code Quality**
- [ ] Strict mode compatible (no implicit `any`, null checks)
- [ ] Interfaces/types used instead of `any`
- [ ] Consistent naming (kebab-case files, PascalCase classes)

**Security**
- [ ] No `innerHTML` binding with user input
- [ ] No `bypassSecurityTrust*` usage
- [ ] Form inputs validated (max length, required)

**Testing**
- [ ] `.spec.ts` file exists for every new component/service
- [ ] Tests cover creation and at least one key behaviour
- [ ] `npm test` passes

**PR Hygiene**
- [ ] Issue linked with `Closes #<number>`
- [ ] Branch follows `feat/<number>-<slug>` or `fix/<number>-<slug>`
- [ ] PR template filled out completely
- [ ] `npm run build` passes

### Output
Provide a structured review with:
1. **Pass/Fail** for each checklist item
2. **Suggestions** for improvements
3. **Blockers** that must be fixed before merge
