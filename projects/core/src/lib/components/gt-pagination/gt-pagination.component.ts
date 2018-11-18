import { Component, Input } from '@angular/core';

@Component({
	selector: 'gt-pagination',
	template: `
		<nav class="gt-pagination" aria-label="Table navigation" *ngIf="genericTable && genericTable.gtInfo && ready && genericTable.gtData?.length > 0" [ngClass]="{'no-data':genericTable.gtInfo.pageTotal === 0}">
			<ul class="pagination" [ngClass]="gtClasses">
				<li class="page-item" [ngClass]="{'disabled' : genericTable.gtInfo.pageCurrent === 1 || genericTable.loading }"><a class="page-link" href="javascript:void(0);" (click)="genericTable.gtInfo.pageCurrent > 1 && genericTable.previousPage()" [attr.aria-label]="genericTable.gtTexts.paginatePrevious"><span aria-hidden="true">&laquo;</span><span class="sr-only">{{genericTable.gtTexts.paginatePrevious}}</span></a></li>
				<li class="page-item" [ngClass]="{'disabled' : genericTable.loading && genericTable.gtInfo.pageCurrent !== page, 'active' : genericTable.gtInfo.pageCurrent === page }" *ngFor="let page of genericTable.gtInfo.pageTotal | gtPaginationPipe:genericTable.gtInfo.pageCurrent"><a class="page-link" [tabindex]="page === true ? -1:0" href="javascript:void(0);" (click)="page === true ? '':genericTable.goToPage(page)">{{page === true ? '&hellip;':page}}</a></li>
				<li class="page-item" [ngClass]="{'disabled' : genericTable.gtInfo.pageCurrent === genericTable.gtInfo.pageTotal || genericTable.loading }"><a class="page-link gt-link" href="javascript:void(0);" (click)="genericTable.gtInfo.pageCurrent !== genericTable.gtInfo.pageTotal && genericTable.nextPage()" [attr.aria-label]="genericTable.gtTexts.paginateNext"><span aria-hidden="true">&raquo;</span><span class="sr-only">{{genericTable.gtTexts.paginateNext}}</span></a></li>
			</ul>
		</nav>
  `,
	styles: [`.gt-link {cursor: pointer;}`]
})
export class GtPaginationComponent {
	get genericTable(): GenericTableComponent<any, any> {
		return this._genericTable;
	}

	@Input()
	set genericTable(value: GenericTableComponent<any, any>) {
		if (value) {
			value.gtEvent.subscribe((res: any) => {
				if (res.name === 'gt-info' && res.value.pageTotal > 0) {
					this.ready = true;
				}
			});
		}
		this._genericTable = value;
	}

	private _genericTable: GenericTableComponent<any, any>;
	@Input() gtClasses: string;
	public ready = false;
}
import { Pipe, PipeTransform } from '@angular/core';
import { GenericTableComponent } from '../generic-table/generic-table.component';

@Pipe({
	name: 'gtPaginationPipe'
})
export class PaginationPipe implements PipeTransform {
	transform(totalPages: number, currentPage: number): Array<any> {
		if (totalPages === 0) {
			return [1];
		}
		const pagination: Array<any> = []; // create new empty array for pagination
		const siblings = 2; // sibling elements ie. number of elements on each side of current page
		const paginationLength =
			totalPages < siblings * 2 + 1 ? totalPages : siblings * 2 + 1; // number of elements in pagination array
		const start = currentPage <= siblings ? 1 : currentPage - siblings; // starting position for array
		const modifier =
			totalPages - (currentPage + siblings) <= 0
				? totalPages - (currentPage + siblings)
				: 0; // modifier for pagination values
		const modifiedPosition = start + modifier <= 0 ? 1 : start + modifier;

		// push pages to pagination array
		for (let i = 0; i < paginationLength; i++) {
			pagination.push(modifiedPosition + i);
		}

		// if first page is not included in pagination...
		if (pagination.indexOf(1) === -1) {
			// ...check if second page is in pagination...
			if (pagination.indexOf(2) === -1) {
				// ...if not check if total number of pages equals seven and number of siblings are two...
				if (totalPages === 7 && siblings === 2) {
					// ...add second page and don't convert page number to ellipsis
					pagination.unshift(2);
				} else {
					// ...if not, use this placeholder for ellipsis instead of actual page number
					pagination[0] = true;
				}
			}
			// ...add first page as first array item
			pagination.unshift(1);
		} else if (totalPages > paginationLength) {
			// if first page is included add extra page to keep number of items consistent
			pagination.splice(paginationLength, 0, paginationLength + 1);
		}
		// check if last page is included in pagination...
		if (pagination.indexOf(totalPages) === -1) {
			// ...if not, page next to last should either show ellipsis or actual page number for the page
			pagination[pagination.length - 1] =
				pagination[pagination.length - 1] === totalPages - 1
					? totalPages - 1
					: true;

			// ...add last page to pagination
			pagination.push(totalPages);
		}

		return pagination;
	}
}
