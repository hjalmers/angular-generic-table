import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnClickComponent } from './column-click.component';

describe('ColumnClickComponent', () => {
  let component: ColumnClickComponent;
  let fixture: ComponentFixture<ColumnClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
