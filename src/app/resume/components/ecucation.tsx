import { education } from '../data/education';
import { type IJob } from '../data/types';
import Job from './job';

export default function Education() {
  return (
    <>
      {education.map((job: IJob, i) => (
        <Job key={`job${i}`} {...job} />
      ))}
    </>
  );
}
