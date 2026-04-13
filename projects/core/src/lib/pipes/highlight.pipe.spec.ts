import { HighlightPipe } from './highlight.pipe';

describe('HighlightPipe', () => {
  let pipe: HighlightPipe;

  beforeEach(() => {
    pipe = new HighlightPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return text unchanged when searchTerm is null', () => {
    expect(pipe.transform('hello world', null)).toBe('hello world');
  });

  it('should return text unchanged when searchTerm is empty string', () => {
    expect(pipe.transform('hello world', '')).toBe('hello world');
  });

  it('should wrap matching text in a highlight span', () => {
    const result = pipe.transform('hello world', 'world');
    expect(result).toBe('hello <span class="gt-highlight-search">world</span>');
  });

  it('should be case insensitive', () => {
    const result = pipe.transform('Hello World', 'hello');
    expect(result).toBe(
      '<span class="gt-highlight-search">Hello</span> World'
    );
  });

  it('should highlight multiple occurrences', () => {
    const result = pipe.transform('foo bar foo', 'foo');
    expect(result).toBe(
      '<span class="gt-highlight-search">foo</span> bar <span class="gt-highlight-search">foo</span>'
    );
  });

  it('should handle multiple search terms separated by spaces', () => {
    const result = pipe.transform('hello world', 'hello world');
    expect(result).toBe(
      '<span class="gt-highlight-search">hello</span> <span class="gt-highlight-search">world</span>'
    );
  });

  it('should support quoted phrases as single search term', () => {
    const result = pipe.transform('hello world foo', '"hello world"');
    expect(result).toBe(
      '<span class="gt-highlight-search">hello world</span> foo'
    );
  });

  it('should convert non-string values to string', () => {
    const result = pipe.transform(12345, '234');
    expect(result).toBe(
      '1<span class="gt-highlight-search">234</span>5'
    );
  });

  it('should highlight inside HTML tag content without modifying tags', () => {
    const result = pipe.transform('<span>hello world</span>', 'hello');
    expect(result).toBe(
      '<span><span class="gt-highlight-search">hello</span> world</span>'
    );
  });

  it('should cache regex when the same search term is used again', () => {
    pipe.transform('abc', 'test');
    const cachedRegex1 = (pipe as any)._cachedRegex;

    pipe.transform('xyz', 'test');
    const cachedRegex2 = (pipe as any)._cachedRegex;

    // Same reference means it was reused, not recreated
    expect(cachedRegex2).toBe(cachedRegex1);
  });

  it('should create a new regex when the search term changes', () => {
    pipe.transform('abc', 'first');
    const cachedRegex1 = (pipe as any)._cachedRegex;

    pipe.transform('abc', 'second');
    const cachedRegex2 = (pipe as any)._cachedRegex;

    expect(cachedRegex2).not.toBe(cachedRegex1);
  });

  it('should handle invalid regex characters gracefully', () => {
    // A lone "[" is invalid regex; the pipe catches the error and returns text as-is
    const result = pipe.transform('test [value', '[');
    expect(result).toBe('test [value');
  });
});
