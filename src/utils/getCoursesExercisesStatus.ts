import { fetchListWorkOuts } from '../services/api';
import type { Course } from '../sharesTypes/sharesTypes';

export const getCoursesExercisesStatus = async (
  courses: Course[],
  token: string | null
): Promise<Record<string, boolean>> => {
  const status: Record<string, boolean> = {};

  for (const course of courses) {
    const lessons = await fetchListWorkOuts(token, course._id);

    const hasExercises = lessons.some((lesson) => lesson.exercises.length > 0);

    status[course._id] = !hasExercises;
  }

  return status;
};
