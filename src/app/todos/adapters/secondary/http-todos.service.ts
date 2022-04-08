import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatesTodoDtoPort } from '../../application/ports/secondary/creates-todo.dto-port';
import { map, Observable, of, tap } from 'rxjs';
import { TodoDto } from '../../application/ports/secondary/todo.dto';
import { GetsAllTodosDtoPort } from '../../application/ports/secondary/gets-all-todos.dto-port';
import { API_URL } from '../../../core/api/api-url';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

var rand = Math.random;

function UUID() {
  var nbr,
    randStr = '';
  do {
    randStr += (nbr = rand()).toString(16).substr(3, 6);
  } while (randStr.length < 30);
  return (
    randStr.substr(0, 8) +
    '-' +
    randStr.substr(8, 4) +
    '-4' +
    randStr.substr(12, 3) +
    '-' +
    (((nbr * 4) | 0) + 8).toString(16) + // [89ab]
    randStr.substr(15, 3) +
    '-' +
    randStr.substr(18, 12)
  );
}

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
    const payload = [
      {
        type: 'item_add',
        temp_id: UUID(),
        uuid: UUID(),
        args: {
          content: message,
          project_id: this.projectId,
        },
      },
    ];

    return this._httpClient
      .post(
        `${this.baseUrl}/sync`,
        {
          commands: payload,
        },
        { headers: this._header }
      )
      .pipe(map(() => payload[0].temp_id));
  }

  completeTodo(todoId: string): Observable<boolean> {
    const payload = [
      {
        type: 'item_complete',
        uuid: UUID(),
        args: {
          id: todoId,
          date_completion: new Date(),
        },
      },
    ];

    return this._httpClient
      .post(
        `${this.baseUrl}/sync`,
        {
          commands: payload,
        },
        { headers: this._header }
      )
      .pipe(map(() => true));
  }
}
