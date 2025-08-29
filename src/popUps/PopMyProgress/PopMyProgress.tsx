
import { Overlay } from '../../ui/Overlay.styled';


import ProgressForm from '../../components/ProgressForm/ProgressForm';
import type { Exercise } from '../../sharesTypes/sharesTypes';

type PopMyProgressProps= {

 workoutTasks: Exercise[]   
}



function PopMyProgress({workoutTasks}: PopMyProgressProps) {
  return (
    // <S.PopUpWorkOut $isOpen={isOpenWorkOut}>
    <Overlay>
      <ProgressForm workoutTasks={workoutTasks}/>
    </Overlay>
    // </S.PopUpWorkOut>
  );
}

export default PopMyProgress;