import { Component } from '@angular/core';
import {
	DemoContent,
	DemoContentService
} from '../../services/demo-content.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
		public router: Router,
		public route: ActivatedRoute
	) {
		this.router.events
			.filter(evt => evt instanceof NavigationEnd)
			.subscribe((event: NavigationEnd) => {
				// update demo content
				this.demoContent.next(
					this.demoContentService.getExamples(this.route.snapshot.url[0].path)
				);
				// honor anchor links Todo: remove when angular router supports fragment based navigation
				const tree = router.parseUrl(router.url);
				if (tree.fragment) {
					const element = document.querySelector('#' + tree.fragment);
					if (element) {
						element.scrollIntoView(true);
					}
				}
			});
	}
}
