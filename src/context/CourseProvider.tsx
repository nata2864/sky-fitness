import { useState, useCallback } from 'react';
import { CourseContext } from './CourseContext';
import type { Course, WorkOutLesson, WorkOutsProgress,ProgressData } from '../sharesTypes/sharesTypes';
import { fetchCoursesById, fetchWorkOutsById, fetchProgressWorkOutById, addFavoriteCourse, patchProgressWorkOut, fetchCourseProgress } from '../services/api';

import { handleAxiosError } from '../utils/handleAxiosError/handleAxiosError';

type CourseProviderProps = {
  children: React.ReactNode;
};

const CourseProvider = ({ children }: CourseProviderProps) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [workOut, setWorkOut] = useState<WorkOutLesson | null>(null);
  const [progress, setProgress] = useState<WorkOutsProgress | null>(null);
    const [courseProgress, setCourseProgress] = useState<CourseProgress | null>(null);

  const [loadingCourse, setLoadingCourse] = useState(false);
  const [loadingWorkout, setLoadingWorkout] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(false);
  const [loadingCourseProgress, setLoadingCourseProgress] = useState(false);

  const [favorites, setFavorites] = useState<Course[]>([]);

  // const [errorCourse, setErrorCourse] = useState<string | null>(null);
  // const [errorWorkout, setErrorWorkout] = useState<string | null>(null);

  // --- Загрузка курса ---
  const getCourseById = useCallback(async (id: string) => {
    if (!id) return;
    setLoadingCourse(true);

    try {
      const data = await fetchCoursesById(id);
      setCourse(data ?? null);
    } catch (err) {
      handleAxiosError(err);
    } finally {
      setLoadingCourse(false);
    }
  }, []);

   // --- Добавить курс по Айди ---
const addCourseToFavorites = useCallback(async (courseId: string) => {
  try {
    const data = await addFavoriteCourse(courseId);
      console.log("Сервер вернул:", data);
  
    setFavorites(data);

  } catch (err) {
      console.error("Ошибка при добавлении в избранное:", err);
    handleAxiosError(err);
  }
}, [setFavorites]);

  // --- Загрузка тренировки ---
  const getWorkoutById = useCallback(async (id: string) => {
    if (!id) return;
    setLoadingWorkout(true);

    try {
      const data = await fetchWorkOutsById(id);
      setWorkOut(data ?? null);
    } catch (err) {
         
      handleAxiosError(err);
    } finally {
      setLoadingWorkout(false);
    }
  }, []);

const getProgress = useCallback(
  async (courseId: string, workoutId: string) => {
    if (!courseId || !workoutId) return;
    setLoadingProgress(true);

    try {
      const data = await fetchProgressWorkOutById({ courseId, workoutId });
       console.log("✅ getProgress данные:", data);
      setProgress(data ?? null);
    } catch (err) {
       console.error("❌ Ошибка getProgress:", err);
      handleAxiosError(err);
    } finally {
      setLoadingProgress(false);
    }
  },
  []
);

// --- Обновить прогресс тренировки ---
  const updateProgress = useCallback(
    async (courseId: string, workoutId: string, progressData: ProgressData) => {
      if (!courseId || !workoutId) return;
      setLoadingProgress(true);

      try {
        const data = await patchProgressWorkOut({ courseId, workoutId, progressData });
        console.log("✅ updateProgress данные:", data);
        setProgress(data ?? null); // 
        
      } catch (err) {
        console.error("❌ Ошибка updateProgress:", err);
        handleAxiosError(err);
      } finally {
        setLoadingProgress(false);
      }
    },
    []
  );

    // --- Новый метод: прогресс всего курса ---
  const getCourseProgressById = useCallback(
    async (courseId: string) => {
      if (!courseId) return;
      setLoadingCourseProgress(true);

      try {
        const data = await fetchCourseProgress(courseId);
        setCourseProgress(data ?? null);
      } catch (err) {
        handleAxiosError(err);
      } finally {
        setLoadingCourseProgress(false);
      }
    },
    []
  );




  return (
    <CourseContext.Provider
      value={{
        course,
        workOut,
        progress,
        loadingCourse,
        loadingWorkout,
loadingProgress,
getProgress,
        getCourseById,
        getWorkoutById,
          favorites,
        addCourseToFavorites,
        updateProgress,
        getCourseProgressById,
           courseProgress, 
              loadingCourseProgress

      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
