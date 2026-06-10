# @angular-generic-table/mcp

A [Model Context Protocol](https://modelcontextprotocol.io) server for
[`@angular-generic-table/core`](https://www.npmjs.com/package/@angular-generic-table/core).

It gives AI coding assistants authoritative, structured knowledge of the table library so
they can wire it up correctly — no guessing at config shapes.

## Capabilities

**Resources**

| URI | Description |
| --- | --- |
| `agt://schema/table-config` | JSON Schema for `TableConfig` / `TableColumn`, with field descriptions and defaults. |
| `agt://api-reference` | Markdown reference: component inputs/outputs/methods, pipes, utilities, usage. |

**Tools**

| Tool | Description |
| --- | --- |
| `generate_table_config` | Build a starter `TableConfig` from sample data or a field spec (capitalized headers, sorting, search, optional pagination/footer/mobile). Returns config JSON + a template snippet. |
| `validate_table_config` | Validate a `TableConfig` against the schema and surface errors plus heuristic suggestions. |

## Usage

The server speaks MCP over stdio. Add it to any MCP-capable client.

### Claude Code

```bash
claude mcp add angular-generic-table -- npx -y @angular-generic-table/mcp
```

### Generic client config

```json
{
  "mcpServers": {
    "angular-generic-table": {
      "command": "npx",
      "args": ["-y", "@angular-generic-table/mcp"]
    }
  }
}
```

## Development

```bash
cd tools/mcp-server
npm install
npm run build      # tsc -> dist/
npm test           # vitest
npm start          # run the built server over stdio

# inspect the protocol surface
npx @modelcontextprotocol/inspector node dist/index.js
```

The Zod schema in `src/schema.ts` is the single source of truth for validation, the schema
resource and the generator. It mirrors the library interfaces in
`projects/core/src/lib/models/` — keep them in sync (a drift guard test asserts the
top-level `TableConfig` keys match).

## Releasing

This package is released independently of `@angular-generic-table/core` by the
`release-mcp` job in `.github/workflows/main.yml`. It uses
[`semantic-release-monorepo`](https://github.com/pmowrer/semantic-release-monorepo), so a
release is only cut when files under `tools/mcp-server/` change (driven by
`feat(mcp):` / `fix(mcp):` commits). Tags are namespaced as
`@angular-generic-table/mcp-v<version>` so they never collide with the core library's
`v<version>` tags, and `mcp`-scoped commits are excluded from core releases via the root
`release.plugins` config.

> **First publish:** npm OIDC trusted publishing can only be configured after the package
> exists, so the very first release needs a one-off manual `npm publish` (or a temporary
> `NPM_TOKEN`). Subsequent releases publish via OIDC, like the core library.
