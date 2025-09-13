import type { AllUsersData, Course } from '../sharesTypes/sharesTypes';

type CourseProgressResult = {
  percent: number;
  buttonText: string;
};

export const getCourseCardData = (
  courseId: string,
  usersData?: AllUsersData,
  course?: Course
): CourseProgressResult => {
  const userCourseProgress = usersData?.courseProgress.find(
    (progress) => progress.courseId === courseId
  );

  const workoutsProgress = userCourseProgress?.workoutsProgress ?? [];
  const totalWorkouts = course?.workouts.length ?? 0;

  const completedWorkouts = workoutsProgress.filter(
    (w) => w.workoutCompleted
  ).length;

  // Рассчитываем процент
  let percent = 0;
  if (totalWorkouts > 0) {
    percent = Math.round((completedWorkouts / totalWorkouts) * 100);
  }

  // Логика кнопки
  let buttonText = 'Начать тренировки';
  if (percent > 0 && percent < 100) {
    buttonText = 'Продолжить';
  } else if (percent === 100) {
    buttonText = 'Начать заново';
  }

  return { percent, buttonText };
};
