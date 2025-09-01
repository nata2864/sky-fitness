
import type { WorkOutsProgress, WorkOutLesson,ProgressData } from '../sharesTypes/sharesTypes';
import { createContext } from 'react';
import type { Course } from '../sharesTypes/sharesTypes';

export interface CourseProgress {
  courseId: string;
  courseCompleted: boolean;
  workoutsProgress: {
    workoutId: string;
    workoutCompleted: boolean;
    progressData: ProgressData;
  }[];
}


export type CourseContextValue = {
  course: Course | null;
  workOut: WorkOutLesson | null;
  progress: WorkOutsProgress | null;
  courseProgress: CourseProgress | null; 
  loadingCourse: boolean;
  loadingWorkout: boolean;
  loadingProgress: boolean;
  loadingCourseProgress: boolean; // <-- новый флаг загрузки

  favorites: Course[];

  // --- методы ---
  getProgress: (courseId: string, workoutId: string) => Promise<void>;
  getCourseProgressById: (courseId: string) => Promise<void>; // <-- новый метод
  getCourseById: (id: string) => Promise<void>;
  getWorkoutById: (id: string) => Promise<void>;

  addCourseToFavorites: (id: string) => Promise<void>;
  updateProgress: (courseId: string, workoutId: string, progressData: number[]) => Promise<void>;
};
export const CourseContext = createContext<CourseContextValue | undefined>(
  undefined
);
