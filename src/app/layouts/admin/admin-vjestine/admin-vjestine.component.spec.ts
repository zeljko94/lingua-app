import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVjestineComponent } from './admin-vjestine.component';

describe('AdminVjestineComponent', () => {
  let component: AdminVjestineComponent;
  let fixture: ComponentFixture<AdminVjestineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVjestineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVjestineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
