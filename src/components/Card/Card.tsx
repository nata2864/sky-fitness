import * as S from './Card.styled.tsx';

type CardProps = {
  imageSrc: string;
  imageAlt: string;
};

function Card({ imageSrc, imageAlt }: CardProps) {
  return (
    <S.CourseCard>
      <img src={imageSrc} alt={imageAlt} />

      <S.CourseDiscription>
        <S.Title>Йога</S.Title>
        <S.Duration>
          <S.Badge>
            {' '}
            <img src="../../../../public/time.svg" alt="time icon" />
            25 дней
          </S.Badge>
          <S.Badge>
            <img src="../../../../public/calendar.svg" alt="calendar icon" />
            20-50 мин/день
          </S.Badge>
        </S.Duration>

        <S.Difficulty>
          <S.Badge>
            {' '}
            <img
              src="../../../../public/difficulty.svg"
              alt="difficulty icon"
            />
            Сложность{' '}
          </S.Badge>
        </S.Difficulty>
      </S.CourseDiscription>
    </S.CourseCard>
  );
}

export default Card;
