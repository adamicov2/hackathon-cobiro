import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

interface TodoListItem {
  id: string;
  message: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListItemComponent {
  @Input() todo: TodoListItem;

  @Output() deleteClicked = new EventEmitter<string>();
  @Output() toggleClicked = new EventEmitter<string>();

  onDeleteClicked() {
    this.deleteClicked.emit(this.todo.id);
  }

  onToggle() {
    this.toggleClicked.emit(this.todo.id);
  }
}
