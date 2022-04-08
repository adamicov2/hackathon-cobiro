import {InjectionToken} from "@angular/core";

export interface AddsTodoCommandPort {
  addTodo(message: string): void;
}

export const ADDS_TODO_COMMAND = new InjectionToken<AddsTodoCommandPort>('ADDS_TODO_COMMAND')
