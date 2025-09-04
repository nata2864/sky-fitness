import type {
  WorkOutsProgress,
  WorkOutLesson,
  CourseProgress,
  UserData,
} from '../sharesTypes/sharesTypes';
import { createContext } from 'react';
import type { Course } from '../sharesTypes/sharesTypes';

export type CourseContextValue = {
  course: Course | null;
  courses: Course[] | null;
  workOut: WorkOutLesson | null;
  progress: WorkOutsProgress | null;
  courseProgress: CourseProgress | null;
  usersData: UserData | null;
  loadingCourse: boolean;
  loadingWorkout: boolean;
  loadingProgress: boolean;
  loadingCourseProgress: boolean; // <-- новый флаг загрузки

  // favorites: Course[];

  // --- методы ---
  getProgress: (courseId: string, workoutId: string) => Promise<void>;
  getCourseProgressById: (courseId: string) => Promise<void>; // <-- новый метод
  getCourseById: (id: string) => Promise<void>;
  getWorkoutById: (id: string) => Promise<WorkOutLesson | null>;
  getAllCourses: () => Promise<Course[] | null>;
  getAllUsersData: () => Promise<UserData | null>;
  // addCourseToFavorites,
  updateProgress: (
    courseId: string,
    workoutId: string,
    progressData: number[]
  ) => Promise<void>;

};
export const CourseContext = createContext<CourseContextValue | undefined>(
  undefined
);
