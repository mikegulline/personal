'use server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export interface CompanyType {
  id: string;
  key: string;
  name: string;
  salary: string;
  date: string;
  position: string;
  status: string;
  description?: string | null;
}

export interface CompanyTypeWithViews extends CompanyType {
  views: number;
  total_matching: number;
}

export async function getSearch(
  term: string,
  limit: number = 1000,
  offset: number = 1
) {
  const { rows } = await sql`
  WITH CompanyViews AS (
    SELECT
        c.id,
        c.name,
        c.key,
        c.salary,
        c.position,
        c.status,
        COUNT(a.id) AS views,
        c.date
    FROM
        company c
    LEFT JOIN
        actions a
    ON
        c.id = a.companyId
    WHERE
      c.name ILIKE ${term + '%'}
    GROUP BY
        c.id,
        c.name,
        c.key,
        c.position,
        c.status,
        c.salary,
        c.date
  )
  SELECT
      *,
      COUNT(*) OVER() AS total_matching
  FROM
      CompanyViews
  ORDER BY
      date DESC
  LIMIT ${limit} OFFSET ${(offset - 1) * limit};
`;

  return rows as CompanyTypeWithViews[];
}

export async function getRecentWithActionCount(limit: number, offset: number) {
  const { rows } = await sql`
  WITH CompanyViews AS (
    SELECT
        c.id,
        c.name,
        c.key,
        c.salary,
        c.position,
        c.status,
        COUNT(a.id) AS views,
        c.date
    FROM
        company c
    LEFT JOIN
        actions a
    ON
        c.id = a.companyId
    WHERE
        c.date >= NOW() - INTERVAL '30 days'
    GROUP BY
        c.id,
        c.name,
        c.key,
        c.position,
        c.status,
        c.salary,
        c.date
  )
  SELECT
      *,
      COUNT(*) OVER() AS total_matching
  FROM
      CompanyViews
  ORDER BY
      date DESC
  LIMIT ${limit} OFFSET ${(offset - 1) * limit};
`;

  return rows as CompanyTypeWithViews[];
}
//
export async function getAllInterviewing(limit: number, offset: number) {
  const { rows } = await sql`
  WITH CompanyViews AS (
    SELECT
        c.id,
        c.name,
        c.key,
        c.salary,
        c.position,
        c.status,
        COUNT(a.id) AS views,
        c.date
    FROM
        company c
    LEFT JOIN
        actions a
    ON
        c.id = a.companyId
    WHERE
        c.status = 'interviewing'
    GROUP BY
        c.id,
        c.name,
        c.key,
        c.position,
        c.status,
        c.salary,
        c.date
  )
  SELECT
      *,
      COUNT(*) OVER() AS total_matching
  FROM
      CompanyViews
  ORDER BY
      date DESC
  LIMIT ${limit} OFFSET ${(offset - 1) * limit};
`;

  return rows as CompanyTypeWithViews[];
}
export async function getAllRejectedCompaniesWithActionCount(
  limit: number,
  offset: number
) {
  const { rows } = await sql`
  WITH CompanyViews AS (
    SELECT
        c.id,
        c.name,
        c.key,
        c.salary,
        c.position,
        c.status,
        COUNT(a.id) AS views,
        c.date
    FROM
        company c
    LEFT JOIN
        actions a
    ON
        c.id = a.companyId
    WHERE
        c.status = 'rejected'
    GROUP BY
        c.id,
        c.name,
        c.key,
        c.position,
        c.status,
        c.salary,
        c.date
  )
  SELECT
      *,
      COUNT(*) OVER() AS total_matching
  FROM
      CompanyViews
  ORDER BY
      date DESC
  LIMIT ${limit} OFFSET ${(offset - 1) * limit};
`;

  return rows as CompanyTypeWithViews[];
}

export async function getAllViewedCompaniesWithActionCount(
  limit: number,
  offset: number
) {
  const { rows } = await sql`
  WITH CompanyViews AS (
    SELECT
        c.id,
        c.name,
        c.key,
        c.salary,
        c.position,
        c.status,
        COUNT(a.id) AS views,
        c.date
    FROM
        company c
    LEFT JOIN
        actions a
    ON
        c.id = a.companyId
    GROUP BY
        c.id,
        c.name,
        c.key,
        c.position,
        c.status,
        c.salary,
        c.date
    HAVING
        COUNT(a.id) > 0
  )
  SELECT
      *,
      COUNT(*) OVER() AS total_matching
  FROM
      CompanyViews
  ORDER BY
      date DESC
  LIMIT ${limit} OFFSET ${(offset - 1) * limit};
`;

  return rows as CompanyTypeWithViews[];
}

