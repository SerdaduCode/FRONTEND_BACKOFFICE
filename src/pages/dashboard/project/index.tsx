import React from 'react';
import DashboardProjectPageView from '@/components/view/dashboard/project';
import projectService from '@/services/project';

const ProjectPage = (props: any) => {
  const { projects } = props;

  return <DashboardProjectPageView projects={projects} />;
};

export default ProjectPage;

export async function getServerSideProps() {
  const { data } = await projectService.getProjects();
  return {
    props: {
      projects: data,
    },
  };
}
