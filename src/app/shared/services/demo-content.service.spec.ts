import { TestBed, inject } from '@angular/core/testing';

import { DemoContentService } from './demo-content.service';

describe('DemoContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoContentService]
    });
  });

  it(
    'should be created',
    inject([DemoContentService], (service: DemoContentService) => {
      expect(service).toBeTruthy();
    })
  );
});
