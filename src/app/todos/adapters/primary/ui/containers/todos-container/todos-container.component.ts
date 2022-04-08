import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { UiState } from '../../../../../../core/storage/ui-state';
import { GETS_ALL_TODOS_DTO } from '../../../../../application/ports/secondary/gets-all-todos.dto-port';
import {
  GET_ALL_TODOS_QUERY,
  GetsAllTodosQueryPort,
} from '../../../../../application/ports/primary/gets-all-todos.query-port';
import {
  LOAD_ALL_TODOS_COMMAND,
  LoadsAllTodosCommandPort,
} from '../../../../../application/ports/primary/loads-all-todos-command.port';
import { Observable, tap } from 'rxjs';
import { TodoQuery } from '../../../../../application/ports/primary/todo-query';
import {
  TOGGLE_TODO_COMMAND,
  ToggleTodoCommandPort,
} from '../../../../../application/ports/primary/toggle-todo.command-port';
import {
  DELETE_TODO_COMMAND,
  DeletesTodoCommandPort,
} from '../../../../../application/ports/primary/deletes-todo-command.port';

const SHOW_INITIAL_VIEW_STATE = new InjectionToken<UiState<boolean>>(
  'SHOW_INITIAL_VIEW'
);

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.scss'],
  providers: [
    {
      provide: SHOW_INITIAL_VIEW_STATE,
      useFactory: () => new UiState<boolean>(false),
    },
  ],
})
export class TodosContainerComponent implements OnInit {
  readonly todos$: Observable<TodoQuery[]> = this._getAllTodosQuery
    .getAll()
    .pipe(tap(console.log));

  constructor(
    @Inject(SHOW_INITIAL_VIEW_STATE)
    private readonly _showInitialViewState: UiState<boolean>,
    @Inject(GET_ALL_TODOS_QUERY)
    private readonly _getAllTodosQuery: GetsAllTodosQueryPort,
    @Inject(LOAD_ALL_TODOS_COMMAND)
    private readonly _loadAllTodosCommand: LoadsAllTodosCommandPort,
    @Inject(TOGGLE_TODO_COMMAND)
    private readonly _togglesTodoCommand: ToggleTodoCommandPort,
    @Inject(DELETE_TODO_COMMAND)
    private readonly _deletesTodoCommand: DeletesTodoCommandPort
  ) {
    this.todos$.subscribe(console.log);
  }

  ngOnInit(): void {
    this._loadAllTodosCommand.loadAllTodos();
  }

  onToggleClick(todoId: string) {
    this._togglesTodoCommand.toggleTodo(todoId);
  }

  trackById(item: { id: string }) {
    return item.id;
  }

  onDeleteClicked(id: string) {
    this._deletesTodoCommand.deleteTodo(id);
  }
}
