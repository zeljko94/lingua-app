import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazineNastaveListComponent } from './razine-nastave-list.component';

describe('RazineNastaveListComponent', () => {
  let component: RazineNastaveListComponent;
  let fixture: ComponentFixture<RazineNastaveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazineNastaveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazineNastaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
