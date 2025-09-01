
import { Overlay } from '../../ui/Overlay.styled';
import * as S from './PopMyProgress.styled'
import type { ProgressData } from '../../sharesTypes/sharesTypes';
import ProgressForm from '../../components/ProgressForm/ProgressForm';
import type { Exercise } from '../../sharesTypes/sharesTypes';
type PopMyProgressProps = {
  workoutTasks: Exercise[];
  courseId: string;
  workoutId: string;
  isOpenPopMyProgress:boolean;
 setIsOpenPopMyProgress: (open: boolean) => void;
  updateProgress: (courseId: string, workoutId: string, progressData: ProgressData) => Promise<void>;
};



 function PopMyProgress({ workoutTasks, courseId, workoutId, updateProgress ,isOpenPopMyProgress,setIsOpenPopMyProgress}: PopMyProgressProps) {
  return (
    <S.PopUpWorkOut $isOpen={isOpenPopMyProgress}>
    <Overlay>
      <ProgressForm      
      setIsOpenPopMyProgress={setIsOpenPopMyProgress}
      workoutTasks={workoutTasks}
        courseId={courseId}
        workoutId={workoutId}
        updateProgress={updateProgress}/>
    </Overlay>
     </S.PopUpWorkOut>
  );
}

export default PopMyProgress;