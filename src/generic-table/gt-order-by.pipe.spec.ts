/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { GtOrderByPipe } from './gt-order-by.pipe';

describe('Pipe: GtOrderBy', () => {
  it('create an instance', () => {
    let pipe = new GtOrderByPipe();
    expect(pipe).toBeTruthy();
  });
});
