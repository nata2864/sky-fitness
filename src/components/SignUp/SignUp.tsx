import {
  AuthWrapper,
  Logo,
  FormFields,
  InputItem,
  AuthContainer,
  InputWrapper
} from '../../ui/Form.styled';
import { RoutesApp } from '../../const';
import { Button, Secondarybutton } from '../../ui/Button.styled';
import { Link } from 'react-router-dom';
import { useFormValidation } from '../../hooks/useFormValidation';

function SignUp() {
  const { formData, errors, handleChange, validateForm, validateField } = useFormValidation({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm(['email', 'password', 'confirmPassword'])) {
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
                onBlur={() => validateField('email', ['email', 'password', 'confirmPassword'])}
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
                onBlur={() => validateField('password', ['email', 'password', 'confirmPassword'])}
                value={formData.password}
              />
              {errors.password && <p style={{ color: 'red', marginTop: '4px' }}>{errors.password}</p>}
            </InputWrapper>

            <InputWrapper>
              <InputItem
                name="confirmPassword"
                type="password"
                placeholder="Повторите пароль"
                onChange={handleChange}
                onBlur={() => validateField('confirmPassword', ['email', 'password', 'confirmPassword'])}
                value={formData.confirmPassword}
              />
              {errors.confirmPassword && <p style={{ color: 'red', marginTop: '4px' }}>{errors.confirmPassword}</p>}
            </InputWrapper>
          </FormFields>

          <Button type="submit" onClick={onSubmit}>
            Зарегистрироваться
          </Button>

          <Link to={RoutesApp.SIGN_IN}>
            <Secondarybutton type="button">Войти</Secondarybutton>
          </Link>
        </form>
      </AuthWrapper>
    </AuthContainer>
  );
}

export default SignUp;
