import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatesTodoDtoPort } from '../../application/ports/secondary/creates-todo.dto-port';
import { map, Observable, of } from 'rxjs';
import { TodoDto } from '../../application/ports/secondary/todo.dto';
import { GetsAllTodosDtoPort } from '../../application/ports/secondary/gets-all-todos.dto-port';
import { API_URL } from '../../../core/api/api-url';

@Injectable()
export class HttpTodosService
  implements CreatesTodoDtoPort, GetsAllTodosDtoPort
{
  private readonly projectId = 2289346826;
  private readonly _header = {
    Authorization: 'Bearer 48cf9388ea7386655a495e465476bf09a84e06c6',
  };
  constructor(
    @Inject(API_URL) private readonly baseUrl: string,
    private _httpClient: HttpClient
  ) {}

  getAllTodos(): Observable<TodoDto[]> {
    return this._httpClient
      .get(`${this.baseUrl}/projects/get_data`, {
        params: {
          project_id: this.projectId,
        },
        headers: this._header,
      })
      .pipe(
        map((response: any) => {
          const items = response.items.map((item) => ({
            id: String(item.id),
            message: item.content,
            done: item.date_completed !== null,
          }));
          return items;
        })
      );
  }

  createTodo(message: string): Observable<string> {
    // TODO
    return of(String((Math.random() / 1000) * 1000));
  }
}
