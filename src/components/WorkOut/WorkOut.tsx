import Container from '../../ui/Container.styled';
// import Progress from '../Progress/Progress';
// import ProgressForm from '../ProgressForm/ProgressForm';
import * as S from './WorkOut.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { CourseContext } from '../../context/CourseContext';
import PopMyProgress from '../../popUps/PopMyProgress/PopMyProgress';
import {getTotalProgressNumber} from '../../utils/getTotalProgressNumber/getTotalProgressNumber';
import {calculateProgress} from '../../utils/calculateProgress/calculateProgress'
import { useState } from 'react';

// import { useContext, useEffect } from "react";
// import { CourseContext, CourseContextValue } from "../../context/CourseContext";

function WorkOut() {
  const context = useContext(CourseContext);
   const [isOpenPopMyProgress, setIsOpenPopMyProgress] = useState(false);

   
  function handleClickPopMyProgress() {
    setIsOpenPopMyProgress((prev) => !prev);
  }

  if (!context) {
    // Можно отрендерить заглушку, если контекста нет
    return null;
  }

  const { workOut, getWorkoutById, course, getProgress, progress, updateProgress,   courseProgress,

    getCourseProgressById, } = context;

  const { workoutId, courseId } = useParams();

  

  useEffect(() => {
    if (workoutId) getWorkoutById(workoutId);
  }, [workoutId, getWorkoutById]);

  useEffect(() => {
    if ( workoutId && courseId) {
      getProgress(courseId, workoutId);
    }
  }, [course, workoutId, getProgress]);

   // --- загружаем прогресс при монтировании ---
  useEffect(() => {
    if (courseId) {
      getCourseProgressById(courseId);
    }
  }, [courseId, getCourseProgressById]);

  if (!workOut) return null;
    if (!progress) return null;

    const progresDataWorkOut = progress.progressData

  const workoutTasks = workOut.exercises;
  const hasTasks = workoutTasks && workoutTasks.length > 0;

 console.log({workoutTasks})
console.log({progress}) 
console.log({progresDataWorkOut})
console.log({courseProgress})
  return (
    <Container>
      <S.Title>{course?.nameRU}</S.Title>
   

      <S.VideoCourse src={workOut.video} allowFullScreen />
  {/* <pre>{JSON.stringify(progress, null, 2)}</pre> */}

    <button
  onClick={() => {
    if (courseId && workoutId) {
      updateProgress(courseId, workoutId, [10,10,10,10,5]);
    }
  }}
>
  Обновить прогресс
</button>

      {/* <S.CourseProgressBlock>
        <S.CourseProgressTitle>{workOut.name}</S.CourseProgressTitle>
        <S.CourseProgressBox>
          {hasTasks &&
            workoutTasks.map((workOuttask: { _id: string; name: string }, index: number) => (
              
              <S.ProgressBlock key={workOuttask._id || index}>
                <S.ProgressText>{workOuttask.name} 50%</S.ProgressText>
                <S.ProgressBar type="range" value={50} max={100}  />
              </S.ProgressBlock>
            ))}
        </S.CourseProgressBox>
     
      </S.CourseProgressBlock> */}

      {/* {hasTasks && <PopMyProgress workoutTasks={workoutTasks} />} */}

    <S.CourseProgressBox>
        {hasTasks && 
  workoutTasks.map((workOuttask, index) => {
    // const doneReps = progresDataWorkOut[index] 
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

     <S.WorkOutsButton  onClick={handleClickPopMyProgress}>Заполнить свой прогресс</S.WorkOutsButton>
   {hasTasks && (
  <PopMyProgress
    workoutTasks={workoutTasks}
    courseId={courseId!}
    workoutId={workoutId!}
    updateProgress={updateProgress}
    //  setIsOpenPopMyProgress={setIsOpenPopMyProgress}

                isOpenPopMyProgress={isOpenPopMyProgress}
  />
)}



    </Container>
  );
}

export default WorkOut;

