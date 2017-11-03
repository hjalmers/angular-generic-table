import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordSelectionComponent } from './record-selection.component';

describe('RowSelectionComponent', () => {
  let component: RecordSelectionComponent;
  let fixture: ComponentFixture<RecordSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
