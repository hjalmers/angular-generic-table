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
	 * - [x] filter each row using each column's search term.
	 * - [x] return the filtered rows.
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
		const columnSearchTerms = gtColumnSearchTerms
			// TODO: why is this needed? Note that `gt-search.pipe.ts` also does this.
			.filter(column => column.value.replace(/"/g, '').length !== 0)
			.filter(
				column =>
					settings.find(x => x.objectKey === column.id).search === false
						? false
						: true
			);

		// if there are no search inputs, nothing needs to be done.
		if (columnSearchTerms.length === 0) {
			const length = allRows === null ? 0 : allRows.length;
			gtInfo.recordsAfterSearch = length;
			return allRows;
		}

		// TODO: Give this a type instead of `any`.
		const filteredRows: Array<any> = [];

		allRows.forEach(row => {
			// Include the row only if all fields match the search strings from each
			// input. (Empty search strings were excluded from the check earlier).
			const include = columnSearchTerms.every(term =>
				(<string>row[term.id])
					.toString()
					.toLowerCase()
					.includes(term.value.toLowerCase())
			);

			if (include) {
				filteredRows.push(row);
			}
		});

		return filteredRows;
	}
}
