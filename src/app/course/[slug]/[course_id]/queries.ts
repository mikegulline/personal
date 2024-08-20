import { sql } from '@vercel/postgres';

export async function getCourse(course_id: string) {
  const { rows } = await sql`SELECT * 
    FROM courses 
    WHERE course_id = ${course_id};`;
  return rows[0];
}

export async function getUnits(course_id: string) {
  const { rows } = await sql`SELECT 
    u.unit_id,
    u.unit_title,
    u.unit_number,
    u.course_id,
    COUNT(DISTINCT s.section_id) AS section_count,
    COUNT(DISTINCT ss.subsection_id) AS subsection_count,
    COUNT(DISTINCT t.term_id) AS term_count
    FROM 
        courses c
    LEFT JOIN 
        units u ON u.course_id = c.course_id
    LEFT JOIN 
        sections s ON u.unit_id = s.unit_id
    LEFT JOIN 
        subsections ss ON s.section_id = ss.section_id
    LEFT JOIN 
        terms t ON ss.subsection_id = t.subsection_id
    WHERE 
        c.course_id = ${course_id}
    GROUP BY 
        u.unit_id, u.unit_title, u.unit_number, u.course_id;`;

  return rows;
}

export async function getCourseFull(course_id: string) {
  const { rows } = await sql`SELECT
        c.course_name AS course,
        json_agg(
            json_build_object(
                'unit', u.unit_title,
                'number', u.unit_number,
                'sections', (
                    SELECT json_agg(
                        json_build_object(
                            'section', s.section_title,
                            'number', s.section_number,
                            'subsections', (
                                SELECT json_agg(
                                    json_build_object(
                                        'subsection', ss.subsection_title,
                                        'number', ss.subsection_number,
                                        'terms', (
                                            SELECT json_agg(
                                                json_build_object(
                                                    'term', t.term,
                                                    'definition', t.definition
                                                )
                                            )
                                            FROM terms t
                                            WHERE t.subsection_id = ss.subsection_id
                                        )
                                    )
                                )
                                FROM subsections ss
                                WHERE ss.section_id = s.section_id
                            )
                        )
                    )
                    FROM sections s
                    WHERE s.unit_id = u.unit_id
                )
            )
        ) AS units
    FROM
        courses c
    LEFT JOIN
        units u ON c.course_id = u.course_id
    WHERE
        c.course_id = ${course_id}
    GROUP BY
        c.course_name;`;
  // console.log(rows);
  return rows[0];
}
