/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { GtFilterPipe } from './gt-filter.pipe';

describe('Pipe: GtFilter', () => {
  it('create an instance', () => {
    let pipe = new GtFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
