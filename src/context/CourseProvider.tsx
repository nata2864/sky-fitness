import { useState, useCallback } from "react";
import { CourseContext } from "./CourseContext";
import type { Course } from "../sharesTypes/sharesTypes";
import { fetchCoursesById } from "../services/api";
import { handleAxiosError } from "../utils/handleAxiosError/handleAxiosError";

type CourseProviderProps = {
  children: React.ReactNode;
};

const CourseProvider = ({ children }: CourseProviderProps) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(false);

  const getCourseById = useCallback(async (id: string) => {
    if (!id) return;
    setLoading(true);

    try {
      const data = await fetchCoursesById(id);
      setCourse(data ?? null);
    } catch (err) {
      handleAxiosError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <CourseContext.Provider
      value={{
        course,
        loading,
        getCourseById, // теперь вызывается с айдишкой
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
