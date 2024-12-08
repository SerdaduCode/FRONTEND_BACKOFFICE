import React from "react";
import DashboardProjectPageView from "@/components/view/dashboard/project";
import projectService from "@/services/project";

const ProjectPage = (props: any) => {
  const { projects, totalPages, currentPage } = props;
  return (
    <DashboardProjectPageView
      projects={projects}
      totalPages={totalPages}
      currentPage={currentPage}
    />
  );
};

export default ProjectPage;

export async function getServerSideProps(context: any) {
  const { page, limit } = context.query;
  const currentPage = page ? parseInt(page, 10) : 1;
  const limitPage = limit ? parseInt(limit, 10) : 5;
  const { data } = await projectService.getProjects(currentPage, limitPage);
  return {
    props: {
      projects: data.data,
      currentPage,
      totalPages: data.totalPages,
    },
  };
}
