import { IAcitivityApi } from '../interfaces/IActivityApi';

export const compareMostFrequent = (
  activities: IAcitivityApi[],
  mostFrequent: string[],
): any => {
  // Condition if activities not a valid array
  if (!Array.isArray(activities)) {
    return false;
  } else {
    console.log(activities);
    const frequentActivities: IAcitivityApi[] = [];
    console.log(mostFrequent);
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

    console.log(durationNumValues);

    let largest = 0;
    for (let i = 0; i < frequentActivities.length; i++) {
      if (Number(durationNumValues[i]) > largest) {
        largest = Number(durationNumValues[i]);
      }
    }
    console.log(largest);

    const targetActivity = frequentActivities.map((obj) => {
      const durationArray = obj.duration.split(' ');
      if (Number(durationArray[0]) === largest) {
        return obj.activity;
      }
    });

    return targetActivity;
  }
};
