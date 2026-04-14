import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class AppComponent {
  examples = [
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
  ];
}