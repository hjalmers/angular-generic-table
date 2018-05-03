import { Pipe, PipeTransform } from '@angular/core';
import { GtConfigField } from '../interfaces/gt-config-field';
import { GtConfigSetting } from '../interfaces/gt-config-setting';
import { GtInformation } from '../interfaces/gt-information';
import { GtRow } from '../interfaces/gt-row';
import { GtColumnSearch } from '../interfaces/gt-column-search';
import { SearchFunctions } from './search-functions';

@Pipe({
	name: 'gtColumnSearch'
})
export class GtColumnSearchPipe<R extends GtRow> implements PipeTransform {
	/**
	 * ### To Do List:
	 * - [x] check that search fields contain values; if not, skip them.
	 * - [x] skip the columns with search disabled.
	 * - [x] assign search or value functions if defined for that field.
	 * - [x] map undefined search values to empty strings.
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

		const searchFunctions: SearchFunctions<R> = {};

		columnSearchTerms.forEach(term => {
			const field = fields.find(f => f.objectKey === term.id);

			if (typeof field.search === 'function') {
				searchFunctions[term.id] = field.search;
			} else if (typeof field.value === 'function') {
				searchFunctions[term.id] = field.value;
			}
		});

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
			const include = columnSearchTerms.every(term => {
				// Map the search/value function to that field if defined, otherwise
				// return the raw field value.
				row[term.id] = searchFunctions[term.id]
					? searchFunctions[term.id](row)
					: row[term.id];

				return (<string>row[term.id])
					.toString()
					.toLowerCase()
					.includes(term.value.toLowerCase());
			});

			if (include) {
				filteredRows.push(row);
			}
		});

		return filteredRows;
	}
}
