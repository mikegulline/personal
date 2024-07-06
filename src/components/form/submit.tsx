import { Dispatch, SetStateAction } from 'react';
import { withFormErrors } from './with-errors';
import { ShowFormErrorsProps } from './show-form-errors';

export interface SubmitProps {
  disabled: boolean;
  setDisabled: Dispatch<SetStateAction<boolean>>;
  errors: ShowFormErrorsProps;
}

export const Submit = withFormErrors<SubmitProps>(
  ({ disabled, setDisabled }) => {
    return (
      <button
        className='p-2 bg-neutral-900 text-white rounded'
        type='submit'
        disabled={disabled}
      >
        Submit
      </button>
    );
  }
);
