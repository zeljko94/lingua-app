import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUceniciComponent } from './admin-ucenici.component';

describe('AdminUceniciComponent', () => {
  let component: AdminUceniciComponent;
  let fixture: ComponentFixture<AdminUceniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUceniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUceniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
