import { NgModule } from '@angular/core';
import { AddTodoState } from './add-todo.state';
import { ADDS_TODO_COMMAND } from '../ports/primary/adds-todo.command-port';
import { TODO_ADDED_LISTENER } from '../ports/primary/todo-added.listener-port';

@NgModule({
  providers: [
    AddTodoState,
    {
      provide: ADDS_TODO_COMMAND,
      useExisting: AddTodoState,
    },
    {
      provide: TODO_ADDED_LISTENER,
      useExisting: AddTodoState,
    },
  ],
})
export class AddTodoStateModule {}
