// import { useState } from "react";
// import PopNewCard from "../PopUps/PopNewCard/PopNewCard";
// import PopUserSet from "../PopUps/PopUserSet";
// import PopExit from "../PopUps/PopExit/PopExit";
import * as S from './Header.styled.tsx';
import Container from '../../ui/Container.styled.tsx';

function Header() {
  // const [isOpenPopUser, setIsOpenPopUser] = useState(false);
  // const [isOpenPopCard, setIsOpenPopCard] = useState(false);
  // const [isOpenPopExit, setIsOpenPopExit] = useState(false);

  // function handleClickPopupUser() {
  //   setIsOpenPopUser((prev) => !prev);
  // }
  // function handleClickPopupCard() {
  //   setIsOpenPopCard(!isOpenPopCard);
  // }

  return (
    <S.Header>
      <Container>
        <S.Block>
          <S.LogoBlock>
            <a href="#">
              <img
                className=""
                src="../../../../../public/logo.svg"
                alt="Логотип "
              />
            </a>
            <S.LogoText>Онлайн-тренировки для занятий дома</S.LogoText>
          </S.LogoBlock>

          <S.ProfileBlock>
            {/* <PopNewCard isOpenPopCard ={isOpenPopCard} onClose={() => setIsOpenPopCard(false)}/> */}
            <img src="../../../../../public/profile.svg" alt="Иконка профиля" />
            <S.ProfileButton
              type="button"
              className="button_user"
              // onClick={handleClickPopupUser}
            >
              Ivan Ivanov
            </S.ProfileButton>

            {/* <PopUserSet
              setIsOpenPopUser={setIsOpenPopUser}
              setIsOpenPopExit={setIsOpenPopExit}
              isOpenPopUser={isOpenPopUser}
            /> */}
          </S.ProfileBlock>
          {/* </div> */}
        </S.Block>
        {/* <PopExit isOpen={isOpenPopExit} onClose={() => setIsOpenPopExit(false)} /> */}
      </Container>
    </S.Header>
  );
}

export default Header;
