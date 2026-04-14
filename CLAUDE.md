# CLAUDE.md

## Project overview

Angular library (`@angular-generic-table/core`) providing a configurable table component with sorting, pagination, search/highlighting, row selection, keyboard navigation, and footer calculations.

Two workspace projects:
- **`core`** (`projects/core/`) — the library, built with ng-packagr
- **`docs`** (`projects/docs/`) — standalone Angular app with example components (replaces Storybook)

## Tech stack

- Angular 21, RxJS 7, TypeScript 5.9, Bootstrap 5
- Signals throughout (input, output, computed, linkedSignal, effect)
- OnPush change detection everywhere (including root AppComponent)
- Control flow syntax (@if, @for, @switch, @let)
- Standalone components (no NgModules except backward-compat wrappers)

## Commands

```bash
nvm use 20                                    # requires Node >=20.19
npm run build                                 # build core library (ng-packagr)
npm run build:docs                            # build docs app
npm test                                      # run vitest (core library)
ng serve docs                                 # serve docs app locally
npm run commit                                # commitizen interactive commit
```

## Project structure

```
projects/core/src/lib/
  core.component.ts          # main table component
  core.component.html        # table template
  core.module.ts             # backward-compat NgModule wrapper
  pagination/                # pagination component + module
  gt-delta/                  # delta percentage component
  pipes/                     # 6 standalone pipes (highlight, dynamic, sort-class, etc.)
  models/                    # interfaces (TableConfig, TableColumn, TableRow, etc.)
  utilities/                 # pure functions (chunk, search, sort, calculate)
  scss/                      # library styles
  
projects/docs/src/app/
  app.routes.ts              # lazy-loaded example routes
  examples/                  # 13 example components
  components/tabs/           # code snippet display with highlight.js
```

## Conventions

- **Commits**: Angular conventional commits via commitizen + commitlint. Types: `feat`, `fix`, `refactor`, `perf`, `test`, `chore`, `ci`, `docs`. Scope examples: `core`, `docs`, `deps`.
- **Releases**: semantic-release from `master` branch, publishes to npm from `dist/core`
- **Formatting**: prettier + pretty-quick on staged files
- **Change detection**: always use `signal()` for properties that change asynchronously in OnPush components — plain properties won't trigger re-renders under the OnPush root

## Testing

- **Runner**: Vitest 4 with `@analogjs/vite-plugin-angular`
- **Config**: `projects/core/vite.config.mts`
- **Setup**: `projects/core/src/test-setup.ts` exports `initTestBed()` — call it at the top of any spec file that uses `TestBed`
- **Pattern**: pure function tests need no setup; component tests import `initTestBed` from `../../test-setup`
- **Run**: `npm test` or `cd projects/core && npx vitest run`

## Key architecture notes

- The core component uses a signal derivation graph: `data` input -> `expandedData` -> `searchedData` -> `processedData` -> `table` (chunked for pagination)
- `processedData` is split into separate search and sort computed signals for performance
- `DynamicPipe` caches pipe instances per type; `HighlightPipe` caches compiled regex per search term
- Observable backward-compat getters (`table$`, `data$`, etc.) are lazy-cached with `??=`
- `pageChange` is emitted synchronously from the `paginationIndex` setter (not from an effect)
- `orderedColumns` / `orderedRows` computed signals replace the impure `keyvalue` pipe in templates