import WorkOutForm from '../components/WorkOutForm/WorkOutForm ';
import { useParams } from 'react-router-dom';
import { useWorkoutsList } from '../hooks/useWorkoutsList';
import { PopUpWrapper } from '../ui/PopUpWrapper.styled ';
function WorkOutFormPage() {
  const { courseId } = useParams();
  const { workouts } = useWorkoutsList(courseId);

  return (
    <PopUpWrapper>
      <WorkOutForm workouts={workouts} courseId={courseId} />
    </PopUpWrapper>
  );
}

export default WorkOutFormPage;
