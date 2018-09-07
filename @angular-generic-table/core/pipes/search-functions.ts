import { GtRow } from '../interfaces/gt-row';
import { GtValueFunc } from '../interfaces/gt-config-field';

export interface SearchFunctions<R extends GtRow> {
	[objectKey: string]: GtValueFunc<R>;
}
