import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtDropdownComponent } from './gt-dropdown.component';

describe('GtDropdownComponent', () => {
  let component: GtDropdownComponent;
  let fixture: ComponentFixture<GtDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
