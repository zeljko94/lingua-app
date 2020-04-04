import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminForumDetailsComponent } from './admin-forum-details.component';

describe('AdminForumDetailsComponent', () => {
  let component: AdminForumDetailsComponent;
  let fixture: ComponentFixture<AdminForumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminForumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
