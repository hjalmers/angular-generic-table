Release History
---------------
## [Unreleased]
# [1.0.0-rc.9] - 2016-12-10
### Added
- Ability to show text when no data is return or when filter and/or search has no matching results, see issue #24
- Pagination component, see issue #2
- Ability to pass default options to table, [see docs](https://github.com/hjalmers/angular2-generic-table)
- Loading state for table rows waiting for data (only when lazy loading), use `tr.row-loading` to style loading rows
- Table info component, [see examples](https://hjalmers.github.io/angular2-generic-table/examples)

### Fixed
- Searching table now updates total number of pages correctly
- Searching function now supports åäö and other strange characters
- Handling of null values, see issues #32 and #35

### Breaking changes
- Lazy loading will by default not cache data, override using `gt-options` and set `cache` to `true`
- `GtPagination` has been replaced with `GtInfo` and properties have changed names, [see docs](https://github.com/hjalmers/angular2-generic-table)
- Highlighting of search terms when using `[gtLazy]=true` has changed, set search terms in your server response, [see docs](https://github.com/hjalmers/angular2-generic-table)
- `GtTexts` now uses camel case instead of dash case so in case you've changed the default texts you need to change from `no_match` to `noMatch` etc.
- Event property names have changed from `page` to `currentPage` and from `pageLength` to `recordLength` to match names used by `GtInformation`

# [1.0.0-rc.8] - 2016-11-30
### Fixed
- Source maps not generated correctly
- Highlight doesn't find all matches
- Go to first page when using global search 

# [1.0.0-rc.7] - 2016-11-22
### Breaking changes
- Moved search (true/false) to `GtConfigSetting` i.e. to disable global search for a field use `GtConfigSetting` and to defined a search function use `GtConfigField`.

### Added
- Option to highlight matched search terms in table, to enable use `[gtHighlightSearch}="true"`, highlighted strings have the class `gt-highlight-search`.

### Fixed
- Column content (i.e td content) is now wrapped within a span, click etc. is now triggered by the span and not the td element.

# [1.0.0-rc.6] - 2016-11-22
### Breaking changes
- Added strong typing for all interfaces (you can always use `<any>` where type is required)

# [1.0.0-rc.5] - 2016-11-18
### Breaking changes
- Changed `component` to `gtRowComponent` and added typing for expanded row i.e. you must add type to your custom row component
- Changed path for type declarations import using `import {GenericTableModule} from 'angular2-generic-table';`

# [1.0.0-rc.4] - 2016-11-14
### Added
- Support for custom table classes
- Support for global table search

### Fixed
- Column order when no order is defined
- Minor bug fixes

### Other
- Switched from Bootstrap 3.3.7 to Bootstrap 4.0.0-alpha5

# [1.0.0-rc.3] - 2016-11-02
### Breaking changes
- Changed path for lib type declarations 

### Fixed
- Sorting of multiple columns
- Sorting null values
- Missing scss file
- Importing Common Module instead of Browser Module to support sub module linking
- Targeting es5

# [1.0.0-rc.2] - 2016-10-26

### Fixed
- Added sorting classes to table headers and settings object is now updated when sorting changes

### Improved
- All pipes are now pure (for better performance)

# [1.0.0-rc.1] - 2016-10-25

### Added
- Documentation
- Examples

