import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'gtColumnSearch'
})
export class GtColumnSearchPipe implements PipeTransform {
	transform(value: any): any {
		return value;
	}
}
