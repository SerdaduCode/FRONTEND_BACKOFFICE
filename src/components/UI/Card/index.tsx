import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';

type CardProps = {
  icon?: React.ReactNode;
  title?: string;
  total?: number;
  totalDesc?: string;
};

const Card = ({
  icon,
  title,
  total,
  totalDesc,
}: CardProps) => {
  return (
    <>
      <div className="flex justify-end">
        <Link href="">
          <LuArrowRight className="self-start" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <div className="bg-red-400 rounded-2xl p-4">
          {icon}
        </div>
        <div className="mr-10 text-center">
          <p className="text-slate-500">{title}</p>
          <p className="text-xl font-semibold">
            {total} {totalDesc}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
