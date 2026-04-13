import { CapitalCasePipe } from './capital-case.pipe';

describe('CapitalCasePipe', () => {
  let pipe: CapitalCasePipe;

  beforeEach(() => {
    pipe = new CapitalCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize the first letter of a lowercase string', () => {
    expect(pipe.transform('hello')).toBe('Hello');
  });

  it('should split camelCase into separate words', () => {
    expect(pipe.transform('firstName')).toBe('First Name');
  });

  it('should replace underscores with spaces', () => {
    expect(pipe.transform('first_name')).toBe('First name');
  });

  it('should handle multiple consecutive uppercase letters as a group', () => {
    expect(pipe.transform('myHTTPClient')).toBe('My HTTP Client');
  });

  it('should trim extra whitespace', () => {
    expect(pipe.transform('alreadyCapitalized')).toBe('Already Capitalized');
  });

  it('should handle a single character', () => {
    expect(pipe.transform('a')).toBe('A');
  });

  it('should handle an empty string', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should handle a string that is already capitalized', () => {
    expect(pipe.transform('Name')).toBe('Name');
  });
});
