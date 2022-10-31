import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  transform(text: any, searchTerm: string | null): string {
    if (!searchTerm) {
      return text;
    }
    const haystackAlwaysString = text + '';
    let highlightedText = haystackAlwaysString; // fallback

    let searchPattern;
    try {
      searchPattern = new RegExp(
        '(' +
          // @ts-ignore
          searchTerm
            .toLowerCase()
            .match(/".*?"|[^ ]+/g) // extract words
            .map(
              (needle) => needle.replace(/"(.*?)"/, '$1') // strip away '"'
            )
            .join('|') + // combine words
          ')',
        'ig'
      );
    } catch (error) {
      return highlightedText;
    }

    const containsTagPattern = /(<.*?>)(.*)(<\/.*?>)/gi;
    const containsTagMatches = containsTagPattern.exec(haystackAlwaysString);

    if (containsTagMatches) {
      // tag exists in haystack
      highlightedText =
        containsTagMatches[1] +
        containsTagMatches[2].replace(
          searchPattern,
          '<span class="gt-highlight-search">$1</span>'
        ) +
        containsTagMatches[3];
    } else {
      highlightedText = haystackAlwaysString.replace(
        searchPattern,
        '<span class="gt-highlight-search">$1</span>'
      );
    }

    return highlightedText;
  }
}
