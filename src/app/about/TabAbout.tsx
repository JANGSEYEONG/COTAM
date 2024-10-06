'use client';

import DescriptionCard from '@/components/common/DescriptionCard';
import Tab from '@/components/common/Tab';
import TimeTable from '@/components/common/TimeTable';
import { Fragment, useState } from 'react';
import BookRed from '../../../public/assets/icons/BookRed.svg';
import { activityList, studyProgressMethodList, tabList } from './constants';

const TabAbout = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <section className="flex w-full flex-col gap-y-10">
      <Tab tabList={tabList} selectedTab={selectedTab} onTabChange={handleTabChange} />

      {selectedTab === 0 && (
        <Fragment>
          <article className="flex w-full flex-row items-center justify-between rounded-xl bg-cotam-blue-90 p-5">
            <div className="flex flex-row items-center gap-2">
              <BookRed className="h-8 w-8" />
              <span className="text-cotam-blue-40 galmuri11-body-l">SCORE</span>
            </div>
            <span className="text-cotam-red-50 galmuri11-headline-3">40</span>
          </article>

          <article className="box-border flex w-full flex-col gap-y-6 py-[30px]">
            <h2 className="text-white galmuri11-headline-3">정규 스터디</h2>
            <section className="flex flex-col gap-y-3 md:grid md:grid-cols-2 md:gap-x-3">
              <DescriptionCard title="시간" contents="매주 토요일 14시-18시" />
              <DescriptionCard title="장소" contents="건대입구 또는 강남역 근처" />
            </section>
            <section className="flex flex-row gap-x-2">
              <span className="text-cotam-blue-40 galmuri11-body-3">❗</span>
              <p className="text-cotam-blue-20 pretandard-body-3">
                정규 스터디 이외에도 누구나 원하는 시간, 장소로 오프라인 및 온라인 스터디를 주최할
                수 있어요!
              </p>
            </section>
          </article>

          <article className="box-border flex w-full flex-col gap-y-6 pt-[30px]">
            <h2 className="text-white galmuri11-headline-3">정규 스터디 진행 방식</h2>
            {studyProgressMethodList.map((item, index) => (
              <section key={index} className="flex flex-col gap-y-3">
                <TimeTable
                  time={item.time}
                  contents={item.contents}
                  className="md:flex-row md:items-center md:gap-x-3"
                />
                <div className="flex flex-col gap-y-1">
                  {item.descriptionList.map((description, index) => (
                    <div
                      key={index}
                      className="flex flex-row gap-x-2 text-cotam-blue-20 pretandard-body-3">
                      <span className="text-cotam-red-60 galmuri11-body-2">▸</span>
                      <p>{description}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </Fragment>
      )}

      {selectedTab === 1 && (
        <Fragment>
          <article className="flex w-full flex-col gap-y-6 py-[30px]">
            <h2 className="text-white galmuri11-headline-3">
              스터디 이외에도 여러가지 활동을 해요
            </h2>
            <section className="flex w-full flex-row flex-wrap gap-x-2 gap-y-2">
              {activityList.map((item, index) => (
                <span
                  key={index}
                  className="box-border w-fit rounded-[10px] bg-cotam-blue-90 px-3 py-2 text-white galmuri11-body-1">
                  {item}
                </span>
              ))}
            </section>
          </article>
        </Fragment>
      )}
    </section>
  );
};

export default TabAbout;
