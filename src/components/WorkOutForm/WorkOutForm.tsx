import type { WorkOutLesson } from '../../sharesTypes/sharesTypes';
import { useNavigate } from 'react-router-dom';
import { parseCourseName } from '../../utils/parseCourseName/parseCourseName';
import { PopUpWrapper } from '../../ui/PopUpWrapper.styled ';
import { useState, useContext, useEffect } from 'react';
import * as S from './WorkOutForm.styled';
import { CourseContext } from '../../context/CourseContext';
import { AuthContext } from '../../context/AuthContext';

type WorkOutFormProps = {
  workouts: WorkOutLesson[] | null;
  courseId: string | undefined;
};

function WorkOutForm({ workouts, courseId }: WorkOutFormProps) {
  const navigate = useNavigate();
  const courseContext = useContext(CourseContext);
  if (!courseContext) return null;
  const { token } = useContext(AuthContext);
  const { getProgress, progress } = courseContext;

  const [activeWorkoutId, setActiveWorkoutId] = useState<string | null>(null);

  const [doneNoExercisesIds, setDoneNoExercisesIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('doneNoExercisesIds');
    return saved ? JSON.parse(saved) : [];
  });

  const [doneWorkoutsIds, setDoneWorkoutsIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('doneWorkoutsIds');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (activeWorkoutId && courseId) {
      getProgress(courseId, activeWorkoutId);
    }
  }, [courseId, activeWorkoutId, getProgress]);

  useEffect(() => {
    if (!token) {
      localStorage.removeItem('doneNoExercisesIds');
      localStorage.removeItem('doneWorkoutsIds');
      setDoneNoExercisesIds([]);
      setDoneWorkoutsIds([]);
    }
  }, [token]);

  useEffect(() => {
    if (workouts) {
      const noExercisesIds = workouts
        .filter(
          (w) => w.exercises.length === 0 && !doneNoExercisesIds.includes(w._id)
        )
        .map((w) => w._id);

      if (noExercisesIds.length > 0) {
        const newDone = [...doneNoExercisesIds, ...noExercisesIds];
        setDoneNoExercisesIds(newDone);
        localStorage.setItem('doneNoExercisesIds', JSON.stringify(newDone));
      }
    }
  }, [workouts]);

  useEffect(() => {
    if (progress?.workoutCompleted && progress.workoutId) {
      if (!doneWorkoutsIds.includes(progress.workoutId)) {
        const newDone = [...doneWorkoutsIds, progress.workoutId];
        setDoneWorkoutsIds(newDone);
        localStorage.setItem('doneWorkoutsIds', JSON.stringify(newDone));
      }
    }
  }, [progress]);

  const handleWorkoutClick = (workout: WorkOutLesson) => {
    setActiveWorkoutId(workout._id);
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
              (hasNoExercises && doneNoExercisesIds.includes(workout._id)) ||
              (!hasNoExercises && doneWorkoutsIds.includes(workout._id));

            return (
              <S.WorkOutItem
                key={workout._id}
                onClick={() => handleWorkoutClick(workout)}
                $isActive={isActive}
              >
                <S.CheckMark
                  src={isDone ? '/check.png' : '/ellipse.svg'}
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
