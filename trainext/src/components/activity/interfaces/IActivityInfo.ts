import { Activity } from '../../createActivityForm/enums/Activity';

export type ActivityNameType =
  | Activity.cycling
  | Activity.rowing
  | Activity.running
  | Activity.swimming
  | Activity.walking;

export interface IActivityInfo {
  title?: ActivityNameType;
  duration?: string;
  date?: Date;
}
