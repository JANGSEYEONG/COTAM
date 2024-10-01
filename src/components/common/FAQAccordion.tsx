'use client';

import { cn } from '@/lib/utils';
import { useReducer } from 'react';

interface Props {
  className?: string;
  questionText: string;
  answerText: string;
}

const FAQAccordion = ({ className, questionText, answerText }: Props) => {
  const [isOpen, toggleIsOpen] = useReducer((state: boolean) => !state, false);

  const handleClick = () => {
    toggleIsOpen();
  };

  return (
    <article
      className={cn(
        'relative box-border flex w-full flex-col rounded-[12px] bg-white p-3',
        className,
      )}>
      <h3 className="items-top flex flex-row gap-2">
        <span className="min-w-fit text-cotam-red-60 galmuri11-body-2-bold">Q .</span>
        <div className="w-[210px] text-cotam-gray-95 pretandard-subtitle-2 md:w-[90%]">
          {questionText}
        </div>
      </h3>

      <p
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-[1000px]' : 'max-h-0'
        }`}>
        <div className="my-[12px] h-[1px] w-full bg-cotam-gray-10" />
        <div className="items-top flex flex-row gap-2">
          <span className="min-w-fit font-bold text-cotam-blue-50 galmuri11-body-2-bold">A .</span>
          <div className="w-[210px] text-cotam-gray-80 pretandard-body-3 md:w-[90%]">
            {answerText}
          </div>
        </div>
      </p>

      <span
        className={`absolute bottom-[12px] right-[12px] w-fit cursor-pointer transition-transform duration-300 ${
          isOpen ? 'rotate-180 text-cotam-blue-50' : 'text-cotam-red-60'
        }`}
        onClick={handleClick}>
        ▾
      </span>
    </article>
  );
};

FAQAccordion.displayName = 'FAQAccordion';
export default FAQAccordion;
