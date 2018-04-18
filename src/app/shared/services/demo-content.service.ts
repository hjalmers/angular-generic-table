import { Injectable } from '@angular/core';
import * as basicMarkup from '!raw-loader!../../demos/basic-demo/employee-table/employee-table.component.html';
import * as basicTs from '!raw-loader!../../demos/basic-demo/employee-table/employee-table.component';
import * as basicDescription from '!raw-loader!../../demos/basic-demo/employee-table/employee-table.md';
import * as marked from 'marked';
import { Languages } from 'prismjs';

export interface CodeExample {
	title: string;
	code: string;
	lang: Languages;
}
@Injectable()
export class DemoContentService {
	private codeExamples = {
		basic: {
			description: basicDescription,
			examples: [
				{
					title: 'employee-table.component.html',
					code: basicMarkup,
					lang: 'markup'
				},
				{
					title: 'employee-table.component.ts',
					code: basicTs,
					lang: 'typescript'
				}
			]
		}
	};
	constructor() {}
	getCodeExamples(name: string): Array<CodeExample> {
		return this.codeExamples[name].examples;
	}
	getExampleDescription(name: string) {
		const md = marked.setOptions({});
		return md.parse(this.codeExamples[name].description);
	}
}
