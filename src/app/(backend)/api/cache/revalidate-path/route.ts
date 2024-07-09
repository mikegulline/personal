export const dynamic = 'force-dynamic';

import { NextResponse, type NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  console.log('Received a POST request');

  // Ensure the request method is POST
  if (request.method !== 'POST') {
    console.log('Method not allowed');
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }

  // Ensure the content type is application/json
  const contentType = request.headers.get('content-type');
  if (contentType !== 'application/json') {
    console.log('Unsupported Content-Type');
    return NextResponse.json(
      { message: 'Unsupported Content-Type' },
      { status: 415 }
    );
  }

  try {
    const { path } = await request.json();

    // Validate the path
    if (!path || typeof path !== 'string') {
      console.log('Invalid or missing path');
      return NextResponse.json(
        { message: 'Invalid or missing path' },
        { status: 400 }
      );
    }

    console.log('Revalidating path:', path);
    revalidatePath(path);
    console.log('Path revalidated successfully');

    return NextResponse.json({ message: 'Path revalidated!' });
  } catch (error: any) {
    console.error('Error revalidating path:', error);
    return NextResponse.json(
      { message: 'Error revalidating path', error: error.message },
      { status: 500 }
    );
  }
}
