// import { useState } from "react";
// import PopNewCard from "../PopUps/PopNewCard/PopNewCard";
// import PopUserSet from "../PopUps/PopUserSet";
// import PopExit from "../PopUps/PopExit/PopExit";
import  * as S from "./Header.styled.js"


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
    <S.Header >
      <S.Block>
        {/* <div className="header__block"> */}
          <S.LogoBlock>
            <a href="#" >
              <img
                src="../../../public/logo.svg"
                alt="Логотип "
              />
            </a>
            <p>Онлайн-тренировки для занятий дома</p>
          </S.LogoBlock>
   
          <S.ProfileBlock>
          

            {/* <PopNewCard isOpenPopCard ={isOpenPopCard} onClose={() => setIsOpenPopCard(false)}/> */}
<img src="../../../public/profile.svg"  alt="Иконка профиля"/>
            <button
              className="button_user"
              // onClick={handleClickPopupUser}
            >
              Ivan Ivanov
            </button>

            {/* <PopUserSet
              setIsOpenPopUser={setIsOpenPopUser}
              setIsOpenPopExit={setIsOpenPopExit}
              isOpenPopUser={isOpenPopUser}
            /> */}
          </S.ProfileBlock>
        {/* </div> */}
      </S.Block>
      {/* <PopExit isOpen={isOpenPopExit} onClose={() => setIsOpenPopExit(false)} /> */}
    </S.Header>
  );
}

export default Header;
