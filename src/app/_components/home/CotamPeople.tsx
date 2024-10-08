import React from 'react';
import LinkButton from './LinkButton';
import TopMoveBox, { TopMoveBoxProps } from './TopMoveBox';
import Desktop from '../../../../public/assets/icons/DesktopRed.svg';
import Hand from '../../../../public/assets/icons/HandRed.svg';
import ArrowUp from '../../../../public/assets/icons/ArrowUpRed.svg';
import Scroll from '../../../../public/assets/icons/ScrollRed.svg';
import Target from '../../../../public/assets/icons/TargetRed.svg';
import Bang from '../../../../public/assets/icons/Bang.svg';
import { ZIndex } from '@/constants/ui';
import { ROUTES } from '@/constants/routes';

interface Props {
  isVisibleCotamPeople: boolean;
}

const CotamPeople = ({ isVisibleCotamPeople }: Props) => {
  const TopMoveBoxList: TopMoveBoxProps[] = [
    {
      icon: <Desktop className={'size-4'} />,
      label: '개발을 좋아해요',
      backgroundColor: 'bg-cotam-blue-90',
      delay: 300,
    },
    {
      icon: <Hand className={'size-4'} />,
      label: 'IT 업계분들과 교류하고 싶어요',
      backgroundColor: 'bg-cotam-blue-80',
      delay: 450,
    },
    {
      icon: <ArrowUp className={'size-4'} />,
      label: '성장하고 싶어요',
      backgroundColor: 'bg-cotam-blue-70',
      delay: 600,
    },
    {
      icon: <Scroll className={'size-4'} />,
      label: '생산적인 주말을 보내고 싶어요',
      backgroundColor: 'bg-cotam-blue-50',
      delay: 750,
    },
    {
      icon: <Target className={'size-4'} />,
      label: '목표를 달성하고 싶어요',
      backgroundColor: 'bg-cotam-blue-40',
      delay: 900,
    },
  ];

  return (
    <section
      className={`sticky top-0 flex flex-col gap-9 bg-cotam-blue-100 px-10 py-[60px] ${ZIndex.home.thirdLayer}`}>
      <p className="break-keep text-white galmuri11-headline-1">이런 사람들과 함께하고 있어요.</p>
      <ul className="flex h-full min-h-[268px] flex-col flex-wrap gap-3 sm:flex-row">
        {isVisibleCotamPeople &&
          TopMoveBoxList.map((topMoveBox) => <TopMoveBox key={topMoveBox.label} {...topMoveBox} />)}
      </ul>
      <div className="flex gap-3 rounded-xl bg-cotam-blue-95 p-5">
        <Bang className="mt-[5px] h-4 w-[18px] leading-7" />
        <div className="flex flex-col gap-4 text-white">
          <p className="galmuri11-subtitle-1">하나라도 해당하시나요?</p>
          <p className="text-cotam-blue-10 galmuri11-body-1">
            자유롭고 편안한 분위기 속에서 즐겁게 성장하고자한다면 코탐과 함께해요.
          </p>
        </div>
      </div>
      <LinkButton
        className="!text-cotam-blue-30"
        href={ROUTES.PEOPLE.PATH}
        label="코탐과 함께하는 사람들 ⇨"
      />
    </section>
  );
};

export default CotamPeople;
