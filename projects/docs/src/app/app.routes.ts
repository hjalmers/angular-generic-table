import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', loadComponent: () => import('./pages/intro/intro.component').then((m) => m.IntroComponent) },
  { path: 'get-started', loadComponent: () => import('./pages/get-started/get-started.component').then((m) => m.GetStartedComponent) },
  { path: 'changelog', loadComponent: () => import('./pages/changelog/changelog.component').then((m) => m.ChangelogComponent) },
  { path: 'api', data: { title: 'API reference' }, loadComponent: () => import('./pages/api/api.component').then((m) => m.ApiComponent) },
  { path: 'simple', data: { title: 'Simple' }, loadComponent: () => import('./examples/simple/simple.component').then((m) => m.SimpleComponent) },
  { path: 'advanced', data: { title: 'Advanced' }, loadComponent: () => import('./examples/advanced/advanced.component').then((m) => m.AdvancedComponent) },
  { path: 'sorting', data: { title: 'Sorting' }, loadComponent: () => import('./examples/sorting/sorting.component').then((m) => m.SortingComponent) },
  { path: 'pagination', data: { title: 'Pagination' }, loadComponent: () => import('./examples/pagination/pagination.component').then((m) => m.PaginationComponent) },
  { path: 'lazy-loading', data: { title: 'Server-side pagination' }, loadComponent: () => import('./examples/server-side-pagination/server-side-pagination.component').then((m) => m.ServerSidePaginationComponent) },
  { path: 'row-hover-click', data: { title: 'Row hover & click' }, loadComponent: () => import('./examples/row-hover-click/row-hover-click.component').then((m) => m.RowHoverClickComponent) },
  { path: 'row-select', data: { title: 'Row selection' }, loadComponent: () => import('./examples/row-select/row-select.component').then((m) => m.RowSelectComponent) },
  { path: 'custom-templates', data: { title: 'Custom templates' }, loadComponent: () => import('./examples/custom-templates/custom-templates.component').then((m) => m.CustomTemplatesComponent) },
  { path: 'horizontal-table', data: { title: 'Horizontal table' }, loadComponent: () => import('./examples/horizontal-table/horizontal-table.component').then((m) => m.HorizontalTableComponent) },
  { path: 'transpose', data: { title: 'Transpose' }, loadComponent: () => import('./examples/transpose/transpose.component').then((m) => m.TransposeComponent) },
  { path: 'mobile-layout', data: { title: 'Mobile layout' }, loadComponent: () => import('./examples/mobile-layout/mobile-layout.component').then((m) => m.MobileLayoutComponent) },
  { path: 'nested', data: { title: 'Nested data' }, loadComponent: () => import('./examples/nested-data/nested-data.component').then((m) => m.NestedDataComponent) },
  { path: 'footer', data: { title: 'Footer' }, loadComponent: () => import('./examples/footer/footer.component').then((m) => m.FooterComponent) },
];
