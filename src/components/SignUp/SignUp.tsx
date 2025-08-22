// import { Overlay } from '../../ui/Overlay.styled';
import { AuthWrapper, Logo, FormFields, InputItem, AuthContainer } from '../../ui/Form.styled';

import { Button, Secondarybutton } from '../../ui/Button.styled';

function SignUp() {
  return (
    // <Overlay>
     <AuthContainer>
         <AuthWrapper>
        <Logo src="./logo.svg" alt="Logo" />
        <form>
          <FormFields>
            <InputItem name="email" type="email" placeholder="Эл. почта" />
            <InputItem name="password" type="password" placeholder="Пароль" />
            <InputItem
              name="repeatPassword"
              type="password"
              placeholder="Повторите пароль"
            />
          </FormFields>
          <Button type="submit">Зарегистрироваться</Button>
          <Secondarybutton type="button">Войти</Secondarybutton>
        </form>
      </AuthWrapper>
     </AuthContainer>
   
    // </Overlay>
  );
}

export default SignUp;
