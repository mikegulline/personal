export interface FormProps {
  title?: String;
  children: React.ReactNode;
  disabled: Boolean;
  action: (payload: FormData) => void;
}

export const Form = ({ title, children, disabled, action }: FormProps) => {
  return (
    <form
      action={action}
      className={`${disabled ? 'opacity-20' : 'opacity-100'}`}
    >
      {!!title && <h2 className='font-bold text-4xl'>{title}</h2>}
      {children}
    </form>
  );
};
