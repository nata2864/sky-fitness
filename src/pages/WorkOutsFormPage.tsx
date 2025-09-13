import WorkOutForm from '../components/WorkOutForm/WorkOutForm';
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

  return loadingWorkouts ? (
    <Spinner />
  ) : (
    <WorkOutForm workouts={workouts} courseId={courseId} />
  );
}

export default WorkOutFormPage;
