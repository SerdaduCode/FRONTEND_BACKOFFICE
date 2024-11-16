import instance from "@/lib/axios/instance";

const departementService = {
  getDepartements: (page = 1, limit = 10) =>
    instance.get(`/departement?page=${page}&limit=${limit}`),
  createDepartment: (data: any) => instance.post("/departement", data),
  updateDepartment: (id: string, data: any) =>
    instance.put(`/departement/${id}`, data),
  deleteDepartment: (id: string) => instance.delete(`/departement/${id}`),
};

export default departementService;
