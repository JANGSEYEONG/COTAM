'use client';

import { useState } from 'react';

import useIsCSR from '@/hooks/useIsCSR';

import BookRed from '../../../public/assets/icons/BookRed.svg';

import CountUp from 'react-countup';
import Tab from '@/components/common/Tab';
import TimeTable from '@/components/common/TimeTable';
import DescriptionCard from '@/components/common/DescriptionCard';

import { activityList, studyProgressMethodList, tabList } from './constants';
import { TOTAL_STUDY_SESSIONS } from '@/constants/studyStats';

const TabAbout = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { isCSR } = useIsCSR();

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <main className="flex w-full flex-col gap-y-10">
      <Tab tabList={tabList} selectedTab={selectedTab} onTabChange={handleTabChange} />

      {selectedTab === 0 && (
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

          <section
            aria-label="스터디 시간/장소"
            className="box-border flex w-full flex-col gap-y-6">
            <h2 className="text-white galmuri11-headline-3">정규 스터디</h2>
            <div className="flex flex-col gap-y-3 md:grid md:grid-cols-2 md:gap-x-3">
              <DescriptionCard title="시간" contents="매주 토요일 14시-18시" />
              <DescriptionCard title="장소" contents="건대입구 또는 강남역 근처" />
            </div>
            <div className="flex flex-row gap-x-2">
              <span className="text-cotam-blue-40 galmuri11-body-3">❗</span>
              <p className="text-cotam-blue-20 pretandard-body-3">
                정규 스터디 이외에도 누구나 원하는 시간, 장소로 오프라인 및 온라인 스터디를 주최할
                수 있어요!
              </p>
            </div>
          </section>

          <section
            aria-label="스터디 진행 방식"
            className="box-border flex w-full flex-col gap-y-6">
            <h2 className="text-white galmuri11-headline-3">정규 스터디 진행 방식</h2>
            <ul className="flex flex-col gap-y-8">
              {studyProgressMethodList.map((item, index) => (
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
      )}

      {selectedTab === 1 && (
        <div>
          <section aria-label="스터디 외 활동" className="flex w-full flex-col gap-y-10">
            <h2 className="whitespace-pre-line text-white galmuri11-headline-3">
              {`스터디 이외에도\n여러가지 활동을 해요`}
            </h2>
            <ul className="flex w-full flex-row flex-wrap gap-x-2 gap-y-2">
              {activityList.map((item, index) => (
                <li
                  key={index}
                  className="box-border w-fit rounded-[10px] bg-cotam-blue-90 px-3 py-2 text-white galmuri11-body-1">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </main>
  );
};

export default TabAbout;
