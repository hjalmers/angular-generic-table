import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FieldRow {
  name: string;
  type: string;
  desc: string;
  link?: string;
}

const TABLE_CONFIG_SIGNATURE = `interface TableConfig<R = TableRow> {
  class?: string;
  columns?: { [Property in keyof R]: TableColumn<R> };
  rows?: { [Property in keyof R]: TableColumn<R> };
  disableTableSort?: boolean;
  mobileLayout?: boolean;
  stickyHeaders?: { row?: boolean; column?: boolean };
  pagination?: { length?: number };
  rowClick?: boolean;
  activateRowOnHover?: boolean;
  activateRowOnKeyboardNavigation?: boolean;
  deactivateRowOnLostFocus?: boolean;
  footer?: {
    headers?: { [key: 'sum' | 'avg' | 'count' | 'max' | 'min' | string]: string | boolean };
    columns?: { [Property in keyof R]: Partial<TableFooterColumn<R>> };
    rowOrder?: Array<keyof R | 'sum' | 'avg' | 'count' | 'max' | 'min'>;
    emptyContent?: string;
  };
}`;

const TABLE_COLUMN_SIGNATURE = `interface TableColumn<R = TableRow> {
  header?: string | false;
  mobileHeader?: string | boolean;
  hidden?: boolean;
  class?: string;
  order?: number;
  sortable?: boolean;
  search?: boolean | SearchFunction<R>;
  templateRef?: TemplateRef<any>;
  component?: Type<any>;
  componentInputs?: Record<string, unknown>;
  headerTemplateRef?: TemplateRef<any>;
  headerComponent?: Type<any>;
  headerComponentInputs?: Record<string, unknown>;
  headerReplaceFull?: boolean;
  transform?: { pipe: any; args?: any[] };
  mapTo?: { path: string; missingValue?: string | number };
}`;

const EVENT_SIGNATURES: Array<{ id: string; name: string; code: string }> = [
  {
    id: 'gt-row-click-event',
    name: 'GtRowClickEvent',
    code: `interface GtRowClickEvent<R = TableRow> {
  row: R;
  index: number;
  event: MouseEvent;
}`,
  },
  {
    id: 'gt-row-select-event',
    name: 'GtRowSelectEvent',
    code: `interface GtRowSelectEvent<R = TableRow> {
  row: R | null;
  index: number | null;
  event?: KeyboardEvent;
}`,
  },
  {
    id: 'gt-row-active-event',
    name: 'GtRowActiveEvent',
    code: `interface GtRowActiveEvent<R = TableRow> {
  row: R | null;
  index: number | null;
  event?: MouseEvent | KeyboardEvent;
}`,
  },
  {
    id: 'gt-sort-event',
    name: 'GtSortEvent',
    code: `interface GtSortEvent<R = TableRow> {
  key: keyof R;
  order: 'asc' | 'desc';
  currentSortOrder: GtSortOrder<R>;
  event?: MouseEvent;
  // true when shift is held to add a key to multi-column sort
  addSortKey: boolean;
}`,
  },
  {
    id: 'gt-page-change-event',
    name: 'GtPageChangeEvent',
    code: `interface GtPageChangeEvent {
  index: number;
}`,
  },
  {
    id: 'gt-sort-order',
    name: 'GtSortOrder',
    code: `type GtSortOrder<R = TableRow> = Array<GtSortConfig<R>>;

interface GtSortConfig<R = {}> {
  key: keyof R;
  order: 'asc' | 'desc';
}`,
  },
];

