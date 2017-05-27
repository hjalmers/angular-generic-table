import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditingComponent } from './inline-editing.component';

describe('InlineEditingComponent', () => {
  let component: InlineEditingComponent;
  let fixture: ComponentFixture<InlineEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
