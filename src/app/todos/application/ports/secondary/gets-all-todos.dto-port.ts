import {Observable} from 'rxjs';
import {TodoDto} from './todo.dto';
import {InjectionToken} from '@angular/core';

export interface GetsAllTodosDtoPort {
  getAllTodos(): Observable<TodoDto[]>;
}

export const GETS_ALL_TODOS_DTO = new InjectionToken<GetsAllTodosDtoPort>(
  'GETS_ALL_TODOS_DTO'
);
