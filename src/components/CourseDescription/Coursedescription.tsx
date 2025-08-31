import Container from '../../ui/Container.styled';
import * as S from './CourseDescription.styled';
import {
  IconTextBlock,
  IconImage,
  IconText,
} from '../../ui/IconTextBlock.styled';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCourseImage } from '../../utils/getCourseImage/getCourseImage';
import FooterContent from '../FooterContent/FooterContent';
import { useContext } from 'react';

import { CourseContext } from '../../context/CourseContext';

function CourseDescription() {
  // const [isOpenWorkOut, setIsOpenPopWorkOut] = useState(false);
  const { courseId } = useParams();
  const navigate = useNavigate();

      const context = useContext(CourseContext);
  
    if (!context) {
      // Можно отрендерить заглушку, если контекста нет
      return null;
    }
  

    const { addCourseToFavorites} = context;


  const { course, getCourseById } = useContext(CourseContext)!;

  useEffect(() => {
    if (courseId) getCourseById(courseId);
  }, [courseId, getCourseById]);


  if (!course) {
    return null;
  }

  if (!courseId) {
    return null;
  }

  const { nameEN, fitting, directions } = course;
  const basePath = getCourseImage(nameEN);
  const images = {
    desktop: `/${basePath}_big.png`,
    mobile: `/${basePath}.png`,
  };

  function handleClickPopUpWorkOut() {

    if (courseId){
        addCourseToFavorites(courseId);
    }

 


    navigate(`/course/${courseId}/workouts`);
  }
  return (
    <>
      <Container>
        <S.DescriptionBlock>
          <S.CourseImage $desktop={images.desktop} $mobile={images.mobile} />

          <S.Title>Подойдет для вас, если:</S.Title>
          <S.SuggestionsBlock>
            {fitting.map((fit: string, index: number) => (
              <S.Suggestion key={index}>
                <S.SuggestionNumber>{index + 1}</S.SuggestionNumber>
                <S.SuggestionText>{fit}</S.SuggestionText>
              </S.Suggestion>
            ))}
          </S.SuggestionsBlock>
        </S.DescriptionBlock>
        <S.DirectionsBlock>
          <S.Title>Направления</S.Title>
          <S.Directions>
            {directions.map((direction: string, index: number) => (
              <IconTextBlock key={index}>
                <IconImage src="/Sparcle.svg"></IconImage>
                <IconText> {direction}</IconText>
              </IconTextBlock>
            ))}
          </S.Directions>
        </S.DirectionsBlock>
        <S.FooterCourseDiscription>
          <FooterContent onClick={handleClickPopUpWorkOut} />

          <S.FooterImage src="/footerImg.png" />

          {/* </S.FooterImage> */}
        </S.FooterCourseDiscription>
      </Container>

      <S.MobileFooter>
        {/* упрощённая верстка для мобилы */}
        <S.MobileImage src="/footerImg.png" />
        <Container>
          <S.MobileCard>
            <FooterContent onClick={handleClickPopUpWorkOut} />
          </S.MobileCard>
        </Container>
      </S.MobileFooter>
      {/* <PopUpWorkOut workouts={workouts} isOpenWorkOut={isOpenWorkOut} /> */}
    </>
  );
}

export default CourseDescription;
