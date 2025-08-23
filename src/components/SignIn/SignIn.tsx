// import { Overlay } from "../../ui/Overlay.styled";
import {
  AuthWrapper,
  Logo,
  FormFields,
  InputItem,
  AuthContainer,
} from '../../ui/Form.styled';
import { Link } from 'react-router-dom';
import { Button, Secondarybutton } from '../../ui/Button.styled';

import { RoutesApp } from '../../const';

function SignIn() {
  return (
    <AuthContainer>
      <AuthWrapper>
        <Logo src="./logo.svg" alt="Logo" />
        <form>
          <FormFields>
            <InputItem name="email" type="email" placeholder="Эл. почта" />
            <InputItem name="password" type="password" placeholder="Пароль" />
          </FormFields>
          <Button type="submit">Войти</Button>
          <Link to={RoutesApp.SIGN_UP}>
            <Secondarybutton type="button">Зарегистрироваться</Secondarybutton>
          </Link>
        </form>
      </AuthWrapper>
    </AuthContainer>
    //     <Overlay>

    //     </Overlay>
  );
}

export default SignIn;
