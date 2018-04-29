import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import {
	ExampleContent,
	ExampleContentService
} from '../services/example-content.service';

@Injectable()
export class ExampleResolver implements Resolve<ExampleContent> {
	constructor(private demoContentService: ExampleContentService) {}

	resolve(route: ActivatedRouteSnapshot): ExampleContent {
		return this.demoContentService.getExamples(route.url[0].path);
	}
}
