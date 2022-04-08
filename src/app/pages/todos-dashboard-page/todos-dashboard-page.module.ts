import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoistApiModule} from "../../core/api/todoist-api.module";
import {TodosManagerModule} from "../../todos/todos-manager.module";
import {TodosDashboardPageComponent} from "./todos-dashboard-page.component";
import {TodosDashboardPageRoutingModule} from "./todos-dashboard-page.routing.module";

@NgModule({
  declarations: [TodosDashboardPageComponent],
  imports: [
    CommonModule,
    TodosManagerModule,
    TodoistApiModule,
    TodosDashboardPageRoutingModule,
    TodosManagerModule
  ]
})
export class TodosDashboardPageModule { }
