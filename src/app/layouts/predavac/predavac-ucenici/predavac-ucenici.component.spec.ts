import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavacUceniciComponent } from './predavac-ucenici.component';

describe('PredavacUceniciComponent', () => {
  let component: PredavacUceniciComponent;
  let fixture: ComponentFixture<PredavacUceniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredavacUceniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavacUceniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
