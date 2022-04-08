import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatesTodoDtoPort } from '../../application/ports/secondary/creates-todo.dto-port';
import { Observable, of } from 'rxjs';
import { TodoDto } from '../../application/ports/secondary/todo.dto';
import { GetsAllTodosDtoPort } from '../../application/ports/secondary/gets-all-todos.dto-port';

@Injectable()
export class HttpTodosService
  implements CreatesTodoDtoPort, GetsAllTodosDtoPort
{
  constructor(private _httpClient: HttpClient) {}

  getAllTodos(): Observable<TodoDto[]> {
    return of([]);
  }

  createTodo(message: string): Observable<string> {
    // TODO
    return of(String((Math.random() / 1000) * 1000));
  }
}
