import { LuArrowRight } from 'react-icons/lu';
import StatusProject from '../StatusProject';
import Link from 'next/link';
import Avatar from '../Avatar';

const CardProject = ({
  name,
  status,
  endDate,
}: {
  name?: string;
  status?: string;
  endDate?: string;
}) => {
  return (
    <>
      <div className="flex justify-between">
        <p className="font-bold text-xl">{name}</p>
        <Link href="">
          <LuArrowRight />
        </Link>
      </div>
      <div className="flex justify-between my-5">
        {endDate && <span>{endDate}</span>}

        <span className="py-1 px-3 bg-slate-200 rounded-md text-slate-800 text-sm">
          Programming
        </span>

        <StatusProject status={status} />
      </div>
      <div>
        <div className="flex -space-x-3 rtl:space-x-reverse">
          <Avatar size={40} />
          <Avatar size={40} />
          <Avatar size={40} />
          <a
            className="flex items-center justify-center w-10 h-10 text-xs font-bold text-slate-800 bg-slate-200 rounded-full hover:bg-slate-300 dark:border-gray-800 opacity-80"
            href="#"
          >
            +2
          </a>
        </div>
      </div>
    </>
  );
};

export default CardProject;
