import { IAcitivityApi } from '../interfaces/IActivityApi';
import { ActivityCounterStatusType } from '../../activityCounter/interfaces/IActivityCounter';

export const countAcitivities = (
  activities: IAcitivityApi[],
  status: ActivityCounterStatusType,
): number => {
  // Condition if activities not a valid array
  if (!Array.isArray(activities)) {
    return 0;
  }

  const totalActivities = activities.filter((activity) => {
    return activity.status === status;
  });

  return totalActivities.length;
};
