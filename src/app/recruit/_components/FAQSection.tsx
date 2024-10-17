import FAQList from '@/components/FAQList';

const FAQSection = () => {
  return (
    <section aria-label="자주 묻는 질문" className="flex flex-col gap-y-6">
      <h2 className="text-white galmuri11-headline-3">자주 묻는 질문</h2>
      <FAQList />
    </section>
  );
};
export default FAQSection;
