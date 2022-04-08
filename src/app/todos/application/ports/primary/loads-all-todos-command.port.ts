import { InjectionToken } from '@angular/core';

export interface LoadsAllTodosCommandPort {
  loadAllTodos(): void;
}

export const LOAD_ALL_TODOS_COMMAND =
  new InjectionToken<LoadsAllTodosCommandPort>('LOAD_ALL_TODOS_COMMAND');
