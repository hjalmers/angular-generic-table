import { CapitalCasePipe } from './capital-case.pipe';

describe('CapitalCasePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalCasePipe();
    expect(pipe).toBeTruthy();
  });
});
