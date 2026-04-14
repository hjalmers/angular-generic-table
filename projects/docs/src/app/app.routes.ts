import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'simple', pathMatch: 'full' },
  { path: 'advanced', loadComponent: () => import('./examples/advanced/advanced.component').then((m) => m.AdvancedComponent) },
  { path: 'pagination', loadComponent: () => import('./examples/pagination/pagination.component').then((m) => m.PaginationComponent) },
  { path: 'lazy-loading', loadComponent: () => import('./examples/server-side-pagination/server-side-pagination.component').then((m) => m.ServerSidePaginationComponent) },
  { path: 'simple', loadComponent: () => import('./examples/simple/simple.component').then((m) => m.SimpleComponent) },
  { path: 'sorting', loadComponent: () => import('./examples/sorting/sorting.component').then((m) => m.SortingComponent) },
  { path: 'row-hover-click', loadComponent: () => import('./examples/row-hover-click/row-hover-click.component').then((m) => m.RowHoverClickComponent) },
  { path: 'row-select', loadComponent: () => import('./examples/row-select/row-select.component').then((m) => m.RowSelectComponent) },
  { path: 'horizontal-table', loadComponent: () => import('./examples/horizontal-table/horizontal-table.component').then((m) => m.HorizontalTableComponent) },
  { path: 'custom-templates', loadComponent: () => import('./examples/custom-templates/custom-templates.component').then((m) => m.CustomTemplatesComponent) },
  { path: 'mobile-layout', loadComponent: () => import('./examples/mobile-layout/mobile-layout.component').then((m) => m.MobileLayoutComponent) },
  { path: 'nested', loadComponent: () => import('./examples/nested-data/nested-data.component').then((m) => m.NestedDataComponent) },
  { path: 'transpose', loadComponent: () => import('./examples/transpose/transpose.component').then((m) => m.TransposeComponent) },
  { path: 'footer', loadComponent: () => import('./examples/footer/footer.component').then((m) => m.FooterComponent) },
];