// hooks/useWorkouts.ts
import { useEffect,useContext, useState } from "react";
import { fetchListWorkOuts } from "../services/api";
import { handleAxiosError } from "../utils/handleAxiosError/handleAxiosError";
import type { WorkOutLesson } from "../sharesTypes/sharesTypes";
import { AuthContext } from '../context/AuthContext'

export const useWorkoutsList = (courseId: string | undefined) => {
  const [workouts, setWorkouts] = useState<WorkOutLesson[]>([]);
  const [loading, setLoading] = useState(false);

const { token } = useContext(AuthContext);

useEffect(() => {
  if (!courseId || !token) return;

  const loadWorkouts = async () => {
    setLoading(true);
    try {
      const data = await fetchListWorkOuts(token, courseId);
      setWorkouts(data ?? []);
    } catch (err) {
      handleAxiosError(err);
    } finally {
      setLoading(false);
    }
  };

  loadWorkouts();
}, [courseId, token]);

  return { workouts,loading};
};
