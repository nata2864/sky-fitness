import type { Course, UserData } from '../sharesTypes/sharesTypes';
import { createContext } from 'react';


export type MainCourseContextValue = {
  // --- Данные ---
  course: Course | null;           // Текущий выбранный курс
  courses: Course[];               // Все доступные курсы
  usersData: UserData | null;      // Данные о курсах конкретного пользователя

  // --- Состояния загрузки ---
  loadingCourses: boolean;         // true → загружаются все курсы
  loadingUsersCourses: boolean;    // true → загружаются курсы пользователя
  loadingCourse: boolean;          // true → загружается конкретный курс

  // --- Методы для работы с API ---
  getCourseById: (id: string) => Promise<Course | null>;   // Загрузить курс по id
  getAllCourses: () => Promise<Course[] | null>;       // Загрузить все курсы
  getAllUsersData: () => Promise<UserData | null>;    // Загрузить данные пользователя
};


export const MainCourseContext = createContext<MainCourseContextValue | undefined>(
  undefined
);
