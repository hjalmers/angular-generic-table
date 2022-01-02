import { DynamicPipe } from './dynamic.pipe';

describe('DynamicPipe', () => {
  it('create an instance', () => {
    const pipe = new DynamicPipe();
    expect(pipe).toBeTruthy();
  });
});
