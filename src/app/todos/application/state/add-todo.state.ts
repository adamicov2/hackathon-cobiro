import { Inject, Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { AddsTodoCommandPort } from '../ports/primary/adds-todo.command-port';
import {
  CREATE_TODO_DTO,
  CreatesTodoDtoPort,
} from '../ports/secondary/creates-todo.dto-port';
import { TodoAddedListenerPort } from '../ports/primary/todo-added.listener-port';
import { SAVES_TODO_TO_STORAGE_DTO } from '../ports/secondary/saves-todo-to-storage.dto-port';
import {
  SavesValue,
  SelectsValue,
} from '../../../core/storage/in-memory-reactive-storage';
import { TodoDto } from '../ports/secondary/todo.dto';
import { SELECTS_TODO_FROM_STORAGE_DTO } from '../ports/secondary/selects-todo-from-storage.dto-port';

@Injectable()
export class AddTodoState
  implements AddsTodoCommandPort, TodoAddedListenerPort
{
  private readonly _todoAdded = new Subject<void>();

  constructor(
    @Inject(CREATE_TODO_DTO)
    private readonly _createsTodoDto: CreatesTodoDtoPort,
    @Inject(SAVES_TODO_TO_STORAGE_DTO)
    private readonly _saveTodoToStorageDto: SavesValue<TodoDto[]>,
    @Inject(SELECTS_TODO_FROM_STORAGE_DTO)
    private readonly _selectAllTodoFromStorage: SelectsValue<TodoDto[]>
  ) {}

  todoAdded(): Observable<any> {
    return this._todoAdded.asObservable();
  }

  addTodo(message: string): void {
    this._createsTodoDto.createTodo(message).subscribe((id: string) => {
      this._selectAllTodoFromStorage
        .select()
        .pipe()
        .subscribe((allTodos) => {
          this._saveTodoToStorageDto.save([
            ...allTodos,
            { id, message, done: false },
          ]);
        });
      this._todoAdded.next(void 0);
    });
  }
}
