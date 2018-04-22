import { Type } from '@angular/core';

export interface InitialStateFunc {
	(row: any): boolean;
}

export interface GtOptions {
	cache?: boolean;
	debounceTime?: number;
	csvDelimiter?: string;
	stack?: boolean;
	lazyLoad?: boolean;
	highlightSearch?: boolean;
	rowSelection?: boolean;
	rowSelectionAllowMultiple?: boolean;
	rowSelectionInitialState?: boolean | InitialStateFunc;
	rowExpandAllowMultiple?: boolean;
	rowExpandInitialState?: boolean | InitialStateFunc;
	rowExpandInitialComponent?: { component: Type<any>; data?: Array<any> };
	numberOfRows?: number;
	reportColumnWidth?: boolean;
}
