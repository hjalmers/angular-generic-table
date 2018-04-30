import { TestBed, inject } from '@angular/core/testing';

import { ExampleContentService } from './example-content.service';

describe('DemoContentService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ExampleContentService]
		});
	});

	it(
		'should be created',
		inject([ExampleContentService], (service: ExampleContentService) => {
			expect(service).toBeTruthy();
		})
	);
});
