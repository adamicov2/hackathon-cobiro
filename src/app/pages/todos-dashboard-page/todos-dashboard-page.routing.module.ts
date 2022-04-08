import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TodosDashboardPageComponent} from "./todos-dashboard-page.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: TodosDashboardPageComponent
    }
  ])],
})
export class TodosDashboardPageRoutingModule {}
