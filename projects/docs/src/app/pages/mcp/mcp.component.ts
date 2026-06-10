import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabsComponent } from '../../components/tabs/tabs.component';

const CLAUDE_CODE_SNIPPET = `# Claude Code
claude mcp add angular-generic-table -- npx -y @angular-generic-table/mcp`;

const CLIENT_CONFIG_SNIPPET = `{
  "mcpServers": {
    "angular-generic-table": {
      "command": "npx",
      "args": ["-y", "@angular-generic-table/mcp"]
    }
  }
}`;

const GENERATE_SNIPPET = `// Tool: generate_table_config
// Input
{
  "sampleData": [{ "firstName": "Ada", "age": 36, "active": true }],
  "paginationLength": 10
}

// Output — a ready-to-use TableConfig
{
  "columns": {
    "firstName": { "header": "First Name", "order": 1, "sortable": true, "search": true },
    "age": { "header": "Age", "order": 2, "sortable": true, "search": false },
    "active": { "header": "Active", "order": 3, "sortable": true, "search": false }
  },
  "pagination": { "length": 10 }
}`;

const VALIDATE_SNIPPET = `// Tool: validate_table_config
// Input
{
  "config": { "colums": {}, "pagination": { "length": "ten" } }
}

// Output
❌ Config has validation errors.

Errors:
- pagination.length: Invalid input

Suggestions:
- Unknown top-level key "colums". Did you mean one of: ...columns...?
- Neither "columns" nor "rows" is set — the table will not render any cells.`;

@Component({
  selector: 'docs-mcp',
  template: `
    <div class="py-4">
      <h1 class="mb-3">MCP server</h1>
      <p class="lead mb-4">
        <code>&#64;angular-generic-table/mcp</code> is a
        <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener">Model Context Protocol</a> server that
        gives AI coding assistants authoritative, structured knowledge of this library — so they can wire up the table
        correctly instead of guessing at config shapes.
      </p>

      <h2 class="h5 mt-4 mb-2">What it exposes</h2>
      <p>The server speaks MCP over stdio and offers two resources and two tools:</p>
      <div class="table-responsive">
        <table class="table table-sm">
          <thead>
            <tr>
              <th>Kind</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Resource</td>
              <td><code>agt://schema/table-config</code></td>
              <td>
                JSON Schema for <code>TableConfig</code> / <code>TableColumn</code>, with field descriptions and
                defaults.
              </td>
            </tr>
            <tr>
              <td>Resource</td>
              <td><code>agt://api-reference</code></td>
              <td>Markdown reference: component inputs/outputs/methods, pipes and utilities.</td>
            </tr>
            <tr>
              <td>Tool</td>
              <td><code>generate_table_config</code></td>
              <td>Builds a starter <code>TableConfig</code> from sample data or a field spec.</td>
            </tr>
            <tr>
              <td>Tool</td>
              <td><code>validate_table_config</code></td>
              <td>Validates a <code>TableConfig</code> against the schema and surfaces suggestions.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="h5 mt-5 mb-2">Add it to your assistant</h2>
      <p>
        The server runs on demand via <code>npx</code> — there is no service to host. Register it with your MCP client:
      </p>
      <docs-tabs [content]="installTabs"></docs-tabs>

      <h2 class="h5 mt-5 mb-2">Generate a config</h2>
      <p>
        Hand the assistant a sample of your data and let <code>generate_table_config</code> scaffold the columns
        (capitalized headers, sequential order, sorting enabled, search enabled for string columns):
      </p>
      <docs-tabs [content]="generateTabs"></docs-tabs>

      <h2 class="h5 mt-5 mb-2">Validate a config</h2>
      <p>Run a hand-written config through <code>validate_table_config</code> to catch mistakes early:</p>
      <docs-tabs [content]="validateTabs"></docs-tabs>

      <p class="mt-5">
        Source and full docs:
        <a
          href="https://github.com/hjalmers/angular-generic-table/tree/main/tools/mcp-server"
          target="_blank"
          rel="noopener"
          >tools/mcp-server</a
        >.
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TabsComponent],
})
export class McpComponent {
  installTabs = [
    { name: 'Claude Code', code: CLAUDE_CODE_SNIPPET, language: 'bash' },
    { name: 'mcp config (JSON)', code: CLIENT_CONFIG_SNIPPET, language: 'json' },
  ];
  generateTabs = [{ name: 'generate_table_config', code: GENERATE_SNIPPET, language: 'json' }];
  validateTabs = [{ name: 'validate_table_config', code: VALIDATE_SNIPPET, language: 'json' }];
}
