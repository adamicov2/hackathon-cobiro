import { NgModule } from '@angular/core';
import { HttpTodosService } from './http-todos.service';
import { CREATE_TODO_DTO } from '../../application/ports/secondary/creates-todo.dto-port';

@NgModule({
  providers: [
    HttpTodosService,
    {
      provide: CREATE_TODO_DTO,
      useExisting: HttpTodosService,
    },
  ],
})
export class HttpTodosServiceModule {}
