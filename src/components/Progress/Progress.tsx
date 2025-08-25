
import * as S from './Progress.styled'


function Progress() {
  

  return (
<S.ProgressBlock>
    <S.ProgressText>Прогресс 40%</S.ProgressText>
    <S.ProgressBar type="range" value={50} max={100}/>
</S.ProgressBlock>
  );
}

export default Progress;
