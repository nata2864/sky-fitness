import {
  FormFields,
  InputItem,
  InputWrapper
} from '../../ui/Form.styled';
import { Button } from '../../ui/Button.styled';
import { Overlay } from '../../ui/Overlay.styled';
import * as S from "./ProgressForm.styled";
import type { Exercise } from '../../sharesTypes/sharesTypes';
import { getExerciseQuestion } from '../../utils/getExerciseQuestion/getExerciseQuestion';

type ProgressFormProps = {
  workoutTasks: Exercise[];
};



function ProgressForm({ workoutTasks }: ProgressFormProps) {
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
 
  };

  return (
    <Overlay>
      <S.ProgressWrapper>
        <S.ProgressFormTitle>Мой прогресс</S.ProgressFormTitle>
        <form>
          <FormFields>
            {workoutTasks.map((workOuttask, index) => (
              <InputWrapper key={index}>
                <S.InputText>
             {getExerciseQuestion(workOuttask.name)}
                </S.InputText>
                <InputItem
                  name={`exercise-${index}`}
                  type="number"
                  placeholder="0"
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
