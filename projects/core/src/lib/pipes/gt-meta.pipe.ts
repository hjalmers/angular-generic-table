import { Pipe, PipeTransform } from '@angular/core';
import { GtRow } from '../interfaces/gt-row';

@Pipe({
	name: 'gtMeta'
})
export class GtMetaPipe implements PipeTransform {
	transform(
		allRows: Array<GtRow>,
		rowIndex?: string,
		page?: number,
		recordLength?: number
	): Array<GtRow> {
		for (let i = 0; i < allRows.length; i++) {
			if (!allRows[i].$$gtRowId) {
				allRows[i].$$gtRowId = rowIndex
					? allRows[i][rowIndex]
					: page
						? page * recordLength +
						  i +
						  '_' +
						  Math.random()
								.toString(36)
								.substr(2, 16)
						: i +
						  '_' +
						  Math.random()
								.toString(36)
								.substr(2, 16);
			}
			if (!allRows[i].$$gtInitialRowIndex) {
				allRows[i].$$gtInitialRowIndex = i;
			}
		}
		return allRows;
	}
}
