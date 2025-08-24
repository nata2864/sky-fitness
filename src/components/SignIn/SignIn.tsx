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
import { useFormValidation } from '../../hooks/useFormValidation';
import { RoutesApp } from '../../const';

function SignIn() {
  const { formData, error, handleChange, validateForm } = useFormValidation({
    email: '',
    password: '',
  });

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm(['email', 'password'])) {
      console.log('Валидация не прошла')
            console.log(error)
      return;
    } else {
      console.log('Валидация прошла')
    }

    const dataToSend = {
      email: formData.email,
      password: formData.password,
    };
  };

  return (
    <AuthContainer>
      <AuthWrapper>
        <Logo src="./logo.svg" alt="Logo" />
        <form>
          <FormFields>
            <InputItem
              name="email"
              type="email"
              placeholder="Эл. почта"
              onChange={handleChange}
              value={formData.email}
            />
            <InputItem name="password" type="password" placeholder="Пароль"  onChange={handleChange}
        value={formData.password}
         />
          </FormFields>
          <Button type="submit" onClick={onSubmit} >Войти</Button>
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
