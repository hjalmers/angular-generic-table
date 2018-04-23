import { Injectable, Type } from '@angular/core';
import * as marked from 'marked';

import * as loadDataLead from '!raw-loader!../../demos/loading-data/lead.md';
import * as inMemoryHtml from '!raw-loader!../../demos/loading-data/in-memory-array/employee-table.component.html';
import * as inMemoryModule from '!raw-loader!../../demos/loading-data/loading-data.module';
import * as inMemoryComponent from '!raw-loader!../../demos/loading-data/in-memory-array/employee-table.component';
import * as inMemoryDescription from '!raw-loader!../../demos/loading-data/in-memory-array/description.md';
import { EmployeeTableComponent } from '../../demos/loading-data/in-memory-array/employee-table.component';

import * as restHtml from '!raw-loader!../../demos/loading-data/using-rest-api/rest-example.component.html';
import * as restModule from '!raw-loader!../../demos/loading-data/loading-data.module';
import * as restComponent from '!raw-loader!../../demos/loading-data/using-rest-api/rest-example.component';
import * as restDescription from '!raw-loader!../../demos/loading-data/using-rest-api/description.md';
import { RestExampleComponent } from '../../demos/loading-data/using-rest-api/rest-example.component';

export interface DemoContentStructure {
	[key: string]: DemoContent;
}
export interface DemoContent {
	lead: string;
	sections: Array<{
		component: Type<any>;
		title: string;
		fragment?: string;
		description: string;
		examples: Array<{
			title: string;
			code: string;
			lang: 'markup' | 'scss' | 'typescript' | 'js' | 'json';
		}>;
	}>;
}
@Injectable()
export class DemoContentService {
	private path: DemoContentStructure = {
		loadingData: {
			lead: loadDataLead,
			sections: [
				{
					component: EmployeeTableComponent,
					title: 'In memory',
					description: inMemoryDescription,
					examples: [
						{
							title: 'employee-table.component.html',
							code: inMemoryHtml,
							lang: 'markup'
						},
						{
							title: 'employee-table.component.ts',
							code: inMemoryComponent,
							lang: 'typescript'
						},
						{
							title: 'loading-data.module.ts',
							code: inMemoryModule,
							lang: 'typescript'
						}
					]
				},
				{
					component: RestExampleComponent,
					title: 'Using REST',
					description: restDescription,
					examples: [
						{
							title: 'rest-example.component.html',
							code: restHtml,
							lang: 'markup'
						},
						{
							title: 'rest-example.component.ts',
							code: restComponent,
							lang: 'typescript'
						},
						{
							title: 'loading-data.module.ts',
							code: restModule,
							lang: 'typescript'
						}
					]
				}
			]
		}
	};
	constructor() {}
	getExamples(path: string): DemoContent {
		// use marked for parsing markdown files
		const MD = marked.setOptions({});

		// convert path to camel case and return configuration based on it
		const CONFIGURATION = this.path[this.toCamelCase(path)];

		// return empty config if no config was found for path
		if (!CONFIGURATION) {
			return {
				lead: '<h1>Examples for this feature is missing!</h1>',
				sections: []
			};
		}

		// parse confirguration (parse markdown files in config)
		const PARSED_CONFIRGURATION = {
			lead: MD.parse(CONFIGURATION.lead),
			sections: CONFIGURATION.sections.map(section => {
				console.log(this.toCamelCase(section.title));
				return {
					...section,
					...{
						description: MD.parse(section.description),
						title: section.title,
						fragment: this.toCamelCase(section.title)
					}
				};
			})
		};
		console.log(PARSED_CONFIRGURATION);
		return PARSED_CONFIRGURATION;
	}

	toCamelCase(string: string): string {
		return string
			.toLowerCase()
			.replace(/[\s-]([a-z])/g, g => g[1].toUpperCase());
	}
}
