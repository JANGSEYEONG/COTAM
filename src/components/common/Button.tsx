import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const buttonVariants = cva(
  'rounded-xl px-6 py-[18px] transition-colors duration-200 galmuri11-body-m flex-center',
  {
    variants: {
      variant: {
        red: 'text-white bg-cotam-red-60 hover:bg-cotam-red-70 active:bg-cotam-red-80',
        blue: 'text-cotam-blue-20 bg-cotam-blue-90 hover:bg-cotam-blue-80 active:bg-cotam-blue-70',
      },
    },
    defaultVariants: {
      variant: 'red',
    },
  },
);

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, Props>(({ className, variant, ...props }, ref) => {
  return <button ref={ref} className={cn(buttonVariants({ variant, className }))} {...props} />;
});

Button.displayName = 'Button';
export default Button;
