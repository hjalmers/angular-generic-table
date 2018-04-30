import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnSearchComponent } from './column-search.component';

describe('ColumnSearchComponent', () => {
	let component: ColumnSearchComponent;
	let fixture: ComponentFixture<ColumnSearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ColumnSearchComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ColumnSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
