import { useState, useCallback } from 'react';
import { CourseContext } from './CourseContext';
import type {
  WorkOutLesson,
  WorkOutsProgress,
  ProgressData,
  CourseProgress,
  Exercise,
} from '../sharesTypes/sharesTypes';
import {
  fetchWorkOutsById,
  fetchProgressWorkOutById,
  patchProgressWorkOut,
  fetchCourseProgress,
} from '../services/api';
import { handleAxiosError } from '../utils/handleAxiosError/handleAxiosError';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

type CourseProviderProps = {
  children: React.ReactNode;
};

const CourseProvider = ({ children }: CourseProviderProps) => {
  const [workOut, setWorkOut] = useState<WorkOutLesson | null>(null);
  const [progress, setProgress] = useState<WorkOutsProgress | null>(null);
  const [courseProgress, setCourseProgress] = useState<CourseProgress | null>(
    null
  );

  const [loadingWorkout, setLoadingWorkout] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(false);
  const [loadingCourseProgress, setLoadingCourseProgress] = useState(false);

  const { token } = useContext(AuthContext);

  // --- Загрузка тренировки ---
 const getWorkoutById = useCallback(
  async (id: string): Promise<WorkOutLesson | null> => {
    if (!id || !token) return null; // защита от отсутствия токена
    setLoadingWorkout(true);
    try {
      const data = await fetchWorkOutsById(token, id);
      setWorkOut(data ?? null);
      return data ?? null;
    } catch (err) {
      handleAxiosError(err);
      return null;
    } finally {
      setLoadingWorkout(false);
    }
  },
  [token] 
);

const getProgress = useCallback(
  async (courseId: string, workoutId: string) => {
    if (!courseId || !workoutId || !token) return;
    setLoadingProgress(true);

    try {
      const data: WorkOutsProgress | null = await fetchProgressWorkOutById(token, {
        courseId,
        workoutId,
      });

      const workout: WorkOutLesson | null = await getWorkoutById(workoutId); // getWorkoutById зависит от token
      const exercises: Exercise[] = workout?.exercises ?? [];
      const progresDataWorkOut: number[] = data?.progressData ?? [];

      const normalizedProgress: number[] = exercises.map(
        (_, index) => progresDataWorkOut[index] ?? 0
      );

      setProgress({
        ...data,
        progressData: normalizedProgress,
      });
    } catch (err: unknown) {
      handleAxiosError(err);
    } finally {
      setLoadingProgress(false);
    }
  },
  [getWorkoutById, token] // добавлен token
);

const updateProgress = useCallback(
  async (courseId: string, workoutId: string, progressData: ProgressData) => {
    if (!courseId || !workoutId || !token) return;
    setLoadingProgress(true);

    setProgress((prev) => {
      if (!prev) return prev;
      return { ...prev, progressData };
    });

    try {
      await patchProgressWorkOut(token, { courseId, workoutId, progressData });
    } catch (err) {
      handleAxiosError(err);
    } finally {
      setLoadingProgress(false);
    }
  },
  [token]
);

const getCourseProgressById = useCallback(
  async (courseId: string) => {
    if (!courseId || !token) return;
    setLoadingCourseProgress(true);

    try {
      const data = await fetchCourseProgress(token, courseId);
      setCourseProgress(data ?? null);
    } catch (err) {
      handleAxiosError(err);
    } finally {
      setLoadingCourseProgress(false);
    }
  },
  [token]
);


  return (
    <CourseContext.Provider
      value={{
        workOut,
        progress,
        loadingWorkout,
        loadingProgress,
        getProgress,
        getWorkoutById,
        updateProgress,
        getCourseProgressById,
        courseProgress,
        loadingCourseProgress,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
