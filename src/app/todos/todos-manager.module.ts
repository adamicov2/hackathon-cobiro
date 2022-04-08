import {NgModule} from "@angular/core";
import {TodosDashboardComponent} from "../pages/todos-dashboard/todos-dashboard.component";
import {TodosContainerComponent} from "./adapters/primary/ui/containers/todos-container/todos-container.component";
import {TodoListItemComponent} from "./adapters/primary/ui/presentation/todo-list-item/todo-list-item.component";

@NgModule({
  declarations: [    TodosDashboardComponent,
    TodosContainerComponent,
    TodoListItemComponent]
})
export class TodosManagerModule {}
