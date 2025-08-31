import * as S from './Card.styled.tsx';
import type { Course } from '../../data.tsx';
import { getCourseImage } from '../../utils/getCourseImage/getCourseImage.ts';
import { Link } from 'react-router-dom';
import Progress from '../Progress/Progress.tsx';
import { Button } from '../../ui/Button.styled.tsx';
import { CourseContext } from '../../context/CourseContext';
import { useContext } from 'react';

type CardProps = {
  course: Course;
  isUserCourse: boolean;
    onClick?: () => void;
    selectedCourseId?: string | null;
};

function Card({ course, isUserCourse, onClick, selectedCourseId }: CardProps) {
  // const srcMinusIcon = '/removeIcon.svg';
  // const srcPlusIcon = '/addIcon.svg';

    const context = useContext(CourseContext);
  
    if (!context) {
      // Можно отрендерить заглушку, если контекста нет
      return null;
    }
  

    const { addCourseToFavorites} = context;

  const {
    nameEN,
    nameRU,
    durationInDays,
    dailyDurationInMinutes,
    difficulty,
    _id,
  } = course;
  const srcPath = getCourseImage(nameEN);

  console.log({selectedCourseId})

  function handleAddToFavorites(){
 
if (selectedCourseId) {
  addCourseToFavorites(selectedCourseId);
}
  
}

  return (
    <S.CourseCard>
      <Link to={`/course/${_id}`}>
        <S.ImageWrapper>
          <S.CardImg $src={`/${srcPath}.png`} />
          <S.Icon
            src={isUserCourse ? '/removeIcon.svg' : '/addIcon.svg'}
            alt={isUserCourse ? 'Remove from favorites' : 'Add to favorites'}
          />
        </S.ImageWrapper>
      </Link>

      <S.CourseDiscription onClick={onClick}>
        <S.Title>{nameRU}</S.Title>
        <S.Duration>
          <S.Badge>
            <img src="/time.svg" alt="time icon" />
            {durationInDays} дней
          </S.Badge>
          <S.Badge>
            <img src="/calendar.svg" alt="calendar icon" />
            {`${dailyDurationInMinutes.from}-${dailyDurationInMinutes.to}`}{' '}
            мин/день
          </S.Badge>
        </S.Duration>

        <S.Difficulty>
          <S.Badge>
            <img src="/difficulty.svg" alt="difficulty icon" />
            {difficulty}
          </S.Badge>
        </S.Difficulty>
        <Button onClick={handleAddToFavorites}>Добавить курс</Button>
        {isUserCourse && (
          <>
            <Progress />
            <S.CourseButton>Начать тренировки</S.CourseButton>
          </>
        )}
      </S.CourseDiscription>
    </S.CourseCard>
  );
}

export default Card;
