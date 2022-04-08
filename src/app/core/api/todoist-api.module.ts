import {NgModule} from "@angular/core";
import {API_URL} from "./api-url";
import {environment} from "../../../environments/environment";

@NgModule({
  providers: [{provide: API_URL, useValue: environment.todoistApiUrl}]
})
export class TodoistApiModule {}
