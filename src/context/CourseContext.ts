import { createContext } from "react";
import type { Course } from "../sharesTypes/sharesTypes";

export type CourseContextValue = {
  course: Course | null;
  loading: boolean;
  getCourseById: (id: string) => Promise<void>;
}

export const CourseContext = createContext<CourseContextValue | undefined>(
  undefined
);