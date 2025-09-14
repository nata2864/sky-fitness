import * as S from './Progress.styled';

type ProgressProps = {
  percent: number;
  // isHasExercises: boolean;
};

const Progress: React.FC<ProgressProps> = ({ percent }) => {
  return (
    <S.ProgressBlock>
      <S.ProgressText>
        {/* {isHasExercises
          ? `Прогресс ${percent}%`
          : 'Прогресс по курсу не считается'} */}
              {
         `Прогресс ${percent}%`
        }
      </S.ProgressText>
      <S.ProgressBar type="range" value={percent} max={100} readOnly />
    </S.ProgressBlock>
  );
};

export default Progress;
