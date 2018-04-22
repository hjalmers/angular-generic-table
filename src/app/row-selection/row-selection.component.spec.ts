import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSelectionComponent } from './row-selection.component';

describe('RowSelectionComponent', () => {
	let component: RowSelectionComponent;
	let fixture: ComponentFixture<RowSelectionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RowSelectionComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RowSelectionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
