import Container from '../../ui/Container.styled';
import Progress from '../Progress/Progress';
import ProgressForm from '../ProgressForm/ProgressForm';
import * as S from './WorkOut.styled';

function PopMyProgress() {
  return (
    <>
    <Container>
      <S.Title>Йога</S.Title>
      <S.VideoCourse />
      <S.CourseProgressBlock>
        <S.CourseProgressTitle>Упражнения тренировки 2</S.CourseProgressTitle>
        <S.CourseProgressBox>
            <Progress/>
              <Progress/>
                <Progress/>
                  <Progress/>
                   <Progress/>
              <Progress/>
                <Progress/>
                  <Progress/>
                   <Progress/>

        </S.CourseProgressBox>
            <S.CourseProgressButton>Заполнить свой прогресс</S.CourseProgressButton>
      </S.CourseProgressBlock>
    </Container>
    <ProgressForm/>
    </>
  );
}

export default PopMyProgress;
