'use client';

import CountUp from 'react-countup';

import DescriptionCard from '@/components/DescriptionCard';
import TimeTable from '@/components/TimeTable';

import useIsCSR from '@/hooks/useIsCSR';

import { TOTAL_STUDY_SESSIONS } from '@/constants/studyStats';

import BookRed from '../../../../public/assets/icons/BookRed.svg';
import { timeTableSchedule } from '../constants';

const StudyTabItem = () => {
  const { isCSR } = useIsCSR();

  return (
    <div className="flex flex-col gap-y-[100px]">
      <section
        aria-label="현재까지 진행된 스터디 횟수"
        className="flex w-full items-center justify-between rounded-xl bg-cotam-blue-90 p-5">
        <div className="flex flex-row items-center gap-2">
          <BookRed className="h-8 w-8" />
          <span className="text-cotam-blue-40 galmuri11-headline-3">SCORE</span>
        </div>
        <span className="text-cotam-red-50 galmuri11-headline-3">
          <CountUp
            start={isCSR ? 0 : TOTAL_STUDY_SESSIONS}
            end={TOTAL_STUDY_SESSIONS}
            duration={2}
            separator=","
          />
        </span>
      </section>

      <section aria-label="스터디 시간/장소" className="box-border flex w-full flex-col gap-y-6">
        <h2 className="text-white galmuri11-headline-3">정규 스터디</h2>
        <div className="flex flex-col gap-y-3 md:grid md:grid-cols-2 md:gap-x-3">
          <DescriptionCard title="시간" contents="매주 토요일 14시-18시" />
          <DescriptionCard title="장소" contents="강남역 근처" />
        </div>
        <div className="flex flex-row gap-x-2">
          <span className="text-cotam-blue-40 galmuri11-body-3">❗</span>
          <p className="text-cotam-blue-20 pretandard-body-3">
            정규 스터디 이외에도 누구나 원하는 시간, 장소로 오프라인 및 온라인 스터디를 주최할 수
            있어요!
          </p>
        </div>
      </section>

      <section aria-label="스터디 진행 방식" className="box-border flex w-full flex-col gap-y-6">
        <h2 className="text-white galmuri11-headline-3">정규 모각코 진행 방식</h2>
        <ul className="flex flex-col gap-y-8">
          {timeTableSchedule.map((item, index) => (
            <li key={index} className="flex flex-col gap-y-3">
              <TimeTable
                time={item.time}
                contents={item.contents}
                className="md:flex-row md:items-center md:gap-x-3"
              />
              <ul className="flex flex-col gap-y-1">
                {item.descriptionList.map((description, index) => (
                  <li
                    key={index}
                    className="flex flex-row gap-x-2 text-cotam-blue-20 pretandard-body-3">
                    <span className="text-cotam-red-60 galmuri11-body-2">▸</span>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default StudyTabItem;
