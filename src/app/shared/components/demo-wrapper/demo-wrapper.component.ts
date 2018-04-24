import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { DemoContent } from '../../services/demo-content.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
	templateUrl: './demo-wrapper.component.html',
	styleUrls: ['./demo-wrapper.component.scss']
})
export class DemoWrapperComponent implements OnDestroy, AfterViewInit {
	public demoContent: ReplaySubject<DemoContent> = new ReplaySubject<
		DemoContent
	>(1);

	constructor(private router: Router, private route: ActivatedRoute) {
		this.demoContent.next(<DemoContent>this.route.snapshot.data.example);

		this.route.fragment.subscribe(fragment => {
			this.scrollIntoView(fragment);
		});
	}

	ngAfterViewInit() {
		this.scrollIntoView(this.route.snapshot.url[0].path);
	}

	// honor anchor links Todo: remove when angular router supports fragment based navigation
	scrollIntoView(id: string) {
		const element = document.querySelector('#' + id);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest'
			});
		}
	}
}
