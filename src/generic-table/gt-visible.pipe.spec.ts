/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { GtVisiblePipe } from './gt-visible.pipe';

describe('Pipe: GtVisible', () => {
  it('create an instance', () => {
    let pipe = new GtVisiblePipe();
    expect(pipe).toBeTruthy();
  });
});
