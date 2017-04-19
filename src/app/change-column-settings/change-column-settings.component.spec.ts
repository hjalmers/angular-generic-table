import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeColumnSettingsComponent } from './change-column-settings.component';

describe('ChangeColumnSettingsComponent', () => {
  let component: ChangeColumnSettingsComponent;
  let fixture: ComponentFixture<ChangeColumnSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeColumnSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeColumnSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
