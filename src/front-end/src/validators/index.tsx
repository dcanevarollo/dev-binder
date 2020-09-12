import { RefObject } from 'react';
import { ObjectSchema, ValidationError } from 'yup';
import { FormHandles } from '@unform/core';

export { default as credentials } from './credentials';

type Messages = {
  [key: string]: string;
};

export default async function validator(
  schema: ObjectSchema,
  data: unknown,
  formRef: RefObject<FormHandles>
) {
  try {
    await schema.validate(data, { abortEarly: false });

    if (formRef.current) formRef.current.setErrors({});

    return true;
  } catch (error) {
    const messages: Messages = {};

    if (error instanceof ValidationError)
      error.inner.forEach(err => {
        messages[err.path] = err.message;
      });

    if (formRef.current) formRef.current.setErrors(messages);

    return false;
  }
}
