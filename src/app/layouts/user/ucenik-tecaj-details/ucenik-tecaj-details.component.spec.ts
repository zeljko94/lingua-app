import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikTecajDetailsComponent } from './ucenik-tecaj-details.component';

describe('UcenikTecajDetailsComponent', () => {
  let component: UcenikTecajDetailsComponent;
  let fixture: ComponentFixture<UcenikTecajDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikTecajDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikTecajDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
