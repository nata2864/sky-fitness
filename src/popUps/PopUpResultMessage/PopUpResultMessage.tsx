import { Overlay } from '../../ui/Overlay.styled';
import * as S from "./PopUpResultMessage.styled";
import { Link } from 'react-router-dom';
import { RoutesApp } from '../../const';

type PopUpResultMessageProps = {
  isOpenPopUp: boolean;
  onClose: () => void; // добавляем проп для закрытия
};

function PopUpResultMessage({ isOpenPopUp, onClose }: PopUpResultMessageProps) {
  return (
    <S.PopUpWrapper $isOpen={isOpenPopUp}>
      <Overlay>
        <S.MessageBlock>
          <S.SuccessMessage>Ваш прогресс засчитан!</S.SuccessMessage>

          <S.SuccessImage src="/сheck_in_сircle.svg" alt="Success img" />

          {/* "Остаться" просто вызывает onClose */}
        <S.StyledButton onClick={onClose}>
  Остаться на странице урока
</S.StyledButton>

<S.StyledLink as={Link} to={RoutesApp.MAIN}>
  Перейти на главный экран
</S.StyledLink>

          
      
        </S.MessageBlock>
      </Overlay>
    </S.PopUpWrapper>
  );
}

export default PopUpResultMessage;
