// hooks/useWorkouts.ts
import { useEffect, useState } from "react";
import { fetchListWorkOuts } from "../services/api";
import { handleAxiosError } from "../utils/handleAxiosError/handleAxiosError";
import type { WorkOutLesson } from "../sharesTypes/sharesTypes";

export const useWorkoutsList = (courseId: string | undefined) => {
  const [workouts, setWorkouts] = useState<WorkOutLesson[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (!courseId) return;
    const loadWorkouts = async () => {
      setLoading(true);

      try {
        const data = await fetchListWorkOuts(courseId);
        setWorkouts(data ?? []);
      } catch (err) {
        handleAxiosError(err);
       
      } finally {
        setLoading(false);
      }
    };
    loadWorkouts();
  }, [courseId]);

  return { workouts,loading};
};
