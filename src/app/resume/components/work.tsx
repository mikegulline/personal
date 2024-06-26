import { work } from '../data/work';
import { type IJob } from '../data/types';
import Job from './job';

export default function Work() {
  return (
    <>
      {work.map((job: IJob, i) => (
        <Job key={`job${i}`} {...job} />
      ))}
    </>
  );
}
