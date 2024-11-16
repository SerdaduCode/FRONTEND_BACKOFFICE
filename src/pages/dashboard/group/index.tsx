import React from 'react';
import DashboardGroupPageView from '@/components/view/dashboard/group';
import departementService from '@/services/departement';

type propsType = {
  departements: Departement;
  currentPage: number;
  totalPages: number;
};


const GroupPage = (props: propsType) => {
  const { departements, currentPage, totalPages } = props;
  return <DashboardGroupPageView departement={departements} currentPage={currentPage} totalPages={totalPages} />;
};

export default GroupPage;

export async function getServerSideProps(context: any) {
  const { page, limit } = context.query;
  const currentPage = page ? parseInt(page, 10) : 1;
  const limitPage = limit ? parseInt(limit, 10) : 5;
  const { data } = await departementService.getDepartements(currentPage, limitPage);
  return {
    props: {
      departements: data.data,
      currentPage,
      totalPages: data.totalPages,
    },
  };
}