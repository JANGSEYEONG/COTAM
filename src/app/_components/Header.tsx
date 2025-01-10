'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import MenuButton from '@/components/common/MenuButton';

import { cn } from '@/lib/utils';

import { ROUTES } from '@/constants/routes';

import Cotam from '../../../public/assets/logo/Cotam.svg';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between px-10 backdrop-blur-[50px] lg:h-[60px] lg:justify-start lg:gap-[60px] lg:px-[calc((100%-1024px)/2+40px)]">
      <Link href={ROUTES.HOME.PATH} aria-label="홈페이지로 이동">
        <Cotam className="h-[18px] w-20 cursor-pointer text-cotam-red-60" />
      </Link>

      {/* 데스크톱 메뉴 (lg 이상에서만 표시) */}
      <ul className="hidden items-center gap-[60px] text-white pretandard-subtitle-1 lg:flex">
        {Object.values(ROUTES).map((ROUTE) => (
          <li key={ROUTE.PATH} className={cn(pathname === ROUTE.PATH && 'text-cotam-red-60')}>
            <Link href={ROUTE.PATH}>{ROUTE.LABEL}</Link>
          </li>
        ))}
      </ul>

      {/* 모바일 햄버거 메뉴 (lg 미만에서만 표시) */}
      <MenuButton pathname={pathname} className="lg:hidden" />
    </header>
  );
};

export default Header;
