import {NgModule} from '@angular/core';
import {HttpTodosService} from './http-todos.service';
import {CREATE_TODO_DTO} from '../../application/ports/secondary/creates-todo.dto-port';
import {GETS_ALL_TODOS_DTO} from '../../application/ports/secondary/gets-all-todos.dto-port';
import {COMPLETE_TODO_PORT} from '../../application/ports/secondary/complete-todo.dto-port';

@NgModule({
  providers: [
    HttpTodosService,
    {
      provide: CREATE_TODO_DTO,
      useExisting: HttpTodosService,
    },
    {
      provide: GETS_ALL_TODOS_DTO,
      useExisting: HttpTodosService,
    },
    {
      provide: COMPLETE_TODO_PORT,
      useExisting: HttpTodosService,
    },
  ],
})
export class HttpTodosServiceModule {}
