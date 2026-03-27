export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
}

export type CreateTodoPayload = Pick<Todo, 'title' | 'description' | 'priority'>;
