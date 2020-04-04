import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPredavacComponent } from './admin-add-predavac.component';

describe('AdminAddPredavacComponent', () => {
  let component: AdminAddPredavacComponent;
  let fixture: ComponentFixture<AdminAddPredavacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddPredavacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddPredavacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
