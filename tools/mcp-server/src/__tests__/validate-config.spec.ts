import { describe, it, expect } from 'vitest';
import { validateTableConfig } from '../tools/validate-config.js';

describe('validateTableConfig', () => {
  it('accepts a valid config', () => {
    const result = validateTableConfig({
      columns: { name: { header: 'Name', sortable: true, search: true } },
      pagination: { length: 10 },
    });
    expect(result.valid).toBe(true);
    expect(result.issues).toHaveLength(0);
  });

  it('reports type errors', () => {
    const result = validateTableConfig({ pagination: { length: 'ten' } });
    expect(result.valid).toBe(false);
    expect(result.issues.some((i) => i.path.startsWith('pagination.length'))).toBe(true);
  });

  it('suggests fixes for unknown top-level keys', () => {
    const result = validateTableConfig({ colums: {} });
    expect(result.suggestions.some((s) => s.includes('Unknown top-level key "colums"'))).toBe(true);
  });

  it('warns when neither columns nor rows are set', () => {
    const result = validateTableConfig({ pagination: { length: 5 } });
    expect(result.suggestions.some((s) => s.includes('Neither "columns" nor "rows"'))).toBe(true);
  });

  it('suggests enabling sorting on searchable columns', () => {
    const result = validateTableConfig({ columns: { name: { search: true } } });
    expect(result.suggestions.some((s) => s.includes('consider enabling sorting'))).toBe(true);
  });

  it('flags non-built-in footer calculations', () => {
    const result = validateTableConfig({
      columns: { total: { header: 'Total' } },
      footer: { columns: { total: { median: true } } },
    });
    expect(result.suggestions.some((s) => s.includes('"median"'))).toBe(true);
  });
});
