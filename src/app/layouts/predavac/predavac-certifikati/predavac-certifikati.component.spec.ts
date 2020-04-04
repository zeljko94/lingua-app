import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavacCertifikatiComponent } from './predavac-certifikati.component';

describe('PredavacCertifikatiComponent', () => {
  let component: PredavacCertifikatiComponent;
  let fixture: ComponentFixture<PredavacCertifikatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredavacCertifikatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavacCertifikatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
