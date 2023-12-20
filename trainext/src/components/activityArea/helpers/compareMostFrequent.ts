import { IAcitivityApi } from '../interfaces/IActivityApi';

export const compareMostFrequent = (
  activities: IAcitivityApi[],
  mostFrequent: string[],
): any => {
  // Condition if activities not a valid array
  if (!Array.isArray(activities)) {
    return false;
  } else {
    const frequentActivities: IAcitivityApi[] = [];
    let targetActivity;

    mostFrequent.map((string) => {
      activities.map(
        (obj) =>
          obj.activity === string &&
          frequentActivities.push(obj),
      );
    });

    const durationNumValues: number[] = [];

    frequentActivities.map((activity) => {
      const durationArray = activity.duration.split(' ');

      durationNumValues.push(Number(durationArray[0]));
    });

    let largest = 0;
    for (let i = 0; i < frequentActivities.length; i++) {
      if (Number(durationNumValues[i]) > largest) {
        largest = Number(durationNumValues[i]);
      }
    }

    frequentActivities.map((obj) => {
      const durationArray = obj.duration.split(' ');

      if (Number(durationArray[0]) === largest) {
        targetActivity = obj.activity;
        return obj.activity;
      }
    });

    if (targetActivity) {
      return targetActivity;
    }
  }
};
