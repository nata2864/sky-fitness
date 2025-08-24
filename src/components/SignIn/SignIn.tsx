import {
  AuthWrapper,
  Logo,
  FormFields,
  InputItem,
  AuthContainer,
  InputWrapper
} from '../../ui/Form.styled';
import { Link } from 'react-router-dom';
import { Button, Secondarybutton } from '../../ui/Button.styled';
import { useFormValidation } from '../../hooks/useFormValidation';
import { RoutesApp } from '../../const';

function SignIn() {
  const { formData, errors, handleChange, validateForm, validateField } = useFormValidation({
    email: '',
    password: '',
  });

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm(['email', 'password'])) {
      console.log('Валидация не прошла');
      console.log(errors);
      return;
    } else {
      console.log('Валидация прошла');
    }

    const dataToSend = {
      email: formData.email,
      password: formData.password,
    };

    console.log('Отправляем:', dataToSend);
  };

  return (
    <AuthContainer>
      <AuthWrapper>
        <Logo src="./logo.svg" alt="Logo" />
        <form>
          <FormFields>
            <InputWrapper>
              <InputItem
                name="email"
                type="email"
                placeholder="Эл. почта"
                onChange={handleChange}
                onBlur={() => validateField('email', ['email', 'password'])}
                value={formData.email}
              />
              {errors.email && <p style={{ color: 'red', marginTop: '4px' }}>{errors.email}</p>}
            </InputWrapper>

            <InputWrapper>
              <InputItem
                name="password"
                type="password"
                placeholder="Пароль"
                onChange={handleChange}
                onBlur={() => validateField('password', ['email', 'password'])}
                value={formData.password}
              />
              {errors.password && <p style={{ color: 'red', marginTop: '4px' }}>{errors.password}</p>}
            </InputWrapper>
          </FormFields>

          <Button type="submit" onClick={onSubmit}>
            Войти
          </Button>

          <Link to={RoutesApp.SIGN_UP}>
            <Secondarybutton type="button">Зарегистрироваться</Secondarybutton>
          </Link>
        </form>
      </AuthWrapper>
    </AuthContainer>
  );
}

export default SignIn;
