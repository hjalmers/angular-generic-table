import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  private _cachedTerm: string | null = null;
  private _cachedRegex: RegExp | null = null;

  transform(text: any, searchTerm: string | null): string {
    if (!searchTerm) {
      return text;
    }
    const haystackAlwaysString = text + '';

    if (searchTerm !== this._cachedTerm) {
      this._cachedTerm = searchTerm;
      try {
        this._cachedRegex = new RegExp(
          '(' +
            searchTerm
              .toLowerCase()
              .match(/".*?"|[^ ]+/g)!
              .map((needle) => needle.replace(/"(.*?)"/, '$1'))
              .join('|') +
            ')',
          'ig'
        );
      } catch {
        this._cachedRegex = null;
      }
    }

    if (!this._cachedRegex) {
      return haystackAlwaysString;
    }

    const containsTagPattern = /(<.*?>)(.*)(<\/.*?>)/gi;
    const containsTagMatches = containsTagPattern.exec(haystackAlwaysString);

    if (containsTagMatches) {
      return (
        containsTagMatches[1] +
        containsTagMatches[2].replace(
          this._cachedRegex,
          '<span class="gt-highlight-search">$1</span>'
        ) +
        containsTagMatches[3]
      );
    }
    return haystackAlwaysString.replace(
      this._cachedRegex,
      '<span class="gt-highlight-search">$1</span>'
    );
  }
}
