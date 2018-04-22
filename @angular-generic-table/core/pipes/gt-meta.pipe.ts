import { Pipe, PipeTransform } from '@angular/core';
import { GtRow } from '../interfaces/gt-row';
import { GtRowMeta } from '../interfaces/gt-row-meta';

@Pipe({
	name: 'gtMeta'
})
export class GtMetaPipe implements PipeTransform {
	transform(
		allRows: Array<GtRow>,
		page?: number,
		recordLength?: number
	): Array<GtRow> {
		for (let i = 0; i < allRows.length; i++) {
			if (!allRows[i].$$gtRowId) {
				const uniqueRowId =
					'_' +
					Math.random()
						.toString(36)
						.substr(2, 16);
				allRows[i].$$gtRowId = page
					? page * recordLength + i + uniqueRowId
					: i + uniqueRowId;
			}
		}
		return allRows;
	}
}
