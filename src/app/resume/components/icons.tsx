import { stackIcons } from '../data/icons';

const Icons = () => (
  <>
    {stackIcons.map(({ icon: Icon, name }) => (
      <div
        key={`icons-${name}`}
        className='w-20 h-20 rounded-md shadow-xl bg-white flex items-center justify-center text-3xl text-slate-500 border border-dashed border-slate-300 hover:border-solid hover:bg-teal-400 hover:text-white cursor-pointer hover:border-teal-400'
      >
        <Icon />
        <p className='sr-only'>{name}</p>
      </div>
    ))}
  </>
);

export default Icons;
