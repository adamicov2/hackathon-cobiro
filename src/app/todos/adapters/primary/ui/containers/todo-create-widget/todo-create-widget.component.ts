import {
  Component,
  Inject,
  InjectionToken,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { UiState } from '../../../../../../core/storage/ui-state';
import { FormControl, Validators } from '@angular/forms';
import {
  ADDS_TODO_COMMAND,
  AddsTodoCommandPort,
} from '../../../../../application/ports/primary/adds-todo.command-port';
import { Subject, takeUntil } from 'rxjs';
import {
  TODO_ADDED_LISTENER,
  TodoAddedListenerPort,
} from '../../../../../application/ports/primary/todo-added.listener-port';

const IS_IN_CREATING_MODE_UI_STATE = new InjectionToken<UiState<boolean>>(
  'IS_IN_CREATING_MODE_QUERY'
);

@Component({
  selector: 'app-todo-create-widget',
  templateUrl: './todo-create-widget.component.html',
  styleUrls: ['./todo-create-widget.component.scss'],
  providers: [
    {
      provide: IS_IN_CREATING_MODE_UI_STATE,
      useFactory: () => new UiState<boolean>(false),
    },
  ],
})
export class TodoCreateWidgetComponent implements OnInit, OnDestroy {
  readonly todoMessage = new FormControl('', [Validators.required]);
  readonly isInCreatingMode$ = this._isInCreatingModeUiState.select();

  private readonly _destroyed = new Subject<void>();

  constructor(
    @Inject(IS_IN_CREATING_MODE_UI_STATE)
    private readonly _isInCreatingModeUiState: UiState<boolean>,
    @Inject(ADDS_TODO_COMMAND)
    private readonly _addsTodoCommandPort: AddsTodoCommandPort,
    @Inject(TODO_ADDED_LISTENER)
    private readonly _todoAddedListener: TodoAddedListenerPort
  ) {}

  onAddClicked() {
    this._isInCreatingModeUiState.setState(true);
  }

  onTodoSubmit() {
    this._addsTodoCommandPort.addTodo(this.todoMessage.value);
    this.todoMessage.reset();
  }

  onCancelClicked() {
    this._isInCreatingModeUiState.setState(false);
    this.todoMessage.reset();
  }

  ngOnInit(): void {
    this._todoAddedListener
      .todoAdded()
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => this._isInCreatingModeUiState.setState(false));
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
