import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavaciListComponent } from './predavaci-list.component';

describe('PredavaciListComponent', () => {
  let component: PredavaciListComponent;
  let fixture: ComponentFixture<PredavaciListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredavaciListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavaciListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
