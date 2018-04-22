import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtDrilldownComponent } from './gt-drilldown.component';

describe('GtDrilldownComponent', () => {
	let component: GtDrilldownComponent;
	let fixture: ComponentFixture<GtDrilldownComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GtDrilldownComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GtDrilldownComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
