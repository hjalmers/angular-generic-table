import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';

interface NavItem {
  label: string;
  path: string;
}

interface NavSection {
  heading: string;
  items: NavItem[];
}

interface ResourceLink {
  kind: 'github' | 'changelog';
  label: string;
  path?: string;
  href?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly pageTitle = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith(null),
      map(() => {
        let r = this.route;
        while (r.firstChild) r = r.firstChild;
        return r.snapshot.data['title'] as string | undefined;
      }),
    ),
  );

  sections: NavSection[] = [
    {
      heading: 'Getting started',
      items: [
        { path: '/intro', label: 'Introduction' },
        { path: '/get-started', label: 'Get started' },
      ],
    },
    {
      heading: 'Reference',
      items: [{ path: '/api', label: 'API reference' }],
    },
    {
      heading: 'Examples',
      items: [
        { path: '/simple', label: 'Simple' },
        { path: '/advanced', label: 'Advanced' },
        { path: '/sorting', label: 'Sorting' },
        { path: '/pagination', label: 'Pagination' },
        { path: '/lazy-loading', label: 'Server-side pagination' },
        { path: '/row-hover-click', label: 'Row hover & click' },
        { path: '/row-select', label: 'Row selection' },
        { path: '/custom-templates', label: 'Custom templates' },
        { path: '/horizontal-table', label: 'Horizontal table' },
        { path: '/transpose', label: 'Transpose' },
        { path: '/mobile-layout', label: 'Mobile layout' },
        { path: '/nested', label: 'Nested data' },
        { path: '/footer', label: 'Footer' },
      ],
    },
  ];

  resourceLinks: ResourceLink[] = [
    { kind: 'changelog', label: 'Changelog', path: '/changelog' },
    { kind: 'github', label: 'GitHub', href: 'https://github.com/hjalmers/angular-generic-table' },
  ];
}
