import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosDashboardComponent } from './pages/todos-dashboard/todos-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosContainerComponent } from './todos/adapters/primary/ui/containers/todos-container/todos-container.component';
import { TodoListItemComponent } from './todos/adapters/primary/ui/presentation/todo-list-item/todo-list-item.component';
import {TodoistApiModule} from "./core/api/todoist-api.module";

// 48cf9388ea7386655a495e465476bf09a84e06c6

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
