import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddUcenikComponent } from './admin-add-ucenik.component';

describe('AdminAddUcenikComponent', () => {
  let component: AdminAddUcenikComponent;
  let fixture: ComponentFixture<AdminAddUcenikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddUcenikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddUcenikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
