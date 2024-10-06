'use client';

import BorderTop from '@/components/common/BorderTop';
import { ZIndex } from '@/constants/ui';
import useIsVisible from '@/hooks/useIsVisible';
import AboutCotam from './_components/home/AboutCotam';
import Closing from './_components/home/Closing';
import Cotam from './_components/home/Cotam';
import CotamPeople from './_components/home/CotamPeople';
import FAQ from './_components/home/FAQ';
import Introduce from './_components/home/Introduce';

export default function Home() {
  const { isVisible, ref } = useIsVisible({ threshold: 0.5 });
  const { isVisible: isVisibleCotamPeople, ref: isCotamPeopleRef } = useIsVisible();

  return (
    <div className="flex w-screen justify-center">
      <div className="absolute top-[100vh] h-screen w-screen rotate-180 bg-pixel-gradient" />
      <main className="h-full w-full max-w-[1024px]">
        <Introduce />
        <div className="sticky top-0 h-[400dvh] w-full">
          <Cotam />
        </div>
        <div ref={ref}>
          <AboutCotam isVisible={isVisible} />
        </div>
        <div ref={isCotamPeopleRef} className="sticky top-0">
          {isVisibleCotamPeople && <CotamPeople />}
        </div>
        <div className={`relative h-full bg-cotam-blue-100 ${ZIndex.home.thirdLayer}`}>
          <BorderTop />
          <Closing />
          <FAQ />
        </div>
      </main>
    </div>
  );
}
