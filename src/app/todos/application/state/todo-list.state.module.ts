import { NgModule } from '@angular/core';
import { TodoListState } from './todo-list.state';
import { LOAD_ALL_TODOS_COMMAND } from '../ports/primary/loads-all-todos-command.port';
import { TOGGLE_TODO_COMMAND } from '../ports/primary/toggle-todo.command-port';
import { DELETE_TODO_COMMAND } from '../ports/primary/deletes-todo-command.port';
import { GETS_ALL_TODOS_DTO } from '../ports/secondary/gets-all-todos.dto-port';
import { GET_ALL_TODOS_QUERY } from '../ports/primary/gets-all-todos.query-port';

@NgModule({
  providers: [
    TodoListState,
    {
      provide: LOAD_ALL_TODOS_COMMAND,
      useExisting: TodoListState,
    },
    {
      provide: TOGGLE_TODO_COMMAND,
      useExisting: TodoListState,
    },
    {
      provide: DELETE_TODO_COMMAND,
      useExisting: TodoListState,
    },
    {
      provide: GET_ALL_TODOS_QUERY,
      useExisting: TodoListState,
    },
  ],
})
export class TodoListStateModule {}
