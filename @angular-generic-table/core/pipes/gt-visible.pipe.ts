import { Pipe, PipeTransform } from '@angular/core';
import { GtConfigField } from '../interfaces/gt-config-field';
import { GtConfigSetting } from '../interfaces/gt-config-setting';
import { GtRow } from '../interfaces/gt-row';

@Pipe({
	name: 'gtVisible'
})
export class GtVisiblePipe<R extends GtRow> implements PipeTransform {
	// TODO: move to helper functions
	/** Sort by column order */
	private getColumnOrder = function(a: any, b: any) {
		if (a.columnOrder < b.columnOrder) {
			return -1;
		}
		if (a.columnOrder > b.columnOrder || typeof a.columnOrder === 'undefined') {
			return 1;
		}
		return 0;
	};

	transform(
		array: Array<any>,
		settings: Array<GtConfigSetting>,
		refreshPipe?: boolean
	): Array<GtConfigField<R, any>> | Array<GtConfigSetting> {
		const visibleColumns = settings
			.sort(this.getColumnOrder)
			.map((setting: GtConfigSetting) => {
				if (setting.visible !== false && setting.enabled !== false) {
					return setting.objectKey;
				}
			});

		return array
			.filter((column: any) => {
				return visibleColumns.indexOf(column.objectKey) !== -1;
			})
			.sort(function(a, b) {
				return visibleColumns.indexOf(a.objectKey) <
					visibleColumns.indexOf(b.objectKey)
					? -1
					: 1;
			});
	}
}
