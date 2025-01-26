import AddCompanyForm from '../components/add-company-form';
import { generateRandomKey } from '../actions';

export default async function AddCompanyPage() {
  const key = await generateRandomKey(0);

  return (
    <div className='fade-in-up'>
      <AddCompanyForm passKey={key} />
    </div>
  );
}
