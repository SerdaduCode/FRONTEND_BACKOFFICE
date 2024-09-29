import React from 'react';
import Layout from '@/components/Layout';
import HeaderMenu from '@/components/UI/HeaderMenu';
import { LuCalendar } from 'react-icons/lu';

const DashboardEventPageView = () => {
  return (
    <Layout>
      <HeaderMenu
        icon={<LuCalendar size={24} />}
        title="Event"
        subtitle="Event History"
      />
    </Layout>
  );
};

export default DashboardEventPageView;
