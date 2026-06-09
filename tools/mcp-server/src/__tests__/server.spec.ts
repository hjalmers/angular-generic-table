import { describe, it, expect } from 'vitest';
import { createServer } from '../index.js';
import { KNOWN_CONFIG_KEYS } from '../schema.js';

describe('createServer', () => {
  it('constructs without throwing', () => {
    expect(() => createServer()).not.toThrow();
  });
});

describe('schema/interface drift guard', () => {
  // These are the JSON-configurable top-level keys of TableConfig
  // (projects/core/src/lib/models/table-config.interface.ts).
  const EXPECTED_CONFIG_KEYS = [
    'disableTableSort',
    'mobileLayout',
    'stickyHeaders',
    'class',
    'columns',
    'rows',
    'pagination',
    'rowClick',
    'activateRowOnHover',
    'activateRowOnKeyboardNavigation',
    'deactivateRowOnLostFocus',
    'footer',
  ];

  it('schema covers every documented TableConfig key', () => {
    expect([...KNOWN_CONFIG_KEYS].sort()).toEqual([...EXPECTED_CONFIG_KEYS].sort());
  });
});
