import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavacTecajeviComponent } from './predavac-tecajevi.component';

describe('PredavacTecajeviComponent', () => {
  let component: PredavacTecajeviComponent;
  let fixture: ComponentFixture<PredavacTecajeviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredavacTecajeviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavacTecajeviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
