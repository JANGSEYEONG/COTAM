'use client';
import useIsCSR from '@/hooks/useIsCSR';

import HumanRed from '../../../../public/assets/icons/HumanRed.svg';
import CountUp from 'react-countup';
import { STUDY_MEMBERS_COUNT } from '@/constants/studyStats';

const PeopleCount = () => {
  const { isCSR } = useIsCSR();

  return (
    <div className="flex items-center justify-between rounded-xl bg-cotam-blue-90 p-5">
      <div className="flex items-center gap-2">
        <HumanRed className="h-8 w-8" />
        <span className="text-cotam-blue-40 galmuri11-headline-3">PLAYER</span>
      </div>
      <span className="text-cotam-red-50 galmuri11-headline-3">
        <CountUp
          start={isCSR ? 0 : STUDY_MEMBERS_COUNT}
          end={STUDY_MEMBERS_COUNT}
          duration={2}
          separator=","
        />
      </span>
    </div>
  );
};

export default PeopleCount;
