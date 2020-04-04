import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTipoviNastaveComponent } from './admin-tipovi-nastave.component';

describe('AdminTipoviNastaveComponent', () => {
  let component: AdminTipoviNastaveComponent;
  let fixture: ComponentFixture<AdminTipoviNastaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTipoviNastaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTipoviNastaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
