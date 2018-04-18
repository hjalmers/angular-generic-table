import { Component, OnInit } from '@angular/core';
import { DemoContentService } from '../../services/demo-content.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'demo-wrapper',
  templateUrl: './demo-wrapper.component.html',
  styleUrls: ['./demo-wrapper.component.scss']
})
export class DemoWrapperComponent implements OnInit {
  public example: string = '';
  constructor(public demoContentService: DemoContentService, public router: Router, public route: ActivatedRoute) {
    this.router.events.filter(evt => evt instanceof NavigationEnd).subscribe(event => {
      this.example = this.route.firstChild.routeConfig.path;
    });
  }
  ngOnInit() {}
}
