import { GtConfigSetting } from './gt-config-setting';
import { GtConfigField } from './gt-config-field';
import { GtPagingInfo } from './gt-paging-info';
export interface GtConfig {
    settings: [GtConfigSetting];
    fields: [GtConfigField];
    data?: Array<any>;
    paging?: GtPagingInfo;
}
