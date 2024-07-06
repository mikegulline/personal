'use client';
import { RefObject, Dispatch, SetStateAction } from 'react';
import { Form } from './form';

export interface FormField<T extends HTMLElement> {
  component: any;
  name: string;
  placeholder: string;
  passRef: RefObject<T>;
  autoFocus?: boolean;
}

export interface FormShape {
  action: (payload: FormData) => void;
  disabled: boolean;
  setDisabled: Dispatch<SetStateAction<boolean>>;
  title?: string;
  fields: FormField<HTMLElement | HTMLInputElement | HTMLTextAreaElement>[];
  submit: {
    errors: string[] | undefined;
  };
}

export const FormBuilder = ({ form }: { form: FormShape }) => {
  const { action, disabled, title, fields, submit } = form;

  return (
    <Form action={action} disabled={disabled} title={title}>
      {fields.map(({ component: Component, ...rest }, index) => (
        <Component key={rest.name + index} disabled={disabled} {...rest} />
      ))}
    </Form>
  );
};
