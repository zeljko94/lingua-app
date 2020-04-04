import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddForumComponent } from './admin-add-forum.component';

describe('AdminAddForumComponent', () => {
  let component: AdminAddForumComponent;
  let fixture: ComponentFixture<AdminAddForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
