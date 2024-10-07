import Image from 'next/image';
import React from 'react';

const ImageBox = () => {
  return (
    <div className="flex-grow rounded-xl">
      <Image
        width={100}
        height={100}
        alt="소개이미지"
        // fill
        // #20241007.syjang, 아래는 활동 이미지 들어갈거. png 파일 삭제해서 아래 경로는 임의로 작성함
        src={'/assets/icons/MainIconRed.svg'}
      />
      <div className="rounded-b-xl bg-cotam-red-10 p-5">
        <p className="text-cotam-red-50 pretandard-subtitle-1">스터디</p>
        <p className="text-cotam-gray-60 pretandard-body-3">어쩌구 저쩌구</p>
      </div>
    </div>
  );
};

export default ImageBox;
