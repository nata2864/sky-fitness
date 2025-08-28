import { useState, useEffect, useCallback } from "react";
import type { ReactNode } from "react";
import { CourseContext } from "./CourseContext";
import type { Course } from "../sharesTypes/sharesTypes";
import { fetchCoursesById } from "../services/api";
import { handleAxiosError } from "../utils/handleAxiosError/handleAxiosError";

// Тип пропсов провайдера
type CourseProviderProps = {
  children: ReactNode;
  courseId: string; // ID курса передаётся в провайдер
}

// Тип значения контекста
// interface CourseContextValue {
//   course: Course | null;

// }

const CourseProvider = ({ children, courseId }: CourseProviderProps) => {
  const [course, setCourse] = useState<Course | null>(null);


  const getCourseById = useCallback(async () => {

    try {
      const data = await fetchCoursesById(courseId);
      if (data) {
        setCourse(data);
      } else {
        setCourse(null);
      }
    } catch (err) {
      handleAxiosError(err);
  
    } 
  }, [courseId]);

  useEffect(() => {
    getCourseById();
  }, [getCourseById]);

  // const value: CourseContextValue = {
  //   course

  // };

  return (
    <CourseContext.Provider value={{course}}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
