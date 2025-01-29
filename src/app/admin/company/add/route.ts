// add new comany route
import { type NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { generateRandomKey } from '../../actions';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const position = formData.get('position') as string;
    const description = formData.get('description') as string;
    const salary = formData.get('salary') as string;
    const website_link = formData.get('website_link') as string;
    const post_link = formData.get('post_link') as string;
    if (!name) {
      return NextResponse.json(
        { message: 'Company Name required' },
        { status: 400 }
      );
    }
    const key = await generateRandomKey();

    await addCompany({
      key,
      name,
      position,
      description,
      salary,
      website_link,
      post_link,
    });

    revalidatePath('/admin');

    return NextResponse.json({ message: 'Company added successfully', key });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

interface CompanyDataType {
  key: string;
  name: string;
  position: string;
  description: string;
  salary: string;
  website_link: string;
  post_link: string;
}

async function addCompany(data: CompanyDataType) {
  const { key, name, position, description, salary, website_link, post_link } =
    data;

  const { rows } = await sql`
    INSERT INTO company (key, name, position, description, salary, website_link, post_link)
    VALUES (${key}, ${name}, ${position}, ${description}, ${salary}, ${website_link}, ${post_link})
  `;

  return rows[0];
}
