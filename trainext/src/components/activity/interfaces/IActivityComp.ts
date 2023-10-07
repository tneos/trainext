import { IActivityInfo } from './IActivityInfo';
import { IActivityButtons } from './IActivityButtons';

export interface IActivityComp
  extends IActivityInfo,
    IActivityButtons {
  id?: string;
  status?: string;
}
