import { NgModule } from '@angular/core';
import { HttpTodosService } from './http-todos.service';
import { CREATE_TODO_DTO } from '../../application/ports/secondary/creates-todo.dto-port';
import { LOAD_ALL_TODOS_COMMAND } from '../../application/ports/primary/loads-all-todos-command.port';
import { GETS_ALL_TODOS_DTO } from '../../application/ports/secondary/gets-all-todos.dto-port';
import { SAVES_TODO_TO_STORAGE_DTO } from '../../application/ports/secondary/saves-todo-to-storage.dto-port';

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
      provide: SAVES_TODO_TO_STORAGE_DTO,
      useExisting: HttpTodosService,
    },
  ],
})
export class HttpTodosServiceModule {}
