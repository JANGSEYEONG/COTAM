import { Metadata } from 'next';
import { playerList, positionMap } from './constants';
import PeopleCount from './_components/PeopleCount';

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
        <PeopleCount />
      </section>

      <section aria-label="스터디원 후기 리스트">
        <ul className="flex flex-col gap-y-3 md:block md:columns-2">
          {playerList.map(({ name, position, description, job }, index) => (
            <li
              key={index}
              className="box-border flex h-fit w-full break-inside-avoid flex-col gap-y-4 rounded-xl bg-cotam-blue-95 p-4 md:mb-3">
              <article className="flex flex-col gap-y-5">
                <header className="flex justify-between">
                  <div className="flex flex-row items-center gap-x-5">
                    <span className="h-10 w-10 rounded bg-cotam-gray-30 flex-center">
                      {name[0]}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-white galmuri11-body-2-bold">{name}</span>
                      <span className="text-cotam-blue-40 galmuri11-body-5">{job}</span>
                    </div>
                  </div>
                  {/* 스터디장, 운영진만 태그 표시 */}
                  {position !== 'user' && (
                    <span className="box-border h-fit rounded bg-cotam-blue-40 px-1 text-white">
                      {positionMap[position]}
                    </span>
                  )}
                </header>

                <p className="text-cotam-blue-10 galmuri11-body-2">{description}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
