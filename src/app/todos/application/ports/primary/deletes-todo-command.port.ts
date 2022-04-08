import { InjectionToken } from '@angular/core';

export interface DeletesTodoCommandPort {
  deleteTodo(id: string): void;
}

export const DELETE_TODO_COMMAND = new InjectionToken<DeletesTodoCommandPort>(
  'DELETE_TODO_COMMAND'
);
