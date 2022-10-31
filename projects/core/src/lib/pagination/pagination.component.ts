import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { combineLatest, ReplaySubject } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/operators';
import { CoreComponent } from '../core.component';
import {
  GtPaginationAriaLabels,
  GtPaginationClasses,
} from '../models/gt-pagination';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'angular-generic-table-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe, NgIf, NgForOf],
})
export class PaginationComponent {
  get paginationLength(): number {
    return this._paginationLength;
  }

  @Input() set paginationLength(value: number) {
    this._paginationLength = +value;
  }
  get classes(): GtPaginationClasses {
    return this._classes;
  }

  @Input() set classes(value: GtPaginationClasses) {
    this._classes = value;
  }
  get ariaLabels(): GtPaginationAriaLabels {
    return this._ariaLabels;
  }

  @Input() set ariaLabels(value: GtPaginationAriaLabels) {
    this._ariaLabels = value;
  }
  get table(): CoreComponent {
    return <CoreComponent>this._table;
  }
  @Input() set table(value: CoreComponent) {
    this._table = value;
    this.table$.next(value);
  }

  table$: ReplaySubject<CoreComponent> = new ReplaySubject(1);
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
  pagination$ = this.table$.pipe(
    switchMap((core) =>
      combineLatest([core?.table$.pipe(pluck('info')), core?.currentPage$])
    ),
    map(([info, currentPage]) => this.generateList(info.pageTotal, currentPage))
  );

  generateList(pages: number, currentPosition: number): Array<number> {
    const middle = Math.floor(this.paginationLength / 2);
    const length =
      pages < this.paginationLength ? pages : this.paginationLength;

    return Array.from({ length }, (_, i) => {
      if (i === 0) {
        return 1;
      } else if (pages < this.paginationLength) {
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
