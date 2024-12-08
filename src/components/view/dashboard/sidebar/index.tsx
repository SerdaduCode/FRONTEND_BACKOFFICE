import Cookies from "js-cookie";
import {
  LuHome,
  LuUserPlus2,
  LuUsers2,
  LuClipboardCheck,
  LuCalendar,
  LuSettings,
  LuLogOut,
} from "react-icons/lu";
import Image from "next/image";
import SideMenu from "@/components/UI/SideMenu";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SidebarViewPage = () => {
  const [user, setUser] = useState<any>({});
  const pathname = usePathname();
  useEffect(() => {
    const dataUser = JSON.parse(Cookies.get("user") || "{}");
    setUser(dataUser);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");

    window.location.href = "/login";
    const callbackUrl = new URL(window.location.href).pathname;
    const params = new URLSearchParams({ callbackUrl });
    window.location.href = `/login?${params.toString()}`;
  };

  return (
    <>
      <aside className="bg-white flex flex-col justify-around h-[100vh] w-52 px-4 sticky top-0 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <Image
            className="rounded-full mb-10"
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            width={100}
            height={100}
          />
          <p className="text-lg font-bold uppercase">{user?.name}</p>
          <p className="text-base text-slate-500">{user?.role}</p>
        </div>

        <div className="flex flex-col gap-1">
          <SideMenu text="Dashboard" path="" icon={<LuHome size={16} />} />

          <SideMenu
            text="Member"
            path="member"
            icon={<LuUserPlus2 size={16} />}
          />

          <SideMenu text="Group" path="group" icon={<LuUsers2 size={16} />} />

          <SideMenu
            text="Project"
            path="project"
            icon={<LuClipboardCheck size={16} />}
          />

          <SideMenu text="Event" path="event" icon={<LuCalendar size={16} />} />

          <SideMenu
            text="Settings"
            path="settings"
            icon={<LuSettings size={16} />}
          />
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
