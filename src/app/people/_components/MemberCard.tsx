import Image from 'next/image';

import { type Member, POSITION, positionMap } from '../types';

const MemberCard = ({ name, job, position, description, imageUrl }: Member) => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex justify-between">
        <div className="flex flex-row items-center gap-x-5">
          {imageUrl ? (
            <figure className="relative h-10 w-10 overflow-hidden rounded">
              <Image
                priority
                src={imageUrl}
                alt={`${name} 이미지`}
                fill
                className="object-cover"
                sizes="100%"
              />
              <figcaption className="sr-only">{name}님의 프로필 이미지</figcaption>
            </figure>
          ) : (
            // imageUrl이 없다면 닉네임 앞 글자 표시
            <div className="h-10 w-10 rounded bg-cotam-gray-30 flex-center">{name[0]}</div>
          )}

          <div className="flex flex-col">
            <span className="text-white galmuri11-body-2-bold">{name}</span>
            <span className="text-cotam-blue-40 galmuri11-body-5">{job}</span>
          </div>
        </div>

        {/* 스터디장, 운영진만 태그 표시 */}
        {(position === POSITION.LEADER || position === POSITION.MANAGER) && (
          <span className="box-border h-fit rounded bg-cotam-blue-40 px-1 text-white">
            {positionMap[position]}
          </span>
        )}
      </div>

      {description && (
        <p className="whitespace-pre-line text-cotam-blue-10 galmuri11-body-2">{description}</p>
      )}
    </div>
  );
};

export default MemberCard;
