import React from 'react';
import Cookies from 'js-cookie';
import {
  LuHome,
  LuUserPlus2,
  LuUsers2,
  LuClipboardCheck,
  LuCalendar,
  LuSettings,
  LuLogOut,
} from 'react-icons/lu';
import Image from 'next/image';
import Link from 'next/link';

const SidebarViewPage = () => {
  const handleLogout = () => {
    Cookies.remove('token');
    window.location.href = '/login';
    const callbackUrl = new URL(window.location.href)
      .pathname;
    const params = new URLSearchParams({ callbackUrl });
    window.location.href = `/login?${params.toString()}`;
  };

  return (
    <>
      <aside className="bg-slate-50 flex flex-col justify-around h-full w-52 px-4">
        <div className="flex flex-col items-center text-center">
          <Image
            className="rounded-full mb-10"
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            width={100}
            height={100}
          />
          <p className="text-lg font-bold">Mang Yoga</p>
          <p className="text-base text-slate-500">
            Operation Team
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-slate-500 px-2 py-2 hover:bg-red-100 hover:rounded-md hover:text-red-900 hover:font-semibold"
          >
            <LuHome size={16} /> Dashboard
          </Link>
          <Link
            href=""
            className="flex items-center gap-2 text-slate-500 px-2 py-2 hover:bg-red-100 hover:rounded-md hover:text-red-900 hover:font-semibold"
          >
            <LuUserPlus2 size={16} />
            Member
          </Link>
          <Link
            href=""
            className="flex items-center gap-2 text-slate-500 px-2 py-2 hover:bg-red-100 hover:rounded-md hover:text-red-900 hover:font-semibold"
          >
            <LuUsers2 size={16} />
            Group
          </Link>
          <Link
            href=""
            className="flex items-center gap-2 text-slate-500 px-2 py-2 hover:bg-red-100 hover:rounded-md hover:text-red-900 hover:font-semibold"
          >
            <LuClipboardCheck size={16} />
            Project
          </Link>
          <Link
            href=""
            className="flex items-center gap-2 text-slate-500 px-2 py-2 hover:bg-red-100 hover:rounded-md hover:text-red-900 hover:font-semibold"
          >
            <LuCalendar size={16} />
            Event
          </Link>
          <Link
            href=""
            className="flex items-center gap-2 text-slate-500 px-2 py-2 hover:bg-red-100 hover:rounded-md hover:text-red-900 hover:font-semibold"
          >
            <LuSettings size={16} />
            Settings
          </Link>
        </div>

        <div className="">
          <button
            className="flex items-center gap-2 text-slate-500"
            onClick={handleLogout}
          >
            <LuLogOut size={16} />
            Log Out
          </button>
        </div>
      </aside>
    </>
  );
};

export default SidebarViewPage;
