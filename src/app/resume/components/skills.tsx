import { skills } from '../data/skills';

export default function Skills() {
  return (
    <ul className='flex flex-wrap text-md '>
      {skills.map((skill, i) => (
        <li
          key={`skill${i}`}
          className='text-base inline-block mr-1 bg-white border border-dashed border-slate-300 rounded-full px-3 py-1 mb-1 hover:border-solid hover:bg-teal-400 hover:text-white cursor-pointer hover:border-teal-400'
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
