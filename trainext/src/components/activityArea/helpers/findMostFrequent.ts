import { IAcitivityApi } from '../interfaces/IActivityApi';

export const findMostFrequent = (
  activities: IAcitivityApi[],
): string[] | [] => {
  // Condition if activities not a valid array
  if (!Array.isArray(activities)) {
    return [];
  }

  const activityStrings: string[] = [];
  activities.map((obj) =>
    activityStrings.push(obj.activity),
  );

  // Extract unique words
  const uniqueWords = new Set(activityStrings);
  // Sort words
  activityStrings.sort();

  let highestCount = 0;
  let mostFrequent: string[] = [];

  uniqueWords.forEach((word) => {
    // Count word
    const start = activityStrings.indexOf(word);
    const end = activityStrings.lastIndexOf(word);
    const count = end - start + 1;

    // Update highest count and most frequent word
    if (count > highestCount) {
      highestCount = count;
      mostFrequent = [word];
    }
    // Add word to most frequent list if it has
    // the same count as the current highest
    if (
      count === highestCount &&
      !mostFrequent.includes(word)
    ) {
      mostFrequent.push(word);
    }
  });

  return mostFrequent;
};
