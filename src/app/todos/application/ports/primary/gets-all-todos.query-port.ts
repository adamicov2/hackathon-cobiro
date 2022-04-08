import { Observable } from 'rxjs';
import { TodoQuery } from './todo-query';
import { InjectionToken } from '@angular/core';

export interface GetsAllTodosQueryPort {
  getAll(): Observable<TodoQuery[]>;
}

export const GET_ALL_TODOS_QUERY = new InjectionToken<TodoQuery[]>(
  'GET_ALL_TODOS_QUERY'
);
