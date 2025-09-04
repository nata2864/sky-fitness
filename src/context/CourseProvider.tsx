import { useState, useCallback } from 'react';
import { CourseContext } from './CourseContext';
import type {
  Course,
  WorkOutLesson,
  WorkOutsProgress,
  ProgressData,
  CourseProgress,
  Exercise,
  NormalizedProgressData,
  UserData,
} from '../sharesTypes/sharesTypes';
import {
  fetchCoursesById,
  fetchWorkOutsById,
  fetchProgressWorkOutById,
  // addFavoriteCourse,
  patchProgressWorkOut,
  fetchCourseProgress,
  fetchAllCourses,
 
  fetchAllUsersData,
} from '../services/api';

import { handleAxiosError } from '../utils/handleAxiosError/handleAxiosError';

type CourseProviderProps = {
  children: React.ReactNode;
};

const CourseProvider = ({ children }: CourseProviderProps) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [workOut, setWorkOut] = useState<WorkOutLesson | null>(null);
  const [progress, setProgress] = useState<WorkOutsProgress | null>(null);
  const [courseProgress, setCourseProgress] = useState<CourseProgress | null>(
    null
  );
  // --- Стейт всех курсов ---
  const [courses, setCourses] = useState<Course[]>([]);
  // --- Стейт всех курсов пользователя---
const [usersData, setUsersData] = useState<UserData | null>(null);


  const [loadingCourse, setLoadingCourse] = useState(false);
  // const [loadingUsersCourses, setLoadingUsersCourses] = useState(false);
  const [loadingWorkout, setLoadingWorkout] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(false);
  const [loadingCourseProgress, setLoadingCourseProgress] = useState(false);
  // const [loadingCourses, setLoadingCourses] = useState(false);

  // const [favorites, setFavorites] = useState<Course[]>([]);

  // const [errorCourse, setErrorCourse] = useState<string | null>(null);
  // const [errorWorkout, setErrorWorkout] = useState<string | null>(null);

  // --- Загрузка всех курсов ---

  const getAllCourses = useCallback(async (): Promise<Course[] | null> => {
    try {
      const data = await fetchAllCourses();

      if (data) {
        setCourses(data);
        return data;
      }
    } catch (error) {
      handleAxiosError(error);
    }

    return null; // общий возврат, если не вернулось выше
  }, []);

  // --- Загрузка курсов пользователя---

  const getAllUsersData = useCallback(async (): Promise<UserData | null> => {
    try {
      const data = await fetchAllUsersData();

      if (data) {
        setUsersData(data);
        return data;
      }
    } catch (error) {
      handleAxiosError(error);
    }

    return null; // общий возврат, если не вернулось выше
  }, []);

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

  // --- Добавить курс в избранные ---
  // const addCourseToFavorites = useCallback(
  //   async (courseId: string) => {
  //     try {
  //       const data = await addFavoriteCourse(courseId);
  //       console.log('Сервер вернул:', data);

  //       setFavorites(data);
  //     } catch (err) {
  //       console.error('Ошибка при добавлении в избранное:', err);
  //       handleAxiosError(err);
  //     }
  //   },
  //   [setFavorites]
  // );

  // --- Загрузка тренировки ---
  const getWorkoutById = useCallback(
    async (id: string): Promise<WorkOutLesson | null> => {
      if (!id) return null;
      setLoadingWorkout(true);
      try {
        const data = await fetchWorkOutsById(id);
        setWorkOut(data ?? null);
        return data ?? null;
      } catch (err) {
        handleAxiosError(err);
        return null;
      } finally {
        setLoadingWorkout(false);
      }
    },
    []
  );

  // const getProgress = useCallback(
  //   async (courseId: string, workoutId: string) => {
  //     if (!courseId || !workoutId) return;
  //     setLoadingProgress(true);

  //     try {
  //       const data = await fetchProgressWorkOutById({ courseId, workoutId });
  //        console.log("✅ getProgress данные:", data);
  //       setProgress(data ?? null);
  //     } catch (err) {
  //        console.error("❌ Ошибка getProgress:", err);
  //       handleAxiosError(err);
  //     } finally {
  //       setLoadingProgress(false);
  //     }
  //   },
  //   []
  // );

  const getProgress = useCallback(
    async (courseId: string, workoutId: string) => {
      if (!courseId || !workoutId) return;
      setLoadingProgress(true);

      try {
        // получаем прогресс с сервера
        const data: WorkOutsProgress | null = await fetchProgressWorkOutById({
          courseId,
          workoutId,
        });
        console.log('✅ getProgress данные:', data);

        // получаем упражнения, чтобы знать длину массива
        const workout: WorkOutLesson | null = await getWorkoutById(workoutId);
        const exercises: Exercise[] = workout?.exercises ?? [];

        // прогресс с сервера (может отсутствовать)
        const progresDataWorkOut: number[] = data?.progressData ?? [];

        // нормализуем прогресс: если сервер не прислал значения, подставляем 0
        const normalizedProgress: number[] = exercises.map(
          (_, index) => progresDataWorkOut[index] ?? 0
        );

        // сохраняем нормализованный прогресс в состояние
        setProgress({
          ...data,
          progressData: normalizedProgress,
        });
      } catch (err: unknown) {
        console.error('❌ Ошибка getProgress:', err);
        handleAxiosError(err);
      } finally {
        setLoadingProgress(false);
      }
    },
    [getWorkoutById] // зависимости useCallback
  );

  // --- Обновить прогресс тренировки ---
  const updateProgress = useCallback(
    async (courseId: string, workoutId: string, progressData: ProgressData) => {
      if (!courseId || !workoutId) return;
      setLoadingProgress(true);

      try {
        const data = await patchProgressWorkOut({
          courseId,
          workoutId,
          progressData,
        });
        console.log('✅ updateProgress данные:', data);
        setProgress(data ?? null); //
      } catch (err) {
        console.error('❌ Ошибка updateProgress:', err);
        handleAxiosError(err);
      } finally {
        setLoadingProgress(false);
      }
    },
    []
  );

  // --- Новый метод: прогресс всего курса ---
  const getCourseProgressById = useCallback(async (courseId: string) => {
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
  }, []);

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
        // favorites,
        // addCourseToFavorites,
        updateProgress,
        getCourseProgressById,
        courseProgress,
        loadingCourseProgress,
        getAllCourses,
        courses,
        usersData,
   getAllUsersData
   
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
