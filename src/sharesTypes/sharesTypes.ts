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

export type Exercise = {
  [x: string]: number;
  _id: string;
  name: string;
  quantity: number;
}




export type WorkOutLesson = 
  {
    _id: string,
    name: string,
    video: string,
    exercises: Exercise[];
  }

export type ProgressData = {
   "workoutId": string,
    "workoutCompleted": boolean,
    "progressData": number []   
 
}