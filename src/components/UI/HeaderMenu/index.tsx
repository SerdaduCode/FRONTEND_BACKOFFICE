import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type HeaderMenuProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  linkTo?: string;
  onClick?: Dispatch<SetStateAction<any>>;
};

const HeaderMenu = ({
  icon,
  title,
  subtitle,
  linkTo,
  onClick,
}: HeaderMenuProps) => {
  return (
    <>
      <div>
        <div className="flex gap-2 items-center text-red-500">
          {icon}
          {title}
        </div>
        <div className="flex gap-6 mt-6">
          <h1 className="flex-1">{subtitle}</h1>
          <input
            type="text"
            placeholder="Keyword"
            className="w-1/4 py-1 px-3 border border-slate-300 bg-stone-100 rounded-md  focus:outline-none"
          />
          <select className="px-2 rounded-md border border-slate-300 bg-stone-100">
            <option value="">Sort</option>
            <option value="">A</option>
            <option value="">Z</option>
          </select>
          <button className="bg-yellow-400 px-4 rounded-md">
            {linkTo ? (
              <Link href={linkTo}>Add {title}</Link>
            ) : (
              <div onClick={onClick}>Add {title}</div>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
