import React from 'react';
import SidebarViewPage from '../view/dashboard/sidebar';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-stone-50 flex h-full w-full">
      <div className="hidden md:block">
        <SidebarViewPage />
      </div>
      <main className="p-10 h-full w-full md:max-w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;
