import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikTecajeviComponent } from './ucenik-tecajevi.component';

describe('UcenikTecajeviComponent', () => {
  let component: UcenikTecajeviComponent;
  let fixture: ComponentFixture<UcenikTecajeviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikTecajeviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikTecajeviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
