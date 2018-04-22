import { Component } from '@angular/core';
import {
	DemoContent,
	DemoContentService
} from '../../services/demo-content.service';
import { NavigationEnd, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
	templateUrl: './demo-wrapper.component.html',
	styleUrls: ['./demo-wrapper.component.scss']
})
export class DemoWrapperComponent {
	public component: ReplaySubject<any> = new ReplaySubject<any>(1);
	public demoContent: ReplaySubject<DemoContent> = new ReplaySubject<
		DemoContent
	>(1);
	constructor(
		public demoContentService: DemoContentService,
		public router: Router
	) {
		this.router.events
			.filter(evt => evt instanceof NavigationEnd)
			.subscribe((event: NavigationEnd) => {
				this.demoContent.next(
					this.demoContentService.getExamples(
						event.urlAfterRedirects.split('/')[1]
					)
				);
			});
	}
}
