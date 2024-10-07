import Image from 'next/image';
import React from 'react';

interface Props {
  title: string;
  description: string;
  imageSrc: string;
}
const ImageBox = ({ title, description, imageSrc }: Props) => {
  return (
    <div className="flex-grow overflow-hidden rounded-xl">
      <figure className="relative h-[210px] w-full">
        <Image
          priority
          src={imageSrc}
          alt="소개이미지"
          fill
          className="object-cover"
          sizes="100%"
        />
      </figure>
      {/* <Image width={280} height={210} alt="소개이미지" src={'/assets/image/networking.webp'} /> */}
      <div className="rounded-b-xl bg-cotam-red-10 p-5">
        <p className="text-cotam-red-50 pretandard-subtitle-1">{title}</p>
        <p className="text-cotam-gray-60 pretandard-body-3">{description}</p>
      </div>
    </div>
  );
};

export default ImageBox;
