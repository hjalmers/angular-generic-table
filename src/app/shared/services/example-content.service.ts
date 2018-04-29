import { Injectable, Type } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as marked from 'marked';

import * as loadDataLead from '!raw-loader!../../examples/loading-data/lead.md';
import * as loadDataModule from '!raw-loader!../../examples/loading-data/loading-data.module';

import * as inMemoryHtml from '!raw-loader!../../examples/loading-data/in-memory-array/employee-table.component.html';
import * as inMemoryComponent from '!raw-loader!../../examples/loading-data/in-memory-array/employee-table.component';
import * as inMemoryDescription from '!raw-loader!../../examples/loading-data/in-memory-array/description.md';
import { EmployeeTableComponent } from '../../examples/loading-data/in-memory-array/employee-table.component';

import * as restHtml from '!raw-loader!../../examples/loading-data/using-rest-api/rest-example.component.html';
import * as restComponent from '!raw-loader!../../examples/loading-data/using-rest-api/rest-example.component';
import * as restDescription from '!raw-loader!../../examples/loading-data/using-rest-api/description.md';
import { RestExampleComponent } from '../../examples/loading-data/using-rest-api/rest-example.component';

import * as sortLead from '!raw-loader!../../examples/sort/lead.md';
import * as enableDisableSortHtml from '!raw-loader!../../examples/sort/enable-disable/enable-disable-sort-example.component.html';
import * as enableDisableSortModule from '!raw-loader!../../examples/sort/sort.module';
import * as enableDisableSortComponent from '!raw-loader!../../examples/sort/enable-disable/enable-disable-sort-example.component';
import * as enableDisableSortDescription from '!raw-loader!../../examples/sort/enable-disable/description.md';
import { EnableDisableSortExampleComponent } from '../../examples/sort/enable-disable/enable-disable-sort-example.component';

import * as exampleUsageLead from '!raw-loader!../../examples/example-usage/lead.md';

import * as basicHtml from '!raw-loader!../../examples/example-usage/basic-usage/basic-usage.component.html';
import * as exampleUsageModule from '!raw-loader!../../examples/example-usage/example-usage.module';
import * as basicComponent from '!raw-loader!../../examples/example-usage/basic-usage/basic-usage.component';
import * as basicDescription from '!raw-loader!../../examples/example-usage/basic-usage/description.md';
import { BasicUsageComponent } from '../../examples/example-usage/basic-usage/basic-usage.component';

export interface ExampleContentStructure {
	[key: string]: ExampleContent;
}
export interface ExampleContent {
	lead: any;
	sections: Array<{
		component: Type<any>;
		title: string;
		fragment?: string;
		description: any;
		examples: Array<{
			title: string;
			code: string;
			lang: 'markup' | 'scss' | 'typescript' | 'js' | 'json';
		}>;
	}>;
}
@Injectable()
export class ExampleContentService {
	private path: ExampleContentStructure = {
		exampleUsage: {
			lead: exampleUsageLead,
			sections: [
				{
					component: BasicUsageComponent,
					title: 'Basic',
					description: basicDescription,
					examples: [
						{
							title: 'employee-table.component.html',
							code: basicHtml,
							lang: 'markup'
						},
						{
							title: 'employee-table.component.ts',
							code: basicComponent,
							lang: 'typescript'
						},
						{
							title: 'example-usage.module.ts',
							code: exampleUsageModule,
							lang: 'typescript'
						}
					]
				}
			]
		},
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
							code: loadDataModule,
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
							code: loadDataModule,
							lang: 'typescript'
						}
					]
				}
			]
		},
		sort: {
			lead: sortLead,
			sections: [
				{
					component: EnableDisableSortExampleComponent,
					title: 'Enable/disable sort',
					description: enableDisableSortDescription,
					examples: [
						{
							title: 'employee-table.component.html',
							code: enableDisableSortHtml,
							lang: 'markup'
						},
						{
							title: 'employee-table.component.ts',
							code: enableDisableSortComponent,
							lang: 'typescript'
						},
						{
							title: 'loading-data.module.ts',
							code: enableDisableSortModule,
							lang: 'typescript'
						}
					]
				}
			]
		}
	};
	constructor(private _sanitizer: DomSanitizer) {}
	getExamples(path: string): ExampleContent {
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

		// prepare configuration for demo wrapper (parse markdown files in config, add fragment for anchor links etc.)
		return {
			lead: this._sanitizer.bypassSecurityTrustHtml(
				MD.parse(CONFIGURATION.lead)
			),
			sections: CONFIGURATION.sections.map(section => {
				return {
					...section,
					...{
						description: this._sanitizer.bypassSecurityTrustHtml(
							MD.parse(section.description)
						),
						title: section.title,
						fragment: this.toCamelCase(section.title)
					}
				};
			})
		};
	}

	toCamelCase(string: string): string {
		return string
			.toLowerCase()
			.replace(/[\s-/]([a-z])/g, g => g[1].toUpperCase());
	}
}