@Component({
  selector: 'docs-api',
  template: `
    <p class="lead">
      Public API of <code>&#64;angular-generic-table/core</code>. Types are stable
      on the v5 line; see the <a routerLink="/changelog">changelog</a> for changes.
    </p>

    <nav class="mb-4 p-3 bg-body-tertiary rounded" aria-label="On this page">
      <strong class="d-block mb-2 small text-body-secondary">On this page</strong>
      <ul class="list-unstyled mb-0 d-flex flex-wrap gap-3">
        <li><a href="#core-component">CoreComponent</a></li>
        <li><a href="#table-config">TableConfig</a></li>
        <li><a href="#table-column">TableColumn</a></li>
        <li><a href="#events">Events</a></li>
      </ul>
    </nav>

    <section id="core-component" class="mb-5">
      <h2 class="h4 mb-2">CoreComponent</h2>
      <p>
        Selector: <code>angular-generic-table</code>. Imported as a standalone
        component from <code>&#64;angular-generic-table/core</code>.
      </p>

      <h3 class="h6 text-uppercase text-body-secondary fw-semibold mt-4 mb-2">
        Inputs
      </h3>
      <div class="table-responsive">
        <table class="table table-sm align-middle">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            @for (row of inputs; track row.name) {
              <tr>
                <th scope="row"><code>{{ row.name }}</code></th>
                <td><code>{{ row.type }}</code></td>
                <td>{{ row.desc }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <h3 class="h6 text-uppercase text-body-secondary fw-semibold mt-4 mb-2">
        Outputs
      </h3>
      <div class="table-responsive">
        <table class="table table-sm align-middle">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Payload</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            @for (row of outputs; track row.name) {
              <tr>
                <th scope="row"><code>{{ row.name }}</code></th>
                <td>
                  @if (row.link) {
                    <a [href]="row.link"><code>{{ row.type }}</code></a>
                  } @else {
                    <code>{{ row.type }}</code>
                  }
                </td>
                <td>{{ row.desc }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </section>

    <section id="table-config" class="mb-5">
      <h2 class="h4 mb-2">TableConfig</h2>
      <p>The shape passed to the <code>config</code> input.</p>
      <pre class="bg-body-tertiary border rounded p-3 small"><code>{{ configSignature }}</code></pre>

      <div class="table-responsive">
        <table class="table table-sm align-middle">
          <thead>
            <tr>
              <th scope="col">Field</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            @for (row of configFields; track row.name) {
              <tr>
                <th scope="row"><code>{{ row.name }}</code></th>
                <td><code>{{ row.type }}</code></td>
                <td>{{ row.desc }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </section>

    <section id="table-column" class="mb-5">
      <h2 class="h4 mb-2">TableColumn</h2>
      <p>
        Per-column configuration. Used as the values of
        <code>TableConfig.columns</code> (or <code>rows</code> in horizontal
        layout).
      </p>
      <pre class="bg-body-tertiary border rounded p-3 small"><code>{{ columnSignature }}</code></pre>

      <h3 class="h6 text-uppercase text-body-secondary fw-semibold mt-4 mb-2">
        Display
      </h3>
      <div class="table-responsive">
        <table class="table table-sm align-middle">
          <thead>
            <tr>
              <th scope="col">Field</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            @for (row of columnDisplay; track row.name) {
              <tr>
                <th scope="row"><code>{{ row.name }}</code></th>
                <td><code>{{ row.type }}</code></td>
                <td>{{ row.desc }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <h3 class="h6 text-uppercase text-body-secondary fw-semibold mt-4 mb-2">
        Custom rendering
      </h3>
      <div class="table-responsive">
        <table class="table table-sm align-middle">
          <thead>
            <tr>
              <th scope="col">Field</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            @for (row of columnRendering; track row.name) {
              <tr>
                <th scope="row"><code>{{ row.name }}</code></th>
                <td><code>{{ row.type }}</code></td>
                <td>{{ row.desc }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <h3 class="h6 text-uppercase text-body-secondary fw-semibold mt-4 mb-2">
        Data
      </h3>
      <div class="table-responsive">
        <table class="table table-sm align-middle">
          <thead>
            <tr>
              <th scope="col">Field</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            @for (row of columnData; track row.name) {
              <tr>
                <th scope="row"><code>{{ row.name }}</code></th>
                <td><code>{{ row.type }}</code></td>
                <td>{{ row.desc }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </section>

    <section id="events" class="mb-5">
      <h2 class="h4 mb-2">Events</h2>
      <p>Payload types emitted by the component outputs.</p>
      @for (sig of events; track sig.id) {
        <h3 [id]="sig.id" class="h5 mt-4 mb-2">{{ sig.name }}</h3>
        <pre class="bg-body-tertiary border rounded p-3 small"><code>{{ sig.code }}</code></pre>
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class ApiComponent {
  readonly configSignature = TABLE_CONFIG_SIGNATURE;
  readonly columnSignature = TABLE_COLUMN_SIGNATURE;
  readonly events = EVENT_SIGNATURES;

  readonly inputs: FieldRow[] = [
    { name: 'data', type: 'TableRow[]', desc: 'The rows to display.' },
    { name: 'config', type: 'TableConfig<R>', desc: 'Column definitions and table behavior.' },
    { name: 'search', type: 'string | null', desc: 'Active search term — rows are filtered and matches highlighted.' },
    { name: 'loading', type: 'boolean', desc: 'Show the loading skeleton instead of rows.' },
    { name: 'sortOrder', type: 'GtSortOrder<R>', desc: 'Current sort state (one or more key/direction pairs).' },
    { name: 'paginationIndex', type: 'number', desc: 'Current page index (zero-based).' },
    { name: 'pagingInfo', type: 'GtPaginationInfo | null', desc: 'Server-side pagination metadata. When provided, the table delegates paging to the parent.' },
    { name: 'selection', type: 'unknown', desc: 'Selected-row reference, used together with isRowSelectedFn.' },
    { name: 'rowIdKey', type: 'string | undefined', desc: 'Name of the row property used as a stable id.' },
    { name: 'generateRowId', type: 'boolean', desc: 'Auto-generate a stable id per row when no rowIdKey is given.' },
    { name: 'trackRowByFn', type: 'TrackByFunction<TableRow>', desc: 'Custom trackBy for the row @for loop.' },
    { name: 'isRowSelectedFn', type: '(row, selection?) => boolean', desc: 'Predicate that decides which rows render in the selected state.' },
    { name: 'customClasses', type: '{ selectedRow?, activeRow? }', desc: 'Override the default CSS classes for selected / active rows.' },
    { name: 'navigationKeys', type: 'string[]', desc: 'Keys used to move the active row (defaults to ArrowUp/ArrowDown).' },
    { name: 'selectKeys', type: 'string[]', desc: 'Keys used to select the active row (defaults to Enter/Space).' },
  ];

  readonly outputs: FieldRow[] = [
    { name: 'rowClick', type: 'GtRowClickEvent', desc: 'Emits when a row is clicked.', link: '#gt-row-click-event' },
    { name: 'rowSelect', type: 'GtRowSelectEvent', desc: 'Emits when the active row is selected.', link: '#gt-row-select-event' },
    { name: 'rowActive', type: 'GtRowActiveEvent', desc: 'Emits when the active row changes (hover or keyboard).', link: '#gt-row-active-event' },
    { name: 'sortOrderChange', type: 'GtSortOrder', desc: 'Emits the new sort order after the user sorts.', link: '#gt-sort-order' },
    { name: 'columnSort', type: 'GtSortEvent', desc: 'Emits when a sortable column header is clicked.', link: '#gt-sort-event' },
    { name: 'pageChange', type: 'GtPageChangeEvent', desc: 'Emits when the current page index changes.', link: '#gt-page-change-event' },
  ];

  readonly configFields: FieldRow[] = [
    { name: 'class', type: 'string', desc: 'CSS classes applied to the table element. Defaults to "table".' },
    { name: 'columns', type: '{ [key]: TableColumn }', desc: 'Per-column configuration keyed by row property name.' },
    { name: 'rows', type: '{ [key]: TableColumn }', desc: 'Alias for columns when using horizontal/transposed layout.' },
    { name: 'disableTableSort', type: 'boolean', desc: 'Skip client-side sorting (use when sorting is handled externally). The header still reflects sortOrder visually.' },
    { name: 'mobileLayout', type: 'boolean', desc: 'Render as a stacked mobile-friendly layout via the table-mobile class.' },
    { name: 'stickyHeaders', type: '{ row?, column? }', desc: 'Make row and/or column headers sticky (parent must not have overflow:auto).' },
    { name: 'pagination', type: '{ length?: number }', desc: 'Page size for client-side pagination.' },
    { name: 'rowClick', type: 'boolean', desc: 'Enable row click events and pointer cursor.' },
    { name: 'activateRowOnHover', type: 'boolean', desc: 'Toggle the active row on mouseenter/leave.' },
    { name: 'activateRowOnKeyboardNavigation', type: 'boolean', desc: 'Toggle the active row on arrow-key navigation.' },
    { name: 'deactivateRowOnLostFocus', type: 'boolean', desc: 'Clear the active row when the table loses focus.' },
    { name: 'footer', type: '{ headers?, columns?, rowOrder?, emptyContent? }', desc: 'Footer rows with built-in calculations (sum, avg, count, max, min) or custom calc functions.' },
  ];

  readonly columnDisplay: FieldRow[] = [
    { name: 'header', type: 'string | false', desc: 'Header text. Set to false to hide the header for this column.' },
    { name: 'mobileHeader', type: 'string | boolean', desc: 'Header used in mobile layout. False hides the data label; a string overrides the desktop header.' },
    { name: 'hidden', type: 'boolean', desc: 'Hide the column without removing it from the dataset.' },
    { name: 'class', type: 'string', desc: 'CSS classes applied to each cell in this column.' },
    { name: 'order', type: 'number', desc: 'Display order of the column (lower first).' },
  ];

  readonly columnRendering: FieldRow[] = [
    { name: 'templateRef', type: 'TemplateRef<GtCellContext>', desc: 'Render cells with a custom template.' },
    { name: 'component', type: 'Type<unknown>', desc: 'Render cells with a custom component (via NgComponentOutlet).' },
    { name: 'componentInputs', type: 'Record<string, unknown>', desc: 'Extra inputs passed to the cell component, merged with the default GtCellContext.' },
    { name: 'headerTemplateRef', type: 'TemplateRef<GtHeaderContext>', desc: 'Render the header with a custom template.' },
    { name: 'headerComponent', type: 'Type<unknown>', desc: 'Render the header with a custom component.' },
    { name: 'headerComponentInputs', type: 'Record<string, unknown>', desc: 'Extra inputs passed to the header component.' },
    { name: 'headerReplaceFull', type: 'boolean', desc: 'When true, the custom header replaces the entire sort button instead of rendering inside it.' },
    { name: 'transform', type: '{ pipe, args? }', desc: 'Apply a pipe to the cell value for display only (sorting/searching see the raw value).' },
  ];

  readonly columnData: FieldRow[] = [
    { name: 'sortable', type: 'boolean', desc: 'Enable sorting for this column.' },
    { name: 'search', type: 'boolean | SearchFunction', desc: 'Include the column in global search, optionally with a custom matcher.' },
    { name: 'mapTo', type: '{ path, missingValue? }', desc: 'Read the cell value from a nested path on the row (e.g. "address.city").' },
  ];
}
