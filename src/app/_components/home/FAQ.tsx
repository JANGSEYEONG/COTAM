import React from 'react';

import FAQList from '@/components/FAQList';
import Button from '@/components/common/Button';

import { KAKAO_OPEN_CHAT_URL } from '@/constants/externalLinks';
import { ROUTES } from '@/constants/routes';

import LinkButton from './LinkButton';

const FAQ = () => {
  return (
    <section className="flex flex-col gap-10 px-10 py-[60px]">
      <div className="flex items-center justify-between">
        <p className="text-white galmuri11-headline-3">자주 묻는 질문</p>
        <LinkButton className="text-cotam-red-60" href={ROUTES.RECRUIT.PATH} label="더보기 >" />
      </div>
      <FAQList />
      <div className="flex flex-col gap-3">
        <p className="text-center text-white galmuri11-body-3">궁금한 게 더 있으신가요?</p>
        <Button variant={'blue'} className="w-full p-0">
          <a target="_blank" className="w-full py-[18px]" href={KAKAO_OPEN_CHAT_URL}>
            카카오톡으로 문의하기
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FAQ;
