import { Metadata } from 'next';

import Button from '@/components/common/Button';
import FAQAccordion from '@/components/common/FAQAccordion';
import DescriptionCard from '@/components/common/DescriptionCard';

import { FAQList } from './constant';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '모집 안내',
  };
}

export default function Recruit() {
  return (
    <main className="box-border flex min-h-screen w-full flex-col gap-y-[100px] p-10 lg:w-[1024px]">
      <section aria-label="모집 일정" className="flex flex-col gap-y-6">
        <h2 className="galmuri11-headline-3">모집 일정</h2>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-3 md:flex-row">
            <DescriptionCard
              variant="lightBlue"
              title="모집 기간"
              contents="2024.10.07 - 2024.10.11"
              className="flex-1"
            />
            <DescriptionCard
              variant="lightBlue"
              title="발표"
              contents="2024.10.16"
              className="flex-1"
            />
          </div>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Button className="w-full">코탐 지원하기 ⇗</Button>
          </a>
        </div>
      </section>
      <section aria-label="지원 자격" className="flex flex-col gap-y-6">
        <h2 className="galmuri11-headline-3">지원 자격</h2>
        <div className="flex flex-col gap-3 md:flex-row">
          <DescriptionCard title="직군" contents="무관" className="flex-1" />
          <DescriptionCard title="연차" contents="무관" className="flex-1" />
        </div>
      </section>
      <section aria-label="자주 묻는 질문" className="flex flex-col gap-y-6">
        <h2 className="galmuri11-headline-3">자주 묻는 질문</h2>
        <ul className="flex flex-col gap-y-3">
          {FAQList.map(({ question, answer }) => (
            <li key={question}>
              <FAQAccordion questionText={question} answerText={answer} />
            </li>
          ))}
        </ul>
      </section>
      <section aria-label="문의하기" className="gap-3 flex-col-center">
        <p className="galmuri11-body-3">궁금한게 더 있으신가요?</p>
        <a className="w-full" href="" target="_blank" rel="noopener noreferrer">
          <Button variant="blue" className="w-full">
            카카오톡으로 문의하기
          </Button>
        </a>
      </section>
    </main>
  );
}
