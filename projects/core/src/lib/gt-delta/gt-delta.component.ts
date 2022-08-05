import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableRows } from '../models/table-row.interface';

@Component({
  selector: 'gt-delta',
  template: `<span
    *ngIf="{
      value:
        index === 0
          ? initialValue
          : ((baseIndex === undefined
              ? data[index - 1][key]
              : data[baseIndex][key]) -
              data[index][key]) /
            -Math.abs(
              baseIndex === undefined
                ? data[index - 1][key]
                : data[baseIndex][key]
            )
    } as delta"
    [class]="[
      classes.span,
      !delta.value || !Number.isFinite(delta.value)
        ? null
        : delta.value > 0
        ? classes.positive
        : classes.negative
    ]"
    [class.gt-delta-positive]="delta.value > 0 && Number.isFinite(delta.value)"
    [class.gt-delta-negative]="delta.value < 0"
    >{{
      Number.isFinite(delta.value)
        ? (delta.value | percent)
        : delta.value === initialValue
        ? initialValue
        : notApplicableValue
    }}</span
  >`,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GtDeltaComponent {
  constructor() {}
  Math = Math;
  Number = Number;
  @Input() data: TableRows = [];
  @Input() index: number = 0;
  @Input() baseIndex?: number;
  @Input() classes = {
    span: 'gt-delta',
    positive: 'text-success',
    negative: 'text-danger',
  };
  @Input() key: string = 'value';
  @Input() notApplicableValue: string = 'n/a';
  @Input() initialValue: string = '-';
}
