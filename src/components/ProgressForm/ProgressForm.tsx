import {
  FormFields,
  InputItem,
  InputWrapper
} from '../../ui/Form.styled';
import { Button } from '../../ui/Button.styled';
import { Overlay } from '../../ui/Overlay.styled';
import * as S from "./ProgressForm.styled";
import type { Exercise , ProgressData} from '../../sharesTypes/sharesTypes';
import { getExerciseQuestion } from '../../utils/getExerciseQuestion/getExerciseQuestion';
import { useState } from 'react';


type ProgressFormProps = {
  workoutTasks: Exercise[];
  courseId: string;
  workoutId: string;
  updateProgress: (courseId: string, workoutId: string, progressData: ProgressData) => Promise<void>;
  setIsOpenPopMyProgress:(open: boolean) => void;
};



function ProgressForm({ workoutTasks, courseId, workoutId, updateProgress, setIsOpenPopMyProgress}: ProgressFormProps) {

    const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const progressData = workoutTasks.map((_, index) =>
      Number(formValues[`exercise-${index}`] || 0)
  
    );

    if (courseId && workoutId) {
      await updateProgress(courseId, workoutId, progressData);
    }

    setIsOpenPopMyProgress(false)
  };

   console.log({workoutTasks})

  return (
    <Overlay>
      <S.ProgressWrapper>
        <S.ProgressFormTitle>Мой прогресс</S.ProgressFormTitle>
      <form onSubmit={onSubmit}>
          <FormFields>
            {workoutTasks.map((task, index) => (
              <InputWrapper key={task._id || index}>
                <S.InputText>{getExerciseQuestion(task.name)}</S.InputText>
                <InputItem
                  name={`exercise-${index}`}
                  type="number"
                  placeholder="0"
                  value={formValues[`exercise-${index}`] || ""}
                  onChange={handleChange}
                />
              </InputWrapper>
            ))}
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
