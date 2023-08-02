import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { combineLatest, ReplaySubject } from 'rxjs';
import { map, pluck, shareReplay, switchMap } from 'rxjs/operators';
import { CoreComponent } from '../core.component';
import {
  GtPaginationAriaLabels,
  GtPaginationClasses,
  GtPaginationInfo,
} from '../models/gt-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-generic-table-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class PaginationComponent {
  get pagingInfo(): GtPaginationInfo {
    return (
      this._pagingInfo || {
        pageNext: null,
        pageCurrent: null,
        pagePrevious: null,
        pageSize: null,
        numberOfRecords: null,
        pageTotal: null,
      }
    );
  }
  /** pagingInfo
   * @description when provided, pagination component will use this information to render pagination instead of data from table. Use this option when pagination is handled by backend (server side).
   * @type info - metadata for pagination component
   */
  @Input() set pagingInfo(info: GtPaginationInfo) {
    this._pagingInfo = info;
  }
  get paginationLength(): number {
    return this._paginationLength;
  }

  /** paginationLength
   * @description number of buttons to show in pagination
   * @type length - number of buttons to show. Defaults to: `5`
   */
  @Input() set paginationLength(length: number) {
    this._paginationLength = +length;
  }
  get classes(): GtPaginationClasses {
    return this._classes;
  }

  /** classes
   * @description classes that should be used within pagination component for different elements
   * @type classes - classes to be used. Defaults to: `{
   *     ul: 'pagination',
   *     li: 'page-item',
   *     button: 'page-link',
   *   }`
   */
  @Input() set classes(classes: GtPaginationClasses) {
    this._classes = classes;
  }
  get ariaLabels(): GtPaginationAriaLabels {
    return this._ariaLabels;
  }

  /** ariaLabels
   * @description aria labels that describe pagination component
   * @type labels - aria labels for pagination. Defaults to: `{
   *     nav: 'Table pagination',
   *     button: 'Go to page ',
   *   }`
   */
  @Input() set ariaLabels(labels: GtPaginationAriaLabels) {
    this._ariaLabels = labels;
  }
  get table(): CoreComponent {
    return <CoreComponent>this._table;
  }

  /** table
   * @description table component to which pagination is attached
   * @type tableRef - table component
   */
  @Input() set table(tableRef: CoreComponent) {
    this._table = tableRef;
    this._table$.next(tableRef);
  }

  private _pagingInfo: GtPaginationInfo | undefined;
  private _table$: ReplaySubject<CoreComponent> = new ReplaySubject(1);
  private _table: CoreComponent | undefined;
  private _ariaLabels: GtPaginationAriaLabels = {
    nav: 'Table pagination',
    button: 'Go to page ',
  };
  private _classes: GtPaginationClasses = {
    ul: 'pagination',
    li: 'page-item',
    button: 'page-link',
  };
  private _paginationLength: number = 5;

  /** paginationListItems$ - observable for page numbers to show based on number of pages and current position  */
  paginationListItems$ = this._table$.pipe(
    switchMap((core) =>
      combineLatest([
        core?.table$.pipe(pluck('info')),
        core?.currentPaginationIndex$,
      ])
    ),
    map(([info, currentPage]) =>
      this._generateList(info.pageTotal, currentPage)
    ),
    shareReplay(1)
  );

  /** generate list - generate an array with page numbers to show based on number of pages and current position
   * @param numberOfPages number of pages to show
   * @param currentPosition current position (page index) being shown in table
   * @returns Array<number> array of page numbers to show
   */
  private _generateList(
    numberOfPages: number,
    currentPosition: number
  ): Array<number> {
    const middle = Math.floor(this.paginationLength / 2);
    const length =
      numberOfPages < this.paginationLength
        ? numberOfPages
        : this.paginationLength;

    return Array.from({ length }, (_, i) => {
      if (i === 0) {
        return 1;
      } else if (numberOfPages < this.paginationLength) {
        return i + 1;
      } else if (i + 1 === length) {
        return numberOfPages;
      } else if (
        currentPosition > middle &&
        currentPosition < numberOfPages - middle
      ) {
        return i + currentPosition - (middle - 1);
      } else if (
        currentPosition > middle &&
        currentPosition < numberOfPages - (middle - 1)
      ) {
        return i + currentPosition - middle;
      } else if (
        currentPosition > middle &&
        currentPosition === numberOfPages - (middle - 1)
      ) {
        return i + currentPosition - (middle + 1);
      } else if (
        currentPosition > middle &&
        currentPosition === numberOfPages - 1
      ) {
        return i + currentPosition - (middle + 2);
      } else {
        return i + 1;
      }
    });
  }

  /** go to page
   * @param index - page index to go to
   */
  goToPage(index: number): void {
    if (this.table) {
      this.table.paginationIndex = index - 1;
    }
  }
}
