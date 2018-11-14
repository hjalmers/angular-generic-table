import { GtRow } from './gt-row';
import { Type, Injector } from '@angular/core';
import { GtCustomComponent } from '../components/gt-custom-component-factory';
import { Observable } from 'rxjs';

export type GtRenderFunc<R extends GtRow> = (row: R) => string;

export type GtValueFunc<R extends GtRow> = (row: R) => any;

export type GtClickFunc<R extends GtRow> = (
	row: R,
	col: any,
	event: MouseEvent
) => void;
export type GtClassFunc = (row: any, col: any) => string;

export type GtInlineEditFunc<R extends GtRow> = (row: any, col: any) => boolean;

export interface GtConfigField<
	R extends GtRow,
	C extends GtCustomComponent<any>
> {
	/**
	 * name or label of field
	 * (will be displayed as heading for column)
	 */
	name: string;
	/**
	 * heading used when columns are stacked (overrides name)
	 */
	stackedHeading?: string;
	/**
	 * key for mapping column to settings and data
	 */
	objectKey: string;
	/**
	 * custom class names for column
	 */
	classNames?: string;
	/**
	 * custom class names for row
	 */
	rowClass?: string | GtClassFunc;
	/**
	 * custom class names for column
	 */
	columnClass?: string | GtClassFunc;
	/**
	 * custom column component and associated injector
	 */
	columnComponent?: { type: Type<C> | 'checkbox'; injector?: Injector };
	/**
	 * custom function for column presentation
	 */
	render?: GtRenderFunc<R>;
	/**
	 * compiled (false by default)
	 */
	compile?: boolean;
	/**
	 * custom function for column value
	 */
	value?: GtValueFunc<R>;
	/**
	 * custom click callback
	 */
	click?: GtClickFunc<R>;
	/**
	 * close (expand) when clicked
	 */
	expand?: boolean | { component: Type<C>; data?: any };
	/**
	 * custom function for export presentation
	 */
	export?: GtValueFunc<R>;
	sort?: GtValueFunc<R>;
	/**
	 * custom function for search value,
	 * set to false if field shouldn't be searchable (true by default)
	 */
	search?: any;
	inlineEdit?:
		| {
				active: Observable<boolean> | GtInlineEditFunc<R>;
				type?:
					| Observable<any>
					| Array<any>
					| 'text'
					| 'number'
					| 'password'
					| 'email';
		  }
		| boolean
		| Array<any>
		| 'number'
		| 'password'
		| 'email';
	/**
	 * custom header
	 */
	header?: { type: Type<C>; injector?: Injector };
}
