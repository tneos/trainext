import { IAcitivityApi } from '../interfaces/IActivityApi';

export const countTotals = (
  activities: IAcitivityApi[],
): number[] => {
  // Condition if activities not a valid array
  if (!Array.isArray(activities)) {
    return [];
  }
  const durationNumValues: number[] = [];

  activities.map((activity) => {
    const durationArray = activity.duration.split(' ');
    durationNumValues.push(Number(durationArray[0]));
  });

  const totalDuration = durationNumValues.reduce(
    (acc, number) => {
      return acc + number;
    },
    0,
  );

  const hours = Math.floor(totalDuration / 60);
  const minutes = totalDuration % 60;

  return [activities.length, hours, minutes];
};
