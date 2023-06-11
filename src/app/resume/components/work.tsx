import { work, IJob } from '../data/work';
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
