import { Activity } from '../../createActivityForm/enums/Activity';
import { Status } from '../../createActivityForm/enums/Status';

export interface IAcitivityApi {
  id: string;
  activity: `${Activity}`;
  duration: string;
  date: string;
  status: `${Status}`;
}
