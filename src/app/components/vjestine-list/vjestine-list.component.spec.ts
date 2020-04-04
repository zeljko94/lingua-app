import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VjestineListComponent } from './vjestine-list.component';

describe('VjestineListComponent', () => {
  let component: VjestineListComponent;
  let fixture: ComponentFixture<VjestineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VjestineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VjestineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
