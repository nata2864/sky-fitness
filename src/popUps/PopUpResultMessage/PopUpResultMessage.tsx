
import { Overlay } from '../../ui/Overlay.styled';
import * as S from "./PopUpResultMessage.styled";



type PopUpResultMessageProps = {

  isOpenPopUp: boolean;
};

function PopUpResultMessage({ isOpenPopUp}:PopUpResultMessageProps) {
  return (
    <S.PopUpWrapper $isOpen={isOpenPopUp}>
    <Overlay>
     <S.MessageBlock>
      <p>Ваш прогресс засчитан!</p>
     </S.MessageBlock>
    </Overlay>
    </S.PopUpWrapper>
  );
}

export default PopUpResultMessage;
