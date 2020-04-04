import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUcenikComponent } from './add-ucenik.component';

describe('AddUcenikComponent', () => {
  let component: AddUcenikComponent;
  let fixture: ComponentFixture<AddUcenikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUcenikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUcenikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