export async function getAllCompaniesWithActionCount(
  limit: number,
  offset: number
) {
  const { rows } = await sql`
  WITH CompanyViews AS (
    SELECT
        c.id,
        c.name,
        c.key,
        c.salary,
        c.position,
        c.status,
        COUNT(a.id) AS views,
        c.date
    FROM
        company c
    LEFT JOIN
        actions a
    ON
        c.id = a.companyId
    GROUP BY
        c.id,
        c.name,
        c.key,
        c.salary,
        c.position,
        c.status,
        c.date
  )
  SELECT
      *,
      COUNT(*) OVER() AS total_matching
  FROM
      CompanyViews
  ORDER BY
      date DESC
  LIMIT ${limit} OFFSET ${(offset - 1) * limit};
`;

  return rows as CompanyTypeWithViews[];
}

export async function getCompanyByKey(key: string) {
  const { rows } = await sql`SELECT *
    FROM company
    WHERE key = ${key};`;

  return rows[0] as CompanyType;
}

export interface ActionsType {
  id: string;
  companyid: string;
  date: string;
  redirectkey: string;
  redirectlink: string;
  ip: string;
  useragent: string;
  country: string;
  region: string;
  city: string;
}

export async function getActionsByCompanyId(companyId: string) {
  const { rows } = await sql`SELECT * 
      FROM actions
      WHERE companyId = ${companyId}
      ORDER BY
        date DESC;`;
  return rows as ActionsType[];
}

export async function deleteCompanyById(id: string) {
  const client = await sql.connect(); // Connect to the database

  try {
    // Start the transaction
    await client.query('BEGIN');

    // Delete related actions
    const { rowCount: actionCount } = await client.query(
      `
      DELETE FROM actions
      WHERE companyId = $1`,
      [id]
    );

    // Delete the company
    const { rowCount: companyCount } = await client.query(
      `
      DELETE FROM company
      WHERE id = $1`,
      [id]
    );

    // Commit the transaction
    await client.query('COMMIT');

    console.log(
      `Deleted ${actionCount} actions and ${companyCount} company records.`
    );

    // Revalidate path if the transaction was successful
    revalidatePath('/admin');
    // moved to (backend)/api/cache/revalidate-path

    return { success: true, actionCount, companyCount };
  } catch (error: any) {
    // Rollback the transaction in case of error
    await client.query('ROLLBACK');
    console.error('Error deleting company and actions:', error);
    return { success: false, error: error.message };
  } finally {
    // Release the client back to the pool
    client.release();
  }
}

export async function deleteActionsByCompanyId(id: string) {
  const client = await sql.connect(); // Connect to the database

  try {
    // Start the transaction
    await client.query('BEGIN');

    // Delete related actions
    const { rowCount: actionCount } = await client.query(
      `
      DELETE FROM actions
      WHERE companyId = $1`,
      [id]
    );

    // Commit the transaction
    await client.query('COMMIT');

    // Revalidate path if the transaction was successful
    revalidatePath('/admin');
    // moved to (backend)/api/cache/revalidate-path

    return { success: true, actionCount };
  } catch (error: any) {
    // Rollback the transaction in case of error
    await client.query('ROLLBACK');
    console.error('Error deleting actions:', error);
    return { success: false, error: error.message };
  } finally {
    // Release the client back to the pool
    client.release();
  }
}

export async function updateStatus(companyKey: string, status: string) {
  const { rowCount } = await sql`
  UPDATE company 
  SET status = ${status}
  WHERE key = ${companyKey}
`;
  revalidatePath('/admin');
  revalidatePath(`/admin/company/${companyKey}`);

  return rowCount;
}

export async function generateRandomKey(): Promise<string> {
  let pass = false;
  let key = '';
  while (!pass) {
    key = randomKey();
    pass = await checkKey(key);
  }
  return key;
}

function randomKey() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters.charAt(randomIndex);
  }
  return key;
}

async function checkKey(key: string): Promise<boolean> {
  const { rows } = await sql`SELECT key FROM company WHERE key = ${key};`;
  return rows.length < 1;
}
