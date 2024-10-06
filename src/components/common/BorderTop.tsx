import Image from 'next/image';

const BorderTop = () => {
  return (
    <div className="absolute left-0 top-[-12px] ml-[-40px] h-3 w-[calc(100%_+_80px)] bg-cotam-blue-100">
      {/* svg 가로길이 변환 불가해서 Image 사용 */}
      <Image
        style={{ objectFit: 'fill' }}
        fill
        src="/assets/icons/Border-top.svg"
        alt="bordertop"
      />
    </div>
  );
};

export default BorderTop;
