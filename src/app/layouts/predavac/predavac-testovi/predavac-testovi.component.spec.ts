import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavacTestoviComponent } from './predavac-testovi.component';

describe('PredavacTestoviComponent', () => {
  let component: PredavacTestoviComponent;
  let fixture: ComponentFixture<PredavacTestoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredavacTestoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavacTestoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
