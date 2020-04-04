import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavacAddForumComponent } from './predavac-add-forum.component';

describe('PredavacAddForumComponent', () => {
  let component: PredavacAddForumComponent;
  let fixture: ComponentFixture<PredavacAddForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredavacAddForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavacAddForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
