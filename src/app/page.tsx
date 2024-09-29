import Button from '@/components/common/Button';
import DescriptionCard from '@/components/common/DescriptionCard';

export default function Home() {
  return (
    <main className="min-h-screen w-screen gap-6 p-24">
      <Button className="w-full" variant="blue">
        카카오톡으로 문의하기
      </Button>
      <Button className="w-full">카카오톡으로 문의하기</Button>
      <DescriptionCard title="모집기간" contents="상시" />
    </main>
  );
}
