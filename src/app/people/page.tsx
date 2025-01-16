import { Metadata } from 'next';

import MemberCard from './_components/MemberCard';
import MemberCount from './_components/MemberCount';
import { playerList } from './constants';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '사람들',
  };
}

export default function People() {
  return (
    <main className="box-border flex min-h-screen w-full flex-col gap-y-10 p-10 lg:w-[1024px]">
      <h1 className="whitespace-pre-line text-white galmuri11-headline-1">{`코탐과 함께하는\n사람들`}</h1>
      <section aria-label="코탐 스터디원 수">
        <h2 className="sr-only">스터디원 현황</h2>
        <MemberCount />
      </section>

      <section aria-label="스터디원 리스트">
        <h2 className="sr-only">스터디원 리스트</h2>
        <ul className="flex flex-col gap-y-3 md:block md:columns-2">
          {playerList.map((player, index) => (
            <li
              key={index}
              className="box-border flex h-fit w-full break-inside-avoid flex-col gap-y-4 rounded-xl bg-cotam-blue-95 p-4 md:mb-3">
              <MemberCard {...player} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
