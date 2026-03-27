import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

import { Todo, CreateTodoPayload } from '../models/todo.model';
import { MOCK_TODOS } from '../data/mock-todos';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todos$ = new BehaviorSubject<Todo[]>(
    MOCK_TODOS.map((t) => ({ ...t }))
  );

  private nextId = MOCK_TODOS.length + 1;

  /** Observable stream of all todos. */
  getAll(): Observable<Todo[]> {
    return this.todos$.asObservable();
  }

  /** Get one todo by id. */
  getById(id: number): Observable<Todo | undefined> {
    return this.todos$.pipe(map((list) => list.find((t) => t.id === id)));
  }

  /** Add a new todo. */
  add(payload: CreateTodoPayload): void {
    const now = new Date();
    const todo: Todo = {
      id: this.nextId++,
      title: payload.title,
      description: payload.description,
      priority: payload.priority,
      completed: false,
      createdAt: now,
      updatedAt: now,
    };
    this.todos$.next([...this.todos$.value, todo]);
  }

  /** Toggle completed state. */
  toggle(id: number): void {
    this.todos$.next(
      this.todos$.value.map((t) =>
        t.id === id
          ? { ...t, completed: !t.completed, updatedAt: new Date() }
          : t
      )
    );
  }

  /** Update an existing todo. */
  update(id: number, changes: Partial<CreateTodoPayload>): void {
    this.todos$.next(
      this.todos$.value.map((t) =>
        t.id === id ? { ...t, ...changes, updatedAt: new Date() } : t
      )
    );
  }

  /** Remove a todo. */
  remove(id: number): void {
    this.todos$.next(this.todos$.value.filter((t) => t.id !== id));
  }
}
