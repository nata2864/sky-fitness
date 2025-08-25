import * as S from "./FooterContent.styled";


function FooterContent () {
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
                  <S.FooterButton>Добавить курс</S.FooterButton>
                </S.ContentBlock>
    )
}

export default FooterContent;