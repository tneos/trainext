import { ActivityCounterStatusType } from '../interfaces/IActivityCounter';
import { Status } from '../../createActivityForm/enums/Status';

export const emitCorrectBorderColor = (
  status: ActivityCounterStatusType,
): string => {
  switch (status) {
    case Status.planned:
      return 'error.light';
    case Status.started:
      return 'warning.light';
    case Status.completed:
      return 'success.light';
  }
};
