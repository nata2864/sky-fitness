import Container from '../../ui/Container.styled';
import * as S from './CourseDescription.styled';
import {
  IconTextBlock,
  IconImage,
  IconText,
} from '../../ui/IconTextBlock.styled';
import { useParams } from "react-router-dom";
import courses from '../../data';

import { getCourseImage } from '../../utils/getCourseImage/getCourseImage';
import FooterContent from '../FooterContent/FooterContent';



function CourseDescription() {
  const srcIcon = '/public/Sparcle.svg';
    const {_id } = useParams();

    const course = courses.find(course => course._id === _id);

if (!course) {
  return ;
}

const { nameEN, fitting, directions } = course;
const basePath = getCourseImage(nameEN);

const images = {
  desktop: `/${basePath}_big.png`,
  mobile: `/${basePath}.png`,
};

  return (
    <><Container>
      <S.DescriptionBlock>
        
        <S.CourseImage  $desktop={images.desktop} $mobile={images.mobile}
         />

        <S.Title>Подойдет для вас, если:</S.Title>
        <S.SuggestionsBlock>

{fitting.map((fit:string, index:number) => (
  <S.Suggestion key={index}>
    <S.SuggestionNumber>{index + 1}</S.SuggestionNumber>
    <S.SuggestionText>
      {fit}
    </S.SuggestionText>
  </S.Suggestion>
))}


        </S.SuggestionsBlock>
      </S.DescriptionBlock>
      <S.DirectionsBlock>
        <S.Title>Направления</S.Title>
        <S.Directions>


{directions.map((direction:string, index:number) => (
 <IconTextBlock key={index}>
            <IconImage src={srcIcon}></IconImage>
            <IconText> {direction}</IconText>
          </IconTextBlock>
))}




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
              {/* <img src="/greenLine.svg" alt="" /> */}
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
