import { withFormErrors } from './with-errors';
import { type ShowFormErrorsProps } from './show-form-errors';

export interface InputProps<T> {
  name: string;
  placeholder: string;
  passRef: React.Ref<T>;
  disabled: boolean;
  errors: ShowFormErrorsProps;
  autoFocus?: boolean;
}

export const Input = withFormErrors<InputProps<HTMLInputElement>>(
  ({ name, placeholder, passRef, disabled, autoFocus }) => {
    return (
      <input
        className=''
        type='text'
        name={name}
        id={name}
        placeholder={placeholder}
        ref={passRef}
        disabled={disabled}
        autoFocus={autoFocus}
      />
    );
  }
);
