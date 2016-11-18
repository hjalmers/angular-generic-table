Release History
---------------
## [Unreleased]

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

