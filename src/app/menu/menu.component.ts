import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoContentService } from '../shared/services/demo-content.service';

@Component({
	selector: 'menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	sections: Array<any>;
	constructor(
		public router: Router,
		private demoContentService: DemoContentService
	) {}
	ngOnInit() {
		this.sections = this.router.config
			.map(route => {
				const NAME = route.path.replace(/-/g, ' ');
				return {
					title: NAME.charAt(0).toUpperCase() + NAME.slice(1),
					path: route.path,
					examples: this.demoContentService
						.getExamples(route.path)
						.sections.map(section => section)
				};
			})
			.filter(section => section.examples.length > 0);
	}
}
