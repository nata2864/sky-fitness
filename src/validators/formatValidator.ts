type FormatValidationResult = {
  hasErrors: boolean;
  errors: Record<string, string | null>; // теперь храним текст ошибки
};

export const formatValidator = (values: Record<string, string>): FormatValidationResult => {
  const errors: Record<string, string | null> = {};
  let hasErrors = false;

  if ('email' in values) {
    const email = values.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Неверный формат email';
      hasErrors = true;
    } else {
      errors.email = null;
    }
  }

  if ('password' in values) {
    const password = values.password;
    if (password.length < 6) {
      errors.password = 'Пароль должен быть не менее 6 символов';
      hasErrors = true;
    } else {
      errors.password = null;
    }

    if ('confirmPassword' in values) {
      if (values.confirmPassword !== password) {
        errors.confirmPassword = 'Пароли не совпадают';
        hasErrors = true;
      } else {
        errors.confirmPassword = null;
      }
    }
  }

  return { hasErrors, errors };
};
