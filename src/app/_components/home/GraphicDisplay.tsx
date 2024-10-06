'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const GraphicDisplay = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollUp, setIsScrollUp] = useState(false);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    let prevScroll = 0;
    setScrollY((prev) => {
      prevScroll = prev;
      return window.scrollY - window.innerHeight || window.pageYOffset - window.innerHeight;
    });
    if (prevScroll >= scrollY) {
      setIsScrollUp(true);
    } else {
      setIsScrollUp(false);
    }
  };

  // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const viewHeight = window.innerHeight;
    setScrollY(-viewHeight);

    // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const viewHeight = window.innerHeight;
    const perIndexHeight = (viewHeight * 4) / 9;
    const currentIndexHeight = currentIndex * perIndexHeight;
    const absoluteValue = Math.abs(scrollY - currentIndexHeight);
    const scrollRank = Math.floor(absoluteValue / perIndexHeight);
    if (absoluteValue > perIndexHeight) {
      // 아래로 스크롱
      if (currentIndexHeight <= scrollY) {
        setCurrentIndex((prev) => prev + scrollRank);
      } else {
        //위로 스크롤
        setCurrentIndex((prev) => prev - scrollRank);
      }
    }
  }, [scrollY]);

  return (
    <div className="relative galmuri11-headline-3">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          className="h-[392px] !w-[332px] max-w-[332px]"
          quality={100}
          alt="애니메이션배경이미지"
          width={332}
          height={392}
          src={'/assets/image/Graphic-Display.png'}
        />
        <p className="z-14 absolute left-[36px] top-[76px] text-cotam-blue-60">co</p>
        <div className={cn('absolute left-[68px] top-[76px] flex flex-col gap-2')}>
          <p
            className={cn(
              'text-cotam-blue-60 transition-all duration-300',
              currentIndex > 0 && (currentIndex === 1 ? 'opacity-100' : 'hidden opacity-0'),
            )}>
            ding
          </p>
          <p
            className={cn(
              'transition-all duration-300',
              currentIndex > 1 && currentIndex === 2
                ? 'text-cotam-blue-60 opacity-100'
                : currentIndex < 3
                  ? 'text-cotam-red-30 opacity-100'
                  : 'hidden',
            )}>
            operate
          </p>
          <p
            className={cn(
              'transition-all duration-300',
              currentIndex > 2 && currentIndex === 3
                ? 'text-cotam-blue-60 opacity-100'
                : currentIndex < 4
                  ? 'text-cotam-red-30 opacity-100'
                  : 'hidden',
            )}>
            urage
          </p>
          <p
            className={cn(
              'transition-all duration-300',
              currentIndex > 3 && currentIndex === 4
                ? 'text-cotam-blue-60 opacity-100'
                : currentIndex < 5
                  ? 'text-cotam-red-30 opacity-100'
                  : 'hidden',
            )}>
            work
          </p>
          <p
            className={cn(
              'transition-all duration-300',
              currentIndex > 4 && currentIndex === 5
                ? 'text-cotam-blue-60 opacity-100'
                : currentIndex < 6
                  ? 'text-cotam-red-30 opacity-100'
                  : 'hidden',
            )}>
            zy
          </p>
          <p
            className={cn(
              'transition-all duration-300',
              currentIndex > 5 && currentIndex === 6
                ? 'text-cotam-blue-60 opacity-100'
                : currentIndex < 7
                  ? 'text-cotam-red-30 opacity-100'
                  : 'text-cotam-blue-60 opacity-100',
            )}>
            oooooo
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraphicDisplay;
