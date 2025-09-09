import type {
  WorkOutsProgress,
  WorkOutLesson,
  CourseProgress,
} from '../sharesTypes/sharesTypes';
import { createContext } from 'react';

export type CourseContextValue = {
  workOut: WorkOutLesson | null;
  progress: WorkOutsProgress | null;
  courseProgress: CourseProgress | null;
  loadingWorkout: boolean;
  loadingProgress: boolean;
  loadingCourseProgress: boolean;

  // --- методы ---
  getProgress: (courseId: string, workoutId: string) => Promise<void>;
  getCourseProgressById: (courseId: string) => Promise<void>;
  getWorkoutById: (id: string) => Promise<WorkOutLesson | null>;
  updateProgress: (
    courseId: string,
    workoutId: string,
    progressData: number[]
  ) => Promise<void>;
};
export const CourseContext = createContext<CourseContextValue | undefined>(
  undefined
);
