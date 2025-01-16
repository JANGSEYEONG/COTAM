import Button from '@/components/Button';
import DescriptionCard from '@/components/DescriptionCard';

import { RECRUITMENT_FORM_URL } from '@/constants/externalLinks';
import { recruitConfig } from '@/constants/recruitConfig';

const RecruitmentPeriod = () => {
  return (
    <section aria-label="모집 일정" className="flex flex-col gap-y-6">
      <h2 className="text-white galmuri11-headline-3">모집 일정</h2>
      {recruitConfig.isRecruitmentOpen ? (
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-3 md:flex-row">
            <DescriptionCard
              variant="lightBlue"
              title="모집 기간"
              contents={recruitConfig.recruitmentPeriod}
              className="flex-1"
            />
            <DescriptionCard
              variant="lightBlue"
              title="발표"
              contents={recruitConfig.announcementDate}
              className="flex-1"
            />
          </div>
          <a href={RECRUITMENT_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">코탐 지원하기 ⇗</Button>
          </a>
        </div>
      ) : (
        <div className="rounded-xl bg-cotam-blue-90 px-[30px] py-[35px] text-white galmuri11-body-1 flex-center">
          지금은 모집 기간이 아니에요
        </div>
      )}
    </section>
  );
};
export default RecruitmentPeriod;
