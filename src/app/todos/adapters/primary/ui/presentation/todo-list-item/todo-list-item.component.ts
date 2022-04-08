import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

interface TodoListItem {
  id: string;
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItemComponent {
  @Input() todo: TodoListItem;
}
