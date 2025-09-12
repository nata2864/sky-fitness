import * as S from './Progress.styled'

type ProgressProps = {
  percent: number;
  isHasNoExercises: boolean;
};

const Progress: React.FC<ProgressProps> = ({ percent, isHasNoExercises }) => {
  return (
    <S.ProgressBlock>
      <S.ProgressText>
        {isHasNoExercises ? 'Прогресс по курсу не считается' : `Прогресс ${percent}%`}
      </S.ProgressText>
      <S.ProgressBar type="range" value={percent} max={100} readOnly />
    </S.ProgressBlock>
  );
};

export default Progress;
