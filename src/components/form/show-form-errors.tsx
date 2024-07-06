export type ShowFormErrorsProps = string[] | undefined;

export const ShowFormErrors = ({ errors }: { errors: ShowFormErrorsProps }) => {
  if (!errors) return null;

  return (
    <div className='border border-red-800 text-red-700 bg-red-50 rounded p-2'>
      {errors.join(', ')}
    </div>
  );
};
