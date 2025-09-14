import type { Course } from '../sharesTypes/sharesTypes';

export function calculateCourseProgress(
  workoutsProgress: { workoutId: string; workoutCompleted: boolean }[],
  course?: Course
) {
  const totalWorkouts = course?.workouts.length ?? 0;
  const completedWorkouts = workoutsProgress.filter((w) => w.workoutCompleted).length;

  let percent = 0;
  if (totalWorkouts > 0) {
    percent = Math.round((completedWorkouts / totalWorkouts) * 100);
  }

  let buttonText = 'Начать тренировки';
  if (percent > 0 && percent < 100) {
    buttonText = 'Продолжить';
  } else if (percent === 100) {
    buttonText = 'Начать заново';
  }

  return { percent, buttonText };
}
