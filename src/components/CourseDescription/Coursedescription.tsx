import Container from '../../ui/Container.styled';
import * as S from './CourseDescription.styled';
import {
  IconTextBlock,
  IconImage,
  IconText,
} from '../../ui/IconTextBlock.styled';

import FooterContent from '../FooterContent/FooterContent';

function CourseDescription() {
  const srcIcon = '/public/Sparcle.svg';

  return (
    <><Container>
      <S.DescriptionBlock>
        <S.CourseImage  />

        <S.Title>Подойдет для вас, если:</S.Title>
        <S.SuggestionsBlock>
          <S.Suggestion>
            <S.SuggestionNumber>1</S.SuggestionNumber>
            <S.SuggestionText>
              Давно хотели попробовать йогу, но не решались начать
            </S.SuggestionText>
          </S.Suggestion>
          <S.Suggestion>
            <S.SuggestionNumber>2</S.SuggestionNumber>
            <S.SuggestionText>
              Давно хотели попробовать йогу, но не решались начать
            </S.SuggestionText>
          </S.Suggestion>
          <S.Suggestion>
            <S.SuggestionNumber>3</S.SuggestionNumber>
            <S.SuggestionText>
              Давно хотели попробовать йогу, но не решались начать
            </S.SuggestionText>
          </S.Suggestion>
        </S.SuggestionsBlock>
      </S.DescriptionBlock>
      <S.DirectionsBlock>
        <S.Title>Направления</S.Title>
        <S.Directions>
          <IconTextBlock>
            <IconImage src={srcIcon}></IconImage>
            <IconText> Йога для новичков</IconText>
          </IconTextBlock>
          <IconTextBlock>
            <IconImage src={srcIcon}></IconImage>
            <IconText> Кундалини-йога</IconText>
          </IconTextBlock>
          <IconTextBlock>
            <IconImage src={srcIcon}></IconImage>
            <IconText> Хатха-йога</IconText>
          </IconTextBlock>
          <IconTextBlock>
            <IconImage src={srcIcon}></IconImage>
            <IconText> Классическая йога</IconText>
          </IconTextBlock>
          <IconTextBlock>
            <IconImage src={srcIcon}></IconImage>
            <IconText> Йога для новичков</IconText>
          </IconTextBlock>
          <IconTextBlock>
            <IconImage src={srcIcon}></IconImage>
            <IconText> Йога для новичков</IconText>
          </IconTextBlock>
        </S.Directions>
      </S.DirectionsBlock>
   <S.FooterCourseDiscription>
    <FooterContent/>
        {/* <S.FooterContent>
          <S.FooterTitle>Начните путь к новому телу</S.FooterTitle>
          <S.FooterList>
            <li>проработка всех групп мышц</li>
            <li>тренировка суставов</li>
            <li>улучшение циркуляции крови</li>
            <li>упражнения заряжают бодростью</li>
            <li>помогают противостоять стрессам</li>
          </S.FooterList>
          <Button>Добавить курс</Button>
        </S.FooterContent> */}
        {/* <S.FooterImage> */}
    
               {/* <S.FooterImage src="../../../../../../public/footerImg3.png" /> */}
                 <S.FooterImage src="../../../../../../public/footerImg.png" />
          
        {/* </S.FooterImage> */}
      </S.FooterCourseDiscription>
    </Container>
       
      <S.MobileFooter>
    {/* упрощённая верстка для мобилы */}
    <S.MobileImage src="../../../../../../public/footerImg.png"/>
     <Container>
      <S.MobileCard>
       
        {/* <S.MobileContent>
      <h2>Начните путь к новому телу</h2>
      <ul>
        <li>проработка всех групп мышц</li>
        <li>тренировка суставов</li>
        <li>улучшение циркуляции крови</li>
        <li>упражнения заряжают бодростью</li>
        <li>помогают противостоять стрессам</li>
      </ul>
      <Button>Добавить курс</Button>
      </S.MobileContent> */}
      <FooterContent/>
    
    </S.MobileCard>
   </Container>
  </S.MobileFooter>
    </>
    
  );
}

export default CourseDescription;
