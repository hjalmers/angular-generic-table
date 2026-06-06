/**
 * Generate a starter TableConfig from a data sample or an explicit field spec.
 * Header casing mirrors the library's own `capitalize()` utility
 * (projects/core/src/lib/utilities/utilities.ts) so generated output matches the
 * library's conventions.
 */
import { tableConfigSchema, type TableConfigInput } from '../schema.js';

/** Mirror of the library's capitalize(): "firstName" -> "First Name", "user_id" -> "User Id". */
export function capitalize(s: string): string {
  return (s.charAt(0).toUpperCase() + s.slice(1))
    .replace(/_/g, ' ')
    .replace(/([A-Z][a-z]+)/g, ' $1')
    .replace(/([A-Z]{2,})/g, ' $1')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export type FieldType = 'string' | 'number' | 'boolean' | 'date' | 'unknown';

export interface FieldSpec {
  name: string;
  type?: FieldType;
}

export interface GenerateOptions {
  /** Sample rows; field types are inferred from the first non-null value per key. */
  sampleData?: Array<Record<string, unknown>>;
  /** Explicit field spec; takes precedence when both are supplied. */
  fields?: FieldSpec[];
  /** Rows per page, or "auto". Omit for no pagination. */
  paginationLength?: number | 'auto';
  /** Render columns as rows (mobile-friendly). */
  mobileLayout?: boolean;
  /** Add a footer summing all numeric columns. */
  footer?: boolean;
}

function inferType(value: unknown): FieldType {
  if (typeof value === 'number') return 'number';
  if (typeof value === 'boolean') return 'boolean';
  if (value instanceof Date) return 'date';
  if (typeof value === 'string') {
    return !Number.isNaN(Date.parse(value)) && /\d{4}-\d{2}-\d{2}/.test(value) ? 'date' : 'string';
  }
  return 'unknown';
}

function fieldsFromSample(sample: Array<Record<string, unknown>>): FieldSpec[] {
  const keys = new Map<string, FieldType>();
  for (const row of sample) {
    for (const [key, value] of Object.entries(row ?? {})) {
      if (keys.has(key) && keys.get(key) !== 'unknown') continue;
      if (value === null || value === undefined) {
        if (!keys.has(key)) keys.set(key, 'unknown');
        continue;
      }
      keys.set(key, inferType(value));
    }
  }
  return [...keys].map(([name, type]) => ({ name, type }));
}

export interface GenerateResult {
  config: TableConfigInput;
  /** Field names treated as numeric (eligible for footer sums). */
  numericFields: string[];
  /** Ready-to-paste template snippet. */
  template: string;
}

export function generateTableConfig(options: GenerateOptions): GenerateResult {
  const fields =
    options.fields && options.fields.length > 0
      ? options.fields
      : options.sampleData && options.sampleData.length > 0
        ? fieldsFromSample(options.sampleData)
        : [];

  if (fields.length === 0) {
    throw new Error('Provide either `fields` or a non-empty `sampleData` array to generate a config.');
  }

  const numericFields: string[] = [];
  const columns: NonNullable<TableConfigInput['columns']> = {};

  fields.forEach((field, index) => {
    const type = field.type ?? 'string';
    const isNumeric = type === 'number';
    if (isNumeric) numericFields.push(field.name);
    columns[field.name] = {
      header: capitalize(field.name),
      order: index + 1,
      sortable: true,
      // Searching numbers/booleans/dates is rarely useful by default.
      search: type === 'string',
    };
  });

  const config: TableConfigInput = { columns };

  if (options.mobileLayout) config.mobileLayout = true;
  if (options.paginationLength !== undefined) config.pagination = { length: options.paginationLength };

  if (options.footer && numericFields.length > 0) {
    const footerColumns: Record<string, Record<string, boolean>> = {};
    for (const name of numericFields) footerColumns[name] = { sum: true };
    config.footer = { columns: footerColumns };
  }

  // Self-check: generated config must satisfy the schema.
  tableConfigSchema.parse(config);

  return {
    config,
    numericFields,
    template: '<angular-generic-table [config]="config" [data]="data" />',
  };
}
