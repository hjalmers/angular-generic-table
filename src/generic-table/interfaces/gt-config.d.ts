import { GtConfigField } from './gt-config-field';
import { GtConfigSetting } from './gt-config-setting';
import { GtPagingInfo } from './gt-paging-info';
import { GtRow } from './gt-row';
export interface GtConfig<R extends GtRow> {
    settings: GtConfigSetting[];
    fields: GtConfigField<R>[];
    data?: R[];
    paging?: GtPagingInfo;
}
