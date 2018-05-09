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
	 * Search all rows by one or more columns and return the matching rows.
	 *
	 * @param allRows All rows in the table.
	 * @param gtColumnSearchTerms An array of each column with its id and search string.
	 * @param gtInfo Table information.
	 * @param settings Table settings.
	 * @param fields Field settings.
	 * @returns Filtered rows.
	 */
	transform(
		allRows: R[],
		gtColumnSearchTerms: GtColumnSearch[],
		gtInfo: GtInformation,
		settings: GtConfigSetting[],
		fields: GtConfigField<R, any>[]
	): R[] {
		const columnSearchTerms = this.findActiveSearchColumns(
			gtColumnSearchTerms,
			settings
		);

		// if there are no search inputs, nothing needs to be done.
		if (columnSearchTerms.length === 0) {
			const length = allRows === null ? 0 : allRows.length;
			gtInfo.recordsAfterSearch = length;
			return allRows;
		}

		const searchFunctions = this.getSearchValueMappingFunctions(
			columnSearchTerms,
			fields
		);

		const filteredRows = this.filterRows(
			allRows,
			columnSearchTerms,
			searchFunctions
		);

		return filteredRows;
	}

	/**
	 * Filter out any column searches that contain only empty strings.
	 *
	 * @param searchTerms Search term for each column.
	 * @param settings Table settings.
	 * @returns Actively searched column search terms.
	 */
	private findActiveSearchColumns(
		searchTerms: GtColumnSearch[],
		settings: GtConfigSetting[]
	): GtColumnSearch[] {
		return (
			searchTerms
				// Check that the string is not empty, even if quotes are removed.
				.filter(column => column.value.replace(/"/g, '').length !== 0)
				.filter(
					column =>
						settings.find(x => x.objectKey === column.id).search === false
							? false
							: true
				)
		);
	}

	/**
	 * If a column is configured to map a value through a function when searching
	 * or processing, collect those functions.
	 *
	 * @param columnSearchTerms Array of columns with search terms from each.
	 * @param fields Table field settings
	 * @returns Search functions for each column, if configured.
	 */
	private getSearchValueMappingFunctions(
		columnSearchTerms: GtColumnSearch[],
		fields: GtConfigField<R, any>[]
	): SearchFunctions<R> {
		const searchFunctions: SearchFunctions<R> = {};

		columnSearchTerms.forEach(term => {
			const field = fields.find(f => f.objectKey === term.id);

			if (typeof field.search === 'function') {
				searchFunctions[term.id] = field.search;
			} else if (typeof field.value === 'function') {
				searchFunctions[term.id] = field.value;
			}
		});

		return searchFunctions;
	}

	/**
	 * Filter the rows using the search terms.
	 *
	 * If a field is configured to map through a function for searching or
	 * processing, use that before finding a match.
	 *
	 * @param allRows All rows in the table.
	 * @param columnSearchTerms Search terms for each column.
	 * @param searchFunctions Search or value function for each column, if configured.
	 * @returns Filtered rows.
	 */
	private filterRows(
		allRows: R[],
		columnSearchTerms: GtColumnSearch[],
		searchFunctions: SearchFunctions<R>
	): R[] {
		const filteredRows: R[] = [];

		allRows.forEach(row => {
			// Include the row only if all fields match the search strings from each
			// input. (Empty search strings were excluded from the check earlier).
			const include = columnSearchTerms.every(term => {
				// Map the search/value function to that field if defined, otherwise
				// return the raw field value.
				row[term.id] = searchFunctions[term.id]
					? searchFunctions[term.id](row)
					: row[term.id];

				// Filter out null values
				if (row[term.id] === null) {
					return false;
				}

				// TODO: split search string on spaces, grouping terms inside double quotes.
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
