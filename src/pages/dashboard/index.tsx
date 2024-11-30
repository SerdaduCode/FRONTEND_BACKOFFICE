import React from 'react';
import DashboardViewPage from '@/components/view/dashboard';
import dashboardService from '@/services/dashboard';
import projectService from '@/services/project';

const DashboardPage = (props: any) => {
  const { widgetCount, projects } = props;

  return (
    <DashboardViewPage
      widgetCount={widgetCount}
      projects={projects}
    />
  );
};

export default DashboardPage;

export async function getServerSideProps() {
  const resDashboardService =
    await dashboardService.getWidgetCount();
  const resProjectService =
    await projectService.getProjects();
  return {
    props: {
      widgetCount: resDashboardService.data,
      projects: resProjectService.data,
    },
  };
}
