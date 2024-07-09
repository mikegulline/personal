export const dynamic = 'force-dynamic';
import { NextResponse, type NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  // Ensure the request method is POST
  if (request.method !== 'POST') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }

  // Ensure the content type is application/json
  const contentType = request.headers.get('content-type');
  if (contentType !== 'application/json') {
    return NextResponse.json(
      { message: 'Unsupported Content-Type' },
      { status: 415 }
    );
  }

  try {
    const { path } = await request.json();

    // Validate the path
    if (!path || typeof path !== 'string') {
      return NextResponse.json(
        { message: 'Invalid or missing path' },
        { status: 400 }
      );
    }

    await revalidatePath(path);

    return NextResponse.json({ message: 'Path revalidated!' });
  } catch (error: any) {
    console.error('Error revalidating path:', error);
    return NextResponse.json(
      { message: 'Error revalidating path', error: error.message },
      { status: 500 }
    );
  }
}
