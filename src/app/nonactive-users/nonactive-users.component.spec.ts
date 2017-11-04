import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonactiveUsersComponent } from './nonactive-users.component';

describe('NonactiveUsersComponent', () => {
  let component: NonactiveUsersComponent;
  let fixture: ComponentFixture<NonactiveUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonactiveUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonactiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
