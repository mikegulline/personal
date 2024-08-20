import { getCourses } from './queries';
import { toUrlSafeString } from '@/utils/index';
import List from '@/components/list';

export default async function Courses() {
  const courses = await getCourses();
  return (
    <List.Wrapper>
      <List.Title>Courses</List.Title>
      <List.UL>
        {courses.map((course) => {
          const { course_id, course_name } = course;
          const key = `course${course_id}`;
          const url = `course/${toUrlSafeString(course_name)}/${course_id}`;
          return (
            <List.Item key={key}>
              <List.Link url={url} title={course_name} />
            </List.Item>
          );
        })}
      </List.UL>
    </List.Wrapper>
  );
}
