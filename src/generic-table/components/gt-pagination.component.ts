import { Component, OnInit, Input } from '@angular/core';
import {GenericTableComponent} from './generic-table.component';

@Component({
  selector: 'gt-pagination',
  template: `<nav aria-label="Table navigation" *ngIf="genericTable.gtInfo">
  <ul class="pagination" ngClass="{{gtClasses}}">
    <li class="page-item" ngClass="{{genericTable.gtInfo.pageCurrent > 1 ? '':'disabled'}}"><a class="page-link" href="javascript:void(0);" (click)="genericTable.gtInfo.pageCurrent > 1 && genericTable.previousPage()" tabindex="-1" [attr.aria-label]="genericTable.gtTexts.paginatePrevious"><span aria-hidden="true">&laquo;</span><span class="sr-only">{{genericTable.gtTexts.paginatePrevious}}</span></a></li>
    <template [ngIf]="genericTable.gtInfo.pageCurrent > 4">
      <li class="page-item"><a class="page-link" href="javascript:void(0);" (click)="genericTable.goToPage(1)">1</a></li>
      <li class="page-item" *ngIf="genericTable.gtInfo.pageTotal > 5"><span class="page-link">&hellip;</span></li>
    </template>
    <li class="page-item" ngClass="{{genericTable.gtInfo.pageCurrent === page ? 'active':''}}" *ngFor="let page of genericTable.gtInfo.pageTotal | gtPaginationPipe:genericTable.gtInfo.pageCurrent"><a class="page-link" href="javascript:void(0);" (click)="genericTable.goToPage(page)">{{page}}</a></li>
    <template [ngIf]="genericTable.gtInfo.pageCurrent < genericTable.gtInfo.pageTotal && genericTable.gtInfo.pageTotal > 5" >
      <li class="page-item" *ngIf="genericTable.gtInfo.pageCurrent + 3 < genericTable.gtInfo.pageTotal && genericTable.gtInfo.pageTotal > 6"><span class="page-link">&hellip;</span></li>
      <li class="page-item" ngClass="{{genericTable.gtInfo.pageCurrent === genericTable.gtInfo.pageTotal ? 'active':''}}" ><a href="javascript:void(0);" class="page-link" (click)="genericTable.goToPage(genericTable.gtInfo.pageTotal)">{{genericTable.gtInfo.pageTotal}}</a></li>
    </template>
    <li class="page-item" ngClass="{{genericTable.gtInfo.pageCurrent !== genericTable.gtInfo.pageTotal ? '':'disabled'}}"><a class="page-link gt-link" href="javascript:void(0);" (click)="genericTable.gtInfo.pageCurrent !== genericTable.gtInfo.pageTotal && genericTable.nextPage()" [attr.aria-label]="genericTable.gtTexts.paginateNext"><span aria-hidden="true">&raquo;</span><span class="sr-only">{{genericTable.gtTexts.paginateNext}}</span></a></li>
  </ul>
  </nav>
    `,
  styles:['.gt-link {cursor: pointer;}']
})
export class GtPaginationComponent implements OnInit {

  @Input() genericTable:GenericTableComponent<any,any>;
  @Input() gtClasses: string;

  constructor() { }

  ngOnInit() {

  }
}
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'gtPaginationPipe'
})
export class PaginationPipe implements PipeTransform {

  transform(totalPages: number, currentPage:number): Array<number> {
    let pagination:Array<number>;
    // if less than two pages
    if(totalPages < 2){
      pagination = [1];
    }
    // if less than three pages
    else if(totalPages < 3){
      pagination = [1,2];
    }
    // if less than four pages
    else if(totalPages < 4){
      pagination = [1,2,3];
    }
    // if less than five pages
    else if(totalPages < 5){
      pagination = [1,2,3,4];
    }
    // if current page is one of the four first pages
    else if(currentPage <= 4){
      pagination = [1,2,3,4,5];
    }
    // if next to last page
    else if(totalPages-1 === currentPage){
      pagination = [currentPage-2,currentPage-1,currentPage];
    }
    // if next to next last page
    else if(totalPages-3 === currentPage && totalPages > 10){
      pagination = [currentPage-1,currentPage,currentPage +1,currentPage + 2];
    }
    // if there is more than one page left
    else if(totalPages > currentPage){
      pagination = [currentPage-1,currentPage,currentPage+1];
    }
    // if last page and page total is less than or equal to 5
    else if(totalPages === currentPage && totalPages <= 5){
      pagination = [currentPage-3, currentPage-2,currentPage-1,currentPage];
    }
    // if last page
    else if(totalPages === currentPage){
      pagination = [currentPage-2,currentPage-1,currentPage];
    }
    // if current page is not one of the four first pages
    else if(totalPages-4 > currentPage){
      pagination = [currentPage-1,currentPage,currentPage+1, currentPage+2];
    }
    return pagination;
  }

}
