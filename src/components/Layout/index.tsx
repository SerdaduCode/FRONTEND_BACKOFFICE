import React from 'react';
import SidebarViewPage from '../view/dashboard/sidebar';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-slate-100 flex h-[100vh]">
      <div className="hidden md:block h-[100vh]">
        <SidebarViewPage />
      </div>
      <div className="p-10 h-full w-full md:max-w-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;
