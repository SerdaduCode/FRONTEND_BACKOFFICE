import instance from '@/lib/axios/instance';

const projectService = {
  getProjects: () => instance.get(`/project`),
  getProjectById: (id: string) =>
    instance.get(`/project/${id}`),
  updateMember: (id: string, data: any) =>
    instance.put(`/${id}`, data),
  deleteMember: (id: string) => instance.delete(`/${id}`),
};

export default projectService;
