import { Metadata } from 'next';

import Tabs from '@/components/common/Tabs';

import NetworkingTabItem from './_components/NetworkingTabItem';
import StudyTabItem from './_components/StudyTabItem';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '소개',
  };
}

export default function About() {
  const tabs = [
    {
      value: 'study',
      label: '스터디',
      content: <StudyTabItem />,
    },
    {
      value: 'networking',
      label: '네트워킹',
      content: <NetworkingTabItem />,
    },
  ];

  return (
    <main className="box-border flex min-h-screen w-full p-10 lg:w-[1024px]">
      <div className="w-full">
        <Tabs tabs={tabs} defaultValue="study" />
      </div>
    </main>
  );
}
