import type { WorkOutLesson } from '../../sharesTypes/sharesTypes';
import { useNavigate } from 'react-router-dom';
import { parseCourseName } from '../../utils/parseCourseName/parseCourseName';
import { PopUpWrapper } from '../../ui/PopUpWrapper.styled ';
import { useState, useContext } from 'react';
import * as S from './WorkOutForm.styled';
import { CourseContext } from '../../context/CourseContext';
import { AuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';

type WorkOutFormProps = {
  workouts: WorkOutLesson[] | null;
  courseId: string | undefined;
};

function WorkOutForm({ workouts, courseId }: WorkOutFormProps) {
  const navigate = useNavigate();
  const courseContext = useContext(CourseContext);
  if (!courseContext) return null;
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (!token) {
      localStorage.removeItem('doneNoExercisesIds');
      setDoneNoExercisesIds([]);
    }
  }, [token]);

  const [activeWorkoutId, setActiveWorkoutId] = useState<string | null>(null);

  const [doneNoExercisesIds, setDoneNoExercisesIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('doneNoExercisesIds');
    return saved ? JSON.parse(saved) : [];
  });

  const handleWorkoutClick = (workout: WorkOutLesson) => {
    setActiveWorkoutId(workout._id);

    if (
      workout.exercises.length === 0 &&
      !doneNoExercisesIds.includes(workout._id)
    ) {
      const newArray = [...doneNoExercisesIds, workout._id];
      setDoneNoExercisesIds(newArray);
      localStorage.setItem('doneNoExercisesIds', JSON.stringify(newArray));
    }
  };

  const handleStart = () => {
    if (activeWorkoutId && courseId) {
      navigate(`/course/${courseId}/workouts/${activeWorkoutId}`);
    }
  };

  return (
    <PopUpWrapper>
      <S.WorkOutWrapper>
        <S.WorkOutFormTitle>Выберите тренировку</S.WorkOutFormTitle>
        <S.WorkOutList>
          {workouts?.map((workout) => {
            const parsed = parseCourseName(workout.name);
            const isActive = activeWorkoutId === workout._id;
            const hasNoExercises = workout.exercises.length === 0;
            const isDone =
              hasNoExercises && doneNoExercisesIds.includes(workout._id);

            return (
              <S.WorkOutItem
                key={workout._id}
                onClick={() => handleWorkoutClick(workout)}
                $isActive={isActive}
              >
                <S.CheckMark
                  src={isDone ? '/check_in_circle.svg' : '/ellipse.svg'}
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

        <S.WorkOutButton onClick={handleStart} disabled={!activeWorkoutId}>
          Начать
        </S.WorkOutButton>
      </S.WorkOutWrapper>
    </PopUpWrapper>
  );
}

export default WorkOutForm;
