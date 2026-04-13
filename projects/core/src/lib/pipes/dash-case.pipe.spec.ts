import { DashCasePipe } from './dash-case.pipe';

describe('DashCasePipe', () => {
  let pipe: DashCasePipe;

  beforeEach(() => {
    pipe = new DashCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert camelCase to dash-case', () => {
    expect(pipe.transform('firstName')).toBe('first-name');
  });

  it('should convert PascalCase to dash-case with leading dash', () => {
    expect(pipe.transform('FirstName')).toBe('-first-name');
  });

  it('should leave already lowercase strings unchanged', () => {
    expect(pipe.transform('name')).toBe('name');
  });

  it('should handle multiple uppercase letters', () => {
    expect(pipe.transform('myHTTPClient')).toBe('my-h-t-t-p-client');
  });

  it('should handle an empty string', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should handle a single lowercase letter', () => {
    expect(pipe.transform('a')).toBe('a');
  });

  it('should handle a single uppercase letter', () => {
    expect(pipe.transform('A')).toBe('-a');
  });
});
