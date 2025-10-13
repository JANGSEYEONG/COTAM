import Image from 'next/image';

import CountUp from 'react-countup';

import BorderTop from '@/components/BorderTop';

import useIsCSR from '@/hooks/useIsCSR';

import { ROUTES } from '@/constants/routes';
import {
  OFFLINE_STUDY_SESSIONS_COMPLETED,
  ONLINE_STUDY_SESSIONS_COMPLETED,
  STUDY_MEMBERS_COUNT,
  TOTAL_STUDY_SESSIONS,
} from '@/constants/studyStats';
import { ZIndex } from '@/constants/ui';

import ImageBox from './ImageBox';
import LinkButton from './LinkButton';

interface DescriptionBoxProps {
  icon: string;
  title: string;
  count: number;
  description: string;
}

interface Props {
  isVisible: boolean;
}

const ImageList = [
  {
    title: '스터디',
    description:
      '매주 토요일 오후 2시~6시에 모여서 열심히 공부해요! 스터디 끝나고는 함께 저녁도 먹어요.',
    imageSrc: '/assets/image/study.webp',
  },
  {
    title: '네트워킹',
    description:
      '보드게임도 하고, 방탈출도 가고, 맛집 탐방도 해요. 다양한 활동으로 친목도 다지고 재미있게 지내요!',
    imageSrc: '/assets/image/networking.webp',
  },
  {
    title: '온라인 활동',
    description: '온라인으로 TIL, 오운완, 책모임 등 다양한 할동을 함꼐해요.',
    imageSrc: '/assets/image/online-activity.png',
  },
];

const DescriptionList: DescriptionBoxProps[] = [
  {
    icon: '/assets/icons/BookRed.svg',
    title: 'SCORE',
    count: TOTAL_STUDY_SESSIONS,
    // 추후 스터디횟수 종합하는 API로 횟수 대체하기
    // -> #20241007.syjang, 우선 현재 날짜 기준으로 '주' 계산하도록 처리함
    // -> #20251231.syjang, 온라인/오프라인 횟수 표시 나눔
    description: `지금까지 온라인 ${ONLINE_STUDY_SESSIONS_COMPLETED}회, 오프라인 ${OFFLINE_STUDY_SESSIONS_COMPLETED}회로 총 ${TOTAL_STUDY_SESSIONS}번의 스터디를 진행했어요!`,
  },
  {
    icon: '/assets/icons/HumanRed.svg',
    title: 'PLAYER',
    count: STUDY_MEMBERS_COUNT,
    // 추후 스터디횟수 종합하는 API로 횟수 대체하기
    description: `지금까지 ${STUDY_MEMBERS_COUNT}명의 코탐과 함께하고 있어요!`,
  },
];

const AboutCotam = ({ isVisible }: Props) => {
  return (
    <section
      className={`relative h-full w-full bg-cotam-blue-100 pb-[60px] pt-20 ${ZIndex.home.secondLayer} px-10`}>
      <BorderTop />
      <p className="mb-5 text-cotam-red-60 galmuri11-headline-1">코탐은?</p>
      <p className="mb-20 whitespace-pre-wrap text-cotam-blue-10 pretandard-body-1">
        {
          '2023년 활동 시작 이후로\n다양한 연차의 개발자,\n디자이너가 함께하고 있는\nIT 자기계발 모임이에요.'
        }
      </p>
      <ul className="mb-20 flex flex-col gap-5 sm:flex-row">
        {DescriptionList.map((description) => (
          <DescriptionBox key={description.description} {...description} isVisible={isVisible} />
        ))}
      </ul>
      <div className="flex flex-col gap-9">
        <p className="whitespace-pre-wrap text-white galmuri11-subtitle-1">
          다양한 활동도 함께해요
        </p>
        <div className="mb-9 flex flex-col gap-5 sm:flex-row">
          {ImageList.map((image) => (
            <ImageBox key={image.title} {...image} />
          ))}
        </div>
      </div>
      <LinkButton href={ROUTES.ABOUT.PATH} label="코탐 더 알아보기 ⇨" />
    </section>
  );
};

export default AboutCotam;

interface DescriptionBoxProps {
  icon: string;
  title: string;
  count: number;
  description: string;
  isVisible?: boolean;
}

const DescriptionBox = ({ icon, title, count, description, isVisible }: DescriptionBoxProps) => {
  const { isCSR } = useIsCSR();

  return (
    <li className="flex w-full flex-col gap-2 rounded-xl bg-cotam-blue-95 p-5">
      <div className="flex gap-2 galmuri11-headline-3">
        <Image src={icon} width={32} height={32} alt="descriptionIcon" />
        <p className="flex-grow text-cotam-blue-50">{title}</p>
        <p className="text-cotam-red-50">
          <CountUp start={isCSR && isVisible ? 0 : count} end={count} duration={2} separator="," />
        </p>
      </div>
      <p className="text-cotam-blue-20 pretandard-body-3">{description}</p>
    </li>
  );
};
