import { Pipe, PipeTransform, EventEmitter, Output } from '@angular/core';
import { GtInformation } from '../interfaces/gt-information';

@Pipe({
	name: 'gtFilter'
})
export class GtFilterPipe implements PipeTransform {
	//@Output() filterInfo = new EventEmitter();

	transform(
		allRows: any[],
		filterBy: Object,
		gtInfo: GtInformation,
		refreshFilter: boolean,
		refreshData: number
	): any[] {
		//console.log(allRows,filterBy);
		gtInfo.recordsAll = allRows.length;
		if (!Array.isArray(allRows) || !filterBy) {
			//gtInfo.filtered = false;

			const length = allRows === null ? 0 : allRows.length;
			gtInfo.recordsAfterFilter = length;
			return allRows;
		}

		const output = [];
		for (let i = 0; i < allRows.length; i++) {
			const rowObject = allRows[i];
			let match = true;

			for (const property in filterBy) {
				if (filterBy.hasOwnProperty(property)) {
					//console.log(property);
					//console.log(filter[property].indexOf(obj[property]));
					if (filterBy[property].indexOf(rowObject[property]) === -1) {
						match = false;
					}
				}
			}
			if (match) {
				output.push(rowObject);
			}
		}
		gtInfo.recordsAfterFilter = output.length; //.emit(output.length);
		return output;
	}
}
