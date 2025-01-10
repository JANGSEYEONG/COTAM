import Image from 'next/image';

import ArrowDown from '../../../../public/assets/icons/ArrowUpBlue.svg';
import WithCotamButton from './WithCotamButton';

const Introduce = () => {
  return (
    <section className="flex h-[calc(100dvh_-_56px)] flex-col justify-between px-10 pt-[210px] sm:h-[calc(100dvh_-_60px)] sm:pt-[102px] md:pt-[154px]">
      <div className="absolute left-0 top-0 h-screen w-screen bg-pixel-gradient" />
      <div className="flex flex-col gap-4">
        <Image alt="메인아이콘" width={98} height={64} src={'/assets/icons/MainIconRed.svg'} />
        <div className="whitespace-pre-wrap text-white pretandard-headline-1 sm:whitespace-nowrap">
          <p>{'열정적으로,\n때로는 자유롭게'}</p>
          <p>
            <span className="text-cotam-red-60">코탐</span>
            <span>에서</span>
            {'\n함께 성장해요'}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-7">
        <WithCotamButton />
        <ArrowDown className="size-8 rotate-180"></ArrowDown>
      </div>
    </section>
  );
};

export default Introduce;
