import Container from '../../ui/Container.styled';
// import Progress from '../Progress/Progress';
// import ProgressForm from '../ProgressForm/ProgressForm';
import * as S from './WorkOut.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { CourseContext } from '../../context/CourseContext';
import PopMyProgress from '../../popUps/PopMyProgress/PopMyProgress';
import { getTotalProgressNumber } from '../../utils/getTotalProgressNumber/getTotalProgressNumber';
import { calculateProgress } from '../../utils/calculateProgress/calculateProgress';
import { useState } from 'react';
import PopUpResultMessage from '../../popUps/PopUpResultMessage/PopUpResultMessage';


function WorkOut() {
  const context = useContext(CourseContext);
  const [isOpenPopMyProgress, setIsOpenPopMyProgress] = useState(false);
   const [isOpenPopUpResultMessage, setIsPopUpResultMessage] = useState(false);


  function handleClickPopMyProgress() {
    setIsOpenPopMyProgress((prev) => !prev);
  }

  if (!context) {
    return null;
  }

   function handleClickPopUpResultMessage() {
    setIsPopUpResultMessage((prev) => !prev);
  }

 



  const {
    workOut,
    getWorkoutById,
    course,
    getProgress,
    progress,
    updateProgress,
    courseProgress,

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
  }, [course, workoutId, getProgress]);

  useEffect(() => {
    if (courseId) {
      getCourseProgressById(courseId);
    }
  }, [courseId, getCourseProgressById]);

  if (!workOut) return null;
  if (!progress) return null;

  const progresDataWorkOut = progress.progressData;

  const workoutTasks = workOut.exercises;
  const hasTasks = workoutTasks && workoutTasks.length > 0;

  console.log({ workoutTasks });
  console.log({ progress });
  console.log({ progresDataWorkOut });
  console.log({ courseProgress });
    console.log({course });
  return (
    <Container>
      <S.Title>{course?.nameRU}</S.Title>

      <S.VideoCourse src={workOut.video} allowFullScreen />

      <S.CourseProgressBox>
        {hasTasks &&
          workoutTasks.map((workOuttask, index) => {
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
      </S.CourseProgressBox>

      <S.WorkOutsButton onClick={handleClickPopMyProgress}>
        Заполнить свой прогресс
      </S.WorkOutsButton>
      {hasTasks && (
        <PopMyProgress
          workoutTasks={workoutTasks}
          courseId={courseId!}
          workoutId={workoutId!}
          updateProgress={updateProgress}
          isOpenPopMyProgress={isOpenPopMyProgress}
          setIsOpenPopMyProgress={setIsOpenPopMyProgress}
        />
      )}
   <PopUpResultMessage 
   isOpenPopUp={isOpenPopUpResultMessage}/>
    </Container>
  );
}

export default WorkOut;
