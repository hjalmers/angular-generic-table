import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	Renderer2,
	SimpleChanges,
	Type
} from '@angular/core';
import { GtRow } from '../../interfaces/gt-row';
import { GtExpandedRow } from '../gt-expanding-row/gt-expanding-row.component';
import { GtOptions } from '../../interfaces/gt-options';
import { GtConfigField } from '../../interfaces/gt-config-field';
import { GtConfigSetting } from '../../interfaces/gt-config-setting';
import { GtRowMeta } from '../../interfaces/gt-row-meta';
import { GtTexts } from '../../interfaces/gt-texts';
import { GtConfig } from '../../interfaces/gt-config';
import { GtEvent } from '../../interfaces/gt-event';
import { GtInformation } from '../../interfaces/gt-information';
import { GtRenderField } from '../../interfaces/gt-render-field';
import { GtMetaPipe } from '../../pipes/gt-meta.pipe';

@Component({
	selector: 'generic-table',
	templateUrl: './generic-table.component.html'
})
export class GenericTableComponent<R extends GtRow, C extends GtExpandedRow<R>>
	implements OnInit, OnChanges, OnDestroy {
	get gtRowComponent(): Type<C> {
		return this._gtRowComponent;
	}

	get hasEdits(): boolean {
		return Object.keys(this.editedRows).length > 0;
	}

	get gtOptions(): GtOptions {
		return this._gtOptions;
	}

	get gtTotals(): any {
		return this._gtTotals;
	}

	get gtFields(): GtConfigField<R, any>[] {
		return this._gtFields;
	}

	get gtSettings(): GtConfigSetting[] {
		return this._gtSettings;
	}

	get gtData(): Array<any> {
		return this._gtData;
	}

	@Input()
	set gtOptions(value: GtOptions) {
		this._gtOptions = value;

		// if number of rows is passed and if number of rows differs from current record length...
		if (
			this.gtOptions.numberOfRows &&
			this.gtInfo.recordLength !== this.gtOptions.numberOfRows
		) {
			// ...update record length and redraw table
			this.gtInfo.recordLength = this.gtOptions.numberOfRows;
			this.redraw();
		}

		// ...extend gtOptions default values with values passed into component
		this._gtOptions = <GtOptions>this.extend(
			this.gtDefaultOptions,
			this._gtOptions
		);
	}

	@Input()
	set gtTotals(value: any) {
		this._gtTotals = value;
	}
	@Input()
	set gtFields(value: GtConfigField<R, any>[]) {
		this._gtFields = value;
		const COLUMNS_WITH_CLASS_NAMES = this._gtFields
			.map(column => column)
			.filter(column => column.classNames);
		// TODO: remove deprecated warning when setting has been removed
		if (COLUMNS_WITH_CLASS_NAMES.length > 0) {
			console.warn(
				'Field setting "classNames" have been deprecated in favor for "columnClass" and will be removed in the future, please update field settings for column with object key: ' +
					COLUMNS_WITH_CLASS_NAMES[0].objectKey
			);
		}
	}
	@Input()
	set gtSettings(value: GtConfigSetting[]) {
		this._gtSettings = value;

		// loop through current settings
		for (let i = 0; i < this._gtSettings.length; i++) {
			// set sort enabled/disabled setting
			this._gtSettings[i].sortEnabled =
				this._gtSettings[i].sortEnabled !== false
					? (this._gtSettings[i].sortEnabled = !(
							this._gtSettings[i].sort &&
							this._gtSettings[i].sort.indexOf('disable') !== -1
					  ))
					: false;

			// check if sorting is undefined...
			if (typeof this._gtSettings[i].sort === 'undefined') {
				// ...is so, set sorting property to enable
				this._gtSettings[i].sort = 'enable';
			}

			// check if column order is undefined...
			if (
				typeof this._gtSettings[i].columnOrder === 'undefined' &&
				this._gtSettings[i].enabled !== false
			) {
				// ...is so, set sorting property to enable
				this._gtSettings[i].columnOrder = this._gtSettings[i - 1]
					? this._gtSettings[i - 1].columnOrder + 1
					: 0;
			}

			// check if column lock settings are undefined...
			if (typeof this._gtSettings[i].lockSettings === 'undefined') {
				// ...if so, set lock settings to false unless field is disabled (enable === false)
				this._gtSettings[i].lockSettings =
					this._gtSettings[i].enabled === false || false;
			}
		}
		this.restructureSorting();
	}
	@Input()
	set gtData(initialData: Array<any>) {
		const data = this._gtOptions.mutateData
			? [...initialData]
			: this.cloneDeep(initialData);
		if (this.gtOptions.lazyLoad && this.gtInfo) {
			this.gtMetaPipe.transform(
				data,
				this.gtOptions.rowIndex,
				this.gtInfo.pageCurrent - 1,
				this.gtInfo.recordLength
			);
			if (this.lazyAllSelected) {
				const UNIQUE_ROWS = this.selectedRows.map(row => row.$$gtRowId);
				data.map(row => {
					if (UNIQUE_ROWS.indexOf(row.$$gtRowId) === -1) {
						this.selectedRows.push(row);
					}
				});
				this._updateMetaInfo(this.selectedRows, 'isSelected', true);
			}
		} else {
			this.gtMetaPipe.transform(data, this.gtOptions.rowIndex);
		}
		if (this.gtOptions.rowSelectionInitialState) {
			data.map(row => {
				const selected =
					typeof this.gtOptions.rowSelectionInitialState === 'function'
						? this.gtOptions.rowSelectionInitialState(row)
						: this.gtOptions.rowSelectionInitialState;
				if (selected) {
					if (typeof this.metaInfo[row.$$gtRowId] === 'undefined') {
						this.metaInfo[row.$$gtRowId] = { isSelected: true };
					} else {
						this.metaInfo[row.$$gtRowId].isSelected = true;
					}
					this.selectedRows.push(row);
				}
			});
		}
		if (
			this.gtOptions.rowExpandInitialState &&
			this.gtOptions.rowExpandInitialComponent
		) {
			data.map(row => {
				const expanded =
					typeof this.gtOptions.rowExpandInitialState === 'function'
						? this.gtOptions.rowExpandInitialState(row)
						: this.gtOptions.rowExpandInitialState;
				this.expandedRow = this.gtOptions.rowExpandInitialComponent;

				if (expanded) {
					if (typeof this.metaInfo[row.$$gtRowId] === 'undefined') {
						this.metaInfo[row.$$gtRowId] = { isOpen: true };
					} else {
						this.metaInfo[row.$$gtRowId].isOpen = true;
					}
				}
			});
		}
		this._gtData = data;
	}

	@Input()
	set gtRowComponent(value: Type<C>) {
		console.warn(
			'GtRowComponent has been deprecated and support will be removed in a future release, see https://github.com/hjalmers/angular-generic-table/issues/34'
		);
		this._gtRowComponent = value;
	}

	public columnWidth: Object = {};
	public configObject: GtConfig<R>;
	public sortOrder: Array<any> = [];
	public metaInfo: { [gtRowId: string]: GtRowMeta } = {};
	public selectedRows: Array<GtRow> = [];
	public openRows: Array<GtRow> = [];
	private _gtSettings: GtConfigSetting[] = [];
	private _gtFields: GtConfigField<R, any>[] = [];
	private _gtData: Array<any>;
	private _gtTotals: any;
	private _gtRowComponent: Type<C>;
	public expandedRow: {
		component: Type<C>;
		data?: Array<any>;
	};
	public gtDefaultTexts: GtTexts = {
		loading: 'Loading...',
		noData: 'No data',
		noMatchingData: 'No data matching results found',
		noVisibleColumnsHeading: 'No visible columns',
		noVisibleColumns: 'Please select at least one column to be visible.',
		tableInfo:
			'Showing #recordFrom to #recordTo of #recordsAfterSearch entries.',
		tableInfoAfterSearch:
			'Showing  #recordFrom to #recordTo of #recordsAfterSearch entries (filtered from a total of #recordsAll entries).',
		csvDownload: 'download',
		sortLabel: 'Sort:',
		paginateNext: 'Next page',
		paginatePrevious: 'Previous page',
		inlineEditEdited: 'Press enter to save'
	};
	@Input() gtTexts: GtTexts = this.gtDefaultTexts;
	@Input() gtClasses: string;
	@Output() gtEvent: EventEmitter<GtEvent> = new EventEmitter();
	public gtDefaultOptions: GtOptions = {
		csvDelimiter: ';',
		stack: false,
		lazyLoad: false,
		cache: false,
		debounceTime: 200,
		highlightSearch: false,
		rowSelection: false,
		rowSelectionAllowMultiple: true,
		rowExpandAllowMultiple: true,
		numberOfRows: 10,
		reportColumnWidth: false,
		allowUnsorted: true,
		mutateData: true
	};
	private _gtOptions: GtOptions = this.gtDefaultOptions;
	public store: Array<any> = [];
	public loading = true;
	private debounceTimer: void = null;
	public loadingProperty: string;
	public lazyAllSelected = false;

	@Input()
	gtInfo: GtInformation = {
		pageCurrent: 1,
		pageTotal: 0,
		recordFrom: 0,
		recordTo: 0,
		recordLength: this.gtOptions.numberOfRows,
		recordsAll: 0,
		recordsAfterFilter: 0,
		recordsAfterSearch: 0
	};

	public refreshPipe = false;
	public refreshTotals = false;
	public refreshSorting = false;
	public refreshFilter = false;
	public refreshPageArray = false;
	private globalInlineEditListener: Function;
	public editedRows: {
		[key: string]: {
			changes: { [key: string]: GtRenderField<GtRow, any> };
			row: GtRow;
		};
	} = {};

	public data: { exportData: Array<any> } = { exportData: [] }; // Store filtered data for export

	constructor(private renderer: Renderer2, private gtMetaPipe: GtMetaPipe) {
		this.gtEvent.subscribe(($event: GtEvent) => {
			if ($event.name === 'gt-info') {
				this.updateRecordRange();
			}
			if ($event.name === 'gt-row-updated') {
				this.updateTotals();
			}
		});
	}

	/**
	 * Sort table by object key.
	 * @param objectKey - name of key to sort on.
	 * @param event - such as key press during sorting.
	 */
	public gtSort = function(objectKey: string, event: any) {
		this.inlineEditCancel(); // cancel inline editing

		// loop through current settings
		for (let i = 0; i < this._gtSettings.length; i++) {
			if (this._gtSettings[i].objectKey === objectKey) {
				// check if sorting is disabled...
				if (
					this._gtSettings[i].sort &&
					this._gtSettings[i].sort.indexOf('disable') !== -1
				) {
					// ...if so, exit function without applying any sorting
					return;
				} else if (
					/* check if sorting is undefined... */ typeof this._gtSettings[i]
						.sort === 'undefined'
				) {
					// ...is so, set sorting property to enable
					this._gtSettings[i].sort = 'enable';
				}
			}
		}

		// check length
		const ctrlKey = event.metaKey || event.ctrlKey;
		const sort = this.sortOrder.slice(0);

		let match = -1;
		let matchDesc = -1;
		let pos = -1;

		// check if property already exits
		for (let i = 0; i < sort.length; i++) {
			const hit = sort[i].indexOf(objectKey);
			if (hit !== -1) {
				match = this.sortOrder.indexOf(objectKey);
				matchDesc =
					match === -1 ? this.sortOrder.indexOf('-' + objectKey) : match;
				pos = Math.max(match, matchDesc);
			}
		}

		// if ctrl key or meta key is press together with sort...
		if (ctrlKey) {
			if (this.sortOrder[this.sortOrder.length - 1] === '$$gtInitialRowIndex') {
				this.sortOrder.pop();
			}
			switch (pos) {
				// ...and property is not sorted before...
				case -1:
					// ...add property to sorting
					this.sortOrder.push(objectKey);
					break;
				default:
					// ...and property is sorted before...
					if (match !== -1) {
						// ...change from asc to desc if sorted asc
						this.sortOrder[pos] = '-' + objectKey;
					} else if (this.sortOrder.length > 1) {
						// ...remove sorting if sorted desc
						if (ctrlKey) {
							this.sortOrder[pos] = objectKey;
						} else {
							this.sortOrder.splice(pos, 1);
						}
					} else if (this.sortOrder.length === 1) {
						// ...set sorting to asc if only sorted property
						this.sortOrder[pos] = objectKey;
					}
					break;
			}
		} else {
			/* if ctrl key or meta key is not press together with sort... */
			switch (pos) {
				// ...and property is not sorted before...
				case -1:
					// ...sort by property
					this.sortOrder = [objectKey];
					break;
				default:
					// ...change from desc to asc and vise versa
					this.sortOrder =
						match !== -1
							? ['-' + objectKey]
							: ctrlKey || !this.gtOptions.allowUnsorted
								? [objectKey]
								: [];
					break;
			}
		}

		// update settings object with new sorting information
		for (let i = 0; i < this._gtSettings.length; i++) {
			if (this._gtSettings[i].objectKey === objectKey) {
				switch (this._gtSettings[i].sort) {
					// if sorted asc...
					case 'asc':
						// ...change to desc
						this._gtSettings[i].sort = 'desc';
						break;
					// if sorted desc...
					case 'desc':
						// ...change to asc if it's the only sorted property otherwise remove sorting
						this._gtSettings[i].sort =
							(this.sortOrder.length === 1 && sort.length < 2) ||
							ctrlKey ||
							!this.gtOptions.allowUnsorted
								? 'asc'
								: 'enable';
						break;
					// if sorting enabled...
					case 'enable':
						// ...change to asc
						this._gtSettings[i].sort = 'asc';
						break;
				}
				this._gtSettings[i].sortOrder =
					this._gtSettings[i].sort === 'enable'
						? this._gtSettings.length - 1
						: this.sortOrder.indexOf(objectKey) === -1
							? this.sortOrder.indexOf('-' + objectKey)
							: this.sortOrder.indexOf(objectKey);
			} else if (
				this._gtSettings[i].sort &&
				this._gtSettings[i].sort.indexOf('disable') === -1 &&
				this.sortOrder.indexOf(this._gtSettings[i].objectKey) === -1 &&
				this.sortOrder.indexOf('-' + this._gtSettings[i].objectKey) === -1
			) {
				this._gtSettings[i].sort = 'enable';
				this._gtSettings[i].sortOrder = this._gtSettings.length - 1;
			}
		}

		// refresh sorting pipe
		this.refreshSorting = !this.refreshSorting;
		this.refreshPageArray = !this.refreshPageArray;

		// sort by initial sort order as last resort
		this.sortOrder.push('$$gtInitialRowIndex');

		// emit sort event
		this.gtEvent.emit({
			name: 'gt-sorting-applied',
			value: this.sortOrder
		});
	};

	/**
	 * Change number of rows to be displayed.
	 * @param rowLength - total number of rows.
	 * @param reset - should page be reset to first page.
	 */
	public changeRowLength = function(rowLength: any, reset?: boolean) {
		let lengthValue = isNaN(parseInt(rowLength, 10))
			? 0
			: parseInt(rowLength, 10);
		let newPosition = 1;

		if (!lengthValue && this.gtData) {
			lengthValue = this.gtData.length;
		}

		// if reset is not true and we're not lazy loading data...
		if (reset !== true && this._gtOptions.lazyLoad !== true) {
			// ...get current position in record set
			const currentRecord =
				this.gtInfo.recordLength * (this.gtInfo.pageCurrent - 1);
			const currentPosition =
				this._gtData.indexOf(this._gtData[currentRecord]) + 1;

			// ...get new position
			newPosition = Math.ceil(currentPosition / lengthValue);
		}

		// change row length
		this.gtInfo.recordLength = lengthValue;

		// go to new position
		this.gtInfo.pageCurrent = newPosition;

		// if lazy loading data...
		if (this._gtOptions.lazyLoad) {
			// ...replace data with place holders for new data
			this._gtData[0] = this.loadingContent(lengthValue);

			// ...empty current store
			this.store = [];
		}

		// this.updateRecordRange();

		this.gtEvent.emit({
			name: 'gt-row-length-changed',
			value: lengthValue
		});
	};

	/**
	 * Force a redraw of table rows.
	 * As the table uses pure pipes, we need to force a redraw if an object in the array is changed to see the changes.
	 */
	public redraw = function($event?: any) {
		this.refreshSorting = !this.refreshSorting;
		this.refreshPageArray = !this.refreshPageArray;
		this.refreshPipe = !this.refreshPipe;
	};

	/** Update record range. */
	private updateRecordRange() {
		this.gtInfo.recordFrom =
			this.gtInfo.recordsAfterSearch === 0
				? 0
				: (this.gtInfo.pageCurrent - 1) * this.gtInfo.recordLength + 1;
		this.gtInfo.recordTo =
			this.gtInfo.recordsAfterSearch <
			this.gtInfo.pageCurrent * this.gtInfo.recordLength
				? this.gtInfo.recordsAfterSearch
				: this.gtInfo.pageCurrent * this.gtInfo.recordLength;
	}

	/** Update totals. */
	private updateTotals() {
		this.refreshTotals = !this.refreshTotals;
	}

	/** Go to next page. */
	public nextPage = function() {
		const page =
			this.gtInfo.pageCurrent === this.gtInfo.pageTotal
				? this.gtInfo.pageTotal
				: this.gtInfo.pageCurrent + 1;
		this.goToPage(page);
	};

	/** Go to previous page. */
	public previousPage = function() {
		const page =
			this.gtInfo.pageCurrent === 1 ? 1 : this.gtInfo.pageCurrent - 1;
		this.goToPage(page);
	};

	/** Request more data (used when lazy loading) */
	private getData = function() {
		// ...emit event requesting for more data
		this.gtEvent.emit({
			name: 'gt-page-changed-lazy',
			value: {
				pageCurrent: this.gtInfo.pageCurrent,
				recordLength: this.gtInfo.recordLength
			}
		});
	};

	/**
	 * Go to specific page.
	 * @param page - page number.
	 */
	public goToPage = function(page: number) {
		const previousPage = this.gtInfo.pageCurrent;
		this.gtInfo.pageCurrent = page;
		this.inlineEditCancel(); // cancel inline edit

		// if lazy loading and if page contains no records...
		if (this._gtOptions.lazyLoad) {
			// ...if data for current page contains no entries...
			if (
				this._gtOptions.cache === false ||
				this._gtData[this.gtInfo.pageCurrent - 1].length === 0
			) {
				// ...create temporary content while waiting for data
				this._gtData[this.gtInfo.pageCurrent - 1] = this.loadingContent(
					this.gtInfo.recordLength
				);
				this.loading = true; // loading true
			}
			// ...if first entry in current page equals our loading placeholder...
			if (
				this._gtData[this.gtInfo.pageCurrent - 1][0][this.loadingProperty] ===
				this.gtTexts.loading
			) {
				// ...get data
				clearTimeout(this.debounceTimer);
				this.debounceTimer = setTimeout(() => {
					this.getData();
				}, this._gtOptions.debounceTime);
			}
		}

		// this.updateRecordRange();

		// ...emit page change event
		if (previousPage !== page) {
			this.gtEvent.emit({
				name: 'gt-page-changed',
				value: {
					pageCurrent: this.gtInfo.pageCurrent,
					pagePrevious: previousPage,
					recordLength: this.gtInfo.recordLength
				}
			});
		}
	};

	/**
	 * Get meta data for row.
	 */
	public getRowState(row: R): GtRowMeta {
		return typeof this.metaInfo[row.$$gtRowId] === 'undefined'
			? null
			: this.metaInfo[row.$$gtRowId];
	}

	/**
	 * Expand all rows.
	 * @param expandedRow - component to render when rows are expanded.
	 */
	public expandAllRows(expandedRow: { component: Type<C>; data?: any }): void {
		this.expandedRow = expandedRow;
		this._toggleAllRowProperty('isOpen', true);
	}

	/**
	 * Collapse all rows.
	 */
	public collapseAllRows(): void {
		this._toggleAllRowProperty('isOpen', false);
	}

	/**
	 * Select all rows.
	 */
	public selectAllRows(): void {
		this._toggleAllRowProperty('isSelected', true);
	}

	/**
	 * Deselect all rows.
	 */
	public deselectAllRows(): void {
		this._toggleAllRowProperty('isSelected', false);
	}
	/**
	 * Toggle all rows.
	 */
	public toggleAllRows(): void {
		if (this._gtOptions.lazyLoad) {
			if (!this.lazyAllSelected || this.selectedRows.length === 0) {
				this.selectAllRows();
				this.lazyAllSelected = true;
			} else {
				this.deselectAllRows();
				this.lazyAllSelected = false;
			}
		} else {
			if (this.selectedRows.length !== this.gtData.length) {
				this.selectAllRows();
			} else {
				this.deselectAllRows();
			}
		}
	}

	/**
	 * Toggle row collapsed state ie. expanded/open or collapsed/closed.
	 * @param row - row object that should be expanded/collapsed.
	 * @param expandedRow - component to render when row is expanded.
	 */
	public toggleCollapse(
		row: GtRow,
		expandedRow?: { component: Type<C>; data?: any }
	) {
		if (expandedRow) {
			this.expandedRow = expandedRow;
		}
		this._toggleRowProperty(row, 'isOpen');
	}

	/**
	 * Toggle row selected state ie. selected or not.
	 * @param row - row object that should be selected/deselected.
	 */
	public toggleSelect(row: GtRow) {
		this._toggleRowProperty(row, 'isSelected');
	}

	public rowClick(row: GtRow, $event: MouseEvent) {
		this.gtEvent.emit({
			name: 'gt-row-clicked',
			value: { row: row, event: $event }
		});
	}

	/**
	 * Update row data.
	 * @param row - row object that has been edited.
	 * @param oldValue - row object before edit.
	 */
	public updateRow(row: GtRow, oldValue: GtRow) {
		this._toggleRowProperty(row, 'isUpdated', oldValue);
	}

	/**
	 * removes a row from the table
	 * @param row - the row object to remove
	 */
	public removeRow(row: GtRow) {
		if (this.isRowSelected(row)) {
			this.toggleSelect(row);
		}
		const index = this._gtData.indexOf(row);
		this._gtData.splice(index, 1);
	}

	/**
	 * check if a row is selected
	 * @param row - row object
	 */
	public isRowSelected(row: GtRow): boolean {
		return (
			this.metaInfo[row.$$gtRowId] && this.metaInfo[row.$$gtRowId].isSelected
		);
	}

	/**
	 * Update meta info for all rows, ie. isSelected, isOpen.
	 * @param array - array that holds rows that need to be updated.
	 * @param property - name of property that should be changed/toggled.
	 * @param active - should rows be expanded/open, selected.
	 * @param exception - update all rows except this one.
	 */
	private _updateMetaInfo(
		array: Array<GtRow>,
		property: string,
		active: boolean,
		exception?: GtRow
	) {
		for (let i = 0; i < array.length; i++) {
			if (!this.metaInfo[array[i].$$gtRowId]) {
				this.metaInfo[array[i].$$gtRowId] = {};
			}
			if (exception && array[i].$$gtRowId === exception.$$gtRowId) {
			} else {
				this.metaInfo[array[i].$$gtRowId][property] = active;
			}
		}
	}

	/**
	 * Push selected/expanded lazy loaded rows to array with meta data.
	 * @param target - array to which rows should be added.
	 * @param source - array that holds rows that should be added.
	 * @returns array with added rows.
	 */
	private _pushLazyRows(
		target: Array<GtRow>,
		source: Array<GtRow>
	): Array<GtRow> {
		const UNIQUE_ROWS = target.map(row => row.$$gtRowId);
		for (let i = 0; i < source.length; i++) {
			// only add if not already in list
			if (UNIQUE_ROWS.indexOf(source[i].$$gtRowId) === -1) {
				target.push(source[i]);
			}
		}
		return target;
	}

	/**
	 * Toggle meta info for all rows, ie. isSelected, isOpen.
	 * @param property - name of property that should be changed/toggled.
	 * @param active - should rows be expanded/open, selected.
	 */
	private _toggleAllRowProperty(property: string, active: boolean) {
		let eventName: string;
		let eventValue: any;
		switch (property) {
			case 'isOpen':
				// check if multiple expanded rows are allowed...
				if (this._gtOptions.rowExpandAllowMultiple === false) {
					// ...if not, exit function
					console.log(
						'feature disabled: enable by setting "rowExpandAllowMultiple = true"'
					);
					return;
				}
				if (active) {
					eventName = 'expand-all';
					this.openRows = this._gtOptions.lazyLoad
						? this._pushLazyRows(
								this.openRows,
								this._gtData[this.gtInfo.pageCurrent - 1].slice()
						  )
						: this._gtData.slice();
					this._updateMetaInfo(this.openRows, property, active);
				} else {
					eventName = 'collapse-all';
					this._updateMetaInfo(this.openRows, property, active);
					this.openRows = [];
				}
				eventValue = {
					expandedRows: this.openRows,
					changedRow: 'all'
				};
				break;
			case 'isSelected':
				// check if multi row selection is allowed...
				if (this._gtOptions.rowSelectionAllowMultiple === false) {
					// ...if not, exit function
					console.log(
						'feature disabled: enable by setting "rowSelectionAllowMultiple = true"'
					);
					return;
				}
				if (active) {
					eventName = 'select-all';
					this.selectedRows = this._gtOptions.lazyLoad
						? this._pushLazyRows(
								this.selectedRows,
								this._gtData[this.gtInfo.pageCurrent - 1].slice()
						  )
						: this._gtData.slice();
					this._updateMetaInfo(this.selectedRows, property, active);
				} else {
					eventName = 'deselect-all';
					this._updateMetaInfo(this.selectedRows, property, active);
					this.selectedRows = [];
				}
				eventValue = {
					selectedRows: this.selectedRows,
					changedRow: 'all'
				};

				break;
		}
		this.gtEvent.emit({
			name: 'gt-row-' + eventName,
			value: eventValue
		});
	}

	/**
	 * Toggle meta info for row, ie. isSelected, isOpen.
	 * @param row - row object.
	 * @param property - name of property that should be changed/toggled.
	 * @param propertyValues - optional property values that can be passed.
	 */
	private _toggleRowProperty(
		row: GtRow,
		property: string,
		propertyValues?: any
	) {
		let eventName: string;
		let eventValue: any;
		// make sure gtRowId exists on row object
		if (typeof row.$$gtRowId !== 'undefined') {
			// check if meta info exists for row
			if (!this.metaInfo[row.$$gtRowId]) {
				// if not, add object to store meta info
				this.metaInfo[row.$$gtRowId] = {};
			}

			switch (property) {
				case 'isOpen':
					const opened = this.metaInfo[row.$$gtRowId][property];

					// check if multiple expanded rows are allowed...
					if (this._gtOptions.rowExpandAllowMultiple === false) {
						// ...if not, collapse all rows except current row
						this._updateMetaInfo(this.openRows, property, false, row);
						this.openRows = [];
					}

					// check if row is expanded
					if (!opened) {
						eventName = 'expand';
						// add row to expanded rows
						this.openRows.push(row);
					} else {
						eventName = 'collapse';
						// loop through expanded rows...
						for (let i = 0; i < this.openRows.length; i++) {
							// if expanded row equals passed row...
							if (this.openRows[i].$$gtRowId === row.$$gtRowId) {
								// ...remove row from expanded rows...
								this.openRows.splice(i, 1);

								// ...and exit loop
								break;
							}
						}
					}
					eventValue = {
						expandedRows: this.openRows,
						changedRow: row
					};
					break;
				case 'isSelected':
					const selected = this.metaInfo[row.$$gtRowId][property];

					// check if multi row selection is allowed...
					if (this._gtOptions.rowSelectionAllowMultiple === false) {
						// ...if not, deselect all rows except current row
						this._updateMetaInfo(this.selectedRows, property, false, row);
						this.selectedRows = [];
					}

					// check if row is selected
					if (!selected) {
						eventName = 'select';
						// add row to selected rows
						this.selectedRows.push(row);
					} else {
						if (this.gtOptions.lazyLoad && this.lazyAllSelected) {
							this.lazyAllSelected = false;
						}
						eventName = 'deselect';
						// loop through selected rows...
						for (let i = 0; i < this.selectedRows.length; i++) {
							// if selected row equals passed row...
							if (this.selectedRows[i].$$gtRowId === row.$$gtRowId) {
								// ...remove row from selected rows...
								this.selectedRows.splice(i, 1);

								// ...and exit loop
								break;
							}
						}
					}
					eventValue = {
						selectedRows: this.selectedRows,
						changedRow: row
					};
					break;

				case 'isUpdated':
					eventName = 'updated';
					const oldValue = propertyValues;
					// check if edit object exists for row
					if (typeof this.metaInfo[row.$$gtRowId][property] === 'undefined') {
						this.metaInfo[row.$$gtRowId][property] = {
							originalValue: oldValue,
							oldValue: oldValue,
							newValue: row
						};
					} else {
						this.metaInfo[row.$$gtRowId][property].oldValue = oldValue;
						this.metaInfo[row.$$gtRowId][property].newValue = row;
					}
					eventValue = this.metaInfo[row.$$gtRowId][property];
					this.redraw();
					this.inlineEditCancel(row);
					// this.gtData = [...this.gtData.map((r) => { return{...r}; })];
					break;
			}
			this.gtEvent.emit({
				name: 'gt-row-' + eventName,
				value: eventValue
			});
			if (property !== 'isUpdated') {
				this.metaInfo[row.$$gtRowId][property] = !this.metaInfo[row.$$gtRowId][
					property
				];
			}
		}
	}

	/**
	 * Update column.
	 * @param $event - key up event.
	 * @param row - row object.
	 * @param column - column object.
	 */
	public gtUpdateColumn(
		$event: KeyboardEvent,
		row: GtRow,
		column: GtRenderField<any, any>
	) {
		this._editRow(row, column);
	}

	/**
	 * Dropdown select.
	 * @param row - row object.
	 * @param column - column object.
	 */
	public gtDropdownSelect(row: GtRow, column: GtRenderField<any, any>) {
		const oldValue = { ...row };
		row[column.objectKey] = column.renderValue;
		this.updateRow(row, oldValue);
	}

	private _editRow(row: GtRow, column: GtRenderField<any, any>) {
		const OBJECT_KEY = column.objectKey; // declare object key which contains changes

		// check if cell has changed value
		column.edited = row[column.objectKey] !== column.renderValue;
		// check if row contains changes...
		if (!this.editedRows[row.$$gtRowId]) {
			// if not, create an object for the changed row
			this.editedRows[row.$$gtRowId] = {
				changes: {}, // create placeholder for changes
				row: row // store reference to the row that should be updated
			};
		}

		// store changed column under changes if it has been edited
		if (column.edited) {
			this.editedRows[row.$$gtRowId].changes[OBJECT_KEY] = column;
		} else {
			// delete change object if column is unchanged
			delete this.editedRows[row.$$gtRowId].changes[OBJECT_KEY];
			// check how many columns have been changed
			const CHANGED_COLUMNS = Object.keys(
				this.editedRows[row.$$gtRowId].changes
			).length;
			if (CHANGED_COLUMNS === 0) {
				// delete row from edited rows if no columns have been edited
				delete this.editedRows[row.$$gtRowId];
			}
		}
		// if no listener is present...
		if (!this.globalInlineEditListener) {
			// ...listen for update event
			this._listenForKeydownEvent();
		}
	}
	/**
	 * Listen for key down event - listen for key down event during inline edit.
	 */
	private _listenForKeydownEvent() {
		// add global listener for key down events
		this.globalInlineEditListener = this.renderer.listen(
			'document',
			'keydown',
			$event => {
				switch ($event.key) {
					case 'Enter': // update data object
						this.inlineEditUpdate();
						break;
					case 'Escape': // cancel
						this.inlineEditCancel();
						break;
				}
			}
		);
	}
	/**
	 * Inline edit update - accept changes and update row values.
	 */
	public inlineEditUpdate() {
		// loop through rows that have been edited
		Object.keys(this.editedRows).map(key => {
			const ROW = this.editedRows[key].row; // row to update
			const CHANGES = this.editedRows[key].changes; // changes to the row

			// loop through changes in row
			Object.keys(CHANGES).map(objectKey => {
				const oldValue = { ...ROW };
				ROW[objectKey] = CHANGES[objectKey].renderValue; // update data value
				this.updateRow(ROW, oldValue); // update meta info for row and send event
				CHANGES[objectKey].edited = false; // disable edit mode
			});
		});
		// clear rows marked as edited as the rows have been updated
		this.editedRows = {};
		// remove listener
		this._stopListeningForKeydownEvent();
	}
	/**
	 * Inline edit cancel - cancel and reset inline edits.
	 */
	public inlineEditCancel(row?: GtRow) {
		if (row) {
			delete this.editedRows[row.$$gtRowId];
			// remove listener
			this._stopListeningForKeydownEvent();
			return;
		}

		// loop through rows that have been edited
		Object.keys(this.editedRows).map(key => {
			const ROW = this.editedRows[key].row; // row to update
			const CHANGES = this.editedRows[key].changes; // changes to the row

			// loop through changes in row
			Object.keys(CHANGES).map(objectKey => {
				CHANGES[objectKey].renderValue = ROW[objectKey]; // reset rendered value
				CHANGES[objectKey].edited = false; // disable edit mode
			});
		});
		// clear rows marked as edited as the rows have been updated
		this.editedRows = {};
		// remove listener
		this._stopListeningForKeydownEvent();
	}
	/**
	 * Stop listening for key down event - stop listening for key down events passed during inline edit.
	 */
	private _stopListeningForKeydownEvent() {
		if (this.globalInlineEditListener) {
			this.globalInlineEditListener();
			this.globalInlineEditListener = null;
		}
	}

	/**
	 * Apply filter(s).
	 * @param filter - object containing key value pairs, where value should be array of values.
	 */
	public gtApplyFilter(filter: Object) {
		this.gtInfo.filter = filter;
		// go to first page
		this.goToPage(1);
		this.updateTotals();
	}

	/** Clear/remove applied filter(s). */
	public gtClearFilter() {
		this.gtInfo.filter = false;
		this.updateTotals();
		// this.updateRecordRange();
	}

	/**
	 * Search
	 * @param value - string containing one or more words
	 */
	public gtSearch(value: string) {
		this.gtInfo.searchTerms = value;
		// always go to first page when searching
		this.goToPage(1);
		this.updateTotals();
	}

	/**
	 * Add rows
	 * @param rows - rows to add
	 * @returns new data array.
	 */
	public gtAdd(rows: Array<R>): ReadonlyArray<R> {
		this.gtData = [...this.gtData, ...rows];
		return [...this.gtData];
	}

	/**
	 * Delete row
	 * @param objectKey - object key you want to find match with
	 * @param value - the value that should be deleted
	 * @param match - all: delete all matches, first: delete first match (default)
	 * @returns new data array.
	 */
	public gtDelete(
		objectKey: string,
		value: string | number,
		match: 'first' | 'all' = 'first'
	): ReadonlyArray<R> {
		if (match === 'first') {
			for (let i = 0; i < this.gtData.length; i++) {
				if (this.gtData[i][objectKey] === value) {
					if (this.isRowSelected(this.gtData[i])) {
						this.toggleSelect(this.gtData[i]);
					}
					this.gtData.splice(i, 1);
					this.gtData = [...this.gtData];
					if (match === 'first') {
						break;
					}
				}
			}
		} else {
			for (let i = this.gtData.length; i > 0; i--) {
				if (this.gtData[i - 1][objectKey] === value) {
					if (this.isRowSelected(this.gtData[i - 1])) {
						this.toggleSelect(this.gtData[i - 1]);
					}
					this.gtData.splice(i - 1, 1);
					this.gtData = [...this.gtData];
				}
			}
		}
		return [...this.gtData];
	}

	/**
	 * Create store to hold previously loaded records.
	 * @param records - total number of records in store.
	 * @param perPage - how many records to show per page.
	 * @returns a nested array to hold records per page.
	 */
	private createStore(records: number, perPage: number): Array<Array<any>> {
		const stores = Math.ceil(records / perPage);
		const store: Array<Array<any>> = [];
		for (let i = 0; i < stores; i++) {
			store[i] = [];
		}
		return store;
	}

	/**
	 * Create placeholders for rows while loading data from back-end.
	 * @param perPage - how many records to show per page.
	 * @returns an array containing empty records to be presented while fetching real data.
	 */
	private loadingContent(perPage: number) {
		// create row object
		const rowObject: Object = {
			$$loading: true
		};
		let order = 0;

		// sort settings by column order
		this._gtSettings.sort(this.getColumnOrder);

		// loop through all settings objects...
		for (let i = 0; i < this._gtSettings.length; i++) {
			const setting = this._gtSettings[i];

			// ...if column is visible and enabled...
			if (setting.visible !== false && setting.enabled !== false) {
				// ...if first column, set value to loading text otherwise leave it empty
				if (order === 0) {
					rowObject[setting.objectKey] = this.gtTexts.loading;
					this.loadingProperty = setting.objectKey;
				} else {
					rowObject[setting.objectKey] = '';
				}
				order++;
			} else {
				rowObject[setting.objectKey] = '';
			}
		}

		// create content placeholder
		const contentPlaceholder: Array<any> = [];

		// create equal number of rows as rows per page
		for (let i = 0; i < perPage; i++) {
			// ...add temporary row object
			contentPlaceholder.push(rowObject);
		}
		return contentPlaceholder;
	}

	// TODO: move to helper functions
	/** Sort by sort order */
	private getSortOrder = function(a: GtConfigSetting, b: GtConfigSetting) {
		if (a.sortOrder < b.sortOrder) {
			return -1;
		}
		if (a.sortOrder > b.sortOrder || typeof a.sortOrder === 'undefined') {
			return 1;
		}
		return 0;
	};

	// TODO: move to helper functions
	/** Sort by column order */
	private getColumnOrder = function(a: GtConfigSetting, b: GtConfigSetting) {
		if (a.columnOrder === undefined) {
			return -1;
		}
		if (a.columnOrder < b.columnOrder) {
			return -1;
		}
		if (a.columnOrder > b.columnOrder) {
			return 1;
		}
		return 0;
	};

	// TODO: move to helper functions
	/** Create a deep copy of data */
	private cloneDeep = function(o: any) {
		return JSON.parse(JSON.stringify(o));
	};

	/** Export data as CSV
	 * @param fileName - optional file name (overrides default file name).
	 * @param useBOM - use BOM (byte order marker).
	 */
	public exportCSV(fileName?: string, useBOM: boolean = false) {
		const data = this.data.exportData;
		let csv = '';
		const BOM = '\uFEFF';

		// csv export headers
		for (let i = 0; i < this._gtSettings.length; i++) {
			if (this._gtSettings[i].export !== false) {
				// get field settings
				const fieldSetting = this.getProperty(
					this._gtFields,
					this._gtSettings[i].objectKey
				);

				// get export value, if exportHeader string is defined use it otherwise returns name
				const exportValue: string = fieldSetting.exportHeader
					? fieldSetting.exportHeader
					: fieldSetting.name;

				csv += this.escapeCSVDelimiter(exportValue);

				csv += this.getProperty(this._gtFields, this._gtSettings[i].objectKey)
					.name;

				if (i < this._gtSettings.length - 1) {
					csv += this._gtOptions.csvDelimiter;
				}
			}
		}

		// csv export body
		data.forEach(row => {
			csv += '\n';
			for (let i = 0; i < this._gtSettings.length; i++) {
				if (this._gtSettings[i].export !== false) {
					// get field settings
					const fieldSetting = this.getProperty(
						this._gtFields,
						this._gtSettings[i].objectKey
					);

					// get export value, if export function is defined use it otherwise check for value function and as a last resort export raw data
					const exportValue: string =
						fieldSetting.export && typeof fieldSetting.export === 'function'
							? fieldSetting.export(row)
							: fieldSetting.value && typeof fieldSetting.value === 'function'
								? fieldSetting.value(row)
								: row[this._gtSettings[i].objectKey];

					csv += this.escapeCSVDelimiter(exportValue);

					if (i < this._gtSettings.length - 1) {
						csv += this._gtOptions.csvDelimiter;
					}
				}
			}
		});

		const blob = new Blob([(useBOM ? BOM : '') + csv], {
			type: 'text/csv;charset=utf-8'
		});

		if (window.navigator.msSaveOrOpenBlob) {
			navigator.msSaveOrOpenBlob(
				blob,
				fileName ? fileName + '.csv' : this.gtTexts.csvDownload + '.csv'
			);
		} else {
			const link = document.createElement('a');
			link.style.display = 'none';
			document.body.appendChild(link);
			if (link.download !== undefined) {
				link.setAttribute(
					'href',
					'data:text/csv;charset=utf-8,' +
						encodeURIComponent((useBOM ? BOM : '') + csv)
				); // URL.createObjectURL(blob));
				link.setAttribute(
					'download',
					fileName ? fileName + '.csv' : this.gtTexts.csvDownload + '.csv'
				);
				document.body.appendChild(link);
				link.click();
			} else {
				csv = 'data:text/csv;charset=utf-8,' + (useBOM ? BOM : '') + csv;
				window.open(encodeURIComponent(csv));
			}
			document.body.removeChild(link);
		}

		// emit export event
		this.gtEvent.emit({
			name: 'gt-exported-csv',
			value: fileName ? fileName : this.gtTexts.csvDownload + '.csv'
		});
	}

	/** Return property */
	private getProperty = function(array: Array<any>, key: string) {
		for (let i = 0; i < array.length; i++) {
			if (array[i].objectKey === key) {
				return array[i];
			}
		}
	};

	private restructureSorting = function() {
		/** Check and store sort order upon initialization.
		 *  This is done by checking sort properties in the settings array of the table, if no sorting is defined
		 *  we'll sort the data by the first visible and enabled column in the table(ascending). Please note that actually
		 *  sorting have to be done server side when lazy loading data for obvious reasons.  */
		// create sorting array
		const sorting = [];
		if (this._gtSettings) {
			// ...sort settings by sort order
			this._gtSettings.sort(this.getSortOrder);

			// ...loop through settings
			for (let i = 0; i < this._gtSettings.length; i++) {
				const setting = this._gtSettings[i];

				// ...if sorted ascending...
				if (setting.sort === 'asc') {
					// ... add to sorting
					sorting.push(setting.objectKey);
				} else if (setting.sort === 'desc') {
					/* ...else if sorted descending... */ // ... add to sorting
					sorting.push('-' + setting.objectKey);
				}
			}
			// ...if no sorting applied...
			if (sorting.length === 0) {
				sorting.push('$$gtRowId');
				/*// ...sort settings by column order
				this._gtSettings.sort(this.getColumnOrder);

				// ...loop through settings
				for (let i = 0; i < this._gtSettings.length; i++) {
					const setting = this._gtSettings[i];

					// ...if column is enabled and visible...
					if (setting.enabled !== false && setting.visible !== false) {
						// ...add first match and exit function
						this.sortOrder = [this._gtSettings[i].objectKey];
						return;
					}
				}*/
			}
		}

		if (this.sortOrder.length === 0) {
			this.sortOrder = sorting;
		}
	};

	/**
	 * Escape export value using double quotes (") if export value contains delimiter
	 * @param value Value to be escaped
	 */
	private escapeCSVDelimiter(value) {
		return typeof value === 'string' &&
			value.indexOf(this._gtOptions.csvDelimiter) !== -1
			? '"' + value + '"'
			: value;
	}

	ngOnInit() {
		// if number of row to display from start is set to null or 0...
		if (!this.gtOptions.numberOfRows) {
			// ...change row length
			this.changeRowLength(this.gtOptions.numberOfRows);
		}
		this.restructureSorting();
	}

	/**
	 *  Extend object function.
	 */
	private extend = function(a: Object, b: Object) {
		for (const key in b) {
			if (b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	};

	ngOnChanges(changes: SimpleChanges) {
		// if gt texts have changed...
		if (changes['gtTexts']) {
			// ...extend gtOptions default values with values passed into component
			this.gtTexts = <GtTexts>this.extend(this.gtDefaultTexts, this.gtTexts);
		}

		// if lazy loading data and paging information is available...
		if (this.gtOptions.lazyLoad && this.gtInfo) {
			// ...calculate total number of pages
			this.gtInfo.pageTotal = Math.ceil(
				this.gtInfo.recordsAfterSearch / this.gtInfo.recordLength
			);

			// ...declare store position
			const storePosition = this.gtInfo.pageCurrent - 1;

			// ...and if store is empty or page length has changed...
			if (
				this.store.length === 0 ||
				this.store[0].length !== this.gtInfo.recordLength
			) {
				// ...create store
				this.store = this.createStore(
					this.gtInfo.recordsAfterSearch,
					this.gtInfo.recordLength
				);
			}

			// ...store retrieved data in store at store position
			this.store[storePosition] = this.gtData;
			this.gtInfo.visibleRecords = [...this.gtData]; // add visible rows

			// replace data with store
			this._gtData = this.store;
			this.loading = false;
			this.updateRecordRange();
			this.gtEvent.emit({
				name: 'gt-info',
				value: this.gtInfo
			});
		} else if (
			this._gtData &&
			this._gtData.length >= 0 &&
			changes['gtData'] &&
			changes['gtData'].previousValue
		) {
			this.loading = false;
		} else if (
			changes['gtData'] &&
			changes['gtData'].firstChange &&
			this._gtData &&
			this._gtData.length > 0
		) {
			this.loading = false;
		}
	}

	trackByFn(index: number, item: GtRow) {
		return item.$$gtRowId;
	}

	trackByColumnFn(index: number, item: GtConfigField<any, any>) {
		return item.objectKey;
	}

	ngOnDestroy() {
		// remove listener
		this._stopListeningForKeydownEvent();
	}
}
