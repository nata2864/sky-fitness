import Container from '../../ui/Container.styled';
import * as S from './CourseDescription.styled';
import {
  IconTextBlock,
  IconImage,
  IconText,
} from '../../ui/IconTextBlock.styled';
import { useParams } from 'react-router-dom';
// import courses from '../../data';
import {  useState, useEffect } from 'react';
import { getCourseImage } from '../../utils/getCourseImage/getCourseImage';
import FooterContent from '../FooterContent/FooterContent';
import { useContext } from 'react';
import PopUpWorkOut from '../../popUps/PopUpWorkOut/PopUpWorkOut';
import { useWorkoutsList } from '../../hooks/useWorkoutsList';
import { CourseContext } from '../../context/CourseContext';

function CourseDescription() {
  const [isOpenWorkOut, setIsOpenPopWorkOut] = useState(false);
  const { _id } = useParams();
  const { workouts } = useWorkoutsList(_id);
 const { course, getCourseById } = useContext(CourseContext)!;

 console.log({course})
  const srcIcon = '/Sparcle.svg';
  // const course = courses.find((course) => course._id === _id);

  if (!_id) {
  return null; // или можно редирект сделать
}
  useEffect(() => {
  getCourseById(_id); 
}, []);

  if (!course) {
    return null;
  }

  const { nameEN, fitting, directions } = course;
  const basePath = getCourseImage(nameEN);
  const images = {
    desktop: `/${basePath}_big.png`,
    mobile: `/${basePath}.png`,
  };



  function handleClickPopUpWorkOut() {
    setIsOpenPopWorkOut((prev) => !prev);
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
                <IconImage src={srcIcon}></IconImage>
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
      <PopUpWorkOut workouts={workouts} isOpenWorkOut={isOpenWorkOut} />
    </>
  );
}

export default CourseDescription;
