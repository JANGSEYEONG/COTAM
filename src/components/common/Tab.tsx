import { cn } from '@/lib/utils';

export type TabType = {
  index: number;
  value: string;
};

interface Props {
  tabList: TabType[];
  selectedTab: number;
  onTabChange: (index: number) => void;
}

const Tab = ({ tabList, selectedTab, onTabChange }: Props) => {
  const handleTabChange = (index: number) => {
    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <ul className="flex items-center gap-6">
      {tabList.map((tab) => (
        <li
          key={tab.index}
          className={cn(
            'min-w-fit cursor-pointer galmuri11-headline-3',
            selectedTab === tab.index ? 'text-cotam-red-60' : 'text-white text-opacity-30',
          )}
          onClick={() => handleTabChange(tab.index)}>
          {tab.value}
        </li>
      ))}
    </ul>
  );
};

export default Tab;
