import { FormFields, InputItem, InputWrapper } from '../../ui/Form.styled';
import { Button } from '../../ui/Button.styled';
import { Overlay } from '../../ui/Overlay.styled';
import * as S from './ProgressForm.styled';
import type { Exercise, ProgressData } from '../../sharesTypes/sharesTypes';
import { getExerciseQuestion } from '../../utils/getExerciseQuestion/getExerciseQuestion';
import { useState } from 'react';
import { validateProgressForm } from '../../validators/validateProgressForm';

type ProgressFormProps = {
  workoutTasks: Exercise[];
  currentProgress: ProgressData; // добавляем текущий прогресс
  courseId: string;
  workoutId: string;
  updateProgress: (
    courseId: string,
    workoutId: string,
    progressData: ProgressData
  ) => Promise<void>;
  setIsOpenPopMyProgress: (open: boolean) => void;
   
};


function ProgressForm({
  workoutTasks,
  courseId,
  workoutId,
  updateProgress,
  setIsOpenPopMyProgress,currentProgress
}: ProgressFormProps) {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});


  console.log(currentProgress)


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  setFormValues((prev) => ({ ...prev, [name]: value }));

  // Если была ошибка по этому полю — убираем её
  setErrors((prev) => {
    if (!prev[name]) return prev; // ошибки не было
    const { [name]: _, ...rest } = prev;
    return rest;
  });
};


 const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { isValid, errors } = validateProgressForm(
    formValues,
    currentProgress,
    workoutTasks
  );

  if (!isValid) {
    setErrors(errors); // сохраняем ошибки, чтобы показать в UI
    return;
  }

  // если всё ок → формируем массив для отправки
  const progressData = workoutTasks.map((_, index) => {
    const userInput = formValues[`exercise-${index}`];
    if (userInput === '' || userInput === undefined) {
      return currentProgress[index] || 0;
    }
    return Number(userInput);
  });

  if (courseId && workoutId) {
    await updateProgress(courseId, workoutId, progressData);
  }

  setIsOpenPopMyProgress(false);
};


  console.log({ workoutTasks });

  return (
    <Overlay>
      <S.ProgressWrapper>
        <S.ProgressFormTitle>Мой прогресс</S.ProgressFormTitle>
        <form onSubmit={onSubmit}>
          <FormFields>
  {workoutTasks.map((task, index) => {
    const key = `exercise-${index}`;
    return (
      <InputWrapper key={task._id || index}>
        <S.InputText>{getExerciseQuestion(task.name)}</S.InputText>
        <InputItem
          name={key}
          type="number"
          placeholder={`${currentProgress[index] || 0}`}
          value={formValues[key] || ''}
          onChange={handleChange}
        />
        {errors[key] && (
          <S.ErrorText>{errors[key]}</S.ErrorText>
        )}
      </InputWrapper>
    );
  })}
</FormFields>


          <Button type="submit" onClick={onSubmit}>
            Сохранить
          </Button>
        </form>
      </S.ProgressWrapper>
    </Overlay>
  );
}

export default ProgressForm;
