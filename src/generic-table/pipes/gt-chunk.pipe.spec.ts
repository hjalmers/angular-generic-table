/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { GtChunkPipe } from './gt-chunk.pipe';

describe('Pipe: GtChunk', () => {
  it('create an instance', () => {
    let pipe = new GtChunkPipe();
    expect(pipe).toBeTruthy();
  });
});
