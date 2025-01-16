'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

export type TabType = {
  value: string;
  label: string;
  content: React.ReactNode;
};

interface Props {
  tabs: TabType[];
  defaultValue: string;
}

const Tabs = ({ tabs, defaultValue }: Props) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue);
  return (
    <div className="flex flex-col gap-y-10">
      <ul role="tablist" className="flex items-center gap-6">
        {tabs.map((tab) => (
          <li
            key={tab.value}
            role="tab"
            className={cn(
              'min-w-fit cursor-pointer galmuri11-headline-3',
              selectedTab === tab.value ? 'text-cotam-red-60' : 'text-white text-opacity-30',
            )}
            onClick={() => setSelectedTab(tab.value)}>
            {tab.label}
          </li>
        ))}
      </ul>
      <div role="tabpanel">{tabs.find((tab) => selectedTab === tab.value)?.content}</div>
    </div>
  );
};

export default Tabs;
