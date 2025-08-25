import { useNavigate } from 'react-router-dom';

import * as S from './PopUserSet.styled.ts';
import { RoutesApp } from '../../const';

// import { AuthContext } from "../../../context/AuthContext";
// import { useContext } from "react";

type PopUserSetProps = {
  setIsOpenPopUser: (open: boolean) => void;
  isOpenPopUser: boolean;
};

function PopUserSet({ setIsOpenPopUser, isOpenPopUser }: PopUserSetProps) {
  // const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <S.PopUserSet $isOpen={isOpenPopUser}>
      <div>
        <S.UserName>Ivan</S.UserName>
        <S.UserMail>sergey.petrov96@mail.ru</S.UserMail>

        <S.PopUserButton
          type="button"
          onClick={() => {
            navigate(RoutesApp.PROFILE);
            setIsOpenPopUser(false);
          }}
        >
          Мой профиль
        </S.PopUserButton>

        <S.PopUserSecondaryButton
          type="button"
          onClick={() => {
            setIsOpenPopUser(false);
            navigate(RoutesApp.EXIT);
          }}
        >
          Выйти
        </S.PopUserSecondaryButton>
      </div>
    </S.PopUserSet>
  );
}

export default PopUserSet;
