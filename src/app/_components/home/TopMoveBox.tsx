'use client';

import { cn } from '@/lib/utils';
import { ReactNode, useEffect, useState } from 'react';

export interface TopMoveBoxProps {
  icon: ReactNode;
  label: string;
  backgroundColor: string;
  delay?: number;
}

const TopMoveBox = ({ icon, label, backgroundColor, delay = 0 }: TopMoveBoxProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const setVisible = () => {
      setIsVisible(true);
    };
    setTimeout(setVisible, delay);
  }, [delay]);

  return (
    <li
      className={cn(
        `flex w-fit items-center gap-[10px] rounded-[10px] px-3 py-2 transition-opacity duration-200 ${backgroundColor}`,
        isVisible ? 'opacity-100' : 'opacity-0',
      )}>
      {icon}
      <p className={`text-white galmuri11-body-1`}>{label}</p>
    </li>
  );
};

export default TopMoveBox;
