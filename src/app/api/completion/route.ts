import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export const maxDuration = 30;

type Req = {
  prompt: string;
};

export async function POST(req: Request) {
  const { prompt }: Req = await req.json();

  console.log(prompt);
  const result = streamText({
    model: openai('gpt-3.5-turbo'),
    prompt,
  });

  return result.toDataStreamResponse();
}
