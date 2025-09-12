import * as S from './WorkOutForm.styled';

import type { WorkOutLesson } from '../../sharesTypes/sharesTypes';
// import { parseCourseName } from "../../utils/parseCourseName/parseCourseName/parseCourseName";
import { useNavigate } from 'react-router-dom';
import { parseCourseName } from '../../utils/parseCourseName/parseCourseName';
import { PopUpWrapper } from '../../ui/PopUpWrapper.styled ';
import { useState } from 'react';


type WorkOutFormProps = {
  workouts: WorkOutLesson[] | null;
  courseId: string | undefined;
  hasNoExercises:boolean | undefined;
};

function WorkOutForm({ workouts, courseId, hasNoExercises }: WorkOutFormProps) {
  const [selectedWorkout, setSelectedWorkout] = useState<WorkOutLesson | null>(
    null
  );
  const navigate = useNavigate();

 
  const handleStart = () => {
    if (selectedWorkout && courseId) {
      navigate(`/course/${courseId}/workouts/${selectedWorkout._id}`);
    }
  };
 

  return (
    <PopUpWrapper>
      <S.WorkOutWrapper>
        <S.WorkOutFormTitle>Выберите тренировку</S.WorkOutFormTitle>
        <S.WorkOutList>
       {workouts?.map((workout, index) => {
  const parsed = parseCourseName(workout.name);
  const isActive = selectedWorkout?._id === workout._id;

  // ✅ Чек только если "нет упражнений" и выбранный воркаут
  const isDone = hasNoExercises && isActive;
            return (
              <S.WorkOutItem
                key={index}
                onClick={() => setSelectedWorkout(workout)}
                $isActive={isActive}
              >
                <S.CheckMark
                  src={isDone ? '/сheck_in_сircle.svg' : '/ellipse.svg'}
                  alt={isDone ? 'Done check' : 'Not done check'}
                />
                <S.WorkOutText>
                  <S.WorkOutTitle>{parsed.title}</S.WorkOutTitle>
                  <S.WorkOutSubTitle>
                    {[parsed.subtitle, parsed.day].filter(Boolean).join(' / ')}
                  </S.WorkOutSubTitle>
                </S.WorkOutText>
              </S.WorkOutItem>
            );
          })}
        </S.WorkOutList>
        <S.WorkOutButton onClick={handleStart} disabled={!selectedWorkout}>
          Начать
        </S.WorkOutButton>
      </S.WorkOutWrapper>
    </PopUpWrapper>
  );
}

export default WorkOutForm;
