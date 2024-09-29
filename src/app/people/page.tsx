import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '사람들',
  };
}

export default function People() {
  return <main className="flex min-h-screen gap-6 p-24">사람들</main>;
}
