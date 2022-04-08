import { InjectionToken, NgModule } from '@angular/core';
import {
  InMemoryReactiveStorage,
  ReactiveStorage,
} from '../../../core/storage/in-memory-reactive-storage';
import { TodoDto } from '../../application/ports/secondary/todo.dto';
import { SAVES_TODO_TO_STORAGE_DTO } from '../../application/ports/secondary/saves-todo-to-storage.dto-port';
import { SELECTS_TODO_FROM_STORAGE_DTO } from '../../application/ports/secondary/selects-todo-from-storage.dto-port';

const IN_MEMORY_STORAGE_TODOS_STORAGE = new InjectionToken<
  ReactiveStorage<TodoDto>
>('IN_MEMORY_STORAGE_TODOS_STORAGE');

@NgModule({
  providers: [
    {
      provide: IN_MEMORY_STORAGE_TODOS_STORAGE,
      useFactory: () => new InMemoryReactiveStorage<TodoDto>(null),
    },
    {
      provide: SAVES_TODO_TO_STORAGE_DTO,
      useExisting: IN_MEMORY_STORAGE_TODOS_STORAGE,
    },
    {
      provide: SELECTS_TODO_FROM_STORAGE_DTO,
      useExisting: IN_MEMORY_STORAGE_TODOS_STORAGE,
    },
  ],
})
export class TodosInMemoryStorageModule {}
