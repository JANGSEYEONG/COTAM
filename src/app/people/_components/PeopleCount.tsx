'use client';
import { useEffect, useState } from 'react';
import HumanRed from '../../../../public/assets/icons/HumanRed.svg';
import CountUp from 'react-countup';

const PEOPLE_COUNT = 34;
const PeopleCount = () => {
  const [isCSR, setIsCSR] = useState(false);

  useEffect(() => {
    setIsCSR(true); // 클라이언트에서만 true로 변경
  }, []);

  return (
    <div className="flex items-center justify-between rounded-xl bg-cotam-blue-90 p-5">
      <div className="flex items-center gap-2">
        <HumanRed className="h-8 w-8" />
        <span className="text-cotam-blue-40 galmuri11-body-l">PLAYER</span>
      </div>
      <span className="text-cotam-red-50 galmuri11-headline-3">
        <CountUp start={isCSR ? 0 : PEOPLE_COUNT} end={PEOPLE_COUNT} duration={2} separator="," />
      </span>
    </div>
  );
};

export default PeopleCount;
