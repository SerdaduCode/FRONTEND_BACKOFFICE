import React from 'react';
import SidebarViewPage from './sidebar';

const DashboardViewPage = () => {
  return (
    <div>
      <div className="bg-slate-100 flex">
        <div className="hidden md:block h-[100vh]">
          {/* SIDEBAR  */}
          <SidebarViewPage />
        </div>
        <div className="p-5 w-full md:max-w-[1140px]">
          {/* CONTENT */}
        </div>
      </div>
    </div>
  );
};

export default DashboardViewPage;
