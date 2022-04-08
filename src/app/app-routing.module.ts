import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'app/todos',
  loadChildren: () => import('./pages/todos-dashboard-page/todos-dashboard-page.module').then(m => m.TodosDashboardPageModule)
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'app/todos'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
