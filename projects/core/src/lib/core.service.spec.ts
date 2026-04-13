import { TestBed } from '@angular/core/testing';
import { initTestBed } from '../test-setup';
import { CoreService } from './core.service';

initTestBed();

describe('CoreService', () => {
  let service: CoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
