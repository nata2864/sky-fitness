export type Course = {
  dailyDurationInMinutes: {
    from: number;
    to: number;
  };
  _id: string;
  description: string;
  directions: string[];
  fitting: string[];
  nameEN: string;
  nameRU: string;
  order: number;
  difficulty: string;
  durationInDays: number;
  workouts: string[];
  __v: number;
};