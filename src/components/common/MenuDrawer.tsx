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

interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  selected?: boolean;
}

const MenuDrawer = ({ isOpen, onClose, pathname }: MenuDrawerProps) => {
  return (
    <ul
      className={`fixed right-0 top-0 z-50 h-screen w-full bg-[#08072D80] shadow-lg transition-transform duration-300 ease-in-out backdrop-blur-20px lg:w-[30vw] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
      <p className="box-border flex w-full flex-row items-center justify-end px-[40px] py-[16px]">
        <CloseX className="cursor-pointer" onClick={onClose} />
      </p>
      {Object.values(ROUTES).map((ROUTE) => (
        <li key={ROUTE.PATH}>
          <Link href={ROUTE.PATH}>
            <MenuItem text={ROUTE.LABEL} selected={pathname === ROUTE.PATH} onClick={onClose} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

const MenuItem = ({ className, text, selected, ...props }: MenuItemProps) => {
  return (
    <p
      className={cn(
        `box-border flex w-full cursor-pointer flex-row items-center justify-start px-[40px] py-[16px] text-white hover:text-cotam-red-60 ${
          selected ? 'text-cotam-red-60 pretandard-subtitle-1' : 'pretandard-subtitle-1'
        }`,
        className,
      )}
      {...props}>
      {text}
    </p>
  );
};

export default MenuDrawer;
