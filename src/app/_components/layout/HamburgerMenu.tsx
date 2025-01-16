import Link from 'next/link';

import Drawer from '@/components/Drawer';

import { ROUTES } from '@/constants/routes';

import Hamburger from '../../../../public/assets/icons/Hamburger.svg';
import MenuItem from './MenuItem';

interface Props {
  pathname: string;
  className?: string;
}

const HamburgerMenu = ({ pathname, className }: Props) => {
  return (
    <div className={className}>
      <Drawer>
        <Drawer.Trigger>
          <Hamburger className="h-6 w-6 cursor-pointer" />
        </Drawer.Trigger>
        <Drawer.Content className="bg-[#08072D]/50 backdrop-blur-[50px]">
          <ul className="mt-4">
            {Object.values(ROUTES).map((ROUTE) => (
              <li key={ROUTE.PATH}>
                <Drawer.Close>
                  <Link href={ROUTE.PATH}>
                    <MenuItem text={ROUTE.LABEL} selected={pathname === ROUTE.PATH} />
                  </Link>
                </Drawer.Close>
              </li>
            ))}
          </ul>
        </Drawer.Content>
      </Drawer>
      {/* <Drawer isOpen={isOpen} onClose={toggleIsOpen} pathname={pathname} /> */}
    </div>
  );
};

export default HamburgerMenu;
