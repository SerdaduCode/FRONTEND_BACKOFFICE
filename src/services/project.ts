import instance from "@/lib/axios/instance";

const projectService = {
  getProjects: (page = 1, limit = 10) =>
    instance.get(`/project?${page}&${limit}`),
  getProjectById: (id: string) => instance.get(`/project/${id}`),
  updateProject: (id: string, data: any) =>
    instance.put(`/project/${id}`, data),
  deleteProject: (id: string) => instance.delete(`/project/${id}`),
  createProject: (data: any) => instance.post("/project", data),
};

export default projectService;
