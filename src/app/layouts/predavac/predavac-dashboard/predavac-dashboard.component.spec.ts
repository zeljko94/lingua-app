import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavacDashboardComponent } from './predavac-dashboard.component';

describe('PredavacDashboardComponent', () => {
  let component: PredavacDashboardComponent;
  let fixture: ComponentFixture<PredavacDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredavacDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavacDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
