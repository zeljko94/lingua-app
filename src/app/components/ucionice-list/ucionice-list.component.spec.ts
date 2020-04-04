import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcioniceListComponent } from './ucionice-list.component';

describe('UcioniceListComponent', () => {
  let component: UcioniceListComponent;
  let fixture: ComponentFixture<UcioniceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcioniceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcioniceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
