---
mode: generate
description: Generate Angular code from a planned issue
---

## Generate Angular Feature Code

### Context
- Read `.github/SKILL.md` for architecture, conventions, and templates
- This is an Angular 16 app (NgModules, not standalone)
- Use inline `template` and `styles` arrays
- TypeScript strict mode is enabled
- State is managed via `TodoService` with `BehaviorSubject`

### Inputs Required
- The GitHub issue number and acceptance criteria
- The implementation plan (from `plan-feature.prompt.md`)

### Code Generation Rules

1. **Components**
   - Presentational: `ChangeDetectionStrategy.OnPush`, `@Input`/`@Output` only
   - Container/Page: injects services, uses `async` pipe, orchestrates children
   - Always use `trackBy` for `*ngFor`
   - File naming: `kebab-case.component.ts`

2. **Services**
   - `@Injectable({ providedIn: 'root' })` unless feature-scoped
   - Return `Observable` streams, never raw values

3. **Specs**
   - Every new file gets a `.spec.ts` sibling
   - Use `TestBed`, mock services with `jasmine.createSpyObj`
   - At least one `it('should create')` and one behaviour test

4. **Module Updates**
   - Add new components to `TodoModule.declarations`
   - Add new imports (e.g., `ReactiveFormsModule`) if not already present

### Output
- Complete file contents for each new/modified file
- Ready to paste into the codebase and pass `npm run build`
