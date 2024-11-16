import instance from '@/lib/axios/instance';

const projectService = {
  getProjects: () => instance.get(`/`),
  getProjectById: (id: string) => instance.get(`/${id}`),
  updateMember: (id: string, data: any) =>
    instance.put(`/${id}`, data),
  deleteMember: (id: string) => instance.delete(`/${id}`),
};

export default projectService;
