import instance from "@/lib/axios/instance";

const authService = {
  registerMember: (data: any) => instance.post("/register", data),
};

export default authService;
