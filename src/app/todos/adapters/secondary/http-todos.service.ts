import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatesTodoDtoPort } from '../../application/ports/secondary/creates-todo.dto-port';
import { Observable, of } from 'rxjs';

@Injectable()
export class HttpTodosService implements CreatesTodoDtoPort {
  constructor(private _httpClient: HttpClient) {}

  createTodo(message: string): Observable<string> {
    // TODO
    return of(String((Math.random() / 1000) * 1000));
  }
}
