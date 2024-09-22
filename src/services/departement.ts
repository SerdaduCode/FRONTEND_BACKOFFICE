import instance from "@/lib/axios/instance";

const departementService = {
  getDepartements: () => instance.get("/departement"),
  createDepartment: (data: any) => instance.post("/departement", data),
};

export default departementService;
