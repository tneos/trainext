import { Status } from '../../createActivityForm/enums/Status';

export type ActivityCounterStatusType =
  | Status.planned
  | Status.started
  | Status.completed;

export interface IActivityCounter {
  count?: number;
  status?: ActivityCounterStatusType;
}
