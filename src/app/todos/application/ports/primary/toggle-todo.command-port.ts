import { InjectionToken } from '@angular/core';

export interface ToggleTodoCommandPort {
  toggleTodo(id: string): void;
}

export const TOGGLE_TODO_COMMAND = new InjectionToken<ToggleTodoCommandPort>(
  'TOGGLE_TODO_COMMAND'
);
