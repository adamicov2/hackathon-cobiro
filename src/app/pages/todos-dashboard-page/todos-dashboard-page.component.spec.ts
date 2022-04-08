import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDashboardPageComponent } from './todos-dashboard-page.component';

describe('TodosDashboardPageComponent', () => {
  let component: TodosDashboardPageComponent;
  let fixture: ComponentFixture<TodosDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
