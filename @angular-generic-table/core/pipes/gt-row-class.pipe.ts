import { Pipe, PipeTransform } from '@angular/core';
import {GtConfigField} from '../interfaces/gt-config-field';

@Pipe({
    name: 'gtRowClass'
})
export class GtRowClassPipe implements PipeTransform {

    transform(array: Array<any>, gtFields: Array<GtConfigField<any, any>> ): any {
        if (array) {
            // find columns with rowClass property defined
            const COLUMNS_WITH_CLASS = gtFields
                .map(column => column)
                .filter(column => column.rowClass);
            COLUMNS_WITH_CLASS.map(column => {
                // for each column with rowClass property defined...
                array.map(row => {
                    // loop through rows and set row class
                    if (typeof column.rowClass === 'function') {
                        // if row class is a function, try using the function...
                        try {
                            if (row.$$gtRowClass) {
                                row.$$gtRowClass = row.$$gtRowClass.concat(' ' + column.rowClass(row, column));
                            } else {
                                row.$$gtRowClass = column.rowClass(row, column);
                            }
                        } catch (error) {
                            console.log('Error when trying to get row class name using formula.', error);
                        }
                    } else {
                        // if not a function, return plain string value
                        if (row.$$gtRowClass) {
                            row.$$gtRowClass = row.$$gtRowClass.concat(' ' + column.rowClass);
                        } else {
                            row.$$gtRowClass = column.rowClass;
                        }
                    }
                });
            });
        }
        return array;
    }
}
