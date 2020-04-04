import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavacForumDetailsComponent } from './predavac-forum-details.component';

describe('PredavacForumDetailsComponent', () => {
  let component: PredavacForumDetailsComponent;
  let fixture: ComponentFixture<PredavacForumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredavacForumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavacForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
