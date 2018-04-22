import { Pipe, PipeTransform } from '@angular/core';
import { GtConfigField } from '../interfaces/gt-config-field';
import { GtRow } from '../interfaces/gt-row';
import { GtConfigSetting } from '../interfaces/gt-config-setting';
import { GtInformation } from '../interfaces/gt-information';

@Pipe({
	name: 'gtSearch'
})
export class GtSearchPipe<R extends GtRow> implements PipeTransform {
	/** Return property */
	private getProperty = function(array: Array<any>, key: string) {
		for (let i = 0; i < array.length; i++) {
			if (array[i].objectKey === key) {
				return array[i];
			}
		}
	};

	transform(
		allRows: any,
		searchTerms: string,
		gtInfo: GtInformation,
		settings: Array<GtConfigSetting>,
		fields: Array<GtConfigField<R, any>>,
		refreshData: number
	): any {
		//  if no search terms are defined...
		if (!searchTerms || searchTerms.replace(/"/g, '').length === 0) {
			// ...return all rows
			const length = allRows === null ? 0 : allRows.length;
			gtInfo.recordsAfterSearch = length;
			return allRows;
		}

		const searchFunction: any = {};
		const fieldsTemp: Array<any> = [];

		for (let k = 0; k < fields.length; k++) {
			const field = fields[k];

			// check if field should be included in global search
			const include =
				this.getProperty(settings, field.objectKey).search === false
					? false
					: true;

			// if include...
			if (include) {
				// ...and if search function is defined...
				if (typeof field.search === 'function') {
					// ...add it as search function for field
					searchFunction[field.objectKey] = field.search;
				}
				// ...if no search function is defined but value function is defined...
				else if (typeof field.value === 'function') {
					// ...add it as search function for field
					searchFunction[field.objectKey] = field.value;
				}

				// ...push it to our fields array
				fieldsTemp.push(field);
			}
		}

		const filteredRows: Array<any> = [];
		searchTerms = typeof searchTerms === 'undefined' ? '' : searchTerms;
		const searchTermsArray = searchTerms.toLowerCase().match(/(".*"|[^\s]+)/g);

		for (let i = 0; i < allRows.length; i++) {
			const row = allRows[i];
			let string = '';

			for (let j = 0; j < fieldsTemp.length; j++) {
				const separator = j === 0 ? '' : ' & ';
				string += searchFunction[fieldsTemp[j].objectKey]
					? separator + searchFunction[fieldsTemp[j].objectKey](row, j)
					: separator + row[fieldsTemp[j].objectKey];
			}
			string = string.toLowerCase();
			let match: Boolean = true;

			for (let k = 0; k < searchTermsArray.length; k++) {
				const term = searchTermsArray[k].replace(/"/g, '');
				match = string.indexOf(term) !== -1;

				if (!match) {
					break;
				}
			}
			if (match) {
				filteredRows.push(row);
			}
		}
		gtInfo.recordsAfterSearch = filteredRows.length;
		//gtInfo.refresh(filteredRows.length,gt);
		return filteredRows;
	}
}
