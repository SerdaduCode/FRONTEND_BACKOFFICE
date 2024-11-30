import React from 'react';
import Layout from '@/components/Layout';
import HeaderMenu from '@/components/UI/HeaderMenu';
import { LuClipboardCheck } from 'react-icons/lu';
import CardWrapper from '@/components/UI/CardWrapper';
import CardProject from '@/components/UI/CardProject';

const DashboardProjectPageView = (props: any) => {
  const { projects } = props;

  return (
    <Layout>
      <HeaderMenu
        icon={<LuClipboardCheck size={24} />}
        title="Project"
        subtitle="All Project"
      />

      <section className="mt-8">
        <div className="lg:flex justify-between gap-6">
          {projects.map((project) => (
            <CardWrapper key={project.id}>
              <CardProject
                name={project.name}
                endDate={project.end_date}
              />
            </CardWrapper>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default DashboardProjectPageView;
