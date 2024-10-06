import Button from '@/components/common/Button';
import Link from 'next/link';

const WithCotamButton = () => {
  return (
    <div className="relative flex w-full items-center">
      <p className="absolute right-[-10px] top-[-10px] z-[100] rounded bg-cotam-blue-50 px-1 text-white galmuri11-body-5">
        코탐은 지금 모집중!
      </p>
      <Link className="w-full" href="/recruit">
        <Button className="w-full">코탐과 함께하기</Button>
      </Link>
    </div>
  );
};

export default WithCotamButton;
