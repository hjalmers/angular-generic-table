import { GtRow } from './gt-row';
import { GtCustomComponent } from '../components/gt-custom-component-factory';
import { GtClickFunc } from './gt-config-field';
import { Injector, Type } from '@angular/core';

export interface GtRenderField<
	R extends GtRow,
	C extends GtCustomComponent<any>
> {
	objectKey: string;
	renderValue?: any;
	click?: GtClickFunc<R>;
	expand?: boolean | { component: Type<C>; data?: any };
	sortValue: any;
	columnComponent: { type: Type<C> | 'checkbox'; injector?: Injector };
	edited?: boolean;
}
