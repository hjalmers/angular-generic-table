import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  TemplateRef,
} from '@angular/core';
import { TableRow } from '../models/table-row.interface';
import { NgTemplateOutlet, PercentPipe } from '@angular/common';

export interface GtDelta {
  relative: number | string;
  absolute: number;
}

@Component({
  selector: 'gt-delta',
  template: `
    @let delta = value();
    @if (delta) {
      <span
        [class]="[
          classes().span,
          delta.absolute > 0
            ? classes().positive
            : delta.absolute < 0
            ? classes().negative
            : null
        ]"
        [class.gt-delta-positive]="delta.absolute > 0"
        [class.gt-delta-negative]="delta.absolute < 0"
      >
        <ng-container
          [ngTemplateOutlet]="deltaTemplate() || defaultTemplate"
          [ngTemplateOutletContext]="{ delta }"
        ></ng-container>
      </span>
      <ng-template #defaultTemplate let-delta="delta">
        @if (delta.relative) {
          <span>{{ delta.relative | percent: '1.0-2' }}</span>
        }
      </ng-template>
    }
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PercentPipe, NgTemplateOutlet],
})
export class GtDeltaComponent {
  readonly data = input<Array<TableRow>>([]);
  readonly index = input(0);
  readonly baseIndex = input<number | undefined>(undefined);
  readonly classes = input({
    span: 'gt-delta',
    positive: 'text-success',
    negative: 'text-danger',
  });
  readonly key = input('value');
  readonly notApplicableValue = input<string | null>(null);
  readonly initialValue = input<string | number | null>(null);
  readonly deltaTemplate = input<TemplateRef<any> | undefined>(undefined);

  readonly value = computed<GtDelta | undefined>(() => {
    const data = this.data();
    if (!data || data.length === 0) return undefined;

    const index = this.index();
    const baseIndex = this.baseIndex();
    const key = this.key();
    const initialValue = this.initialValue();

    const deltaValue =
      index === 0
        ? initialValue
        : (data[index][key] as number) -
          (baseIndex === undefined
            ? (data[index - 1][key] as number)
            : (data[baseIndex][key] as number));
    const baseValue =
      index === 0
        ? 1
        : baseIndex === undefined
        ? (data[index - 1][key] as number)
        : (data[baseIndex][key] as number);

    const relative =
      index === 0
        ? initialValue
        : Math.sign(deltaValue as number) *
          Math.abs((deltaValue as number) / baseValue);

    return {
      relative: Number.isFinite(relative)
        ? (relative as number)
        : index === 0
        ? (initialValue as number | string)
        : (this.notApplicableValue() as string),
      absolute: deltaValue as number,
    };
  });
}
