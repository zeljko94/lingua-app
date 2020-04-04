import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavacUcenikDetailsComponent } from './predavac-ucenik-details.component';

describe('PredavacUcenikDetailsComponent', () => {
  let component: PredavacUcenikDetailsComponent;
  let fixture: ComponentFixture<PredavacUcenikDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredavacUcenikDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavacUcenikDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
