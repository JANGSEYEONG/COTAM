import Image from 'next/image';

const BorderTop = () => {
  return (
    <div className="absolute left-0 top-[-12px] h-3 w-full bg-cotam-blue-100">
      {/* svg 가로길이 변환 불가해서 Image 사용 */}
      <Image
        style={{ objectFit: 'fill' }}
        className="max-w-full"
        fill
        src="/assets/icons/BorderTop.svg"
        alt="bordertop"
      />
    </div>
  );
};

export default BorderTop;
