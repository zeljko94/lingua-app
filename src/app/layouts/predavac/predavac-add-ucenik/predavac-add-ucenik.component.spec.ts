import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavacAddUcenikComponent } from './predavac-add-ucenik.component';

describe('PredavacAddUcenikComponent', () => {
  let component: PredavacAddUcenikComponent;
  let fixture: ComponentFixture<PredavacAddUcenikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredavacAddUcenikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavacAddUcenikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
