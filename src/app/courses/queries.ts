import { sql } from '@vercel/postgres';

export async function getCourses() {
  const { rows } = await sql`SELECT * from courses;`;
  return rows;
}
