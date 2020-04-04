import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCertifikatiComponent } from './admin-certifikati.component';

describe('AdminCertifikatiComponent', () => {
  let component: AdminCertifikatiComponent;
  let fixture: ComponentFixture<AdminCertifikatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCertifikatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCertifikatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
