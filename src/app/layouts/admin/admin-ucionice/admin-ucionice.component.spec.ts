import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUcioniceComponent } from './admin-ucionice.component';

describe('AdminUcioniceComponent', () => {
  let component: AdminUcioniceComponent;
  let fixture: ComponentFixture<AdminUcioniceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUcioniceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUcioniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
