import { ShowFormErrors, type ShowFormErrorsProps } from './show-form-errors';

export const withFormErrors = <P extends object>(
  Component: React.ComponentType<P>
) => {
  type Props = Omit<P, 'errors'> & { errors: ShowFormErrorsProps };

  return ({ errors, ...restProps }: Props) => (
    <>
      <Component {...(restProps as P)} />
      <ShowFormErrors errors={errors} />
    </>
  );
};
