import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import HeaderMenu from "@/components/UI/HeaderMenu";
import { LuClipboardCheck } from "react-icons/lu";
import CardWrapper from "@/components/UI/CardWrapper";
import CardProject from "@/components/UI/CardProject";
import { useRouter } from "next/router";
import Pagination from "@/components/Layout/Pagination";
import AddProject from "./AddProject";

type propsType = {
  projects: Project[];
  totalPages: number;
  currentPage: number;
};

const DashboardProjectPageView = (props: propsType) => {
  const { projects, totalPages, currentPage } = props;
  const [dataProject, setDataProjects] = useState(projects);
  const [modalAddProject, setModalAddProject] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setDataProjects(projects);
  }, [projects, currentPage]);

  const handlePageChange = (page: number) => {
    router.push(`/dashboard/project?page=${page}`);
  };

  return (
    <>
      <Layout>
        <HeaderMenu
          icon={<LuClipboardCheck size={24} />}
          title="Project"
          subtitle="All Project"
          onClick={() => {
            setModalAddProject(true);
          }}
        />

        <section className="mt-8">
          <div className="lg:flex justify-between gap-6">
            {dataProject?.map((project: Project) => (
              <CardWrapper key={project.id}>
                <CardProject
                  name={project.name}
                  endDate={project.end_date}
                  id={project.id}
                  desc={project.desc}
                  code_name={project.code_name}
                  start_date={project.start_date}
                  setDataProject={setDataProjects}
                />
              </CardWrapper>
            ))}
          </div>
          <div className="flex py-3">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </section>
      </Layout>
      {modalAddProject && (
        <AddProject
          setModalAddProject={setModalAddProject}
          setDataProject={setDataProjects}
        />
      )}
    </>
  );
};

export default DashboardProjectPageView;
