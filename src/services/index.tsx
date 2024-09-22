import instance from "@/lib/axios/instance";

const authService = {
  registerMember: (data: any) => instance.post("/register", data),
  loginMember: (data: any) => instance.post("/login", data),
};

export default authService;
