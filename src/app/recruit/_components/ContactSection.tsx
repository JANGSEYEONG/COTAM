import Button from '@/components/Button';

import { KAKAO_OPEN_CHAT_URL } from '@/constants/externalLinks';

const ContactSection = () => {
  return (
    <section aria-label="문의하기" className="gap-3 flex-col-center">
      <p className="galmuri11-body-3">궁금한게 더 있으신가요?</p>
      <a className="w-full" href={KAKAO_OPEN_CHAT_URL} target="_blank" rel="noopener noreferrer">
        <Button variant="blue" className="w-full">
          카카오톡으로 문의하기
        </Button>
      </a>
    </section>
  );
};

export default ContactSection;
