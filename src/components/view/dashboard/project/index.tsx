import React from 'react';
import Layout from '@/components/Layout';
import HeaderMenu from '@/components/UI/HeaderMenu';
import { LuClipboardCheck } from 'react-icons/lu';

const DashboardProjectPageView = () => {
  return (
    <Layout>
      <HeaderMenu
        icon={<LuClipboardCheck size={24} />}
        title="Project"
        subtitle="All Project"
      />
    </Layout>
  );
};

export default DashboardProjectPageView;
