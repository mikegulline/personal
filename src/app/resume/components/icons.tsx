import { stackIcons } from '../data/icons';
import Icon from './icon';

const Icons = () => (
  <div className='mt-12 flex gap-3 sm:gap-5 flex-wrap'>
    {stackIcons.map(({ icon: SVGIcon, name }) => (
      <Icon key={`icons-${name}`}>
        <SVGIcon />
        <p className='sr-only'>{name}</p>
      </Icon>
    ))}
  </div>
);

export default Icons;
