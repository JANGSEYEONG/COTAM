import React from 'react';
import HandMetal from '../../../../public/assets/icons/HandMetalRed.svg';
import WithCotamButton from '../WithCotamButton';

const Closing = () => {
  return (
    <section className="py-20">
      <div className="flex w-full flex-col gap-5 rounded-xl bg-white p-6">
        <div className="flex flex-col items-center gap-4">
          <HandMetal className="size-8" />
          <p className="whitespace-pre-wrap text-center galmuri11-subtitle-1">
            {'코탐과 함께할 여러분을\n기다리고 있어요'}
          </p>
        </div>
        <WithCotamButton />
      </div>
    </section>
  );
};

export default Closing;
