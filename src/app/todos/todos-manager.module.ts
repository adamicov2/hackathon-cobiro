import { NgModule } from '@angular/core';
import { TodosContainerComponent } from './adapters/primary/ui/containers/todos-container/todos-container.component';
import { TodoListItemComponent } from './adapters/primary/ui/presentation/todo-list-item/todo-list-item.component';
import { TodoCreateWidgetComponent } from './adapters/primary/ui/containers/todo-create-widget/todo-create-widget.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTodoStateModule } from './application/state/add-todo.state.module';
import { HttpTodosServiceModule } from './adapters/secondary/http-todos.service-module';
import { HttpClientModule } from '@angular/common/http';
import { TodosInMemoryStorageModule } from './adapters/secondary/todos.in-memory-storage.module';
import { TodoListStateModule } from './application/state/todo-list.state.module';
import { NgxBoostrapModalHexagonalModule } from '../core/ngx-boostrap-modal-hexagonal/ngx-boostrap-modal-hexagonal.module';
import {ModalModule} from "ngx-bootstrap/modal";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddTodoStateModule,
    HttpTodosServiceModule,
    HttpClientModule,
    TodoListStateModule,
    TodosInMemoryStorageModule,
    NgxBoostrapModalHexagonalModule,
    ModalModule,
  ],
  exports: [TodosContainerComponent, TodoCreateWidgetComponent],
  declarations: [
    TodosContainerComponent,
    TodoListItemComponent,
    TodoCreateWidgetComponent,
  ],
})
export class TodosManagerModule {}
