import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { CoreComponent } from '../core.component';
import {
  GtPaginationAriaLabels,
  GtPaginationClasses,
  GtPaginationInfo,
} from '../models/gt-pagination';

@Component({
  selector: 'angular-generic-table-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  readonly table = input.required<CoreComponent>();

  readonly pagingInfo = input<GtPaginationInfo | undefined>(undefined);
  readonly paginationLength = input(5);
  readonly classes = input<GtPaginationClasses>({
    ul: 'pagination',
    li: 'page-item',
    button: 'page-link',
  });
  readonly ariaLabels = input<GtPaginationAriaLabels>({
    nav: 'Table pagination',
    button: 'Go to page ',
  });

  /** Page numbers to display in the pagination component */
  protected paginationListItems = computed(() => {
    const tbl = this.table();
    const info = tbl.tableInfoSignal();
    const currentPage = tbl.boundedPaginationIndex();
    return this._generateList(info.pageTotal, currentPage);
  });

  /** Current page from the table */
  protected currentPosition = computed(() => {
    return this.table().boundedPaginationIndex();
  });

  private _generateList(
    numberOfPages: number,
    currentPosition: number
  ): Array<number> {
    const paginationLen = this.paginationLength();
    const middle = Math.floor(paginationLen / 2);
    const length =
      numberOfPages < paginationLen ? numberOfPages : paginationLen;

    return Array.from({ length }, (_, i) => {
      if (i === 0) {
        return 1;
      } else if (numberOfPages < paginationLen) {
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

  goToPage(index: number): void {
    const tbl = this.table();
    if (tbl) {
      tbl.paginationIndex = index - 1;
    }
  }
}
