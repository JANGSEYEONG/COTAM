import { cn } from '@/lib/utils';

interface Props {
  time: string;
  contents: string;
  className?: string;
}

const TimeTable = ({ time, contents, className }: Props) => {
  return (
    <div
      className={cn('box-border flex flex-col gap-y-3 rounded-xl bg-cotam-blue-95 p-4', className)}>
      <span className="box-border h-fit w-fit rounded-[4px] bg-cotam-blue-40 px-1 text-white galmuri11-body-5">
        {time}
      </span>
      <p className="text-white galmuri11-body-1">{contents}</p>
    </div>
  );
};

export default TimeTable;
