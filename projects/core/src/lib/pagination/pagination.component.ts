import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { combineLatest, ReplaySubject } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/operators';
import { CoreComponent } from '../core.component';

@Component({
  selector: 'angular-generic-table-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  get table(): CoreComponent | undefined {
    return this._table;
  }
  @Input() set table(value: any) {
    this._table = value;
    this.table$.next(value);
  }

  table$: ReplaySubject<CoreComponent> = new ReplaySubject(1);
  private _table: CoreComponent | undefined;
  pagination$ = this.table$.pipe(
    switchMap((core) =>
      combineLatest([core?.table$.pipe(pluck('info')), core?.currentPage$])
    ),
    map(([info, currentPage]) => this.generateList(info.pageTotal, currentPage))
  );

  generateList(pages: number, currentPosition: number): Array<number> {
    const paginationLength: 5 | 7 = 5;
    const middle = Math.floor(paginationLength / 2);
    const length = pages < paginationLength ? pages : paginationLength;

    return Array.from({ length }, (_, i) => {
      if (i === 0) {
        return 1;
      } else if (pages < paginationLength) {
        return i + 1;
      } else if (i + 1 === length) {
        return pages;
      } else if (currentPosition > middle && currentPosition < pages - middle) {
        return i + currentPosition - (middle - 1);
      } else if (
        currentPosition > middle &&
        currentPosition < pages - (middle - 1)
      ) {
        return i + currentPosition - middle;
      } else if (
        currentPosition > middle &&
        currentPosition === pages - (middle - 1)
      ) {
        return i + currentPosition - (middle + 1);
      } else if (currentPosition > middle && currentPosition === pages - 1) {
        return i + currentPosition - (middle + 2);
      } else {
        return i + 1;
      }
    });
  }

  goto(page: number): void {
    if (this.table) {
      this.table.page = page - 1;
    }
  }
}
