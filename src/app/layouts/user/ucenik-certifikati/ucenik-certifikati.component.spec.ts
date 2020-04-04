import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikCertifikatiComponent } from './ucenik-certifikati.component';

describe('UcenikCertifikatiComponent', () => {
  let component: UcenikCertifikatiComponent;
  let fixture: ComponentFixture<UcenikCertifikatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikCertifikatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikCertifikatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
