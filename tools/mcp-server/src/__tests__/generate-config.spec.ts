import { describe, it, expect } from 'vitest';
import { generateTableConfig, capitalize } from '../tools/generate-config.js';
import { validateTableConfig } from '../tools/validate-config.js';

describe('capitalize', () => {
  it('matches the library casing behaviour', () => {
    expect(capitalize('firstName')).toBe('First Name');
    // Mirrors the library's capitalize(): underscores become spaces but the trailing
    // lowercase token is not title-cased.
    expect(capitalize('user_id')).toBe('User id');
    expect(capitalize('age')).toBe('Age');
  });
});

describe('generateTableConfig', () => {
  it('infers fields and types from sample data', () => {
    const { config, numericFields } = generateTableConfig({
      sampleData: [{ name: 'Ada', age: 36, active: true }],
    });
    expect(Object.keys(config.columns ?? {})).toEqual(['name', 'age', 'active']);
    expect(config.columns?.name).toMatchObject({ header: 'Name', order: 1, sortable: true, search: true });
    // numbers/booleans are not searched by default
    expect(config.columns?.age?.search).toBe(false);
    expect(config.columns?.active?.search).toBe(false);
    expect(numericFields).toEqual(['age']);
  });

  it('honours an explicit field spec and options', () => {
    const { config } = generateTableConfig({
      fields: [
        { name: 'name', type: 'string' },
        { name: 'total', type: 'number' },
      ],
      paginationLength: 10,
      mobileLayout: true,
      footer: true,
    });
    expect(config.pagination).toEqual({ length: 10 });
    expect(config.mobileLayout).toBe(true);
    expect(config.footer?.columns?.total).toEqual({ sum: true });
  });

  it('produces a config that passes validation', () => {
    const { config } = generateTableConfig({ sampleData: [{ name: 'Ada', age: 36 }] });
    expect(validateTableConfig(config).valid).toBe(true);
  });

  it('throws when no fields or sample data are given', () => {
    expect(() => generateTableConfig({})).toThrow();
  });
});
