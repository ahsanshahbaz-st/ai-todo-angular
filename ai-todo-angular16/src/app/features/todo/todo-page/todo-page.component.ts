import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-page',
  template: `
    <section class="todo-page">
      <h2>Todo Feature Module</h2>
      <p>This module is ready for AI-managed issue implementation.</p>
      <ul>
        <li>Create issue with acceptance criteria</li>
        <li>Implement in scoped feature branch</li>
        <li>Open PR linked to the issue</li>
      </ul>
    </section>
  `,
  styles: [
    `
      .todo-page {
        border: 1px solid #d9e2ec;
        border-radius: 12px;
        padding: 1rem;
        background: #f7fafc;
      }

      h2 {
        margin-top: 0;
      }
    `
  ]
})
export class TodoPageComponent {}
