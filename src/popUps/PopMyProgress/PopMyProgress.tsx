
import { Overlay } from '../../ui/Overlay.styled';
import * as S from './PopMyProgress.styled'

import ProgressForm from '../../components/ProgressForm/ProgressForm';
import type { Exercise } from '../../sharesTypes/sharesTypes';
type PopMyProgressProps = {
  workoutTasks: Exercise[];
  courseId: string;
  workoutId: string;
  isOpenPopMyProgress:boolean;
 
  updateProgress: (courseId: string, workoutId: string, progressData: number[]) => Promise<void>;
};



 function PopMyProgress({ workoutTasks, courseId, workoutId, updateProgress ,isOpenPopMyProgress}: PopMyProgressProps) {
  return (
    <S.PopUpWorkOut $isOpen={isOpenPopMyProgress}>
    <Overlay>
      <ProgressForm      workoutTasks={workoutTasks}
        courseId={courseId}
        workoutId={workoutId}
        updateProgress={updateProgress}/>
    </Overlay>
     </S.PopUpWorkOut>
  );
}

export default PopMyProgress;