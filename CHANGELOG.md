## Release History

## [Unreleased]

## [4.17.1] - 2018-09-07

### Fixed

* Event handling for inline edit #269

## [4.17.0] - 2018-07-15

### Added

* Option for preventing mutation of original data input #263

## [4.16.0] - 2018-06-06

### Added

* Option for sorting behavior #250

### Fixed

* Select/deselect all rows when lazy loading data #251
* Setting sortEnabled to `false` now properly disables sorting as expected
* Prevent sort style from changing column width

## [4.15.0] - 2018-05-28

### Added

* Ability to use custom row id instead of auto generated one #245
* Row property for initial order `gtInitialRowIndex`

### Fixed

* Select/deselect all rows when lazy loading data #244
* Min width for checkbox component

## [4.14.0] - 2018-04-30

This release might not include a lot of new features or fixes, but under the hood many of the dependencies have been bumped/removed and a lot things related to packing, linting and code styles have been refactored as a step towards making it easier to contribute (thanks for helping out @mklein994).

### Added

* Support for row click events from drilldown component #218
* Support for setting initial state for expanding row #217

### Fixed

* Preserve original order for sort, sort will now go from `ascending` to `descending` and then back to `enabled` instead of just switching between ascending/descending #230
* Checkboxes now uses new markup for bootstrap
* Library is now packaged using [ng-packagr](https://github.com/dherges/ng-packagr) 3.0.0-rc.2

# [4.13.0] - 2018-04-03

### Added

* Support for conditional inline edit #122
* Support for toggling inline edit and using observable for options #141

### Fixed

* Fixed table info when lazy loading and totals are enabled #203
* Table sort order #206
* Use ng-packagr for bundling #207

# [4.12.0] - 2018-02-21

### Added

* Support for locking settings #181
* Highlight pipe for use in custom components #196
* Support for row click #177, #186

### Fixed

* Page change event only emitted when page has actually changed #200

# [4.11.1] - 2018-01-19

### Fixed

* Condition check in gt render pipe for 0, null, '' and false values #178

# [4.11.0] - 2018-01-16

### Added

* Events for `gt-column-order-change` and `gt-column-visibility-change` (emitted by gt-column-settings component, see wiki and [events](https://github.com/hjalmers/angular-generic-table/wiki/Events) for more info) (issue #173)

### Fixed

* Expand/collapse all rows function (issue #175)

# [4.10.0] - 2018-01-09

### Added

* Visible rows are now emitted on gt-info event (issue #171)
* Add and delete method (issue #169)

# [4.9.0] - 2017-12-11

### Added

* Support for setting initial state for selected rows (issue #112)
* Support for setting initial state for expanded/open rows (issue #112)
* Support for custom component in table header (issue #158)
* Checkbox row selection (issue #96)

### Fixed

* rxjs import reference (issue #165)

# [4.8.0] - 2017-11-23

### Added

* Support for input type for inline edit use `password`, `number`, `email` or `true` for type text (issue #159).

# [4.7.2] - 2017-11-18

### Fixed

* Placement of dropdown for inline edit (issue #153).
* Support for BOM (issue #147).

# [4.7.1] - 2017-11-13

### Fixed

* Fixed #149 for angular 5 support

# [4.7.0] - 2017-10-10

### Added

* Drilldown component, see [example](https://hjalmers.github.io/angular-generic-table/drilldown), (issue #137).
* Support for displaying all rows, (issue #139).

### Deprecated

* Input `GtRowComponent` has been deprecated and support will be removed in a future release, see issue #34 for more info.

### Improved

* Minor improvement for row rendering

# [4.6.0] - 2017-08-29

### Added

* Support for conditional row classes, see [example](https://hjalmers.github.io/angular-generic-table/styling) (issue #120).
* Support for conditional column classes, see [example](https://hjalmers.github.io/angular-generic-table/styling) (issue #118).

### Deprecated

* Field setting `classNames` have been deprecated in favor for `columnClass` and will be removed in a future release.

# [4.5.0] - 2017-08-25

### Added

* Method for checking if a row is selected, see [methods](https://github.com/hjalmers/angular-generic-table/wiki/Methods) in wiki for more info.
* Method for removing a row, see [methods](https://github.com/hjalmers/angular-generic-table/wiki/Methods) in wiki for more info.
* Methods for accepting (saving) and rejecting (canceling) inline edits as well has checking if table has pending inline edits, see [methods](https://github.com/hjalmers/angular-generic-table/wiki/Methods) in wiki for more info.
* Complex example with custom components for adding, removing and inline editing of rows (including data validation), see example [here](https://hjalmers.github.io/angular-generic-table/add-remove-edit).

### Fixed

* Inline edit listens to global keydown events ie. it's now possible update multiple rows with the enter key without the input needing to have focus (see issue #115).
* Improved row id generation
* If `gtRowComponent` is passed to the table `row-expandable` class will be added to rows (see issue #119).
* Support for Bootstrap 4 beta (see issue #117).

# [4.4.1] - 2017-08-01

### Fixed

* Sorting of boolean values (see issue #106).
* Added check for undefined fields (see issue #107).
* Check sorting when settings change (see issue #108).
* Safeguard against undefined values on input properties (see issue #109).

# [4.4.0] - 2017-07-20

### Added

* Support for column totals (see issue #100).
* Mouse event added to column click handler (see issue #105).

### Fixed

* Position of dropdown when using inline editing with arrays, tether added as a dependency (see issue #104).
* Error with column settings causing visible columns to need an extra click when toggling column visibility (see issue #101).
* Small style improvement for inline editing

# [4.3.1] - 2017-06-26

### Fixed

* Typings reference for published npm package

# [4.3.0] - 2017-06-26

### Added

* Style for vertically aligning buttons inside table cell, apply with field setting `classNames:'gt-button'`.

### Fixed

* Loading message displayed instead of no data (see issue #95).
* `redraw()` now checks sorting and updates table if sorting has changed since last redraw (see issue #98 for example).

# [4.2.0] - 2017-06-01

### Added

* Support for simple inline editing (see issue #52).

### Fixed

* CSV escaping (see issue #89).
* Confusing paging behaviour (see issue #87).

# [4.1.1] - 2017-04-21

### Fixed

* AOT error for `ColumnSettingsComponent` (see issue #80).

# [4.1.0] - 2017-04-21

### Breaking changes

* Package has changed name from `angular-generic-table` to `@angular-generic-table/core` so all imports and references have to be updated accordingly, not really a breaking change but still something you need to consider if you're currently on version 4.0.1 or below.

### Added

* Column settings component for toggling column visibility and column order, see example [here](https://hjalmers.github.io/angular-generic-table/column-settings-component).
* Support for single row selection/expand, restrict to single selection/expand by setting `gtOtpions.rowSelectionAllowMultiple` and/or `gtOtpions.rowExpandAllowMultiple` to `false`, default value is true (see issue #72).
* Option for default row length, use `gtOption.numberOfRows` to override default value (see issue #77).
* Support for async loading of config objects i.e. settings and fields.

### Fixed

* Custom classes not applied when table had no visible columns (see issue #73).
* Fix for pagination component (see issue #46).
* Fix for sorting, sorting `enable` will be applied by default if setting is omitted (see issue #71). Column header will no longer emit click event if sorting is disabled.
* Fix for sort order when lazy loading data (see issue #50).
* Column order will be set to property order if undefined.
* Accept null values when using async pipe (see issue #76).

# [4.0.1] - 2017-04-06

### Fixed

* Fix for pagination component (see issue #67, #68, #69), pagination controls will now also be disabled when table is fetching data.

# [4.0.0] - 2017-03-29

### Breaking changes

* Made some changes for angular version 4.0.0 eg. changed from `template` to `ng-template` which means that generic table now requires angular version 4+ and therefore it's added as a peer dependency (see issue #63).

### Fixed

* Fix for collapsing rows from row component (see issue #65)
* Fix for AOT (see issue #64)

# [2.0.2] - 2017-03-27

### Fixed

* Removed faulty import (see issue #60)

# [2.0.1] - 2017-03-24

### Fixed

* Removed deprecated warning

# [2.0.0] - 2017-03-23

### Added

* Support for selecting rows, enable by setting `gtOtpions.rowSelection` to `true` (issue #53, issue #59)
* Support for selecting/deselecting and expanding/collapsing all rows (issue #58)
* Support for redrawing table from custom column component, useful when custom column component alters other cells in row (issue #57)

### Improvement

* Lazy loading now uses default template (easier to keep code changes in sync)

### Breaking changes

* Project has changed name from `angular2-generic-table` to `angular-generic-table` to comply with angular guidelines
* `isOpen` property has been removed from row object, instead access isOpen state on row using `metaInfo[row.$$gtRowId]?.isOpen` it's now also possible to see if a row is selected using `metaInfo[row.$$gtRowId]?.isSelected`

# [1.1.1] - 2017-03-22

### Fixed

* Enable custom column components for the async case (issue #45)
* Refresh `gtInfo` component if `gtTexts` are changed
* The keys declared by `gtTexts` interface are now optional (useful when you want to change a single text key)

### Added

* Example using [ngx-translate](https://github.com/ngx-translate/core) for localization
* Support for passing translations to pagination component

# [1.1.0] - 2017-01-20

### Fixed

* Upgrade angular-cli and build with metadata version 3 (issue #43)
* Changed class name for expanded row from `expanded-row` to `row-expanded` to be more consistent (issue #39)
* Pagination layout (issue #42)
* Examples now use new classes and markup added in bootstrap 4 alpha 6

### Added

* Allow custom components for each column (issue #44)

# [1.0.0] - 2016-12-16

### Fixed

* Render or value function won't be called until table has data (issue #32)
* Include \*.metadata.json files in build (issue #38)
* Include sass and css in build for styling

### Added

* Support for stacked columns (responsive layout for mobiles and tablets) use `[gtOptions]="{stack:true}"` to enable feature, see issue #37
* Basic styles for sorting and stacked columns (included in npm package for sass and as a pre-compiled css)

### Breaking changes

* `GtLazy` and `GtHighlightSearch` input/attributes have been moved into `GtOptions` ie. change from `[GtLazy]="true"` and `[GtHighlightSearch]="true"` to `[gtOptions]="{lazyLoad:true, highlightSearch:true}"`

# [1.0.0-rc.10] - 2016-12-13

### Added

* Ability to toggle column visibility, see issue #33
* Ability to export to CSV, see issue #3

### Fixed

* Clean goal doesn't run before the build goal (see issue #36)
* Removed compiled javascript files

# [1.0.0-rc.9] - 2016-12-10

### Added

* Ability to show text when no data is return or when filter and/or search has no matching results, see issue #24
* Pagination component, see issue #2
* Ability to pass default options to table, [see docs](https://github.com/hjalmers/angular2-generic-table)
* Loading state for table rows waiting for data (only when lazy loading), use `tr.row-loading` to style loading rows
* Table info component, [see examples](https://hjalmers.github.io/angular2-generic-table/examples)

### Fixed

* Searching table now updates total number of pages correctly
* Searching function now supports åäö and other strange characters
* Handling of null values, see issues #32 and #35

### Breaking changes

* Lazy loading will by default not cache data, override using `gt-options` and set `cache` to `true`
* `GtPagination` has been replaced with `GtInfo` and properties have changed names, [see docs](https://github.com/hjalmers/angular2-generic-table)
* Highlighting of search terms when using `[gtLazy]=true` has changed, set search terms in your server response, [see docs](https://github.com/hjalmers/angular2-generic-table)
* `GtTexts` now uses camel case instead of dash case so in case you've changed the default texts you need to change from `no_match` to `noMatch` etc.
* Event property names have changed from `page` to `currentPage` and from `pageLength` to `recordLength` to match names used by `GtInformation`

# [1.0.0-rc.8] - 2016-11-30

### Fixed

* Source maps not generated correctly
* Highlight doesn't find all matches
* Go to first page when using global search

# [1.0.0-rc.7] - 2016-11-22

### Breaking changes

* Moved search (true/false) to `GtConfigSetting` i.e. to disable global search for a field use `GtConfigSetting` and to defined a search function use `GtConfigField`.

### Added

* Option to highlight matched search terms in table, to enable use `[gtHighlightSearch}="true"`, highlighted strings have the class `gt-highlight-search`.

### Fixed

* Column content (i.e td content) is now wrapped within a span, click etc. is now triggered by the span and not the td element.

# [1.0.0-rc.6] - 2016-11-22

### Breaking changes

* Added strong typing for all interfaces (you can always use `<any>` where type is required)

# [1.0.0-rc.5] - 2016-11-18

### Breaking changes

* Changed `component` to `gtRowComponent` and added typing for expanded row i.e. you must add type to your custom row component
* Changed path for type declarations import using `import {GenericTableModule} from 'angular2-generic-table';`

# [1.0.0-rc.4] - 2016-11-14

### Added

* Support for custom table classes
* Support for global table search

### Fixed

* Column order when no order is defined
* Minor bug fixes

### Other

* Switched from Bootstrap 3.3.7 to Bootstrap 4.0.0-alpha5

# [1.0.0-rc.3] - 2016-11-02

### Breaking changes

* Changed path for lib type declarations

### Fixed

* Sorting of multiple columns
* Sorting null values
* Missing scss file
* Importing Common Module instead of Browser Module to support sub module linking
* Targeting es5

# [1.0.0-rc.2] - 2016-10-26

### Fixed

* Added sorting classes to table headers and settings object is now updated when sorting changes

### Improved

* All pipes are now pure (for better performance)

# [1.0.0-rc.1] - 2016-10-25

### Added

* Documentation
* Examples
