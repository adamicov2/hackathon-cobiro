import { Inject, Injectable } from '@angular/core';
import { SELECTS_TODO_FROM_STORAGE_DTO } from '../ports/secondary/selects-todo-from-storage.dto-port';
import {
  SavesValue,
  SelectsValue,
} from '../../../core/storage/in-memory-reactive-storage';
import { TodoDto } from '../ports/secondary/todo.dto';
import { LoadsAllTodosCommandPort } from '../ports/primary/loads-all-todos-command.port';
import {
  GETS_ALL_TODOS_DTO,
  GetsAllTodosDtoPort,
} from '../ports/secondary/gets-all-todos.dto-port';
import { SAVES_TODO_TO_STORAGE_DTO } from '../ports/secondary/saves-todo-to-storage.dto-port';
import { DeletesTodoCommandPort } from '../ports/primary/deletes-todo-command.port';
import { ToggleTodoCommandPort } from '../ports/primary/toggle-todo.command-port';
import { map, Observable, take } from 'rxjs';
import { GetsAllTodosQueryPort } from '../ports/primary/gets-all-todos.query-port';
import { TodoQuery } from '../ports/primary/todo-query';

@Injectable()
export class TodoListState
  implements
    LoadsAllTodosCommandPort,
    DeletesTodoCommandPort,
    ToggleTodoCommandPort,
    GetsAllTodosQueryPort
{
  constructor(
    @Inject(SELECTS_TODO_FROM_STORAGE_DTO)
    private readonly _selectsTodoFromStorageDto: SelectsValue<TodoDto[]>,
    @Inject(GETS_ALL_TODOS_DTO)
    private readonly _getAllTodosDto: GetsAllTodosDtoPort,
    @Inject(SAVES_TODO_TO_STORAGE_DTO)
    private readonly _savesTodoToStorageDto: SavesValue<TodoDto[]>
  ) {}

  loadAllTodos(): void {
    this._getAllTodosDto
      .getAllTodos()
      .subscribe((todos) => this._savesTodoToStorageDto.save(todos));
  }

  deleteTodo(id: string): void {
    this._selectsTodoFromStorageDto
      .select()
      .pipe(take(1))
      .subscribe((todos) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        this._savesTodoToStorageDto.save(filteredTodos);
      });
  }

  toggleTodo(id: string): void {
    this._selectsTodoFromStorageDto
      .select()
      .pipe(take(1))
      .subscribe((todos) => {
        const updatedTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        this._savesTodoToStorageDto.save(updatedTodos);
      });
  }

  getAll(): Observable<TodoQuery[]> {
    return this._selectsTodoFromStorageDto
      .select()
      .pipe(
        map((todosDto) =>
          todosDto
            .map(({ id, message, done }) => ({ id, message, done }))
            .sort((a, b) => Number(a.done) - Number(b.done))
        )
      );
  }
}
