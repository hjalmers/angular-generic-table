/**
 * Zod schema mirroring the JSON-configurable surface of the library's TableConfig /
 * TableColumn interfaces. This is the single source of truth for the validator, the
 * schema resource and the generator.
 *
 * IMPORTANT: keep this in sync with
 *   projects/core/src/lib/models/table-config.interface.ts
 *   projects/core/src/lib/models/table-column.interface.ts
 *
 * Runtime-only fields (Angular TemplateRef / Type / SearchFunction / CalcFunc) cannot be
 * expressed in JSON, so they are accepted loosely (see RUNTIME_ONLY_* allowlists) and not
 * deeply validated.
 */
import { z } from 'zod';

export const FOOTER_CALCULATIONS = ['sum', 'avg', 'count', 'max', 'min'] as const;

/** Column keys that hold runtime-only Angular constructs (not JSON-serializable). */
export const RUNTIME_ONLY_COLUMN_KEYS = [
  'headerTemplateRef',
  'headerComponent',
  'headerComponentInputs',
  'templateRef',
  'component',
  'componentInputs',
] as const;

const mapToSchema = z
  .object({
    path: z.string().describe('Dot-notation path into nested row data, e.g. "user.address.city".'),
    missingValue: z
      .union([z.string(), z.number()])
      .optional()
      .describe('Value rendered when the path resolves to undefined.'),
  })
  .describe('Extract a value from nested row data.');

const transformSchema = z
  .object({
    pipe: z.any().describe('Angular pipe class/type to apply to the cell value (runtime reference).'),
    args: z.array(z.any()).optional().describe('Arguments passed to the pipe.'),
  })
  .describe('Apply an Angular pipe to the cell value.');

export const tableColumnSchema = z
  .object({
    header: z
      .union([z.string(), z.literal(false)])
      .optional()
      .describe('Column header text, or `false` to hide the header.'),
    headerReplaceFull: z.boolean().optional().describe('Replace the entire header cell.'),
    mobileHeader: z.union([z.string(), z.boolean()]).optional().describe('Header label used in mobile layout.'),
    hidden: z.boolean().optional().describe('Hide this column.'),
    sortable: z.boolean().optional().describe('Allow sorting on this column.'),
    order: z.number().optional().describe('Display order of the column (lower comes first).'),
    search: z.boolean().optional().describe('Include this column in search. A SearchFunction may be used at runtime.'),
    class: z.string().optional().describe('CSS class(es) added to the cell.'),
    mapTo: mapToSchema.optional(),
    transform: transformSchema.optional(),
    // Runtime-only fields tolerated but not validated.
    headerTemplateRef: z.any().optional(),
    headerComponent: z.any().optional(),
    headerComponentInputs: z.record(z.any()).optional(),
    templateRef: z.any().optional(),
    component: z.any().optional(),
    componentInputs: z.record(z.any()).optional(),
  })
  .describe('Per-column configuration (TableColumn).');

const footerColumnSchema = z
  .record(z.union([z.boolean(), z.number(), z.string()]))
  .describe(
    'Per-column footer calculations. Keys are "sum" | "avg" | "count" | "max" | "min" (CalcFunc allowed at runtime).',
  );

export const tableConfigSchema = z
  .object({
    disableTableSort: z
      .boolean()
      .optional()
      .describe('Disable client-side sorting (e.g. when sorting is handled server-side). Default: false.'),
    mobileLayout: z
      .boolean()
      .optional()
      .describe('Render columns as rows for a mobile-friendly layout (adds `table-mobile`). Default: false.'),
    stickyHeaders: z
      .object({
        row: z.boolean().optional(),
        column: z.boolean().optional(),
      })
      .optional()
      .describe('Make row and/or column headers sticky. Default: { row: false, column: false }.'),
    class: z.string().optional().describe('CSS class(es) on the table element. Default: "table".'),
    columns: z.record(tableColumnSchema).optional().describe('Column config keyed by row property name.'),
    rows: z.record(tableColumnSchema).optional().describe('Row config keyed by row property name (transpose mode).'),
    pagination: z
      .object({
        length: z
          .union([z.number(), z.literal('auto')])
          .optional()
          .describe('Rows per page. A number for fixed size, or "auto" to fit the container height.'),
      })
      .optional()
      .describe('Pagination configuration.'),
    rowClick: z.boolean().optional().describe('Emit rowClick events.'),
    activateRowOnHover: z
      .boolean()
      .optional()
      .describe('Toggle row active state on mouse enter/leave. Default: false.'),
    activateRowOnKeyboardNavigation: z
      .boolean()
      .optional()
      .describe('Toggle row active state on keyboard navigation. Default: false.'),
    deactivateRowOnLostFocus: z.boolean().optional().describe('Deactivate the active row on blur.'),
    footer: z
      .object({
        headers: z
          .record(z.union([z.string(), z.boolean()]))
          .optional()
          .describe('Footer header labels per calculation.'),
        columns: z.record(footerColumnSchema).optional().describe('Footer calculations keyed by row property name.'),
        rowOrder: z.array(z.string()).optional().describe('Order of footer calculation rows.'),
        emptyContent: z.string().optional().describe('Content for empty footer cells.'),
      })
      .optional()
      .describe('Footer calculations (sum/avg/count/max/min).'),
  })
  .describe('Top-level table configuration (TableConfig).');

/** Known top-level TableConfig keys, used for unknown-key suggestions. */
export const KNOWN_CONFIG_KEYS = Object.keys(tableConfigSchema.shape);

/** Known TableColumn keys, used for unknown-key suggestions. */
export const KNOWN_COLUMN_KEYS = Object.keys(tableColumnSchema.shape);

export type TableConfigInput = z.infer<typeof tableConfigSchema>;
export type TableColumnInput = z.infer<typeof tableColumnSchema>;
