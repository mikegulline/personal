import React from 'react';
import { ShowFormErrors, type ShowFormErrorsProps } from './show-form-errors';

export const withFormErrors = <P extends object>(
  Component: React.ComponentType<P>
) => {
  type Props = Omit<P, 'errors'> & { errors: ShowFormErrorsProps };

  const WrappedComponent: React.FC<Props> = ({ errors, ...restProps }) => (
    <>
      <Component {...(restProps as P)} />
      <ShowFormErrors errors={errors} />
    </>
  );

  WrappedComponent.displayName = `withFormErrors(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
};
