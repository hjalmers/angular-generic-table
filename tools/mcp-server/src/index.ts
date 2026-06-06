#!/usr/bin/env node
/**
 * MCP server for @angular-generic-table/core.
 *
 * Resources:
 *   - agt://schema/table-config  JSON Schema for TableConfig / TableColumn
 *   - agt://api-reference        Markdown API reference for the table component
 *
 * Tools:
 *   - generate_table_config      Build a starter TableConfig from data / a field spec
 *   - validate_table_config      Validate a TableConfig and surface suggestions
 */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

import { tableConfigSchema } from './schema.js';
import { API_REFERENCE_MARKDOWN } from './api-reference.js';
import { generateTableConfig, type FieldType } from './tools/generate-config.js';
import { validateTableConfig } from './tools/validate-config.js';

export function createServer(): McpServer {
  const server = new McpServer({
    name: 'angular-generic-table',
    version: '0.0.0',
  });

  // --- Resources -----------------------------------------------------------

  server.registerResource(
    'table-config-schema',
    'agt://schema/table-config',
    {
      title: 'TableConfig JSON Schema',
      description: 'JSON Schema (with field descriptions and defaults) for the library TableConfig and TableColumn.',
      mimeType: 'application/json',
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify(zodToJsonSchema(tableConfigSchema, 'TableConfig'), null, 2),
        },
      ],
    }),
  );

  server.registerResource(
    'api-reference',
    'agt://api-reference',
    {
      title: 'angular-generic-table API reference',
      description: 'Component inputs/outputs/methods, pipes, utilities and a minimal usage snippet.',
      mimeType: 'text/markdown',
    },
    async (uri) => ({
      contents: [{ uri: uri.href, mimeType: 'text/markdown', text: API_REFERENCE_MARKDOWN }],
    }),
  );

  // --- Tools ---------------------------------------------------------------

  server.registerTool(
    'generate_table_config',
    {
      title: 'Generate TableConfig',
      description:
        'Generate a starter TableConfig from a data sample or an explicit field spec. ' +
        'Columns get capitalized headers, sequential order, sorting enabled, and search enabled for string columns.',
      inputSchema: {
        sampleData: z
          .array(z.record(z.unknown()))
          .optional()
          .describe('Sample rows; field names and types are inferred from these.'),
        fields: z
          .array(
            z.object({
              name: z.string(),
              type: z.enum(['string', 'number', 'boolean', 'date', 'unknown']).optional(),
            }),
          )
          .optional()
          .describe('Explicit field spec; takes precedence over sampleData.'),
        paginationLength: z
          .union([z.number(), z.literal('auto')])
          .optional()
          .describe('Rows per page, or "auto". Omit for no pagination.'),
        mobileLayout: z.boolean().optional().describe('Enable mobile (columns-as-rows) layout.'),
        footer: z.boolean().optional().describe('Add a footer summing numeric columns.'),
      },
    },
    async (args) => {
      try {
        const result = generateTableConfig({
          sampleData: args.sampleData as Array<Record<string, unknown>> | undefined,
          fields: args.fields as Array<{ name: string; type?: FieldType }> | undefined,
          paginationLength: args.paginationLength,
          mobileLayout: args.mobileLayout,
          footer: args.footer,
        });
        return {
          content: [
            {
              type: 'text',
              text:
                `Generated TableConfig:\n\n\`\`\`json\n${JSON.stringify(result.config, null, 2)}\n\`\`\`\n\n` +
                `Template:\n\n\`\`\`html\n${result.template}\n\`\`\``,
            },
          ],
        };
      } catch (err) {
        return {
          isError: true,
          content: [{ type: 'text', text: `Error: ${(err as Error).message}` }],
        };
      }
    },
  );

  server.registerTool(
    'validate_table_config',
    {
      title: 'Validate TableConfig',
      description: 'Validate a TableConfig object against the schema and return errors plus suggestions.',
      inputSchema: {
        config: z.record(z.unknown()).describe('The TableConfig object to validate.'),
      },
    },
    async (args) => {
      const result = validateTableConfig(args.config);
      const lines: string[] = [result.valid ? '✅ Config is valid.' : '❌ Config has validation errors.'];
      if (result.issues.length > 0) {
        lines.push('', 'Errors:', ...result.issues.map((i) => `- ${i.path}: ${i.message}`));
      }
      if (result.suggestions.length > 0) {
        lines.push('', 'Suggestions:', ...result.suggestions.map((s) => `- ${s}`));
      }
      return {
        content: [{ type: 'text', text: lines.join('\n') }],
      };
    },
  );

  return server;
}

async function main(): Promise<void> {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

// Run only when invoked directly (not when imported by tests).
const invokedDirectly = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (invokedDirectly) {
  main().catch((err) => {
    console.error('Fatal MCP server error:', err);
    process.exit(1);
  });
}
