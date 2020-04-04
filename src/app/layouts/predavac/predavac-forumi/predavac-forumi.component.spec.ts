import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavacForumiComponent } from './predavac-forumi.component';

describe('PredavacForumiComponent', () => {
  let component: PredavacForumiComponent;
  let fixture: ComponentFixture<PredavacForumiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredavacForumiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavacForumiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
