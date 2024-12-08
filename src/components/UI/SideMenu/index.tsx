import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SideMenuProps = {
  text: string;
  path: string;
  icon: React.ReactNode;
};

const SideMenu = ({ text, path, icon }: SideMenuProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={`/dashboard/${path}`}
      className={`flex items-center gap-2 px-2 py-2 transition 
      ${
        (pathname === `/dashboard` && path === "") ||
        pathname === `/dashboard/${path}`
          ? "bg-red-100 rounded-lg text-red-700 font-semibold"
          : "hover:bg-red-100 hover:rounded-lg text-slate-500 hover:text-red-700 hover:font-semibold"
      }`}
    >
      {icon} {text}
    </Link>
  );
};

export default SideMenu;
