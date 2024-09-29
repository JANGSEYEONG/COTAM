'use client';

import { useState } from 'react';

interface Props {
  className?: string;
  questionText: string;
  answerText: string;
}

// TODO cn 생기면 className 적용하기
const Accordion = ({ questionText, answerText }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative box-border flex w-full flex-col rounded-[12px] bg-white p-3">
      <div className="items-top flex flex-row gap-2">
        <div className="min-w-fit text-cotam-red-60 galmuri11-body-2-bold">Q .</div>
        <div className="w-[210px] text-cotam-gray-95 pretandard-subtitle-2 md:w-full">
          {questionText}
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-[1000px]' : 'max-h-0'
        }`}>
        <div className="my-[12px] h-[1px] w-full bg-cotam-gray-10" />
        <div className="items-top flex flex-row gap-2">
          <div className="min-w-fit font-bold text-cotam-blue-50 galmuri11-body-2-bold">A .</div>
          <div className="w-[210px] text-cotam-gray-80 pretandard-body-3 md:w-full">
            {answerText}
          </div>
        </div>
      </div>

      <span
        className={`absolute bottom-[12px] right-[12px] w-fit cursor-pointer transition-transform duration-300 ${
          isOpen ? 'rotate-180 text-cotam-blue-50' : 'text-cotam-red-60'
        }`}
        onClick={handleClick}>
        ▾
      </span>
    </div>
  );
};

Accordion.displayName = 'Accordion';
export default Accordion;
