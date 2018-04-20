import { Pipe, PipeTransform } from '@angular/core';
import {
	GtConfigField,
	GtConfigSetting,
	GtInformation,
	GtRow
} from '@angular-generic-table/core';
import { GtColumnSearch } from '../interfaces/gt-column-search';

@Pipe({
	name: 'gtColumnSearch'
})
export class GtColumnSearchPipe<R extends GtRow> implements PipeTransform {
	/**
	 * ### To Do List:
	 * - [x] check that search fields contain values; if not, skip them.
	 * - [x] skip the columns with search disabled.
	 * - [ ] assign search or value functions if defined for that field.
	 * - [ ] map undefined search values to empty strings.
	 * - [ ] filter each row using each column's search term.
	 * - [ ] return the filtered rows.
	 */
	// TODO: do we need all of gtInfo, or just columnSearchTerms?
	transform(
		allRows: any,
		gtColumnSearchTerms: GtColumnSearch[],
		gtInfo: GtInformation,
		settings: Array<GtConfigSetting>,
		fields: Array<GtConfigField<R, any>>
	): any {
		// filter out any column searches that contain only empty strings.
		// TODO: why is this needed? `gt-search.pipe.ts` also does this.
		const columnSearchTerms = gtColumnSearchTerms
			.filter(column => column.value.replace(/"/g, '').length !== 0)
			.filter(
				column =>
					settings.find(x => x.objectKey === column.id).search === false
						? false
						: true
			);

		// if there are no search inputs, nothing needs to be done.
		// TODO: Is this necessary? The *ngIf in `generic-table.component.ts` should
		// prevent this from ever being called.
		if (columnSearchTerms.length === 0) {
			const length = allRows === null ? 0 : allRows.length;
			gtInfo.recordsAfterSearch = length;
			return allRows;
		}

		const filteredRows: Array<any> = [];

		allRows.forEach(row => {
			filteredRows.push(row);
		});

		console.warn('gtColumnSearch is currently not filtering anything.');

		return filteredRows;
	}
}
