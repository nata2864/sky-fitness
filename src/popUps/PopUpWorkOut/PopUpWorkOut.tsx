import WorkOutForm from '../../components/WorkOutForm/WorkOutForm ';
import { Overlay } from '../../ui/Overlay.styled';
import * as S from "./PopUpWorkOut.styled";
import type { WorkOut } from '../../sharesTypes/sharesTypes';


type PopUpWorkOutProps = {
 workouts: WorkOut[];
  isOpenWorkOut: boolean;
};

function PopUpWorkOut({ isOpenWorkOut, workouts}:PopUpWorkOutProps) {
  return (
    <S.PopUpWorkOut $isOpen={isOpenWorkOut}>
    <Overlay>
      <WorkOutForm workouts={workouts} />
    </Overlay>
    </S.PopUpWorkOut>
  );
}

export default PopUpWorkOut;
