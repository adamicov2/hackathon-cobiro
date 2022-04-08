import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreateWidgetComponent } from './todo-create-widget.component';

describe('TodoCreateWidgetComponent', () => {
  let component: TodoCreateWidgetComponent;
  let fixture: ComponentFixture<TodoCreateWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCreateWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreateWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
