import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTecajeviComponent } from './admin-tecajevi.component';

describe('AdminTecajeviComponent', () => {
  let component: AdminTecajeviComponent;
  let fixture: ComponentFixture<AdminTecajeviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTecajeviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTecajeviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
