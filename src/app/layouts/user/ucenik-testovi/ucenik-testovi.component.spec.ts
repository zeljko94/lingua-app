import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikTestoviComponent } from './ucenik-testovi.component';

describe('UcenikTestoviComponent', () => {
  let component: UcenikTestoviComponent;
  let fixture: ComponentFixture<UcenikTestoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikTestoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikTestoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
