/**
 * Curated API reference for @angular-generic-table/core. Mirrors the public surface of
 * CoreComponent and the exported pipes/utilities. Keep in sync with
 * projects/core/src/lib/core.component.ts and projects/core/src/public-api.ts.
 */

export const API_REFERENCE_MARKDOWN = `# @angular-generic-table/core — API reference

## Component

\`<angular-generic-table>\` (standalone, OnPush). Import \`CoreComponent\` from
\`@angular-generic-table/core\`.

### Inputs (signals)

| Input | Type | Notes |
| --- | --- | --- |
| \`config\` | \`TableConfig<R>\` | Main configuration. Default \`{}\`. |
| \`data\` | \`Array<TableRow>\` | Row data. Default \`[]\`. |
| \`search\` | \`string \\| null\` | Search term (alias of \`searchTerm\`). |
| \`loading\` | \`boolean\` | Loading state. |
| \`sortOrder\` | \`GtSortOrder<R>\` | Current sort; two-way (\`sortOrderChange\`). |
| \`paginationIndex\` | \`number\` | Current page; two-way (\`pageChange\` getter/setter). |
| \`pagingInfo\` | \`GtPaginationInfo \\| null\` | Server-side pagination info. |
| \`selection\` | \`object\` | Row selection state. |
| \`rowIdKey\` | \`string\` | Property used as row id (defaults to \`_id\`). |
| \`generateRowId\` | \`boolean\` | Auto-generate \`_id\` when missing. |
| \`trackRowByFn\` | \`TrackByFunction\` | Custom row tracking. |
| \`isRowSelectedFn\` | \`(row, selection) => boolean\` | Custom selection check. |
| \`customClasses\` | \`object\` | Class names for selected/active rows. |

### Outputs

| Output | Payload |
| --- | --- |
| \`rowClick\` | \`GtRowClickEvent { row, index, event }\` |
| \`rowSelect\` | \`GtRowSelectEvent { row, index, event? }\` |
| \`sortOrderChange\` | \`GtSortOrder\` |
| \`rowActive\` | \`GtRowActiveEvent { row, index, event? }\` |
| \`columnSort\` | \`GtSortEvent { key, order, currentSortOrder, addSortKey, event? }\` |
| \`pageChange\` | \`GtPageChangeEvent { index }\` |

### Public methods

- \`sortByKey(key, event?)\` — sort by a column key; Shift+click adds a multi-sort key.
- \`activateRow(indexOrIdOrNull, event?)\` — activate/deactivate a row programmatically.
- \`get tableInfo(): TableInfo | undefined\` — current page info, synchronous.
- \`get/set paginationIndex(): number\` — current page.

Observable backward-compat getters: \`sortOrder$\`, \`loading$\`, \`searchBy$\`,
\`tableConfig$\`, \`data$\`, \`table$\`, \`tableInfo$\`, \`currentPaginationIndex$\`,
\`calculations$\`, \`rowActive$\`, \`colspan$\`.

## Pipes (standalone)

- \`CapitalCasePipe\` — \`'firstName'\` → \`'First Name'\`.
- \`DashCasePipe\` — \`'firstName'\` → \`'first-name'\`.
- \`DynamicPipe\` — apply a pipe by type: \`value | dynamicPipe:DatePipe:['longDate']\`.
- \`HighlightPipe\` — wrap search hits in \`<span class="gt-highlight-search">\`.
- \`SortClassPipe\` — sort indicator CSS classes (\`gt-sort-asc\` / \`gt-sort-desc\`).

## Utilities (pure functions)

- \`dashed(s)\`, \`capitalize(s)\` — string casing.
- \`chunk(array, size)\` — split data into pages.
- \`search(text, caseSensitive, data, config)\` — filter rows over searchable columns.
- \`calculate(data, config)\` — footer calculations (sum/avg/count/min/max).
- \`sortOnMultipleKeys(keys)\` — locale-aware multi-key comparator.
- \`parseSortOrderParams(s)\`, \`sortOrderConfigToParam(c)\`, \`sortOrderToParams(o)\` —
  server-side sort query-param helpers.

## Minimal usage

\`\`\`html
<angular-generic-table [config]="config" [data]="data" />
\`\`\`

\`\`\`ts
config: TableConfig = {
  columns: {
    name: { header: 'Name', sortable: true, search: true },
    age: { header: 'Age', sortable: true },
  },
  pagination: { length: 10 },
};
\`\`\`
`;
