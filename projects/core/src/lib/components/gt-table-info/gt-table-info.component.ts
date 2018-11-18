import {
	AfterViewChecked,
	ChangeDetectorRef,
	Component,
	Input
} from '@angular/core';

@Component({
	selector: 'gt-table-info',
	template: `
		<span *ngIf="genericTable.gtInfo">{{(customText? customText:genericTable.gtTexts) | gtTableInfo:
			genericTable.gtInfo:
			genericTable.gtInfo.recordsAfterSearch:
			genericTable.gtInfo.recordFrom:
			genericTable.gtInfo.recordTo:
			genericTable.gtInfo.recordsAll:
			genericTable.gtTexts.loading:
			genericTable.gtTexts.tableInfoAfterSearch}}</span>
  `,
	styles: []
})
export class GtTableInfoComponent implements AfterViewChecked {
	@Input() genericTable: GenericTableComponent<any, any>;
	@Input() customText: string;

	constructor(private _changeDetectionRef: ChangeDetectorRef) {}

	ngAfterViewChecked() {
		this._changeDetectionRef.detectChanges();
	}
}
import { Pipe, PipeTransform } from '@angular/core';
import { GenericTableComponent } from '../generic-table/generic-table.component';
import { GtTexts } from '../../interfaces/gt-texts';
import { GtInformation } from '../../interfaces/gt-information';

@Pipe({
	name: 'gtTableInfo'
})
export class TableInfoPipe implements PipeTransform {
	transform(
		texts: GtTexts | string,
		keys: GtInformation,
		recordsAfterSearch: number,
		recordFrom: number,
		recordTo: number,
		recordsAll: number,
		loading: string,
		tableInfoAfterSearch: string
	): string {
		let text = typeof texts === 'object' ? texts.tableInfo : '';
		if (keys.recordsAfterSearch !== keys.recordsAll) {
			text = typeof texts === 'object' ? texts.tableInfoAfterSearch : '';
		}
		for (const key in keys) {
			if (keys.hasOwnProperty(key)) {
				const searchString = new RegExp('#' + key, 'g');
				text = text.replace(searchString, keys[key]);
			}
		}
		return text;
	}
}
