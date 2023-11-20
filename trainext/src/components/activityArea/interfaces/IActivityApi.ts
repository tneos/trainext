import { Activity } from '../../createActivityForm/enums/Activity';
import { Status } from '../../createActivityForm/enums/Status';

export interface IAcitivityApi {
  id: string;
  activity: `${Activity}`;
  date: string;
  status: `${Status}`;
}
