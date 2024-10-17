import Link from 'next/link';
import Button from '@/components/common/Button';
import { ROUTES } from '@/constants/routes';
import { ZIndex } from '@/constants/ui';
import { recruitConfig } from '@/constants/recruitConfig';

const WithCotamButton = () => {
  return (
    <div className="relative flex w-full items-center">
      {recruitConfig.isRecruitmentOpen && (
        <p
          className={`absolute right-[-10px] top-[-10px] rounded bg-cotam-blue-50 px-1 text-white galmuri11-body-5 ${ZIndex.home.firstLayer}`}>
          코탐은 지금 모집중!
        </p>
      )}
      <Link className="w-full" href={ROUTES.RECRUIT.PATH}>
        <Button className="w-full">코탐과 함께하기</Button>
      </Link>
    </div>
  );
};

export default WithCotamButton;
