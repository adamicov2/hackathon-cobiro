import {Observable} from "rxjs";
import {InjectionToken} from "@angular/core";

export interface CreatesTodoDtoPort {
  createTodo(message: string): Observable<string>
}

export const CREATE_TODO_DTO = new InjectionToken<CreatesTodoDtoPort>('CREATE_TODO_DTO')
