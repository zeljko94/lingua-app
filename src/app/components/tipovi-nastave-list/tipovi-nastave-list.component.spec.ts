import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoviNastaveListComponent } from './tipovi-nastave-list.component';

describe('TipoviNastaveListComponent', () => {
  let component: TipoviNastaveListComponent;
  let fixture: ComponentFixture<TipoviNastaveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoviNastaveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoviNastaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
