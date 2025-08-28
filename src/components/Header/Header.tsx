import { useState } from "react";
// import PopNewCard from "../PopUps/PopNewCard/PopNewCard";
// import PopUserSet from "../PopUps/PopUserSet";
// import PopExit from "../PopUps/PopExit/PopExit";
import * as S from './Header.styled.tsx';
import Container from '../../ui/Container.styled.tsx';
import PopUserSet from "../../popUps/PopUserSet/PopUserSet.tsx";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Button } from "../../ui/Button.styled.tsx";
import { getUsernameFromEmail } from "../../utils/getUsernameFromEmail/getUsernameFromEmail.ts";

function Header() {
  const [isOpenPopUser, setIsOpenPopUser] = useState(false);
  // const [isOpenPopCard, setIsOpenPopCard] = useState(false);
  // const [isOpenPopExit, setIsOpenPopExit] = useState(false);
   const { user } = useContext(AuthContext);
   console.log({user})
  const parsedMail = getUsernameFromEmail(user?.login || '');

  function handleClickPopupUser() {
    setIsOpenPopUser((prev) => !prev);
  }
  // function handleClickPopupCard() {
  //   setIsOpenPopCard(!isOpenPopCard);
  // }

  return (
      <Container>
    <S.Header>
    
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
  {user ? 
  <S.ProfileBlock>
            {/* <PopNewCard isOpenPopCard ={isOpenPopCard} onClose={() => setIsOpenPopCard(false)}/> */}
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
          </S.ProfileBlock> : <Button >Войти</Button>}
          
          {/* </div> */}
        </S.Block>
        {/* <PopExit isOpen={isOpenPopExit} onClose={() => setIsOpenPopExit(false)} /> */}
  
    </S.Header>
        </Container>
  );
}

export default Header;
