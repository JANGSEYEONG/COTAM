import { forwardRef } from 'react';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const descriptionCardVariants = cva(
  'flex flex-col gap-1 rounded-xl p-4', // 공통 클래스
  {
    variants: {
      variant: {
        darkBlue: 'bg-cotam-blue-95 text-cotam-blue-40', // 배경색, 타이틀색
        lightBlue: 'bg-cotam-blue-90 text-cotam-blue-30',
      },
    },
    defaultVariants: {
      variant: 'darkBlue',
    },
  },
);

interface Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof descriptionCardVariants> {
  title: string;
  contents: string;
}

const DescriptionCard = forwardRef<HTMLDivElement, Props>(
  ({ className, variant, title, contents, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(descriptionCardVariants({ variant }), className)} {...props}>
        <label className="galmuri11-body-3">{title}</label>
        <p className="text-white galmuri11-body-1">{contents}</p>
      </div>
    );
  },
);

DescriptionCard.displayName = 'DescriptionCard';

export default DescriptionCard;
