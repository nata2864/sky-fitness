
import { Overlay } from '../../ui/Overlay.styled';


import ProgressForm from '../../components/ProgressForm/ProgressForm';
import type { Exercise } from '../../sharesTypes/sharesTypes';
type PopMyProgressProps = {
  workoutTasks: Exercise[];
  courseId: string;
  workoutId: string;
  updateProgress: (courseId: string, workoutId: string, progressData: number[]) => Promise<void>;
};



 function PopMyProgress({ workoutTasks, courseId, workoutId, updateProgress }: PopMyProgressProps) {
  return (
    // <S.PopUpWorkOut $isOpen={isOpenWorkOut}>
    <Overlay>
      <ProgressForm      workoutTasks={workoutTasks}
        courseId={courseId}
        workoutId={workoutId}
        updateProgress={updateProgress}/>
    </Overlay>
    // </S.PopUpWorkOut>
  );
}

export default PopMyProgress;