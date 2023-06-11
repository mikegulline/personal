import { stackIcons } from '../data/icons';

const Icons = () => (
  <div className='mt-12 flex gap-3 sm:gap-5 flex-wrap'>
    {stackIcons.map(({ icon: Icon, name }) => (
      <div
        key={`icons-${name}`}
        className='w-12 h-12 sm:w-20 sm:h-20 rounded-md shadow-xl bg-white flex items-center justify-center text-2xl sm: text-slate-500 border border-dashed border-slate-300 hover:border-solid hover:bg-teal-400 hover:text-white cursor-pointer hover:border-teal-400'
      >
        <Icon />
        <p className='sr-only'>{name}</p>
      </div>
    ))}
  </div>
);

export default Icons;
