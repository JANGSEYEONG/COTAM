import { Metadata } from 'next';

import ApplicationRequirements from './_components/ApplicationRequirements';
import ContactSection from './_components/ContactSection';
import FAQSection from './_components/FAQSection';
import RecruitmentPeriod from './_components/RecruitmentPeriod';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '모집 안내',
  };
}

export default function Recruit() {
  return (
    <main className="box-border flex min-h-screen w-full flex-col gap-y-[100px] p-10 lg:w-[1024px]">
      <RecruitmentPeriod />
      <ApplicationRequirements />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
