import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { TableRow } from '../models/table-row.interface';
import { NgIf, NgTemplateOutlet, PercentPipe } from '@angular/common';

export interface GtDelta {
  relative: number | string;
  absolute: number;
}
@Component({
  selector: 'gt-delta',
  template: `<span
      *ngIf="value as delta"
      [class]="[
        classes.span,
        delta.absolute > 0
          ? classes.positive
          : delta.absolute < 0
          ? classes.negative
          : null
      ]"
      [class.gt-delta-positive]="delta.absolute > 0"
      [class.gt-delta-negative]="delta.absolute < 0"
      ><ng-container
        *ngTemplateOutlet="deltaTemplate || defaultTemplate; context: { delta }"
      ></ng-container>
    </span>
    <ng-template #defaultTemplate let-delta="delta">
      <span *ngIf="delta.relative">{{
        delta.relative | percent: '1.0-2'
      }}</span>
    </ng-template>`,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PercentPipe, NgIf, NgTemplateOutlet],
})
export class GtDeltaComponent implements OnChanges {
  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }
  get deltaTemplate(): TemplateRef<any> {
    return this._deltaTemplate;
  }
  constructor() {}
  @Input() set deltaTemplate(deltaTemplate: TemplateRef<any>) {
    this._deltaTemplate = deltaTemplate;
  }
  Math = Math;
  Number = Number;
  @Input() data: Array<TableRow> = [];
  @Input() index: number = 0;
  @Input() baseIndex?: number;
  @Input() classes = {
    span: 'gt-delta',
    positive: 'text-success',
    negative: 'text-danger',
  };
  @Input() key: string = 'value';
  @Input() notApplicableValue: string | null = null;
  @Input() initialValue: string | number | null = null;
  private _value?: GtDelta;
  private _deltaTemplate?: any;
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.data.currentValue) {
      return;
    }
    const data = changes.data?.currentValue;
    const index = changes.index?.currentValue || this.index;
    const baseIndex = changes.baseIndex?.currentValue;
    const key = changes.key?.currentValue || this.key;
    const initialValue =
      changes.initialValue?.currentValue || this.initialValue;

    const deltaValue =
      index === 0
        ? initialValue
        : data[index][key] -
          (baseIndex === undefined
            ? data[index - 1][key]
            : data[baseIndex][key]);
    const baseValue =
      index === 0
        ? 1
        : baseIndex === undefined
        ? data[index - 1][key]
        : data[baseIndex][key];

    const relative =
      index === 0
        ? initialValue
        : Math.sign(deltaValue) * Math.abs(deltaValue / baseValue);

    this.value = {
      relative: Number.isFinite(relative)
        ? relative
        : index === 0
        ? initialValue
        : changes.notApplicableValue?.currentValue || this.notApplicableValue,
      absolute: deltaValue,
    };
  }
}
