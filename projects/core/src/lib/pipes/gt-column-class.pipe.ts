import { Pipe, PipeTransform } from '@angular/core';
import { GtConfigField } from '../interfaces/gt-config-field';
import { GtRow } from '../interfaces/gt-row';

@Pipe({
	name: 'gtColumnClass'
})
export class GtColumnClassPipe implements PipeTransform {
	transform(
		gtFields: Array<GtConfigField<any, any>>,
		column: GtConfigField<GtRow, any>,
		row?: GtRow
	): any {
		// find columns with columnClass property defined
		const COLUMN_WITH_CLASS = gtFields
			.map(field => field)
			.filter(
				field => field.columnClass && field.objectKey === column.objectKey
			)[0];
		if (!COLUMN_WITH_CLASS) {
			return;
		} else if (typeof COLUMN_WITH_CLASS.columnClass === 'function') {
			// if column class is a function, try using the function...
			try {
				return COLUMN_WITH_CLASS.columnClass(row, column);
			} catch (error) {
				console.log(
					'Error when trying to get column class name using formula.',
					error
				);
			}
		} else {
			// if not a function, return plain string value
			return COLUMN_WITH_CLASS.columnClass;
		}
	}
}
