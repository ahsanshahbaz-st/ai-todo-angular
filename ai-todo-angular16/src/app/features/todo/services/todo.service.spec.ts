import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { MOCK_TODOS } from '../data/mock-todos';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return seeded mock todos', (done) => {
    service.getAll().subscribe((todos) => {
      expect(todos.length).toBe(MOCK_TODOS.length);
      done();
    });
  });

  it('should add a todo', (done) => {
    service.add({ title: 'New', description: 'Desc', priority: 'low' });
    service.getAll().subscribe((todos) => {
      expect(todos.length).toBe(MOCK_TODOS.length + 1);
      expect(todos[todos.length - 1].title).toBe('New');
      done();
    });
  });

  it('should toggle completed status', (done) => {
    const id = 1;
    service.toggle(id);
    service.getById(id).subscribe((todo) => {
      expect(todo?.completed).toBeFalse();
      done();
    });
  });

  it('should remove a todo', (done) => {
    service.remove(1);
    service.getAll().subscribe((todos) => {
      expect(todos.find((t) => t.id === 1)).toBeUndefined();
      done();
    });
  });

  it('should update a todo', (done) => {
    service.update(2, { title: 'Updated title' });
    service.getById(2).subscribe((todo) => {
      expect(todo?.title).toBe('Updated title');
      done();
    });
  });
});
