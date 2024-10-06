import { cn } from '@/lib/utils';

interface Props {
  title: string;
  contents: string;
  className?: string;
}

const DescriptionCard = ({ title, contents, className }: Props) => {
  return (
    <div className={cn('flex flex-col gap-1 rounded-xl bg-cotam-blue-95 p-4', className)}>
      <label className="text-cotam-blue-40 galmuri11-body-3">{title}</label>
      <p className="text-white galmuri11-body-1">{contents}</p>
    </div>
  );
};

export default DescriptionCard;
