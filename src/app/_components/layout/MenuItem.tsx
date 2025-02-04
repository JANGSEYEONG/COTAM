import { cn } from '@/lib/utils';

interface Props {
  text: string;
  selected: boolean;
}
const MenuItem = ({ text, selected }: Props) => {
  return (
    <p
      className={cn(
        'box-border flex w-full cursor-pointer items-center px-10 py-4 pretandard-subtitle-1 hover:text-cotam-red-60',
        selected ? 'text-cotam-red-60' : 'text-white',
      )}>
      {text}
    </p>
  );
};

export default MenuItem;
