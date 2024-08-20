import { getCourseFull } from './queries';
import {
  Toggle,
  ToggleHeader,
  ToggleBody,
  ToggleNodes,
} from '@/components/toggle';

interface CoursesProps {
  params: { slug: string; course_id: string };
}

export default async function Courses({ params }: CoursesProps) {
  const { course_id } = params;
  const { course, units } = await getCourseFull(course_id);
  return (
    <>
      <h1 className='text-4xl text-gray-800 font-black my-6'>{course}</h1>
      <ul>
        {units.map((unit: UnitProps) => (
          <Unit
            key={unit.unit}
            unit={unit.unit}
            number={unit.number}
            sections={unit.sections}
          />
        ))}
      </ul>
    </>
  );
}

interface UnitProps {
  unit: string;
  number: string;
  sections: SectionProps[];
}

function Unit({ unit, number, sections }: UnitProps) {
  return (
    <Toggle defaultState={true}>
      <li className='ml-6 border-t border-solid border-gray-200'>
        <ToggleHeader>
          <h2 className='text-xl text-gray-800 font-black my-6'>
            {number}) {unit}
          </h2>
        </ToggleHeader>
        <ToggleBody>
          <ul>
            {sections.map((section: SectionProps) => (
              <Section
                key={section.section}
                section={section.section}
                number={`${number}.${section.number}`}
                subsections={section.subsections}
              />
            ))}
          </ul>
        </ToggleBody>
      </li>
    </Toggle>
  );
}

interface SectionProps {
  section: string;
  number: string;
  subsections: SubsectionProps[];
}

function Section({ section, number, subsections }: SectionProps) {
  return (
    <Toggle defaultState={true}>
      <li className='ml-6'>
        <ToggleHeader>
          <h3 className=' text-gray-800 font-semibold my-2'>
            {number}) {section}
          </h3>
          <div>Open All</div>
        </ToggleHeader>
        <ToggleBody>
          <ul>
            {subsections.map((subsection: SubsectionProps) => (
              <Subsection
                key={subsection.subsection}
                subsection={subsection.subsection}
                number={`${number}.${subsection.number}`}
                terms={subsection.terms}
              />
            ))}
          </ul>
        </ToggleBody>
      </li>
    </Toggle>
  );
}

interface SubsectionProps {
  subsection: string;
  number: string;
  terms: TermProps[];
}

function Subsection({ subsection, number, terms }: SubsectionProps) {
  if (!terms) return <></>;

  return (
    <Toggle>
      <li className='ml-6'>
        <ToggleHeader>
          <h4 className=' text-gray-800 font-medium my-2'>
            {number}) {subsection}
          </h4>
        </ToggleHeader>
        <ToggleBody>
          <ul className='flex flex-wrap gap-4'>
            {terms.map((term: TermProps) => (
              <Term
                key={`${subsection}${term.term}`}
                term={term.term}
                definition={term.definition}
              />
            ))}
          </ul>
        </ToggleBody>
      </li>
    </Toggle>
  );
}

interface TermProps {
  term: string;
  definition: string;
}

function Term({ term, definition }: TermProps) {
  return (
    <ToggleNodes
      parent={'li'}
      className='cursor-pointer w-72 p-4 rounded-lg bg-teal-500 text-white flex items-center justify-center text-center h-60 flex-col gap-4'
    >
      <h5 className='font-bold'>{term}</h5>
      <p className='text-sm'>{definition}</p>
    </ToggleNodes>
  );
}
// export default async function Courses({ params }: CoursesProps) {
//   const { course_id } = params;
//   const { course, units } = await getCourseFull(course_id);
//   return (
//     <List.Wrapper>
//       <List.Title>{course}</List.Title>
//       <List.UL>
//         {units.map((unit) => {
//           const {
//             unit_title,
//             unit_id,
//             course_id,
//             unit_number,
//             section_count,
//             subsection_count,
//             term_count,
//           } = unit;
//           const key = `unit${unit_id}${course_id}${unit_number}`;
//           const url = toUrlSafeString(unit_title);
//           const title = `${unit_number}.) ${unit_title}`;
//           return (
//             <List.Item key={key}>
//               <List.Link url={url} title={title} />
//               <List.Actions>
//                 <div>{section_count}</div>
//                 <div>{subsection_count}</div>
//                 <div>{term_count}</div>
//               </List.Actions>
//             </List.Item>
//           );
//         })}
//       </List.UL>
//     </List.Wrapper>
//   );
// }
