import { sideProjects } from '../data/side-projects';
import { type IJob } from '../data/types';
import Job from './job';

export default function SideProjects() {
  return (
    <>
      {sideProjects.map((job: IJob, i) => (
        <Job key={`job${i}`} {...job} />
      ))}
    </>
  );
}
