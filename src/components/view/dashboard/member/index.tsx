import React from 'react';
import { LuUserPlus2 } from 'react-icons/lu';
import Layout from '@/components/Layout';
import HeaderMenu from '@/components/UI/HeaderMenu';

const DashboardMemberPageView = () => {
  return (
    <Layout>
      <HeaderMenu
        icon={<LuUserPlus2 size={24} />}
        title="Member"
        subtitle="Semua Anggota"
      />
    </Layout>
  );
};

export default DashboardMemberPageView;
