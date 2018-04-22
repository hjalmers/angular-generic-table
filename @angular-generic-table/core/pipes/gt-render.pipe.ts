import { Pipe, PipeTransform } from '@angular/core';
import { GtConfigSetting } from '../interfaces/gt-config-setting';
import { GtConfigField } from '../interfaces/gt-config-field';
import { DomSanitizer } from '@angular/platform-browser';
import { GtRow } from '../interfaces/gt-row';
import { GtRenderField } from '../interfaces/gt-render-field';
import { GtHighlightPipe } from './gt-highlight.pipe';

@Pipe({
	name: 'gtRender'
})
export class GtRenderPipe<R extends GtRow> implements PipeTransform {
	constructor(
		private sanitizer: DomSanitizer,
		private gtHighlightPipe: GtHighlightPipe
	) {}

	// TODO: move to helper functions
	/** Sort by column order */
	private getColumnOrder = function(a: GtConfigSetting, b: GtConfigSetting) {
		if (a.columnOrder < b.columnOrder) return -1;
		if (a.columnOrder > b.columnOrder || typeof a.columnOrder === 'undefined')
			return 1;
		return 0;
	};

	/** Sort by length */
	private getOrderByLength = function(a: any, b: any) {
		return b.length - a.length;
	};

	/** Return property */
	private getProperty = function(array: Array<any>, key: string) {
		for (let i = 0; i < array.length; i++) {
			if (array[i].objectKey === key) {
				return array[i];
			}
		}
	};

	transform(
		row: any,
		settings: Array<GtConfigSetting>,
		fields: Array<GtConfigField<R, any>>,
		updated: boolean,
		loading: boolean,
		highlight: boolean = false,
		searchString?: string
	): Array<Object> {
		//let arr = [{"temp":123,"name":"happy"},{"temp":456,"name":"dfgdfg"},{"temp":789,"name":"asdasd"}];
		//console.log(arr,arr.map(function(item){return item.temp}));
		//console.log(settings.map('objectKey'));

		//console.log('render');
		const columns: Array<string> = [];
		for (let i = 0; i < settings.length; i++) {
			if (settings[i].visible !== false && settings[i].enabled !== false) {
				columns.push(settings[i].objectKey);
			}
		}

		for (let i = 0; i < fields.length; i++) {
			//console.log(!row[fields[i].objectKey]);
			if (
				fields[i].value &&
				typeof fields[i].value === 'function' &&
				!row.hasOwnProperty(fields[i].objectKey)
			) {
				row[fields[i].objectKey] = loading ? '' : fields[i].value(row);
			}
		}
		//console.log(row);
		const keys: Array<any> = [];
		for (const key in row) {
			//console.log(key);
			if (columns.indexOf(key) !== -1) {
				let fieldSetting;
				for (let i = 0; i < fields.length; i++) {
					if (fields[i].objectKey === key) {
						fieldSetting = fields[i];
						//console.log(fieldSetting);
					}
				}

				const columnObject: GtRenderField<R, any> = {
					objectKey: key,
					sortValue: row[key],
					columnComponent: fieldSetting.columnComponent
				};

				if (loading) {
					columnObject.renderValue = row[key] !== null ? row[key] : '';
				} else if (
					highlight &&
					searchString &&
					this.getProperty(settings, key).search !== false
				) {
					columnObject.renderValue =
						fieldSetting.render && typeof fieldSetting.render === 'function'
							? this.gtHighlightPipe.transform(
									fieldSetting.render(row),
									searchString
							  )
							: this.gtHighlightPipe.transform(
									row[key] !== null ? row[key] : '',
									searchString
							  );
				} else {
					columnObject.renderValue =
						fieldSetting.render && typeof fieldSetting.render === 'function'
							? this.sanitizer.bypassSecurityTrustHtml(fieldSetting.render(row))
							: row[key] !== null
								? row[key]
								: '';
				}

				if (fieldSetting.click && typeof fieldSetting.click === 'function') {
					columnObject.click = fieldSetting.click;
				}
				if (fieldSetting.expand) {
					columnObject.expand = fieldSetting.expand;
				}

				keys.push(columnObject);
			}
		}

		keys.sort(function(a: any, b: any) {
			return columns.indexOf(a.objectKey) < columns.indexOf(b.objectKey)
				? -1
				: 1;
		});
		return keys;
	}
}
