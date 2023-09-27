import { Status } from '../../createActivityForm/enums/Status';
import { ActivityCounterStatusType } from '../interfaces/IActivityCounter';

export const emitCorrectLabel = (
  status: ActivityCounterStatusType,
): string => {
  switch (status) {
    case Status.planned:
      return 'Planned';
    case Status.started:
      return 'Started';
    case Status.completed:
      return 'Completed';
  }
};
