import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '모집 안내',
  };
}

export default function Recruit() {
  return <main className="flex min-h-screen gap-6 p-24">모집 안내</main>;
}
