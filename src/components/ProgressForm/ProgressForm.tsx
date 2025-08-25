import {


  FormFields,
  InputItem,
//   AuthContainer,
  InputWrapper
} from '../../ui/Form.styled';

import { Button } from '../../ui/Button.styled';
import { Overlay } from '../../ui/Overlay.styled';
import * as S from "./ProgressForm.styled"



function ProgressForm() {


  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

 

    // const dataToSend = {
    //   email: email,
    //   password: fpassword,
    // };

    // console.log('Отправляем:', dataToSend);
   
  };

  return (
    <Overlay>
      <S.ProgressWrapper>
      <S.ProgressFormTitle>Мой прогресс</S.ProgressFormTitle>
        <form>
          <FormFields>
            <InputWrapper>
            <S.InputText>Сколько раз вы сделали наклоны вперед?</S.InputText>
              <InputItem
                name="email"
                type="email"
                placeholder="0"
                // onChange={handleChange}
            
                // value={email}
              />
           
            </InputWrapper>

            <InputWrapper>
               <S.InputText>Сколько раз вы сделали наклоны назад?</S.InputText>
              <InputItem
                name="password"
                type="password"
                placeholder="0"
                // onChange={handleChange}
              
                // value={password}
              />
            
            </InputWrapper>
               <InputWrapper>
               <S.InputText>Сколько раз вы сделали поднятие ног, согнутых в коленях?</S.InputText>
              <InputItem
                name="password"
                type="password"
                placeholder="0"
                // onChange={handleChange}
              
                // value={password}
              />
            
            </InputWrapper>
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
