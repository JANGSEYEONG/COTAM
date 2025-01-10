'use client';

import { ZIndex } from '@/constants/ui';

import GraphicDisplay from './GraphicDisplay';

const Cotam = () => {
  return (
    <section
      className={`sticky top-0 flex h-[100dvh] w-full items-center justify-center overflow-visible text-white ${ZIndex.home.firstLayer} px-10`}>
      <GraphicDisplay />
    </section>
  );
};

export default Cotam;
