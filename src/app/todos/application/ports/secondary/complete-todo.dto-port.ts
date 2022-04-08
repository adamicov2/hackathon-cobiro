import {Observable} from "rxjs";
import {InjectionToken} from "@angular/core";

export interface CompleteTodoDtoPort {
  completeTodo(todoId: string): Observable<boolean>
}

export const COMPLETE_TODO_PORT = new InjectionToken<CompleteTodoDtoPort>('COMPLETE_TODO_PORT')
