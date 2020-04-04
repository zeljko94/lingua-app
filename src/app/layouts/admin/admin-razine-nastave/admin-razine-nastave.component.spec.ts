import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRazineNastaveComponent } from './admin-razine-nastave.component';

describe('AdminRazineNastaveComponent', () => {
  let component: AdminRazineNastaveComponent;
  let fixture: ComponentFixture<AdminRazineNastaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRazineNastaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRazineNastaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
