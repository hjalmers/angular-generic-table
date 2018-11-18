import { GtConfigField } from './gt-config-field';
import { GtConfigSetting } from './gt-config-setting';
import { GtRow } from './gt-row';
import { GtInformation } from './gt-information';
import { GtConfigTotal } from './gt-config-total';

export interface GtConfig<R extends GtRow> {
	settings: Array<GtConfigSetting>;
	fields: Array<GtConfigField<R, any>>;
	totals?: Array<GtConfigTotal>;
	data?: Array<R>;
	info?: GtInformation;
}
