'use client';

import { useReducer } from 'react';

import Hamburger from '../../../public/assets/icons/Hamburger.svg';
import MenuDrawer from './MenuDrawer';

interface MenuButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  pathname: string;
  className?: string;
}

const MenuButton = ({ pathname, className, ...props }: MenuButtonProps) => {
  const [isOpen, toggleIsOpen] = useReducer((prev) => !prev, false);

  return (
    <div className={className} {...props}>
      <Hamburger className="h-6 w-6 cursor-pointer" onClick={toggleIsOpen} />
      <MenuDrawer isOpen={isOpen} onClose={toggleIsOpen} pathname={pathname} />
    </div>
  );
};

export default MenuButton;
