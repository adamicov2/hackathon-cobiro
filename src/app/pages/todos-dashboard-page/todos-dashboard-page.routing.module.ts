import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TodosDashboardComponent} from "../todos-dashboard/todos-dashboard.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: TodosDashboardComponent
    }
  ])],
})
export class TodosDashboardPageRoutingModule {}
