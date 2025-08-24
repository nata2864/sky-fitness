'use client';

import { useState } from 'react';
import { emptyFieldsValidator } from '../validators/emptyFieldsValidator';
import { formatValidator } from '../validators/formatValidator';

type FormData = Record<string, string>;
type Errors = Record<string, string | null>; // текст ошибки по полю или null

export const useFormValidation = (initialFields: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [error, setError] = useState<string>(''); // можно использовать для общей ошибки, если нужно

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
    setError('');
  };

  // Валидация одного поля (для onBlur)
  const validateField = (name: string, requiredFields: string[]): string | null => {
  let fieldError: string | null = null;

  // Проверка на пустоту
  if (requiredFields.includes(name)) {
    const { hasEmpty, errors: emptyErrors } = emptyFieldsValidator(
      { [name]: formData[name] },
      [name],
    );
    if (hasEmpty && emptyErrors[name]) {
      fieldError = 'Поле обязательно для заполнения';
    }
  }

  // Проверка формата (передаём всю форму, чтобы confirmPassword мог сравниваться)
  if (!fieldError) {
    const { hasErrors, errors: formatErrors } = formatValidator(formData);
    if (hasErrors && formatErrors[name]) {
      fieldError = formatErrors[name];
    }
  }

  setErrors((prev) => ({ ...prev, [name]: fieldError }));
  return fieldError;
};


  // Валидация всей формы (для onSubmit)
  const validateForm = (requiredFields: string[]): boolean => {
    const newErrors: Errors = {};
    let hasError = false;

    Object.keys(formData).forEach((field) => {
      const fieldError = validateField(field, requiredFields);
      if (fieldError) hasError = true;
      newErrors[field] = fieldError;
    });

    setErrors(newErrors);

    return !hasError;
  };

  return {
    formData,
    setFormData,
    errors,
    error,
    setError,
    setErrors,
    handleChange,
    validateField,
    validateForm,
  };
};
