import { GtConfigField } from './gt-config-field';
import { GtConfigSetting } from './gt-config-setting';
import { GtRow } from './gt-row';
import { GtInformation } from './gt-information';
import {GtConfigTotal} from "./gt-config-total";

export interface GtConfig<R extends GtRow> {
  settings: GtConfigSetting[];
  fields: GtConfigField<R, any>[];
  totals?: GtConfigTotal[];
  data?: R[];
  info?: GtInformation;
}
