import { sql } from '@vercel/postgres';

export interface CompanyType {
  id: string;
  key: string;
  name: string;
  title: string;
}

export interface CompanyTypeWithViews extends CompanyType {
  views: number;
}

export async function getAllCompaniesWithActionCount() {
  const { rows } = await sql`SELECT
      c.id,
      c.name,
      c.key,
      c.title,
      COUNT(a.id) AS views
    FROM
      company c
    LEFT JOIN
      actions a
    ON
      c.id = a.companyId
    GROUP BY
      c.id,
      c.name
    ORDER BY
      c.name;`;
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
  date: Date;
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
      WHERE companyId = ${companyId};`;
  return rows as ActionsType[];
}
