import WorkOutForm from '../components/WorkOutForm/WorkOutForm ';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import { CourseContext } from '../context/CourseContext';
import { useContext, useEffect } from 'react';

function WorkOutFormPage() {
  const { courseId } = useParams();
  const courseContext = useContext(CourseContext);

  if (!courseContext) return null;

  const { workouts, loadingWorkouts, getWorkoutsList } = courseContext;

  useEffect(() => {
    if (courseId) {
      getWorkoutsList(courseId);
    }
  }, [courseId, getWorkoutsList]);

  // 👉 здесь определяем
  const hasNoExercises = workouts?.every(
    (lesson) => lesson.exercises.length === 0
  );

  return loadingWorkouts ? (
    <Spinner />
  ) : (
    <WorkOutForm
      workouts={workouts}
      courseId={courseId}
      hasNoExercises={hasNoExercises}
    />
  );
}

export default WorkOutFormPage;
