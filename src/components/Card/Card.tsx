import * as S from './Card.styled.tsx';
import type { Course } from '../../data.tsx';
import { getCourseImage } from '../../utils/getCourseImage/getCourseImage.ts';

import Progress from '../Progress/Progress.tsx';

import { CourseContext } from '../../context/CourseContext';
import { useContext } from 'react';



type CardProps = {
  course: Course;
  isUserCourse: boolean;
  onClick?: () => void;
 
  onIconClick?: (courseId: string) => void; // 👉 новый проп
};

function Card({ course, isUserCourse, onClick,onIconClick }: CardProps) {
  const context = useContext(CourseContext);

  if (!context) {
    return null;
  }

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
      <S.ImageWrapper>
        <S.CardImg $src={`/${srcPath}.png`} />
        <S.Icon
          src={isUserCourse ? '/removeIcon.svg' : '/addIcon.svg'}
          alt={isUserCourse ? 'Remove from favorites' : 'Add to favorites'}
          onClick={() => onIconClick?.(_id)} 
        />
      </S.ImageWrapper>

      <S.CourseDiscription onClick={onClick}>
        <S.Title>{nameRU}</S.Title>
        <S.Duration>
          <S.Badge>
            <img src="/time.svg" alt="time icon" />
            {durationInDays} дней
          </S.Badge>
          <S.Badge>
            <img src="/calendar.svg" alt="calendar icon" />
            {`${dailyDurationInMinutes.from}-${dailyDurationInMinutes.to}`} мин/день
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

  