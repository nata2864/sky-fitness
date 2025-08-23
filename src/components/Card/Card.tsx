import * as S from './Card.styled.tsx';
import type { Course } from '../../data.tsx';
import { getCourseImage } from '../../utils/getCourseImage/getCourseImage.ts';
import { Link } from 'react-router-dom';

type CardProps = {
  // imageSrc: string;
  // imageAlt: string;
  course: Course;
  isFavorite: boolean;
};

function Card({ course, isFavorite }: CardProps) {
  const srcMinusIcon = '../../../../public/removeIcon.svg';
  const srcPlusIcon = '../../../../public/addIcon.svg';

  const { nameEN, nameRU, durationInDays, dailyDurationInMinutes, difficulty,_id } =
    course;
  const srcPath = getCourseImage(nameEN);

  

  return (
    <S.CourseCard>
      <Link to= {`/course/${_id}`}>
        <S.ImageWrapper>
          <S.CardImg $src={`/${srcPath}.png`}  />

          <S.Icon
            src={isFavorite ? srcMinusIcon : srcPlusIcon}
            alt={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          />
        </S.ImageWrapper>
      </Link>

      <S.CourseDiscription>
        <S.Title>{nameRU}</S.Title>
        <S.Duration>
          <S.Badge>
            <img src="../../../../public/time.svg" alt="time icon" />
            {durationInDays} дней
          </S.Badge>
          <S.Badge>
            <img src="../../../../public/calendar.svg" alt="calendar icon" />
            {`${dailyDurationInMinutes.from}-${dailyDurationInMinutes.to}`}{' '}
            мин/день
          </S.Badge>
        </S.Duration>

        <S.Difficulty>
          <S.Badge>
            <img
              src="../../../../public/difficulty.svg"
              alt="difficulty icon"
            />
            {difficulty}
          </S.Badge>
        </S.Difficulty>
      </S.CourseDiscription>
    </S.CourseCard>
  );
}

export default Card;
