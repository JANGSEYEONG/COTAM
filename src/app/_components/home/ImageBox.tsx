import React from 'react';

import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  imageSrc: string;
}
const ImageBox = ({ title, description, imageSrc }: Props) => {
  return (
    <div className="basis-full overflow-hidden rounded-xl sm:basis-1/2">
      <figure className="relative aspect-[4/3] w-full">
        <Image
          priority
          src={imageSrc}
          alt="소개이미지"
          fill
          className="object-cover"
          // sizes="100%"
        />
      </figure>
      {/* <Image width={280} height={210} alt="소개이미지" src={'/assets/image/networking.webp'} /> */}
      <div className="h-full rounded-b-xl bg-cotam-red-10 p-5">
        <p className="text-cotam-red-50 pretandard-subtitle-1">{title}</p>
        <p className="text-cotam-gray-60 pretandard-body-3">{description}</p>
      </div>
    </div>
  );
};

export default ImageBox;
