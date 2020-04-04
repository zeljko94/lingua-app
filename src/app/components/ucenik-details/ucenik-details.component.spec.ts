import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikDetailsComponent } from './ucenik-details.component';

describe('UcenikDetailsComponent', () => {
  let component: UcenikDetailsComponent;
  let fixture: ComponentFixture<UcenikDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
