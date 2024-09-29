import React from 'react';
import { LuUsers2 } from 'react-icons/lu';
import Layout from '@/components/Layout';
import HeaderMenu from '@/components/UI/HeaderMenu';

const DashboardGroupPageView = () => {
  return (
    <Layout>
      <HeaderMenu
        icon={<LuUsers2 size={24} />}
        title="Group"
        subtitle="All Group"
      />
    </Layout>
  );
};

export default DashboardGroupPageView;
