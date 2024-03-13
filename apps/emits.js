import dotenv from "dotenv";
dotenv.config();

function calculateEmits(daysPassed) {
  const ranges = [
    { min: 1, max: 10, emits: 100 },
    { min: 11, max: 20, emits: 90 },
    { min: 21, max: 30, emits: 80 },
    { min: 31, max: 40, emits: 70 },
    { min: 41, max: 50, emits: 60 },
    { min: 51, max: 60, emits: 50 },
    { min: 61, max: 70, emits: 40 },
    { min: 71, max: 80, emits: 30 },
    { min: 81, max: 90, emits: 20 },
    { min: 91, max: 100, emits: 10 },
  ];

  for (const range of ranges) {
    if (daysPassed >= range.min && daysPassed <= range.max) {
      return range.emits;
    }
  }

  return 0;
}

export const getEmits = () => {
  const startDate = Number(process.env.START_TIME) * 1000;

  const currentTimestampInMilliseconds = Date.now();
  const millisecondsInDay = 1000 * 60 * 60 * 24;

  const timeDifferenceInMilliseconds =
    currentTimestampInMilliseconds - startDate;

  const daysPassed = Math.floor(
    timeDifferenceInMilliseconds / millisecondsInDay
  );

  return calculateEmits(daysPassed);
};
