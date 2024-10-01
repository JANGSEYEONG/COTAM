'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Cotam from '../../../public/assets/logo/Cotam.svg';
import MenuButton from '@/components/common/MenuButton';
import { ROUTES } from '@/constants/routes';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 flex h-14 w-full items-center justify-between px-10 backdrop-blur-[50px] lg:h-[60px] lg:w-[1024px] lg:justify-start lg:gap-[60px]">
      <Link href={ROUTES.HOME.PATH}>
        <Cotam className="h-[18px] w-20 cursor-pointer text-cotam-red-60" />
      </Link>

      {/* 데스크톱 메뉴 (lg 이상에서만 표시) */}
      <ul className="hidden items-center gap-[60px] text-white pretandard-subtitle-1 lg:flex">
        {Object.values(ROUTES).map((ROUTE) => (
          <li key={ROUTE.PATH} className={pathname === ROUTE.PATH ? 'text-cotam-red-60' : ''}>
            <Link href={ROUTE.PATH}>{ROUTE.LABEL}</Link>
          </li>
        ))}
      </ul>

      {/* 모바일 햄버거 메뉴 (lg 미만에서만 표시) */}
      <MenuButton className="lg:hidden" pathname={pathname} />
    </header>
  );
};

export default Header;
