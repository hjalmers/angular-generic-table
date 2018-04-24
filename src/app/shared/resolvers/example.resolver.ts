import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import {
	DemoContent,
	DemoContentService
} from '../services/demo-content.service';

@Injectable()
export class ExampleResolver implements Resolve<DemoContent> {
	constructor(private demoContentService: DemoContentService) {}

	resolve(route: ActivatedRouteSnapshot): DemoContent {
		return this.demoContentService.getExamples(route.url[0].path);
	}
}
