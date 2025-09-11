import Container from '../../ui/Container.styled';
import * as S from './WorkOut.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import { CourseContext } from '../../context/CourseContext';
import PopMyProgress from '../../popUps/PopMyProgress/PopMyProgress';
import { getTotalProgressNumber } from '../../utils/getTotalProgressNumber/getTotalProgressNumber';
import { calculateProgress } from '../../utils/calculateProgress/calculateProgress';
import PopUpResultMessage from '../../popUps/PopUpResultMessage/PopUpResultMessage';
// import { markProgressDataDone } from '../../utils/markProgressDataDone';

function WorkOut() {
  const context = useContext(CourseContext);
  const [isOpenPopMyProgress, setIsOpenPopMyProgress] = useState(false);
  const [isOpenPopUpResultMessage, setIsPopUpResultMessage] = useState(false);

  if (!context) return null;

  const {
    workOut,
    getWorkoutById,
    course,
    getProgress,
    progress,
    updateProgress,
    courseProgress,
    markProgressDataDone,
    getCourseProgressById,
  } = context;

  const { workoutId, courseId } = useParams();

  useEffect(() => {
    if (workoutId) getWorkoutById(workoutId);
  }, [workoutId, getWorkoutById]);

  useEffect(() => {
    if (workoutId && courseId) {
      getProgress(courseId, workoutId);
    }
  }, [courseId, workoutId, getProgress]);

  useEffect(() => {
    if (courseId) {
      getCourseProgressById(courseId);
    }
  }, [courseId, getCourseProgressById]);

  if (!workOut || !progress) return null;

  const progresDataWorkOut = progress.progressData;
  const workoutTasks = workOut.exercises;
  const hasNoTasks = progress.IsNotProgressData;

  const handleClickPopMyProgress = () => {
    setIsOpenPopMyProgress((prev) => !prev);
  };

  const handleClickMarkDone = () => {
    markProgressDataDone();
    setIsPopUpResultMessage(true);
  };

  console.log(progress);

  return (
    <Container>
      <S.Title>{course?.nameRU}</S.Title>
      <S.VideoCourse src={workOut.video} allowFullScreen />
      <S.CourseProgressTitle>{workOut.name}</S.CourseProgressTitle>
      <S.CourseProgressBox>
        {hasNoTasks ? (
          <S.WorkOutsButton onClick={handleClickMarkDone}>
            Урок пройден
          </S.WorkOutsButton>
        ) : (
          <>
            {workoutTasks.map((workOuttask, index) => {
              const doneReps = progresDataWorkOut?.[index] ?? 0;
              const totalReps = getTotalProgressNumber(workOuttask.name);
              const progressValue = calculateProgress(doneReps, totalReps);

              return (
                <S.ProgressBlock key={workOuttask._id || index}>
                  <S.ProgressText>
                    {workOuttask.name} — {progressValue}%
                  </S.ProgressText>
                  <S.ProgressBar type="range" value={progressValue} max={100} />
                </S.ProgressBlock>
              );
            })}
            <S.WorkOutsButton onClick={handleClickPopMyProgress}>
              Заполнить свой прогресс
            </S.WorkOutsButton>
          </>
        )}
      </S.CourseProgressBox>

      {!hasNoTasks && (
        <PopMyProgress
          workoutTasks={workoutTasks}
          courseId={courseId!}
          workoutId={workoutId!}
          updateProgress={updateProgress}
          isOpenPopMyProgress={isOpenPopMyProgress}
          setIsOpenPopMyProgress={setIsOpenPopMyProgress}
          currentProgress={progresDataWorkOut}
        />
      )}

      <PopUpResultMessage isOpenPopUp={isOpenPopUpResultMessage} />
    </Container>
  );
}

export default WorkOut;
