import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoistApiModule} from "../../core/api/todoist-api.module";
import {TodosManagerModule} from "../../todos/todos-manager.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodosManagerModule,
    TodoistApiModule,
  ]
})
export class TodosDashboardPageModule { }
