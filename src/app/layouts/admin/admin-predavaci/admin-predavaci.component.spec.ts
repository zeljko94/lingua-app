import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPredavaciComponent } from './admin-predavaci.component';

describe('AdminPredavaciComponent', () => {
  let component: AdminPredavaciComponent;
  let fixture: ComponentFixture<AdminPredavaciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPredavaciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPredavaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
