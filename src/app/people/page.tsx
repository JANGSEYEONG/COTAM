import { Metadata } from 'next';
import HumanRed from '../../../public/assets/icons/HumanRed.svg';
import { playerList, positionMap } from './constants';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '사람들',
  };
}

export default function People() {
  return (
    <main className="box-border flex min-h-screen w-full flex-col gap-y-10 p-10 lg:w-[1024px]">
      <article className="flex w-full flex-row items-center justify-between rounded-xl bg-cotam-blue-90 p-5">
        <div className="flex flex-row items-center gap-2">
          <HumanRed className="h-8 w-8" />
          <span className="text-cotam-blue-40 galmuri11-body-l">PLAYER</span>
        </div>
        <span className="text-cotam-red-50 galmuri11-headline-3">31</span>
      </article>

      <div className="flex w-full flex-col gap-y-5 md:block md:columns-2">
        {playerList.map((item, index) => (
          <article
            key={index}
            className="box-border flex h-fit w-full break-inside-avoid flex-col gap-y-5 rounded-xl bg-cotam-blue-95 p-4 md:mb-3">
            <section className="flex flex-row items-start justify-between">
              <section className="flex flex-row items-center gap-x-5">
                <span className="h-10 w-10 rounded bg-cotam-gray-30" />
                <div className="flex flex-col">
                  <span className="text-white galmuri11-body-2-bold">{item.name}</span>
                  <span className="text-cotam-blue-40 galmuri11-body-5">{item.job}</span>
                </div>
              </section>

              {item.position !== 'user' && (
                <span className="box-border rounded bg-cotam-blue-40 px-1 text-white">
                  {positionMap[item.position]}
                </span>
              )}
            </section>

            <p className="text-cotam-blue-10 galmuri11-body-2">{item.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
