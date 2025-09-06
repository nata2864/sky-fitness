import { useState } from 'react';
import * as S from './Header.styled.tsx';
import Container from '../../ui/Container.styled.tsx';
import PopUserSet from '../../popUps/PopUserSet/PopUserSet.tsx';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

import { getUsernameFromEmail } from '../../utils/getUsernameFromEmail/getUsernameFromEmail.ts';
import { Link, useNavigate } from 'react-router-dom';
import { RoutesApp } from '../../const.tsx';




function Header() {
  const [isOpenPopUser, setIsOpenPopUser] = useState(false);
    const navigate = useNavigate();

  const { token,  logout, userName } = useContext(AuthContext);
  //  console.log({user});
  console.log({  token });
   console.log({  logout});
  //   console.log({ updateUserInfo });
  const parsedMail = getUsernameFromEmail(userName || '');



  function handleLogout(e: { preventDefault: () => void; }) {
    e.preventDefault();
    logout();
    navigate(RoutesApp.SIGN_IN);
  }

  function handleClickPopupUser() {
    setIsOpenPopUser((prev) => !prev);
  }

  return (
    <Container>
      <S.Header>
        <S.Block>
          <S.LogoBlock>
             <Link to= {"/"}>
              <img
                className=""
                src="/logo.svg"
                alt="Логотип "
              />
    </Link> 
            <S.LogoText>Онлайн-тренировки для занятий дома</S.LogoText>
          </S.LogoBlock>
                <S.HeaderButton onClick={handleLogout}>Exit</S.HeaderButton>
          {token ? (
            <S.ProfileBlock>
              <img src="/profile.svg" alt="Иконка профиля" />
              <S.ProfileButton
                type="button"
                className="button_user"
                onClick={handleClickPopupUser}
              >
                {parsedMail}
              </S.ProfileButton>

              <PopUserSet
                setIsOpenPopUser={setIsOpenPopUser}
                // setIsOpenPopExit={setIsOpenPopExit}
                isOpenPopUser={isOpenPopUser}
              />
            </S.ProfileBlock>
          ) : (
            <S.HeaderButton>Войти</S.HeaderButton>
          )}
        </S.Block>
      </S.Header>
    </Container>
  );
}

export default Header;
