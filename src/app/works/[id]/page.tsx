import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Works',
  description:
    'Works Mike Gulline—Full Stack Web Developer (TailwindCSS, TypeScript, React Js, Next JS)',
};

type Props = {
  params: {
    id: string;
  };
};

type Work = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default async function Works({ params: { id } }: Props) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const work: Work = await res.json();
    return (
      <div className='flex min-h-screen flex-col items-center justify-between p-24'>
        Work: {work.title}
      </div>
    );
  } catch (error) {
    notFound();
  }
}
