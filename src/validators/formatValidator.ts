type FormatValidationResult = {
  hasErrors: boolean;
  errors: Record<string, boolean>;
  errorMessage?: string;
};

// type FormValues = {
//   email: string;
//   password: string;
//   [key: string]: string;
// };

export const formatValidator = (values: Record<string, string>): FormatValidationResult => {
  const errors: Record<string, boolean> = {};
  let hasErrors = false;
  let errorMessage = '';

  if ('email' in values) {
    const email = values.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = true;
      hasErrors = true;
      errorMessage ||= 'Неверный формат email';
    }
  }

  if ('password' in values) {
    const password = values.password;
    if (password.length < 6) {
      errors.password = true;
      hasErrors = true;
      errorMessage ||= 'Пароль должен быть не менее 6 символов';
    }

    if ('confirmPassword' in values && values.confirmPassword !== password) {
      errors.confirmPassword = true;
      hasErrors = true;
      errorMessage ||= 'Пароли не совпадают';
    }
  }

  return { hasErrors, errors, errorMessage };
};

