import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosTerminaComponent } from './unos-termina.component';

describe('UnosTerminaComponent', () => {
  let component: UnosTerminaComponent;
  let fixture: ComponentFixture<UnosTerminaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnosTerminaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnosTerminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
