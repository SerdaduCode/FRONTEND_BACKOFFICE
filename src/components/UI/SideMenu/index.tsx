import React from 'react';
import Link from 'next/link';

type SideMenuProps = {
  text?: string;
  path?: string;
  icon?: React.ReactNode;
};

const SideMenu = ({ text, path, icon }: SideMenuProps) => {
  return (
    <Link
      href={`/${path}`}
      className="flex items-center gap-2 text-slate-500 px-2 py-2 hover:bg-red-100 hover:rounded-md hover:text-red-900 hover:font-semibold"
    >
      {icon} {text}
    </Link>
  );
};

export default SideMenu;
