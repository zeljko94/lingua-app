import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UceniciListComponent } from './ucenici-list.component';

describe('UceniciListComponent', () => {
  let component: UceniciListComponent;
  let fixture: ComponentFixture<UceniciListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UceniciListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UceniciListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
