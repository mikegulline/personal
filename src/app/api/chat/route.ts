import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: openai('gpt-4-turbo'),
    messages,
    // You can add additional OpenAI parameters here if needed
    // For example: temperature: 0.7,
  });
  return result.toDataStreamResponse();
}
