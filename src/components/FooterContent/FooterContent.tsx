import * as S from "./FooterContent.styled";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

type FooterContentProps = {
  onClick?: () => void;
};

function FooterContent ({ onClick }: FooterContentProps) {
   const { user } = useContext(AuthContext);
    return (
           <S.ContentBlock>
                  <S.FooterTitle>Начните путь к новому телу</S.FooterTitle>
                  <S.FooterList>
                    <li>проработка всех групп мышц</li>
                    <li>тренировка суставов</li>
                    <li>улучшение циркуляции крови</li>
                    <li>упражнения заряжают бодростью</li>
                    <li>помогают противостоять стрессам</li>
                  </S.FooterList>
                  <S.FooterButton onClick={onClick}>
                    
                    
                    {user ? "Добавить курc" : "Войдите, чтобы добавить курс"}
                    
                    
                  </S.FooterButton>
                  <S.FooterButton >
                    
                    
          Удалить курс
                    
                    
                  </S.FooterButton>
           </S.ContentBlock>
    )
}

export default FooterContent;
