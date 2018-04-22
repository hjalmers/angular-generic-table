import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
	name: 'gtHighlight'
})
export class GtHighlightPipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) {}

	transform(text: string, searchTerm: string): SafeHtml {
		const haystackAlwaysString = text + '';
		let highlightedText = haystackAlwaysString; // fallback

		let searchPattern;
		try {
			searchPattern = new RegExp(
				'(' +
				searchTerm
					.toLowerCase()
					.match(/".*?"|[^ ]+/g) // extract words
					.map(
						needle => needle.replace(/"(.*?)"/, '$1') // strip away '"'
					)
					.join('|') + // combine words
					')',
				'ig'
			);
		} catch (error) {
			return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
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

		return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
	}
}
