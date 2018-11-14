import { AfterViewInit, Component } from '@angular/core';
import { ExampleContent } from '../../services/example-content.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';

@Component({
	templateUrl: './example-wrapper.component.html',
	styleUrls: ['./example-wrapper.component.scss']
})
export class ExampleWrapperComponent implements AfterViewInit {
	public demoContent: ReplaySubject<ExampleContent> = new ReplaySubject<
		ExampleContent
	>(1);

	constructor(private router: Router, private route: ActivatedRoute) {
		this.demoContent.next(this.route.snapshot.data.example as ExampleContent);

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
