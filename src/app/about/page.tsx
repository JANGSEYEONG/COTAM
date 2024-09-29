import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '소개',
  };
}

export default function About() {
  return <main className="flex min-h-screen gap-6 p-24">코탐소개</main>;
}
