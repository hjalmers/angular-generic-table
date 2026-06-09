/**
 * Validate a TableConfig object against the schema and surface heuristic suggestions.
 */
import {
  tableConfigSchema,
  KNOWN_CONFIG_KEYS,
  KNOWN_COLUMN_KEYS,
  RUNTIME_ONLY_COLUMN_KEYS,
  FOOTER_CALCULATIONS,
} from '../schema.js';

export interface ValidationIssue {
  path: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  issues: ValidationIssue[];
  suggestions: string[];
}

const runtimeOnly = new Set<string>(RUNTIME_ONLY_COLUMN_KEYS);

export function validateTableConfig(config: unknown): ValidationResult {
  const parsed = tableConfigSchema.safeParse(config);
  const issues: ValidationIssue[] = [];

  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      issues.push({ path: issue.path.join('.') || '(root)', message: issue.message });
    }
  }

  const suggestions: string[] = [];

  if (config && typeof config === 'object' && !Array.isArray(config)) {
    const cfg = config as Record<string, unknown>;

    // Unknown top-level keys (often typos).
    for (const key of Object.keys(cfg)) {
      if (!KNOWN_CONFIG_KEYS.includes(key)) {
        suggestions.push(`Unknown top-level key "${key}". Did you mean one of: ${KNOWN_CONFIG_KEYS.join(', ')}?`);
      }
    }

    if (!cfg.columns && !cfg.rows) {
      suggestions.push('Neither "columns" nor "rows" is set — the table will not render any cells.');
    }

    const columns = (cfg.columns ?? cfg.rows) as Record<string, Record<string, unknown>> | undefined;
    if (columns && typeof columns === 'object') {
      for (const [colName, col] of Object.entries(columns)) {
        if (!col || typeof col !== 'object') continue;
        for (const key of Object.keys(col)) {
          if (!KNOWN_COLUMN_KEYS.includes(key)) {
            suggestions.push(`Column "${colName}": unknown key "${key}".`);
          }
        }
        if (col.search === true && col.sortable === undefined) {
          suggestions.push(
            `Column "${colName}" is searchable but "sortable" is unset — consider enabling sorting too.`,
          );
        }
        if (runtimeOnly.has('component') && col.component && col.templateRef) {
          suggestions.push(
            `Column "${colName}" sets both "component" and "templateRef"; only one custom renderer is used.`,
          );
        }
      }
    }

    // Footer calculation key sanity check.
    const footer = cfg.footer as { columns?: Record<string, Record<string, unknown>> } | undefined;
    if (footer?.columns) {
      for (const [colName, calcs] of Object.entries(footer.columns)) {
        if (!calcs || typeof calcs !== 'object') continue;
        for (const calc of Object.keys(calcs)) {
          if (!FOOTER_CALCULATIONS.includes(calc as (typeof FOOTER_CALCULATIONS)[number])) {
            suggestions.push(
              `Footer column "${colName}" uses calculation "${calc}" which is not a built-in (${FOOTER_CALCULATIONS.join(', ')}); it must be a custom function at runtime.`,
            );
          }
        }
      }
    }
  }

  return { valid: parsed.success, issues, suggestions };
}
