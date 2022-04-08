import {Observable} from "rxjs";
import {InjectionToken} from "@angular/core";

export interface TodoAddedListenerPort {
  todoAdded(): Observable<void>;
}

export const TODO_ADDED_LISTENER = new InjectionToken<TodoAddedListenerPort>('TODO_ADDED_LISTENER_PORT')
