'use client';

import { cn } from '@/lib/utils';
import { useReducer } from 'react';

interface Props {
  className?: string;
  questionText: string;
  answerText: React.ReactNode;
}

const FAQAccordion = ({ className, questionText, answerText }: Props) => {
  const [isOpen, toggleIsOpen] = useReducer((state: boolean) => !state, false);

  return (
    <div
      className={cn(
        'relative box-border flex w-full cursor-pointer flex-col rounded-[12px] bg-white p-3',
        className,
      )}
      onClick={toggleIsOpen}>
      <div className="items-top flex flex-row gap-2">
        <span className="min-w-fit text-cotam-red-60 galmuri11-body-2-bold">Q .</span>
        <h3 className="pr-2 text-cotam-gray-95 pretandard-subtitle-2">{questionText}</h3>
      </div>

      <div
        className={cn(
          'overflow-hidden transition-all duration-200 ease-in-out',
          isOpen ? 'max-h-[1000px]' : 'max-h-0',
        )}>
        <div className="my-[12px] h-[1px] w-full bg-cotam-gray-10" />
        <div className="items-top flex flex-row gap-2">
          <span className="min-w-fit font-bold text-cotam-blue-50 galmuri11-body-2-bold">A .</span>
          <p className="whitespace-pre-line pr-2 text-cotam-gray-80 pretandard-body-3">
            {answerText}
          </p>
        </div>
      </div>

      <span
        className={cn(
          'absolute bottom-[12px] right-[12px] w-fit transition-transform duration-300',
          isOpen ? 'rotate-180 text-cotam-blue-50' : 'text-cotam-red-60',
        )}>
        ▾
      </span>
    </div>
  );
};

export default FAQAccordion;
