import DescriptionCard from '@/components/DescriptionCard';

const ApplicationRequirements = () => {
  return (
    <section aria-label="지원 자격" className="flex flex-col gap-y-6">
      <h2 className="text-white galmuri11-headline-3">지원 자격</h2>
      <div className="flex flex-col gap-3 md:flex-row">
        <DescriptionCard title="직군" contents="기획자, 디자이너, 개발자" className="flex-1" />
        <DescriptionCard title="연차" contents="경력 3개월 이상" className="flex-1" />
      </div>
    </section>
  );
};

export default ApplicationRequirements;
