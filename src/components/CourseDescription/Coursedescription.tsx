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
import { useContext, useCallback } from 'react';

import { toast } from 'react-toastify';
// import { CourseContext } from '../../context/CourseContext';
import { addFavoriteCourse } from '../../services/api';

import { RoutesApp } from '../../const';
import { AuthContext } from '../../context/AuthContext';
import { MainCourseContext } from '../../context/MainCourseContext ';
import Spinner from '../Spinner/Spinner';

function CourseDescription() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  const context = useContext(MainCourseContext);

  if (!context) {
    // Можно отрендерить заглушку, если контекста нет
    return null;
  }

  const { course, getCourseById, loadingCourse } = context;

  const addCourseToFavorites = useCallback(async (courseId: string) => {
    try {
      const message = await addFavoriteCourse(token, courseId);

      toast.success(message);
    } catch (err) {
      toast.error('Курс уже был добавлен!');
    }
  }, []);

  useEffect(() => {
    if (courseId) getCourseById(courseId);
  }, [courseId, getCourseById]);

  if (loadingCourse) {
    return <Spinner />; 
  }

  if (!course) {
    return null;
  }

  if (!course) {
    return <div>Курс не найден</div>;
  }

  const { nameEN, fitting, directions } = course;
  const basePath = getCourseImage(nameEN);
  const images = {
    desktop: `/${basePath}_big.png`,
    mobile: `/${basePath}.png`,
  };

  function handleFooterButtonClick() {
    if (!token) {
      navigate(RoutesApp.SIGN_IN);
      return;
    }

    if (courseId) {
      addCourseToFavorites(courseId);
    }
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
          <FooterContent onClick={handleFooterButtonClick} />

          <S.FooterImage src="/footerImg.png" />

          {/* </S.FooterImage> */}
        </S.FooterCourseDiscription>
      </Container>

      <S.MobileFooter>
        <S.MobileImage src="/footerImg.png" />
        <Container>
          <S.MobileCard>
            <FooterContent onClick={handleFooterButtonClick} />
          </S.MobileCard>
        </Container>
      </S.MobileFooter>
  
    </>
  );
}

export default CourseDescription;
