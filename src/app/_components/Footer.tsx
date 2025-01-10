import Link from 'next/link';

import { ROUTES } from '@/constants/routes';

import Cotam from '../../../public/assets/logo/Cotam.svg';

const Footer = () => {
  return (
    <footer className="w-full flex-center bg-pixel-gradient">
      <div className="flex w-full flex-col justify-center gap-[60px] px-10 pb-10 pt-[60px] lg:w-[1024px]">
        <Cotam className="h-[18px] w-20 text-white" />
        <ul className="flex flex-col justify-center gap-4 text-white galmuri11-body-2">
          {Object.values(ROUTES).map((ROUTE) => (
            <li key={ROUTE.PATH}>
              <Link href={ROUTE.PATH}>{ROUTE.LABEL}</Link>
            </li>
          ))}
        </ul>
        <span className="text-cotam-red-80 galmuri11-body-5">
          © 2024. Cotam. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
