import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavacTecajeviDetailsComponent } from './predavac-tecajevi-details.component';

describe('PredavacTecajeviDetailsComponent', () => {
  let component: PredavacTecajeviDetailsComponent;
  let fixture: ComponentFixture<PredavacTecajeviDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredavacTecajeviDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavacTecajeviDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
