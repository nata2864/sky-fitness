import * as S from './Card.styled.tsx';
import type { Course } from '../../data.tsx';
import { getCourseImage } from '../../utils/getCourseImage/getCourseImage.ts';
import { Link } from 'react-router-dom';
import Progress from '../Progress/Progress.tsx';

type CardProps = {
  course: Course;
  isUserCourse: boolean;
};

function Card({ course, isUserCourse }: CardProps) {
  // const srcMinusIcon = '/removeIcon.svg';
  // const srcPlusIcon = '/addIcon.svg';

  const {
    nameEN,
    nameRU,
    durationInDays,
    dailyDurationInMinutes,
    difficulty,
    _id,
  } = course;
  const srcPath = getCourseImage(nameEN);

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

      <S.CourseDiscription>
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
