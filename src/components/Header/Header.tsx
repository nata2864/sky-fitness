import { useState } from 'react';
import * as S from './Header.styled.tsx';
import Container from '../../ui/Container.styled.tsx';
import PopUserSet from '../../popUps/PopUserSet/PopUserSet.tsx';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Button } from '../../ui/Button.styled.tsx';
import { getUsernameFromEmail } from '../../utils/getUsernameFromEmail/getUsernameFromEmail.ts';

function Header() {
  const [isOpenPopUser, setIsOpenPopUser] = useState(false);

  const { user, login, logout, updateUserInfo } = useContext(AuthContext);
   console.log({user});
  console.log({  login });
   console.log({  logout});
    console.log({ updateUserInfo });
  const parsedMail = getUsernameFromEmail(user?.login || '');

  function handleClickPopupUser() {
    setIsOpenPopUser((prev) => !prev);
  }

  return (
    <Container>
      <S.Header>
        <S.Block>
          <S.LogoBlock>
            <a href="#">
              <img
                className=""
                src="/logo.svg"
                alt="Логотип "
              />
            </a>
            <S.LogoText>Онлайн-тренировки для занятий дома</S.LogoText>
          </S.LogoBlock>
          {user ? (
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
            <Button>Войти</Button>
          )}
        </S.Block>
      </S.Header>
    </Container>
  );
}

export default Header;
