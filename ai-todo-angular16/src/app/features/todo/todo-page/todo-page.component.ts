import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-page',
  template: `
    <section class="todo-page">
      <h2>AI Todo Lab</h2>
      <p class="subtitle">
        Each feature below is delivered through the
        <strong>Issue → Code Gen → PR → AI Review</strong> pipeline.
      </p>

      <!-- Baseline: raw todo list from mock data -->
      <div class="todo-raw-list" *ngIf="todos$ | async as todos">
        <p class="count">{{ todos.length }} todos loaded from mock data</p>
        <ul>
          <li *ngFor="let todo of todos" [class.done]="todo.completed">
            <span class="priority" [ngClass]="'p-' + todo.priority">●</span>
            {{ todo.title }}
            <em *ngIf="todo.completed"> — done</em>
          </li>
        </ul>
      </div>

      <div class="next-steps">
        <h3>Next: build features via GitHub Issues</h3>
        <ol>
          <li>Todo Form Component — <code>#issue</code></li>
          <li>Todo List Component — <code>#issue</code></li>
          <li>Filter &amp; Search — <code>#issue</code></li>
          <li>Priority Badges — <code>#issue</code></li>
          <li>Unit Tests — <code>#issue</code></li>
        </ol>
      </div>
    </section>
  `,
  styles: [
    `
      .todo-page {
        border: 1px solid #d9e2ec;
        border-radius: 12px;
        padding: 1.25rem;
        background: #f7fafc;
      }
      h2 { margin-top: 0; }
      .subtitle { color: #4a5568; margin-bottom: 1rem; }
      .count { font-size: 0.85rem; color: #718096; }
      .todo-raw-list ul {
        list-style: none;
        padding: 0;
      }
      .todo-raw-list li {
        padding: 0.35rem 0;
        border-bottom: 1px solid #e2e8f0;
      }
      .todo-raw-list li.done {
        text-decoration: line-through;
        opacity: 0.6;
      }
      .priority { margin-right: 0.4rem; }
      .p-low { color: #38a169; }
      .p-medium { color: #d69e2e; }
      .p-high { color: #e53e3e; }
      .next-steps {
        margin-top: 1.25rem;
        padding: 0.75rem;
        background: #ebf8ff;
        border-radius: 8px;
      }
      .next-steps h3 { margin-top: 0; }
      code {
        background: #edf2f7;
        padding: 0.1rem 0.3rem;
        border-radius: 3px;
        font-size: 0.85em;
      }
    `,
  ],
})
export class TodoPageComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.getAll();
  }
}
