Release History
---------------
## [Unreleased]

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

