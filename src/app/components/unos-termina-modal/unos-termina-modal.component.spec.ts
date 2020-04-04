import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosTerminaModalComponent } from './unos-termina-modal.component';

describe('UnosTerminaModalComponent', () => {
  let component: UnosTerminaModalComponent;
  let fixture: ComponentFixture<UnosTerminaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnosTerminaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnosTerminaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
