import { TestBed, inject } from '@angular/core/testing';

import { CodeHighlightService } from './code-highlight.service';

describe('CodeHighlightService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [CodeHighlightService]
		});
	});

	it(
		'should be created',
		inject([CodeHighlightService], (service: CodeHighlightService) => {
			expect(service).toBeTruthy();
		})
	);
});
