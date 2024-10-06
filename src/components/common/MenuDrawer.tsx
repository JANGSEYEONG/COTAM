'use client';

import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import CloseX from '../../../public/assets/icons/CloseX.svg';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

interface MenuItemProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
  selected?: boolean;
}

const MenuDrawer = ({ isOpen, onClose, pathname }: MenuDrawerProps) => {
  return (
    <div
      className={cn(
        'fixed right-0 top-0 z-50 h-screen overflow-hidden bg-[#08072D] shadow-lg backdrop-blur-[20px] transition-all duration-200 ease-in-out',
        isOpen ? 'w-full opacity-100' : 'w-0 opacity-0',
      )}>
      <div className="box-border flex w-full items-center justify-end px-10 py-4">
        <CloseX className="cursor-pointer" onClick={onClose} />
      </div>
      <ul>
        {Object.values(ROUTES).map((ROUTE) => (
          <li key={ROUTE.PATH}>
            <Link href={ROUTE.PATH}>
              <MenuItem text={ROUTE.LABEL} selected={pathname === ROUTE.PATH} onClick={onClose} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MenuItem = ({ text, selected, ...props }: MenuItemProps) => {
  return (
    <p
      className={cn(
        'box-border flex w-full cursor-pointer items-center px-10 py-4 text-white hover:text-cotam-red-60',
        selected ? 'text-cotam-red-60 pretandard-subtitle-1' : 'pretandard-subtitle-1',
      )}
      {...props}>
      {text}
    </p>
  );
};

export default MenuDrawer;
