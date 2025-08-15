import * as S from './Card.styled.tsx';

type CardProps = {
  imageSrc: string;
  imageAlt: string;
  isFavorite: boolean;
};

function Card({ imageSrc, imageAlt, isFavorite }: CardProps) {
  const srcMinusIcon = '../../../../public/removeIcon.svg';
  const srcPlusIcon = '../../../../public/addIcon.svg';

  return (
    <S.CourseCard>
      <S.ImageWrapper>
        <S.CardImg src={imageSrc} alt={imageAlt} />

        <S.Icon
          src={isFavorite ? srcMinusIcon : srcPlusIcon}
          alt={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        />
      </S.ImageWrapper>

      <S.CourseDiscription>
        <S.Title>Йога</S.Title>
        <S.Duration>
          <S.Badge>
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
            <img
              src="../../../../public/difficulty.svg"
              alt="difficulty icon"
            />
            Сложность
          </S.Badge>
        </S.Difficulty>
      </S.CourseDiscription>
    </S.CourseCard>
  );
}

export default Card;
