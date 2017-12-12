import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtCheckboxComponent } from './gt-checkbox.component';

describe('GtCheckboxComponent', () => {
  let component: GtCheckboxComponent;
  let fixture: ComponentFixture<GtCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
