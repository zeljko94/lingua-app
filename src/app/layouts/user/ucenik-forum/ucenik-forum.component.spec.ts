import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikForumComponent } from './ucenik-forum.component';

describe('UcenikForumComponent', () => {
  let component: UcenikForumComponent;
  let fixture: ComponentFixture<UcenikForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
