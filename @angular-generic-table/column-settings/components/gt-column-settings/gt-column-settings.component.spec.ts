import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtColumnSettingsComponent } from './gt-column-settings.component';

describe('GtColumnSettingsComponent', () => {
  let component: GtColumnSettingsComponent;
  let fixture: ComponentFixture<GtColumnSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtColumnSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtColumnSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
