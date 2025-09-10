import * as S from "./WorkOutForm.styled";
import { useState } from "react";
import type { WorkOutLesson } from "../../sharesTypes/sharesTypes";
// import { parseCourseName } from "../../utils/parseCourseName/parseCourseName/parseCourseName";
import { useNavigate } from "react-router-dom";
import { parseCourseName } from "../../utils/parseCourseName/parseCourseName";

type WorkOutFormProps = {
  workouts: WorkOutLesson[];
  courseId: string | undefined;
};

function WorkOutForm({ workouts, courseId }: WorkOutFormProps) {
  const [selectedWorkout, setSelectedWorkout] = useState<WorkOutLesson | null>(null);
  const navigate = useNavigate();

  const handleStart = () => {
    if (selectedWorkout && courseId) {
      navigate(`/course/${courseId}/workouts/${selectedWorkout._id}`);
    }
  };

  return (
    <S.WorkOutWrapper>
      <S.WorkOutFormTitle>Выберите тренировку</S.WorkOutFormTitle>
      <S.WorkOutList>
        {workouts.map((workout, index) => {
   
          const parsed = parseCourseName(workout.name);
          const isActive = selectedWorkout?._id === workout._id;
const isDone = selectedWorkout?._id === workout._id;
          return (
           <S.WorkOutItem
  key={index}
  onClick={() => setSelectedWorkout(workout)}
  $isActive={isActive} 
>

     <S.CheckMark
            src={isDone ? '/сheck_in_сircle.svg' : '/ellipse.svg'}
            alt={isDone? 'Done check' : 'Not done check'}
          
          />
  <S.WorkOutText>
    <S.WorkOutTitle>{parsed.title}</S.WorkOutTitle>
    <S.WorkOutSubTitle>
      {[parsed.subtitle, parsed.day].filter(Boolean).join(" / ")}
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
  );
}

export default WorkOutForm;
