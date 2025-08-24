// import { Overlay } from '../../ui/Overlay.styled';
import {
  AuthWrapper,
  Logo,
  FormFields,
  InputItem,
  AuthContainer,
} from '../../ui/Form.styled';
import { RoutesApp } from '../../const';
import { Button, Secondarybutton } from '../../ui/Button.styled';
import { Link } from 'react-router-dom';
import { useFormValidation } from '../../hooks/useFormValidation';

function SignUp() {
  const { formData, error, handleChange, validateForm } = useFormValidation({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm(['email', 'password', 'confirmPassword'])) {
      console.log('Валидация не прошла');
      console.log(error);
      return;
    } else {
      console.log('Валидация прошла');
    }

    const dataToSend = {
      email: formData.email,
      password: formData.password,
    };
  };
  return (
    // <Overlay>
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
            <InputItem
              name="password"
              type="password"
              placeholder="Пароль"
              onChange={handleChange}
              value={formData.password}
            />
            <InputItem
              name="confirmPassword"
              type="password"
              placeholder="Повторите пароль"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          </FormFields>
          <Button type="submit" onClick={onSubmit}>Зарегистрироваться</Button>
          <Link to={RoutesApp.SIGN_IN}>
            <Secondarybutton type="button">Войти</Secondarybutton>
          </Link>
        </form>
      </AuthWrapper>
    </AuthContainer>

    // </Overlay>
  );
}

export default SignUp;
